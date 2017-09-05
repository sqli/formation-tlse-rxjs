import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/buffer';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/throttleTime';

{
    console.log('RxJS - Practice 11');

    const commitButton: Element = document.querySelector('.operators button.commit');
    const pushButton: Element = document.querySelector('.operators button.push');

    const commitAction$: Observable<string> = Observable.fromEvent(commitButton, 'click')
        .throttleTime(500)
        .mapTo(1)
        .scan((sum: number, value: number) => sum + value, 0)
        .map((sum: number) => `Commit ${sum}`)
        .do((commit: string) => console.log(commit));
    const pushAction$: Observable<any> = Observable.fromEvent(pushButton, 'click')
        .throttleTime(500)
        .do(() => console.log('Push'));

    commitAction$
        .buffer(pushAction$)
        .scan((push, commits: string[]) => {
            return {
                id: push.id + 1,
                commits: commits
            }
        }, {id: 0, commits: null})
        .mergeMap(push => Observable.from(push.commits)
            .map((commit: string) => `Push ${push.id}: ${commit}`))
        .subscribe((commit: string) => console.log(commit));
}