
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ArticlesI, Wiki } from '../interfaces/wiki';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private readonly http:HttpClient
  ) { }
  getSearch(search:string):Observable<ArticlesI[]>{
    const params={
      action:'query',
      format:'json',
      list:'search',
      srsearch:search,
      srlimit:'10',
      utf8:'1',
      origin:'*'
    }
    return this.http.get<Wiki>(environment.api,{params}).pipe(
      map(res=>res.query.search)
    )
  }

}
