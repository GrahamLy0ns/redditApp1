import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redditApp';
  addArticle(title:HTMLInputElement, link:HTMLInputElement):Boolean{
    console.log(`Adding Article Details: ${title.value} and adding Article Link: ${link.value}`);
    return false;

  }
}

