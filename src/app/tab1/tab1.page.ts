import { Component } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiConsumer } from '../models/ApiConsumer';
import { PublicPriceService } from '../services/public.price.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  extends ApiConsumer  {

  constructor(
    private alertController:    AlertController,
    public  loadingController:  LoadingController,
    private publicPriceService: PublicPriceService
  ) {
    super(alertController, loadingController);
  }

  public nombre_producto:string = "";

  public resultados:any = [];

  async buscar(){
    if (this.nombre_producto == ''){
      super.displayAlert('Debe ingresar un nombre de producto.');
    }
    
    

  }
}
