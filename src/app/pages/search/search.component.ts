import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit{
  @Output() onSearch=new EventEmitter;
  constructor(
    private fb:FormBuilder,
   private searchSvc: SearchService
  ){}
    frmSearch= this.fb.group({
      search:['']
    });
  ngOnInit(): void {
    this.OnChange();
    this.searchSvc.getSearch('angular').subscribe(res=>{
     console.log(res);
   })
  }

  OnChange(){
    this.frmSearch.valueChanges.subscribe(res=>{
      this.onSearch.emit(res.search)
    })
  }
}
