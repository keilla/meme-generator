import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemeGeneratorComponent } from './meme-generator.component';

const routes: Routes = [
  {path: '', component: MemeGeneratorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemeGeneratorRoutingModule { }
