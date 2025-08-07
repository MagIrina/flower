import {Component, Input} from '@angular/core';
import {CategoryWithTypeType} from "../../../../types/category-with-type.type";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  @Input() categories: CategoryWithTypeType[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }
}
