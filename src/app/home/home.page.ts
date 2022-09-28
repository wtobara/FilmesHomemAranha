import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls:['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router){}

  pageDescricao()
  {
    this.router.navigate(['/descricao',{name:'Lucas'}])
  }
}
