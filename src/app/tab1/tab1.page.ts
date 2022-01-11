import { Component } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiConsumer } from '../models/ApiConsumer';
import { FormateoService } from '../services/formateo.service';

import { PublicProductByPriceService } from '../services/public.product.by.price.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  extends ApiConsumer  {

  constructor(
    private alertController:    AlertController,
    public  loadingController:  LoadingController,
    private publicProductByPriceService: PublicProductByPriceService,
    public  formateoService: FormateoService
  ) {
    super(alertController, loadingController);
  }

  public nombre_producto:string = "";

  public resultados:any = [];

  async buscar(){
    if (this.nombre_producto == ''){
      super.displayAlert('Debe ingresar un nombre de producto.');
      return false;
    }
    
    const loading = await this.loadingController.create({ message: "Buscando..." });
    this.publicProductByPriceService.getAll('product_name='+encodeURI(this.nombre_producto)).subscribe(
      ok => {
        loading.dismiss();
        this.resultados = ok;
      },
      err => {
        loading.dismiss();
      }
    );

  }
}
