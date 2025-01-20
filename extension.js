const vscode = require('vscode');

module.exports.activate = (context) => {
  const copyFilename = vscode.commands.registerCommand('copyFilename', (fs) => {
    vscode.env.clipboard.writeText(fs.path.split('/').at(-1));
  });

  const copyFilenameWithoutExtension = vscode.commands.registerCommand('copyFilename', (fs) => {
    vscode.env.clipboard.writeText(fs.path.split('/').at(-1).split('.').slice(0, -1).join('.'));
  });

  context.subscriptions.push(copyFilename, copyFilenameWithoutExtension);
};
