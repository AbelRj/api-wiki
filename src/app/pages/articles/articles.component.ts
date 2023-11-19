import { Component, Input } from '@angular/core';
import { ArticlesI } from '../../interfaces/wiki';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
@Input() article! : ArticlesI;

}

