import { Component, EventEmitter, Output } from "@angular/core";
import { Account } from "../account.model";

@Component({
    selector: "new-account",
    templateUrl: "./new-account.component.html",
    styleUrls: ["./new-account.component.css"]
})

export class NewAccountComponent {

    @Output() newAccount = new EventEmitter();

    onSubmit(value: Account) {
        console.log(value);
        this.newAccount.emit(value);
    }

}