import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/scan';

{
    console.log('RxJS - Practice 07');

    const button: Element = document.querySelector('.operators button.commit');
    const observable: Observable<string> = Observable.fromEvent(button, 'click')
        .mapTo(1)
        .scan((sum: number, value: number) => sum + value, 0)
        .map((sum: number) => `Event ${sum}`);

    observable.subscribe((value: string) => console.log(value));
}


