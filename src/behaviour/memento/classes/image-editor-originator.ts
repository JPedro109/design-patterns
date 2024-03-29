import { MementoProtocol } from "../protocols/memento-protocol";
import { Memento } from "./memento";

export class ImageEditorOriginator {
  constructor(private filePath: string, private fileFormat: string) {}

  convertFormatTo(format: string): void {
    this.fileFormat = format;
    this.filePath = this.filePath.split(".").slice(0, -1).join("");
    this.filePath += "." + format;
  }

  save(): Readonly<MementoProtocol> {
    const date = new Date();

    return new Memento(
      date.toISOString(),
      date,
      this.filePath,
      this.fileFormat,
    );
  }

  restore(memento: MementoProtocol): void {
    const concreteMemento = memento as Memento;
    this.filePath = concreteMemento.getFilePath();
    this.fileFormat = concreteMemento.getFileFormat();
  }
}