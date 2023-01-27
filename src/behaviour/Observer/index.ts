import { Observable } from "./classes/Observable";
import { ObserverOne } from "./classes/ObserverOne";
import { ObserverTwo } from "./classes/ObserverTwo";

const observable = new Observable();

const observerOne = new ObserverOne();
const observerTwo = new ObserverTwo();

observable.subscribe(observerOne);
observable.subscribe(observerTwo);

observable.modifyState();
observable.modifyState();
observable.modifyState();
observable.modifyState();
observable.modifyState();
observable.modifyState();
observable.modifyState();
observable.modifyState();

observable.unsubscribe(observerTwo);

observable.modifyState();
observable.modifyState();