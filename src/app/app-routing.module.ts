import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemeGeneratorComponent } from './features/meme-generator/meme-generator.component';

const routes: Routes = [
  {path: '', component: MemeGeneratorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
