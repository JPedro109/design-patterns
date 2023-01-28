import { RemoteControl } from "./remote-control";

export class RemoteControlWithVolume extends RemoteControl {
  volumeUp(): void {
    const oldVolume = this.implementation.getVolume();
    this.implementation.setVolume(this.implementation.getVolume() + 10);
    console.log(
      `${this.implementation.getName()} tinha o volume ${oldVolume} agora tem ${this.implementation.getVolume()}`,
    );
  }

  volumeDown(): void {
    const oldVolume = this.implementation.getVolume();
    this.implementation.setVolume(this.implementation.getVolume() - 10);
    console.log(
      `${this.implementation.getName()} tinha o volume ${oldVolume} agora tem ${this.implementation.getVolume()}`,
    );
  }
}