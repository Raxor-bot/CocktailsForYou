import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {CocktailItemComponent} from "../cocktail-item/cocktail-item.component";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {SearchBarComponent} from "../search-bar/search-bar.component";
import {FilterMenuComponent} from "../filter-menu/filter-menu.component";
import {FormsModule} from "@angular/forms";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [
    CocktailItemComponent,
    NgForOf,
    SearchBarComponent,
    FilterMenuComponent,
    NgIf,
    FormsModule,
    FaIconComponent,
    NgClass
  ],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss'
})

export class CocktailListComponent implements OnInit {
  @ViewChild(SearchBarComponent) searchBar!: SearchBarComponent;
  @ViewChildren(CocktailItemComponent) cocktailItems!: QueryList<CocktailItemComponent>;

  showFilterMenu = false;
  searchText: string = '';
  searchStatus = 'Top-Empfehlungen';

  allCocktails = [
    {
      name: 'Margarita',
      ingredients: ['50 ml Tequila', '25 ml Triple Sec', '25 ml Limettensaft'],
      shortIngredients: ['Tequila', 'Triple Sec', 'Limettensaft'],
      schwierigkeit: 'Mittel',
      preisklasse: '€€',
      alk: 'Ja',
      bild: 'assets/images/margarita.jpg',
      equipment: ['Shaker', 'Eiswürfel', 'Salzrand'],
      recipe: 'Tequila, Triple Sec und Limettensaft in einem Shaker mit Eis schütteln. In ein Glas mit Salzrand abseihen.'
    },
    {
      name: 'Mojito',
      ingredients: ['50 ml Rum', '10 Minzblätter', '25 ml Limettensaft', 'Sodawasser', '2 TL Zucker'],
      shortIngredients: ['Rum', 'Minzblätter', 'Limettensaft', 'Sodawasser', 'Zucker'],
      schwierigkeit: 'Leicht',
      preisklasse: '€',
      alk: 'Ja',
      bild: 'assets/images/mojito.webp',
      equipment: ['Glas', 'Stößel', 'Eiswürfel'],
      recipe: 'Minzblätter und Zucker in einem Glas zerdrücken. Limettensaft und Rum hinzufügen. Mit Sodawasser auffüllen und mit Eis servieren.'
    },
    {
      name: 'Ipanema',
      ingredients: ['1 Limette', '2 TL brauner Zucker', 'Crushed Ice', '100 ml Ginger Ale', '10 ml Limettensaft', '10 ml Maracujasaft', '1 Spritzer Grenadine'],
      shortIngredients: ['Limette', 'brauner Zucker', 'Ginger Ale', 'Limettensaft', 'Maracujasaft', 'Grenadine'],
      schwierigkeit: 'Leicht',
      preisklasse: '€',
      alk: 'Nein',
      bild: 'assets/images/ipanema.jpg',
      equipment: ['Glas', 'Stößel', 'Eiswürfel'],
      recipe: 'Die Limette waschen, achteln und mit dem braunen Zucker in ein Glas geben. Die Limettenstücke mit einem Stößel leicht zerdrücken. Das Glas zur Hälfte mit Crushed Ice füllen. Limettensaft und Maracujasaft dazugeben. Mit Ginger Ale auffüllen und einen Spritzer Grenadine hinzugeben. Gut umrühren und mit einem Strohhalm servieren.'
    },
    {
      name: 'Old Fashioned',
      ingredients: ['60 ml Bourbon oder Rye Whiskey', '1 Zuckerwürfel', '2-3 Spritzer Angostura Bitter', 'Eiswürfel', '1 TL Wasser'],
      shortIngredients: ['Bourbon oder Rye Whiskey', 'Zuckerwürfel', 'Angostura Bitter', 'Wasser'],
      schwierigkeit: 'Schwer',
      preisklasse: '€€€',
      alk: 'Ja',
      bild: 'assets/images/old-fashioned.jpg',
      equipment: ['Glas', 'Barlöffel', 'Eiswürfel'],
      recipe: 'Zuckerwürfel, Bitter und Wasser in einem Glas verrühren, bis sich der Zucker auflöst. Eis hinzufügen und Whiskey einfüllen. Umrühren und mit einer Orangenschale garnieren.'
    },
    {
      name: 'Caipirinha',
      ingredients: ['60 ml Cachaça', '1 Limette', '2 TL Zucker', 'Crushed Ice'],
      shortIngredients: ['Cachaça', 'Limette', 'Zucker'],
      schwierigkeit: 'Leicht',
      preisklasse: '€',
      alk: 'Ja',
      bild: 'assets/images/Caipirinha.jpg',
      equipment: ['Glas', 'Stößel', 'Eiswürfel'],
      recipe: 'Limette achteln und mit Zucker in einem Glas zerdrücken. Eis hinzufügen und mit Cachaça auffüllen. Gut umrühren.'
    },
    {
      name: 'Pina Colada',
      ingredients: ['50 ml Rum', '30 ml Kokoscreme', '90 ml Ananassaft', 'Eiswürfel'],
      shortIngredients: ['Rum', 'Kokoscreme', 'Ananassaft'],
      schwierigkeit: 'Mittel',
      preisklasse: '€€',
      alk: 'Ja',
      bild: 'assets/images/Pina-Colada.jpg',
      equipment: ['Blender', 'Eiswürfel'],
      recipe: 'Rum, Kokoscreme und Ananassaft mit Eis im Blender mixen. In ein Glas füllen und mit einer Ananasscheibe und Kirsche garnieren.'
    },
    {
      name: 'Cosmopolitan',
      ingredients: ['40 ml Wodka', '15 ml Triple Sec', '30 ml Cranberrysaft', '10 ml Limettensaft'],
      shortIngredients: ['Wodka', 'Triple Sec', 'Cranberrysaft', 'Limettensaft'],
      schwierigkeit: 'Mittel',
      preisklasse: '€€',
      alk: 'Ja',
      bild: 'assets/images/cosmopolitan.webp',
      equipment: ['Shaker', 'Eiswürfel'],
      recipe: 'Wodka, Triple Sec, Cranberrysaft und Limettensaft in einem Shaker mit Eis schütteln. In ein gekühltes Cocktailglas abseihen und mit einer Limettenscheibe garnieren.'
    },
    {
      name: 'Mai Tai',
      ingredients: ['40 ml Rum', '15 ml Limettensaft', '15 ml Orgeat-Sirup', '15 ml Orange Curacao'],
      shortIngredients: ['Rum', 'Limettensaft', 'Orgeat-Sirup', 'Orange Curacao'],
      schwierigkeit: 'Schwer',
      preisklasse: '€€€',
      alk: 'Ja',
      bild: 'assets/images/maitai.jpg',
      equipment: ['Shaker', 'Eiswürfel'],
      recipe: 'Rum, Limettensaft, Orgeat-Sirup und Orange Curacao in einem Shaker mit Eis schütteln. In ein Glas mit Eis abseihen und mit Minze und einer Limettenscheibe garnieren.'
    },
    {
      name: 'Whiskey Sour',
      ingredients: ['50 ml Whiskey', '25 ml Zitronensaft', '20 ml Zuckersirup', '1 Eiweiß'],
      shortIngredients: ['Whiskey', 'Zitronensaft', 'Zuckersirup', 'Eiweiß'],
      schwierigkeit: 'Mittel',
      preisklasse: '€€',
      alk: 'Ja',
      bild: 'assets/images/whisky_sour.jpg',
      equipment: ['Shaker', 'Eiswürfel'],
      recipe: 'Whiskey, Zitronensaft, Zuckersirup und Eiweiß in einem Shaker ohne Eis schütteln. Eis hinzufügen und erneut schütteln. In ein Glas abseihen und mit einer Zitronenschale garnieren.'
    },
    {
      name: 'Gin Tonic',
      ingredients: ['50 ml Gin', '150 ml Tonic Water', '1 Limettenscheibe'],
      shortIngredients: ['Gin', 'Tonic Water', 'Limette'],
      schwierigkeit: 'Leicht',
      preisklasse: '€',
      alk: 'Ja',
      bild: 'assets/images/gintonic.jpg',
      equipment: ['Glas', 'Eiswürfel'],
      recipe: 'Gin in ein Glas mit Eis geben und mit Tonic Water auffüllen. Mit einer Limettenscheibe garnieren.'
    },
    {
      name: 'Aperol Royal',
      ingredients: ['50 ml Aperol', '100 ml Prosecco', 'Sodawasser', '1 Orangenscheibe'],
      shortIngredients: ['Aperol', 'Prosecco', 'Sodawasser', 'Orangenscheibe'],
      schwierigkeit: 'Leicht',
      preisklasse: '€',
      alk: 'Ja',
      bild: 'assets/images/aperol-royal.jpg',
      equipment: ['Glas', 'Eiswürfel'],
      recipe: 'Aperol in ein Glas mit Eis geben. Prosecco und Sodawasser hinzufügen. Mit einer Orangenscheibe garnieren.'
    }
  ];

  filteredCocktails = [...this.allCocktails];

  ngOnInit() {
  }


  toggleFilterMenu() {
    this.showFilterMenu = !this.showFilterMenu;
  }

  onFilterApplied(filterData: any) {
    this.filteredCocktails = this.allCocktails.filter(cocktail => {
      // Überprüfe, ob alle enthaltenen Zutaten im Cocktail vorhanden sind
      const includesAll = filterData.includedIngredients.every((ingredient: string) =>
        cocktail.shortIngredients.map(i => i.toLowerCase()).includes(ingredient.toLowerCase())
      );

      // Überprüfe, ob alle ausgeschlossenen Zutaten im Cocktail nicht vorhanden sind
      const excludesAll = filterData.excludedIngredients.every((ingredient: string) =>
        !cocktail.shortIngredients.map(i => i.toLowerCase()).includes(ingredient.toLowerCase())
      );

      return includesAll && excludesAll;
    });
    this.showFilterMenu = false;
  }

  constructor() { }

  onSearch(searchText: string): void {
    this.searchText = searchText;
    const minSearchLength = 3; // Minimale Anzahl von Zeichen, um Fehlertoleranz anzuwenden
    const maxTolerance = 3; // Maximal erlaubte Levenshtein-Distanz
    const tolerance = Math.max(1, Math.floor(searchText.length / 3)); // 1 Fehler pro 3 Zeichen, mindestens 1

    if (searchText.length < minSearchLength) {
      // Wenn der Suchtext kürzer als die Mindestlänge ist, mach eine normale Suche
      this.filteredCocktails = this.allCocktails.filter(cocktail =>
        cocktail.name.toLowerCase().startsWith(searchText.toLowerCase())
      );
    } else {
      // Wenn der Suchtext länger oder gleich der Mindestlänge ist, mach eine fehlertolerante Suche
      this.filteredCocktails = this.allCocktails.filter(cocktail => {
        const name = cocktail.name.toLowerCase();
        const search = searchText.toLowerCase();
        const distance = levenshtein(name, search);
        return distance <= Math.min(tolerance, maxTolerance) || name.startsWith(search);
      });
    }

    this.updateSearchStatus();
  }

  resetSearch() {
    this.searchText = '';
    this.filteredCocktails = [...this.allCocktails];
    this.updateSearchStatus();
    this.searchBar.searchText = '';

    this.cocktailItems.forEach(item => item.resetExpand());
  }

  updateSearchStatus() {
    const count = this.filteredCocktails.length;
    const term = count === 1 ? 'Cocktail' : 'Cocktails';
    if (this.searchText) {
      if(count === 0)
        this.searchStatus = `${count} ${term} gefunden für "${this.searchText}" Hast du dich Vertippt?`;
      if (count ===1)
      this.searchStatus = `${count} ${term} gefunden für "${this.searchText}"`;
    } else {
      this.searchStatus = "Top-Empfehlungen"; // Set the status to an empty string if searchText is empty
    }
  }

  randomCocktail() {
    this.filteredCocktails = this.allCocktails
    const randomIndex = Math.floor(Math.random() * this.filteredCocktails.length);
    const randomCocktail = this.filteredCocktails[randomIndex];
    this.filteredCocktails = [randomCocktail]
    this.searchStatus = "Wie wär's hiermit? Nicht dein Geschmack?! Probier's einfach nochmal!"
    this.searchBar.searchText = '';
  }
}

function levenshtein(a: string, b: string): number {
  const matrix = [];

  // Initialisiere die Matrix
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  // Fülle die Matrix
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // Ersetzen
          matrix[i][j - 1] + 1,     // Einfügen
          matrix[i - 1][j] + 1      // Löschen
        );
      }
    }
  }
  return matrix[b.length][a.length];
}
