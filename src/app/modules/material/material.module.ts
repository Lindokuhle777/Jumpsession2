import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';



const MaterialComponents = [MatButtonModule,
  MatCardModule,MatFormFieldModule,
  MatInputModule,MatToolbarModule,
  MatIconModule,MatMenuModule,MatSelectModule,]

@NgModule({
  
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents

  ]
})
export class MaterialModule { }
