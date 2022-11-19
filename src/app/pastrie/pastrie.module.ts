import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PastrieDetailsComponent } from './pastrie-details/pastrie-details.component';
import { PastriesComponent } from './pastries/pastries.component';
import { PastrieTagColorPipe } from './pastrie-tag-color.pipe';
import { BorderCardDirective } from './border-card.directive';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    PastrieDetailsComponent,
    PastriesComponent,
    PastrieTagColorPipe, 
    BorderCardDirective,
    SearchComponent
  ],
  exports : [
    PastriesComponent
  ],
  imports: [
    CommonModule,
    FormsModule 
  ]
})
export class PastrieModule { }
