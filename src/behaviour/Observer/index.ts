import { Observable } from "./classes/observable";
import { ObserverOne } from "./classes/observer-one";
import { ObserverTwo } from "./classes/observer-two";

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