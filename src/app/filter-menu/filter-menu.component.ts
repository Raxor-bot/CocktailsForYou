import {Component, EventEmitter, Input, Output} from '@angular/core';
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
  includeIngredient: string = '';
  excludeIngredient: string = '';

  @Input() filterData: any = { includedIngredients: [], excludedIngredients: [] };
  @Output() filterApplied = new EventEmitter<any>();

  applyFilter() {
    this.filterApplied.emit(this.filterData);
  }

  addIncludedIngredient() {
    if (this.includeIngredient && !this.filterData.includedIngredients.includes(this.includeIngredient)) {
      this.filterData.includedIngredients.push(this.includeIngredient);
      this.includeIngredient = '';
      this.applyFilter();
    }
  }

  addExcludedIngredient() {
    if (this.excludeIngredient && !this.filterData.excludedIngredients.includes(this.excludeIngredient)) {
      this.filterData.excludedIngredients.push(this.excludeIngredient);
      this.excludeIngredient = '';
      this.applyFilter();
    }
  }

  removeIncludedIngredient(ingredient: string) {
    this.filterData.includedIngredients = this.filterData.includedIngredients.filter((i: string) => i !== ingredient);
    this.applyFilter();
  }

  removeExcludedIngredient(ingredient: string) {
    this.filterData.excludedIngredients = this.filterData.excludedIngredients.filter((i: string) => i !== ingredient);
    this.applyFilter();
  }
}
