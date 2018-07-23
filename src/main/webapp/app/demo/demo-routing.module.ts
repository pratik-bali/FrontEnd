import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { DemoComponent } from './demo.component';
import { GridComponent } from './widget/grid/grid.component';

const MyRoute: Routes =
[
  { path: 'demo' , component: DemoComponent },
  { path: 'demo/grid' , component: GridComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(MyRoute, {useHash: true})
  ],
  exports: [
    RouterModule
  ]

})
export class DemoRoutingModule {

}
