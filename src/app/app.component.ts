import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticlesI } from './interfaces/wiki';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  articles$!:Observable<ArticlesI[]>;
  title = 'api-wiki';
  constructor(
    private searchSvc: SearchService
  ){}
ngOnInit(): void {
  
}
  onSearch(search:string){
    this.articles$ = this.searchSvc.getSearch(search);
    console.log(this.articles$);
  }
}
