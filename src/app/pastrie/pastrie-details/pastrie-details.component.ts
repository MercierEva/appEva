import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Pastrie, List } from '../pastrie';
import { INGREDIENTS_LISTS } from '../mock-pastries';
import { PastrieService } from 'src/app/pastrie.service';


@Component({
  selector: 'app-pastrie-details',
  templateUrl: './pastrie-details.component.html',
  styleUrls: ['./pastrie-details.component.scss']
})
export class PastrieDetailsComponent implements OnInit {

  @Input() pastrie : Pastrie | null = null; // propriété [pastrie] liée
  @Input() maxPastries : any = null;
  @Output() changePreference: EventEmitter<string> = new EventEmitter();

  sens:boolean = true;
  list: List | undefined;
  ingredientsLists: List[] = INGREDIENTS_LISTS;
  ingredients: Array<string> = [];

  constructor(private pastrieService: PastrieService) { }

  ngOnInit(): void {
    console.log(this.pastrie);
  }

  ngOnChanges(): void {
    if (this.pastrie) {
      this.list = this.pastrieService.getPastrieIngredientsList(this.pastrie.id);
      if (this.list)
        this.ingredients = this.list?.list.sort();
    }
  }

  Sorted() {
    if(this.sens) {
      this.ingredients.reverse();
      this.sens = false;
    } else {
      this.ingredients.reverse();
      this.sens = true;
    }
  }

  AddRecipe(event:Event): void {
    const inputText = (event.target as HTMLInputElement).value;
    this.ingredients.push(inputText);
  }

  DeleteRecipe(recipe:string) {
    const filtered = this.ingredients.filter((ingredient: string) => ingredient !== recipe);
    this.ingredients = filtered;
  }

  // méthode permettant la transmission de l'id de la pâtisserie au composant parent
  preference(id: string) {
    this.changePreference.emit(id)
  }

}
