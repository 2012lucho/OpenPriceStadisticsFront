import { Component } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private alertController:    AlertController,
    public  loadingController:  LoadingController
  ) {}

  public nombre_producto:string = "";

  public resultados:any = [];

  async buscar(){
    if (this.nombre_producto == ''){
      const alert = await this.alertController.create({
        header: 'Atención',
        message: 'Debe ingresar un nombre de producto.',
        buttons: ['Aceptar']
      });
      await alert.present();
    }
    
    

  }
}
