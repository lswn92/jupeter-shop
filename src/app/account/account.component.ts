import { Component, OnInit } from '@angular/core';
import { Account } from './account.model';
import { AccountService } from './account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [AccountService],
})

export class AccountComponent implements OnInit {
 
  accounts: Account[] = [];
  newAccount: boolean = false;

  // status: string = "Active";;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.accounts
      .subscribe(res => {
        console.log(res);
        this.accounts = res;
      });
    // this.accounts = this.accountService.accounts;
  }

  addAccount(form: Account) {
    let id = form['id'];
    console.log(id);
    // delete 키 삭제 어떻게 하지?

    this.accountService.addAccount(id, form);

    this.newAccount = false;
  }

  statusReset(num: string, form: Account) {
    form['status'] == "Active" ? form['status'] = "Inactive" : form['status'] = "Active";
    this.accountService.statusReset(num, form);
  }


  // addAccount(form: Account) {
  //   console.log('form 태그 : ');
  //   console.log(form);
  //   this.accountService.addAccount(form);
  //   console.log('form 태그 후 : ');
  //   console.log(form);

  //   this.newAccount = false;
  // }
  
  // statusResult(num: number) {
  //   this.accountService.statusResult(num);
  // }
}
