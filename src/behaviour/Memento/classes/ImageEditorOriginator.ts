import { IMemento } from "../interfaces/IMemento";
import { Memento } from "./Memento";

export class ImageEditorOriginator {
  constructor(private filePath: string, private fileFormat: string) {}

  convertFormatTo(format: string): void {
    this.fileFormat = format;
    this.filePath = this.filePath.split(".").slice(0, -1).join("");
    this.filePath += "." + format;
  }

  save(): Readonly<IMemento> {
    const date = new Date();

    return new Memento(
      date.toISOString(),
      date,
      this.filePath,
      this.fileFormat,
    );
  }

  restore(memento: IMemento): void {
    const concreteMemento = memento as Memento;
    this.filePath = concreteMemento.getFilePath();
    this.fileFormat = concreteMemento.getFileFormat();
  }
}