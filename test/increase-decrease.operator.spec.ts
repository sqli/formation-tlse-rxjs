import assert from 'power-assert';
import {TestScheduler} from 'rxjs/Rx';
import increaseDecrease from '../src/increase-decrease.operator';

describe('State store', () => {

    it('Increase', () => {
        const testScheduler = new TestScheduler(assert.deepEqual.bind(assert));

        const increaseSourceMarble   = '--x----x--x---|';
        const decreaseSourceMarble   = '--------------|';
        const expectedStateMarble    = 'a-b----c--d---|';
        const expectedStateMap = {a: 0, b: 1, c: 2, d: 3};

        const increaseSource$ = testScheduler.createHotObservable(increaseSourceMarble);
        const decreaseSource$ = testScheduler.createHotObservable(decreaseSourceMarble);
        const state$ = increaseDecrease(increaseSource$, decreaseSource$);

        testScheduler.expectObservable(state$).toBe(expectedStateMarble, expectedStateMap);
        testScheduler.flush();
    });

    it('Decrease', () => {
        const testScheduler = new TestScheduler(assert.deepEqual.bind(assert));

        const increaseSourceMarble   = '--------------|';
        const decreaseSourceMarble   = '--x----x--x---|';
        const expectedStateMarble    = 'a-b----c--d---|';
        const expectedStateMap = {a: 0, b: -1, c: -2, d: -3};

        const increaseSource$ = testScheduler.createHotObservable(increaseSourceMarble);
        const decreaseSource$ = testScheduler.createHotObservable(decreaseSourceMarble);
        const state$ = increaseDecrease(increaseSource$, decreaseSource$);

        testScheduler.expectObservable(state$).toBe(expectedStateMarble, expectedStateMap);
        testScheduler.flush();
    });

    it('Increase Decrease', () => {
        const testScheduler = new TestScheduler(assert.deepEqual.bind(assert));

        const increaseSourceMarble   = '--x----x--x---|';
        const decreaseSourceMarble   = '----x-------x-|';
        const expectedStateMarble    = 'a-b-a--b--c-b-|';
        const expectedStateMap = {a: 0, b: 1, c: 2};

        const increaseSource$ = testScheduler.createHotObservable(increaseSourceMarble);
        const decreaseSource$ = testScheduler.createHotObservable(decreaseSourceMarble);
        const state$ = increaseDecrease(increaseSource$, decreaseSource$);

        testScheduler.expectObservable(state$).toBe(expectedStateMarble, expectedStateMap);
        testScheduler.flush();
    });

    it('Decrease Increase', () => {
        const testScheduler = new TestScheduler(assert.deepEqual.bind(assert));

        const increaseSourceMarble   = '----x-------x-|';
        const decreaseSourceMarble   = '--x----x--x---|';
        const expectedStateMarble    = 'a-b-a--b--c-b-|';
        const expectedStateMap = {a: 0, b: -1, c: -2};

        const increaseSource$ = testScheduler.createHotObservable(increaseSourceMarble);
        const decreaseSource$ = testScheduler.createHotObservable(decreaseSourceMarble);
        const state$ = increaseDecrease(increaseSource$, decreaseSource$);

        testScheduler.expectObservable(state$).toBe(expectedStateMarble, expectedStateMap);
        testScheduler.flush();
    });
});