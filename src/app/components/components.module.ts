import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RrssComponent } from './rrss/rrss.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    RrssComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
    exports: [
    HeaderComponent,
    RrssComponent
  ]
})
export class ComponentsModule { }
