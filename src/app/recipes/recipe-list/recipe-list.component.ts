import { Component, OnInit } from '@angular/core';
import { Recipe } from './../recipe.model'
import { DataService } from './data.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe(1, '짜장면', '짜파게티 요리사~~', 'https://www.newiki.net/w/images/thumb/d/d9/Jjajangmyeon.jpg/450px-Jjajangmyeon.jpg'),
    new Recipe(2, '라면', '라면은 닥치고 신라면이쥐', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdlL4UJVR1kjiNHbeccboYrGrVUgULghcOfzJUjZff7gh2BKyZDAdBO-YBr3O-JAuvjlE&usqp=CAU'),
    new Recipe(3, '우동', '우동은 뭐 있지? 생생우동! 군대 야식!', 'http://image.nongshim.com/brand/info/1622593153793.jpg'),
    new Recipe(4, '소바', '메밀소바는 사랑이다', 'http://th2.tmon.kr/thumbs/image/87a/d0b/18e/a4ced67f0_700x700_95_FIT.jpg')
  ];

  message: string = '';

  itemInList!: number;

  // 데이터 서비스 접속
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.currentMessage
      .subscribe(message => {
        this.message = message;
        console.log(this.message);
      })
  }

  showInfo(id: number) {
    console.log("showInfo");
    this.dataService.changeMessage(id.toString() + '입니다');
    // 그래서, chageMessage 왜 배운 거냐고~~~
  }

  onTest(event: any) {
    console.log(event); // 자식 컴포넌트에서 .emit() 의 인자로 보낸 것을 그대로 출력한다
    this.itemInList = event;
  }
}
