import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemeGeneratorRoutingModule } from './meme-generator-routing.module';
import { MemeGeneratorComponent } from './meme-generator.component';

@NgModule({
  declarations: [
    MemeGeneratorComponent
  ],
  imports: [
    CommonModule,
    MemeGeneratorRoutingModule
  ]
})
export class MemeGeneratorModule { }
