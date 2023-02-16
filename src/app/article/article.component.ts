import { Component, OnInit, Input } from '@angular/core';
import { Article } from './article.model';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @Input() article:Article;
  constructor(){
    this.article=new Article("", "", 1)
    
   
  }
  ngOnInit(){

  }
  voteUp(){
    this.article.voteUp();
    return false;

  }
  voteDown(){
    this.article.voteDown();
    return false;

  }

}
