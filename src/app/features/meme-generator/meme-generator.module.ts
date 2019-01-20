import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemeGeneratorRoutingModule } from './meme-generator-routing.module';
import { MemeGeneratorComponent } from './meme-generator.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    MemeGeneratorComponent
  ],
  imports: [
    CommonModule,
    MemeGeneratorRoutingModule,
    SharedModule
  ]
})
export class MemeGeneratorModule { }
