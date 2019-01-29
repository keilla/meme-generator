import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemeGeneratorRoutingModule } from './meme-generator-routing.module';
import { MemeGeneratorComponent } from './meme-generator.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ImageTextComponent } from './image-text/image-text.component';

@NgModule({
  declarations: [
    MemeGeneratorComponent,
    ImageTextComponent
  ],
  imports: [
    CommonModule,
    MemeGeneratorRoutingModule,
    SharedModule
  ]
})
export class MemeGeneratorModule { }
