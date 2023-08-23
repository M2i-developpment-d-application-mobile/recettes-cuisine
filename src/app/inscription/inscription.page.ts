import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage  {

  name: string='';
  email: string='';
  password: number=0;

  constructor(private router: Router) {}

  register() {
    this.router.navigate(['/connexion']);
  }

}
