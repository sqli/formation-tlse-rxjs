import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import increaseDecrease from './increase-decrease.operator';

{
    console.log('RxJS - Practice 14');

    const increaseButton = document.querySelector('.state-stores button.increase');
    const decreaseButton = document.querySelector('.state-stores button.decrease');

    const increaseSource$: Observable<any> = Observable.fromEvent(increaseButton, 'click');
    const decreaseSource$: Observable<any> = Observable.fromEvent(decreaseButton, 'click');

    const count$: Observable<number> = increaseDecrease(increaseSource$, decreaseSource$);
    count$.subscribe((count) => console.log(count));
}
