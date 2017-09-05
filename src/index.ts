import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

{
    console.log('RxJS - Practice 02');

    function generateObserver(max: number) {
        let index = 0;
        return {
            next() {
                if (index >= max) {
                    return {
                        done: true,
                        value: undefined
                    };
                }
                index++;
                const nextIndex = index;
                return {
                    done: false,
                    value: {
                        next: (value: number) => console.log(`Observable ${nextIndex} value: ${value}`),
                        error: error => console.error(`Observable ${nextIndex} error: ${error}`),
                        complete: () => console.log(`Observable ${nextIndex} complete`)
                    }
                };
            }
        };
    }

    const observerGenerator = generateObserver(100);

    const observable1: Observable<number> =
        Observable.create(function subscribe(observer: Observer<number>) {
            try {
                observer.next(1);
                observer.next(2);
                observer.next(3);
                observer.complete();
            } catch (error) {
                observer.error(error);
            }
        });
    observable1.subscribe(observerGenerator.next().value);

    const observable2: Observable<number> =
        Observable.create(function subscribe(observer: Observer<number>) {
            try {
                observer.next(1);
                observer.next(2);
                observer.next(3);
                observer.complete();
                observer.next(4);
            } catch (error) {
                observer.error(error);
            }
        });
    observable2.subscribe(observerGenerator.next().value);

    const observable3: Observable<number> =
        Observable.create(function subscribe(observer: Observer<number>) {
            try {
                observer.next(1);
                observer.next(2);
                observer.next(3);
                observer.complete();
                observer.error('custom error');
                observer.next(4);
            } catch (error) {
                observer.error(error);
            }
        });
    observable3.subscribe(observerGenerator.next().value);

    const observable4: Observable<number> =
        Observable.create(function subscribe(observer: Observer<number>) {
            try {
                observer.next(1);
                observer.next(2);
                observer.next(3);
                observer.error('custom error');
                observer.next(4);
            } catch (error) {
                observer.error(error);
            }
        });
    observable4.subscribe(observerGenerator.next().value);

    const observable5: Observable<number> =
        Observable.create(function subscribe(observer: Observer<number>) {
            try {
                observer.next(1);
                observer.next(2);
                throw new Error('error thrown');
            } catch (error) {
                observer.error(error);
            }
        });
    observable5.subscribe(observerGenerator.next().value);
}

