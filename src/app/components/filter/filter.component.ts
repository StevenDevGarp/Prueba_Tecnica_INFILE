import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Output() categoryChanged = new EventEmitter<number>();

  onCategoryChange(event: Event): void {
    console.log(event);
    const categoryId = (event.target as HTMLSelectElement).value;
    console.log(categoryId);
    this.categoryChanged.emit(Number(categoryId));
  }
}