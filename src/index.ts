import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {Subscription} from 'rxjs/Subscription';

{
    console.log('RxJS - Practice 03');

    const getTimestamp = () => Math.floor(new Date().getTime() / 1000);

    const observable1: Observable<number> =
        Observable.create(
            function subscribe(observer: Observer<number>) {
                const intervalId = setInterval(
                    () => observer.next(getTimestamp()), 1000);
                return () => clearInterval(intervalId);
            });
    const observable2: Observable<number> =
        Observable.create(
            function subscribe(observer: Observer<number>) {
                const intervalId = setInterval(
                    () => observer.next(getTimestamp()), 1000);
                return () => clearInterval(intervalId);
            });

    const subscription1: Subscription = observable1
        .subscribe((value: number) => console.log(`Observer 1: ${value}`));
    const subscription2: Subscription = observable2
        .subscribe((value: number) => console.log(`Observer 2: ${value}`));

    subscription1.add(subscription2);
    setTimeout(() => subscription1.unsubscribe(), 10000);
}
