import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

{
    console.log('RxJS - Practice 04');

    const observable: Observable<number> = Observable.of(1, 2, 3, 4);

    observable.subscribe((value: number) => console.log(value));
}
