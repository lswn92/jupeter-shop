import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable({providedIn: 'root'})
export class DataService {

    private messageSource = new BehaviorSubject<string>("default message");
    // 컴포넌트간에 메세지를 주고받기 위함이란느데 지켜보자

    currentMessage = this.messageSource.asObservable();

    constructor() {}

    changeMessage(message: string) {
        this.messageSource.next(message);
    }
    
}