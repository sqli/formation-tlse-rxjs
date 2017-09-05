import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

{
    console.log('RxJS - Practice 01');

    const getTimestamp = () => Math.floor(new Date().getTime() / 1000);

    const syncObservable: Observable<number> =
        Observable.create(observer => {
            observer.next(1);
            observer.next(2);
            observer.next(3);
        });

    console.log('Before Sync Observer 1 subscribe');
    syncObservable.subscribe(
        (value: number) => console.log(`Sync observer 1: ${value}`));
    console.log('After Sync Observer 1 subscribe');

    console.log('Before Sync Observer 2 subscribe');
    syncObservable.subscribe(
        (value: number) => console.log(`Sync observer 2: ${value}`));
    console.log('After Sync Observer 2 subscribe');

    const asyncObservable: Observable<number> =
        Observable.create(observer => {
            setInterval(() => observer.next(getTimestamp()), 1000)
        });

    console.log('Before Async Observer 1 subscribe');
    const asyncSubscription1: Subscription =
        asyncObservable.subscribe((value: number) => console.log(`Async observer 1: ${value}`));
    console.log('After Async Observer 1 subscribe');

    let asyncSubscription2: Subscription;
    setTimeout(() => {
        console.log('Before Async Observer 2 subscribe');
        asyncSubscription2 =
            asyncObservable.subscribe((value: number) => console.log(`Async observer 2: ${value}`));
        console.log('After Async Observer 2 subscribe');
    }, 5000);

    setTimeout(() => {
        asyncSubscription1.unsubscribe();
        asyncSubscription2.unsubscribe();
    }, 10000);
}
