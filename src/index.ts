import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/take';

{
    console.log('RxJS - Practice 12');

    const subject: Subject<number> = new Subject();

    const observable: Observable<number> = Observable.interval(1000).take(10);

    subject
        .scan((values: number[], value: number) => {
            values.push(value);
            return values;
        }, [])
        .subscribe(
            (values: number[]) => console.log(`Observer 1: ${values}`));

    setTimeout(() =>
            subject
                .scan((values: number[], value: number) => {
                    values.push(value);
                    return values;
                }, [])
                .subscribe(
                    (values: number[]) => console.log(`Observer 2: ${values}`)),
        5000);

    observable.subscribe(subject);
}