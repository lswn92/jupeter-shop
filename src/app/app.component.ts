import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  routeLinks: any[] = [];
  activeLinkIndex = 0;
  
  constructor(private router: RouterModule) {

    this.routeLinks = [
        {label: 'Shopping List', link: 'shopping-list'},
        {label: 'Recipes', link: 'recipes'},
        {label: 'Account', link: 'account'},
    ]

  }
}
