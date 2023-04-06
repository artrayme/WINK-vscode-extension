import * as vscode from 'vscode';
import { WebSocket } from "ws";
import {ScClient} from 'ts-sc-client-ws';

export enum HealthcheckStatus {
    OK = 0,
    FAIL
}

export class ConnectionManager {
    client: ScClient;
    status: HealthcheckStatus;

    constructor() {
        this.client = undefined;
        this.status = undefined;
    }

    async connect(url: string) {
        await this.disconnect();
        await this.test(url);
        while(this.status == undefined);
        if (this.status == HealthcheckStatus.OK) {
            this.client = new ScClient(url);
            vscode.window.showInformationMessage('Connection with sc-server established successfully.');
        }
    }

    async disconnect() {
        this.client = undefined;
        this.status = undefined;
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
                vscode.window.showErrorMessage(event.message+". Unable to locate sc-server.");
                this.status = HealthcheckStatus.FAIL;
            });
            await delay(1000);
            // await waitForOpenConnection(ws).catch(value => { vscode.window.showErrorMessage(value.message) });
        } catch(e) {
            vscode.window.showErrorMessage(e.message);
            this.status = HealthcheckStatus.FAIL;
        }
    }
}

function delay(time: number):Promise<void> {
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