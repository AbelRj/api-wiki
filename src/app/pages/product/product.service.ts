import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryI, ProductI } from './product';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { UserResponseI } from '../../auth/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product$: Observable<ProductI[]> | undefined;
  categories$:Observable<CategoryI[]> | undefined;
  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(): Observable<ProductI[]>{
    this.product$= this.http.get<ProductI[]>(environment.baseUrl + '/product');
    return this.product$;
  }

  newProduct(product:ProductI):Observable<UserResponseI | void>{
    return this.http.post<UserResponseI | void>(`${environment.baseUrl}/product`,product).pipe(
      map((res:UserResponseI)=>{
        return res;
      })
    );
  }
  getById(id:string):Observable<ProductI | void>{
    return this.http.get<ProductI>(`${environment.baseUrl}/product/${id}`);
  }
updateProduct(id:string,product:ProductI):Observable<UserResponseI | void>{
  return this.http.patch<UserResponseI | void>(environment.baseUrl + `/product/${id}`,product).pipe(
    map((res:UserResponseI)=>{
      return res;
    })
  )
}


  delete(id:string):Observable<UserResponseI | void>{
    return this.http.delete<UserResponseI | void>(environment.baseUrl + `/product/${id}`).pipe(
     map((res:UserResponseI)=>{
          return res;
        })
    )
  }
  getAllCategories():Observable<CategoryI[]>{
    this.categories$= this.http.get<CategoryI[]>(environment.baseUrl + '/category');
    return this.categories$;
  }
}
