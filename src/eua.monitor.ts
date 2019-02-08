import { mergeAll, mapTo, startWith, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { Observable, merge, interval, Subject, BehaviorSubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { MonitorConfig } from './monitor.config';
import { from, fromEvent } from 'rxjs';

const USER_EVENTS = ['click', 'mousemove', 'keydown', 'DOMMouseScroll', 'mousewheel', 'mousedown', 'touchstart', 'touchmove', 'focus', 'resize'];
const STATE_ACTIVE = 'active';
const STATE_IDLE = 'idle'

class Agent {
  private _userEvents$: Observable<any>;
  private _activityState: BehaviorSubject<string>;
  private _deactivate: Subject<boolean> = null;

  constructor(private _config: MonitorConfig = {}) {
    this._config.idleInterval = this._config.idleInterval || 60000;
    this._config.events = this._config.events || USER_EVENTS;
    this._userEvents$ = from(this._config.events).pipe(
      map(event => fromEvent(document, event)),
      mergeAll()
    );

    this._deactivate = new Subject<boolean>();
    this._activityState = new BehaviorSubject<string>(STATE_IDLE);
  }

  startMonitor() {
    this._deactivate.next(true);
    const activeEvent$ = this._userEvents$.pipe(mapTo(STATE_ACTIVE));
    const idleEvent$ = this._userEvents$.pipe(switchMap(_ => interval(this._config.idleInterval).pipe(mapTo(STATE_IDLE))));

    merge(activeEvent$, idleEvent$)
      .pipe(
        startWith(STATE_IDLE),
        distinctUntilChanged(),
        takeUntil(this._deactivate)
      )
      .subscribe(state => {
        this._activityState.next(state);
      });
  }

  isActive() {
    return this._activityState.value === STATE_ACTIVE;
  }

  isIdle() {
      return this._activityState.value === STATE_IDLE;
  }

  activityObservable() {
    return this._activityState.asObservable();
  }

  stopMonitor() {
    this._deactivate.next(true);
  }
}

export { Agent, STATE_IDLE, STATE_ACTIVE };
