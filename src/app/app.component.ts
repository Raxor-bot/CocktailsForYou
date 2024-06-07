import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SearchBarComponent} from "./search-bar/search-bar.component";
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { CocktailItemComponent } from './cocktail-item/cocktail-item.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchBarComponent, CocktailListComponent, CocktailItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'untitled';
}
