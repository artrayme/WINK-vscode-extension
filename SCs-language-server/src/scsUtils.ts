'use strict';

import { TextDocument } from 'vscode-languageserver';

// eslint-disable-next-line @typescript-eslint/no-var-requires
import fs from 'fs';
// eslint-disable-next-line @typescript-eslint/no-var-requires
import path from 'path';


const spaces = ' \t\n\r":{[()]},;-=><';

export function getCurrentPrefix(document: TextDocument, offset: number) {
	let i = offset - 1;
	const text = document.getText();
	while (i >= 0 && spaces.indexOf(text.charAt(i)) === -1) {
		i--;
	}
	return text.substring(i + 1, offset);
}

export function getCurrentWord(document: TextDocument, offset: number) {
    let i = offset - 1;
	const text = document.getText();
	while (i >= 0 && spaces.indexOf(text.charAt(i)) === -1) {
		i--;
	}

    let j = offset;
    while (j < text.length && spaces.indexOf(text.charAt(j)) === -1) {
        j++;
    }
    return text.substring(i + 1, j).trim();
}

export function makeUri(path: string) {
	if (path.startsWith('file:'))
		return path;
	// TODO: more improvements
	return 'file://' + path;
}

// ----------------------------------------------
function listFilesRecursive(dirPath: string, ext: string[]) : string[] {
	const statInfo = fs.statSync(dirPath);
	let result: string[] = [];
	
	if (statInfo.isDirectory()) {  // directory
		// read directory
		const files = fs.readdirSync(dirPath);
		for (let i = 0; i < files.length; ++i) {
			const childPath = path.normalize(path.join(dirPath, files[i]));
			const childInfo = fs.statSync(childPath);

			if (childInfo.isFile()) {
				if (ext.indexOf(path.extname(childPath)) > -1)
					result.push(childPath);
			} else {
				result = result.concat(listFilesRecursive(childPath, ext));
			}
		}
	} else if (statInfo.isFile()) {
		result.push(dirPath);
	}

	return result;
}

export function getFilesInDirectory(dirPath: string, ext: string[]) : string[] {
	return listFilesRecursive(dirPath, ext);
}

export function getFileContent(filePath: string) : Buffer {
	return fs.readFileSync(filePath);
}

export function normalizeFilePath(filePath: string) : string {
	return filePath.replace('file://', "");
}
