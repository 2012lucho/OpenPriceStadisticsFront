import { Component, ViewChild } from '@angular/core';
import { PrecioForm } from './models/precio.form';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public listado_comercios:any = [];
  public listado_sucursales = [];
  public listado_categorias:any = [];
  public listado_sub_categorias:any = [];
  public listado_marcas:any = [];
  public listado_sub_marcas:any = [];
  public listado_productos:any = [];
  public precio;

  public precio_form = new PrecioForm();

  constructor() {}

  comercioChange(e:any){

  }

  sucursalChange(e:any){

  }

  categoriaChange(e:any){

  }

  subCategoriaChange(e:any){

  }

  marcaChange(e:any){

  }

  subMarcaChange(e:any){

  }

  productoChage(e:any){

  }
}
