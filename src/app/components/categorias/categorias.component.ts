import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiConsumer } from 'src/app/models/ApiConsumer';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent  extends ApiConsumer {

  constructor(
    private  router:                      Router,
    private alertController:              AlertController,
    public  loadingController:            LoadingController,
  ) { 
    super(alertController, loadingController);
  }

  ngOnInit() {}

  goBack(){
    this.router.navigate([ '/tabs/tab2' ]);
  }
}
