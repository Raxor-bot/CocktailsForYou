import {Component, Input, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-cocktail-item',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './cocktail-item.component.html',
  styleUrl: './cocktail-item.component.scss'
})
export class CocktailItemComponent implements OnInit{
  @Input() cocktail: any;
  isExpanded = false;

  constructor() { }


  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

  ngOnInit(): void {
  }
}
