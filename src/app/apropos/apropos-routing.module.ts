import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AProposPage } from './apropos.page';

const routes: Routes = [
  {
    path: '',
    component: AProposPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AProposPageRoutingModule {}
