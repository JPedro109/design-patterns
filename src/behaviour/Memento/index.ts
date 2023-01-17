import { ImageEditorOriginator } from "./classes/ImageEditorOriginator";
import { ImageEditorBackupManager } from "./classes/ImageEditorBackupManager";

const imageEditor = new ImageEditorOriginator("media/image.png", "png");
const backupManager = new ImageEditorBackupManager(imageEditor);

backupManager.backup();
imageEditor.convertFormatTo("jpeg");

console.log();
backupManager.backup();
imageEditor.convertFormatTo("bmp");

console.log();
backupManager.backup();
imageEditor.convertFormatTo("jpg");

console.log();
console.log(imageEditor); 

console.log();
backupManager.undo();
console.log(imageEditor); 

console.log();
backupManager.undo();
console.log(imageEditor); 

console.log();
backupManager.undo();
console.log(imageEditor); 