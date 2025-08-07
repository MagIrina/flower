import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'count-selector',
  templateUrl: './count-selector.component.html',
  styleUrl: './count-selector.component.scss'
})
export class CountSelectorComponent {

  @Input() count: number = 1;

  @Output() onCountChange: EventEmitter<number> = new EventEmitter<number>();

  countChange() {
    this.onCountChange.emit(this.count);
  }
 // countChange(value: number) {
 //    this.count = value;
 //    this.onCountChange.emit(value);
 //  }

  decreaseCount() {
    if (this.count > 1) {
      this.count--;
      this.countChange();
    }
  }
  increaseCount() {
      this.count++;
      this.countChange();
  }
}
