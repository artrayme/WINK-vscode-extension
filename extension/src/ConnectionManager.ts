import * as vscode from 'vscode';
import {WebSocket} from "ws";
import {ScClient} from 'ts-sc-client-ws';
import {DidChangeConfigurationNotification, LanguageClient} from 'vscode-languageclient';

export enum HealthcheckStatus {
    OK = 0,
    FAIL
}

export class ConnectionManager {
    client: ScClient;
    status: HealthcheckStatus;
    protected _statusBarItem: vscode.StatusBarItem;
    lsp_client: LanguageClient;

    constructor(lsp_client: LanguageClient) {
        this.lsp_client = lsp_client
        this.client = undefined;
        this.status = undefined;
        this._statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
        this._statusBarItem.command = "scs.connect";
    }

    get statusBarItem() {
        return this._statusBarItem;
    }

    async connect(url: string) {
        await this.disconnect();
        await this.test(url);
        while (this.status == undefined) ;
        if (this.status == HealthcheckStatus.OK) {
            this.client = new ScClient(url);
            this.lsp_client.onReady().then(() => {
                this.lsp_client.sendNotification(DidChangeConfigurationNotification.type, {
                    settings:
                        {scMachineUrl: url, onlineMode: true}
                });
            })
            vscode.window.showInformationMessage('Connection with sc-server established successfully.');
            this.statusBarItem.text = url;
        } else {
            this._statusBarItem.text = "Disconnected";
        }
        this.statusBarItem.show();
    }

    async disconnect() {
        this.client = undefined;
        this.status = undefined;
        this._statusBarItem.text = "Disconnected";
    }

    async test(url: string) {
        try {
            let ws = new WebSocket(url);
            ws.addEventListener("open", () => {
                ws.send('{"type": "healthcheck"}');
            });
            ws.addEventListener("message", (event) => {
                if (event.data.toString() === '"OK"') {
                    this.status = HealthcheckStatus.OK;
                } else {
                    vscode.window.showErrorMessage("Missmatching server responce. Please, make sure that you're connected to sc-server");
                    this.status = HealthcheckStatus.FAIL;
                }
            });
            ws.addEventListener("error", (event) => {
                vscode.window.showErrorMessage(event.message + ". Unable to locate sc-server.");
                this.status = HealthcheckStatus.FAIL;
            });
            await delay(1000);
            // await waitForOpenConnection(ws).catch(value => { vscode.window.showErrorMessage(value.message) });
        } catch (e) {
            vscode.window.showErrorMessage(e.message);
            //send LSP server to offline mode if connection is known to be broken
            this.lsp_client.onReady().then(() => {
                this.lsp_client.sendNotification(DidChangeConfigurationNotification.type, {
                    settings:
                        {scMachineUrl: '', onlineMode: false}
                });
            })
            this.status = HealthcheckStatus.FAIL;
        }
    }
}

function delay(time: number): Promise<void> {
    return new Promise(resolve => {
        setTimeout(resolve, time);
    });
}

// function waitForOpenConnection(socket: WebSocket): Promise<void> {
//     return new Promise<void>((resolve, reject) => {
//         const maxNumberOfAttempts = 5;
//         const intervalTime = 1000;
//         let currentAttempt = 1;
//         const interval = setInterval(() => {
//             vscode.window.showInformationMessage(socket.readyState.toString());
//             if ((currentAttempt++) > maxNumberOfAttempts) {
//                 clearInterval(interval);
//                 reject(new Error('Maximum number of attempts exceeded.'));
//             } else if (socket.readyState === socket.OPEN) {
//                 clearInterval(interval);
//                 resolve();
//             }
//         }, intervalTime);
//     });
// }
