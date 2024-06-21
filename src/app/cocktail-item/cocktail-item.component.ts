import {Component, Input, OnInit} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-cocktail-item',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    NgClass
  ],
  templateUrl: './cocktail-item.component.html',
  styleUrl: './cocktail-item.component.scss'
})
export class CocktailItemComponent implements OnInit{
  @Input() cocktail: any;
  @Input() isExpanded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

  resetExpand(){
    this.isExpanded = false;
  }
}
