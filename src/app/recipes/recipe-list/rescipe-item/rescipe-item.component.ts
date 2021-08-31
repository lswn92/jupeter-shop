import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-rescipe-item',
  templateUrl: './rescipe-item.component.html',
  styleUrls: ['./rescipe-item.component.css']
})
export class RescipeItemComponent implements OnInit {

  // constructor(private route: ActivatedRoute) { 
  // // ActivatedRoute 를 사용하는 이유?
  // // 현재 라우팅 페이지에서 보여지고 있는 정보를 가져오기 위해서
  // }
  
  // ngOnInit(): void {
  //   // paramMap 은 observable 을 반환함을 잊지 말라
  //   this.route.paramMap
  //     .subscribe(params => {
  //       console.log(params);  // url 을 통해서 받은 파라미터를 볼 수 있다.
  //       let id = params.get('id');
  //       console.log('id : ' + id);
  //     })
  // }
  
  @Input() recipe!: Recipe;
  @Output() childSubmit: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    
  }

  onClick(id: number) {
    // console.log(id);
    this.childSubmit.emit(id);
    // console.log(this.childSubmit);
  }

}
