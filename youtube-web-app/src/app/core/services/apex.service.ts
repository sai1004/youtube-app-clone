import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ApexService {
    private _isDarkThemeSubject: BehaviorSubject<any> = new BehaviorSubject(false);

    constructor() {}

    getTheme(): Observable<any> {
        return this._isDarkThemeSubject.asObservable();
    }

    setTheme(data: any): any {
        this._isDarkThemeSubject.next(data);
    }
}
