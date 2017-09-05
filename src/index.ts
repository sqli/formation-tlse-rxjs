import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/scan';

{
    console.log('RxJS - Practice 06');

    const observable: Observable<number> = Observable.of(1, 2, 3, 4)
        .scan((sum: number, value: number) => sum + value, 0);

    observable.subscribe((value: number) => console.log(value));
}


