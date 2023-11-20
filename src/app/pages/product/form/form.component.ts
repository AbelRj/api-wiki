import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoryI, ProductI } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {
  category:CategoryI[]=[];
  constructor(
    private fb:FormBuilder,
    private productSvc:ProductService,
    public dialogRef:MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductI
  ){}
  form = this.fb.group({
    name:["",[Validators.required]],
    price:["",[Validators.required]],
    categories:[]
  });

  ngOnInit(): void{
    this.getCategories();
    this.initForm(this.data);
  }
  getCategories(): void{
    this.productSvc.getAllCategories().subscribe((categories: CategoryI[])=>{
      this.category = categories;
      console.log('category', this.category);
    });
  }
close(){
  this.dialogRef.close();
}
initForm(data:ProductI):void{
  if (data){
  this.form.patchValue({
    name:data.name,
    price:data.price.toString(),
    categories:data.categories
  });
}
}
  isValidField(field: string):string{
    const validatedField = this.form.get(field);
    return (!validatedField?.valid && validatedField?.touched)
      ? 'is-invalid' : validatedField?.touched ? 'is-valid' : '';
  }
}
