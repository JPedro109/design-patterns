import { RemoteControl } from "./abstracts/RemoteControl";
import { RemoteControlWithVolume } from "./abstracts/RemoteControlWithVolume";
import { Tv } from "./classes/Tv";
import { Radio } from "./classes/Radio";

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