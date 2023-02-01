import { RemoteControl } from "./abstracts/remote-control";
import { RemoteControlWithVolume } from "./abstracts/remote-control-with-volume";
import { Tv } from "./classes/tv";
import { Radio } from "./classes/radio";

export function clientCode(
  abstraction: RemoteControl | RemoteControlWithVolume,
): void {
  abstraction.togglePower();

  if (!("volumeUp" in abstraction)) return;

  abstraction.volumeUp(); 
  abstraction.volumeUp(); 
  abstraction.volumeDown();
}

const tv = new Tv();
const radio = new Radio();

const radioRemoteControl = new RemoteControl(radio);
clientCode(radioRemoteControl);

const tvRemoteControl = new RemoteControlWithVolume(tv);
clientCode(tvRemoteControl);