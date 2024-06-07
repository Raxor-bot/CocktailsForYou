import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-filter-menu',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './filter-menu.component.html',
  styleUrl: './filter-menu.component.scss'
})
export class FilterMenuComponent {
  includedIngredients: { value: string }[] = [{ value: '' }];
  excludedIngredients: { value: string }[] = [{ value: '' }];

  @Output() filterApplied = new EventEmitter<any>();

  addIncludedIngredient() {
    this.includedIngredients.push({ value: '' });
  }

  addExcludedIngredient() {
    this.excludedIngredients.push({ value: '' });
  }

  applyFilters() {
    const filterData = {
      includedIngredients: this.includedIngredients.map(i => i.value).filter(i => i),
      excludedIngredients: this.excludedIngredients.map(i => i.value).filter(i => i)
    };
    this.filterApplied.emit(filterData);
  }
}
