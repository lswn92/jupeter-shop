import { Injectable, OnInit } from '@angular/core';
import { Account } from './account.model';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable()

export class AccountService implements OnInit{

  accountsCollection!: AngularFirestoreCollection<Account>;
  accounts: Observable<any[]>;
  accountsDoc!: AngularFirestoreDocument<Account>;

  // accounts: Account[] = [  ];

  constructor(public db: AngularFirestore) {
    this.accounts = db.collection('accounts').valueChanges();
    this.accountsCollection = db.collection<Account>('accounts'); // 파이어스토어에 담아둔 collection 의 명칭
  }

  // 비동기로 할 테니 onInit 에 넣도록 하자
  ngOnInit() {
    // this.accounts = this.db.collection('accounts').valueChanges();
  }
  addAccount(id:string, account:Account) {
    account.status = 'Active';
    // this.accountsCollection.add(account);
    this.accountsCollection.doc(id).set(account);

    // this.accountsCollection  => 파이어베이스 db 중에서 'accounts' 컬렉션이랑 연결되어 있음
    // 해당 컬렉션에 Account 모델을 참조한 account 를 전송하여 입려시켜준다.
    // 그럼 입력 후, Observable 이 돌아오기 때문에
    // account.component.ts 파일에서 ngOninit 에서 .subscribe() 함수로 읽어온다.
    // 상기의 흐름을 잘 파악해둡시다
  }

  statusReset(id: string, form: Account) {
    console.log(id);

    // this.accountsDoc = this.db.doc(path);
    this.accountsDoc = this.db.doc(`accounts/${id}`);

    // this.accountsCollection.doc(id).snapshotChanges();
    // this.accountsCollection.doc(id).set(form);

    this.accountsDoc.update({"status" : "Inactive"});
  }

  // addAccount(form: Account) {
  //   console.log('서비스 form : ');
  //   console.log(form);

  //   let account = form;
  //   account.status = "Active";
  //   this.accounts.push(form);
  // }

  // statusResult(num: number) {
  //   console.log(num);
  //   this.accounts[num].status == "Active" ? 
  //     this.accounts[num].status = "Inactive" : this.accounts[num].status = "Active";
  //   // this.status == "Active" ? this.status = "Inavtive" :  this.status = "Active";
  // }

}
