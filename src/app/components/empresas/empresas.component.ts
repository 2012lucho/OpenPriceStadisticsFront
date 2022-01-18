import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiConsumer } from 'src/app/models/ApiConsumer';
import { AuthService } from 'src/app/modules/autentication/services/auth.service';
import { PublicEnterpriceItemService } from 'src/app/services/public.enterprice.item.service';
import { EmpresaForm } from './model/empresa.form';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss'],
})
export class EmpresasComponent  extends ApiConsumer {

  constructor(
    private authService:                 AuthService,
    private router:                      Router,
    private publicEnterpriceItemService: PublicEnterpriceItemService,
    public  loadingController:           LoadingController,
    private alertController:             AlertController
  ) { 
    super(alertController, loadingController);
  }

  public model:EmpresaForm = new EmpresaForm();
  public listado_rubros:any = [];

  goBack(){
    this.router.navigate([ '/tabs' ]);
  }

  ingresar(){

  }

  ngOnInit() {
    this.loadingEspecificData(this.publicEnterpriceItemService, '',   'listado_rubros', 'Consultando rubros.');
  }

}
