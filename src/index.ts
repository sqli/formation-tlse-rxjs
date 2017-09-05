import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/startWith';

{
    console.log('RxJS - Practice 13');

    const increaseButton = document.querySelector('.state-stores button.increase');
    const decreaseButton = document.querySelector('.state-stores button.decrease');

    const increase$: Observable<Function> = Observable.fromEvent(increaseButton, 'click')
        .mapTo(state => Object.assign({}, state, {
            count: state.count + 1
        }));

    const decrease$: Observable<Function> = Observable.fromEvent(decreaseButton, 'click')
        .mapTo(state => Object.assign({}, state, {
            count: state.count - 1
        }));

    const state$ = Observable.merge(increase$, decrease$)
        .startWith(state => Object.assign({}, state))
        .scan((state, updateState: Function) => updateState(state), {
            count: 0
        });

    state$.subscribe((state) => console.log(state.count));
}
