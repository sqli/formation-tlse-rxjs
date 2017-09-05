import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

{
    console.log('RxJS - Practice 05');

    const observable: Observable<any> = Observable.of(1, 2, 3, 4)
        .map((value: number) => {
            return {
                value: value,
                even: value % 2 === 0
            };
        });

    observable.subscribe((value: any) => console.log(value));
}

