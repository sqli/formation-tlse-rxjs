import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/startWith';

export default function increaseDecrease(increaseSource$: Observable<any>,
                                         decreaseSource$: Observable<any>): Observable<number> {

    const increase$: Observable<Function> = increaseSource$
        .mapTo(state => Object.assign({}, state, {
            count: state.count + 1
        }));
    const decrease$: Observable<Function> = decreaseSource$
        .mapTo(state => Object.assign({}, state, {
            count: state.count - 1
        }));

    return Observable.merge(increase$, decrease$)
        .startWith(state => Object.assign({}, state))
        .scan((state, updateState: Function) => updateState(state), {
            count: 0
        })
        .pluck('count');
}
