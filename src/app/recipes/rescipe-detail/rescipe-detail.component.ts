import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rescipe-detail',
  templateUrl: './rescipe-detail.component.html',
  styleUrls: ['./rescipe-detail.component.css']
})
export class RescipeDetailComponent implements OnInit {

  
  @Input() selectedDetail!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
