'use strict';

import * as vscode from 'vscode';
import * as pugBeautify from 'pug-beautify';

export function activate(context) {
	const disposable = vscode.commands.registerTextEditorCommand('pugbeautify.execute', (textEditor) => {
		if (textEditor.document.languageId !== 'jade') {
			return;
		}

		const editorConfig = <any>vscode.workspace.getConfiguration('pugbeautify');

		const text = textEditor.document.getText();
		const options = {
			fill_tab: editorConfig.fillTab || !textEditor.options.insertSpaces,
			omit_div: editorConfig.omitDiv,
			tab_size: editorConfig.tabSize || textEditor.options.tabSize
		};

		let result = '';
		try {
			result = pugBeautify(text, options);
		} catch (err) {
			return vscode.window.showErrorMessage(err);
		}

		textEditor.edit((editBuilder) => {
			const document = textEditor.document;
			const lastLine = document.lineAt(document.lineCount - 1);
			const start = new vscode.Position(0, 0);
			const end = new vscode.Position(document.lineCount - 1, lastLine.text.length);
			const range = new vscode.Range(start, end);

			editBuilder.replace(range, result);
		});
	});

	context.subscriptions.push(disposable);
}
