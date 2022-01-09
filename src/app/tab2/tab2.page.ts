import { Component, ViewChild } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { FormateoService } from '../services/formateo.service';
import { PrecioForm } from './models/precio.form';
import { PublicBranchService } from './services/public.branch.service';
import { PublicCategoryService } from './services/public.category.service';
import { PublicEnterpriceService } from './services/public.enterprise.service';
import { PublicPriceService } from './services/public.price.service';
import { PublicProductService } from './services/public.product.service';
import { PublicVendorService } from './services/public.vendor.service';

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

  constructor(
    private publicCategoryService:        PublicCategoryService,
    private publicBranchService:          PublicBranchService,
    private publicEnterpriceService:      PublicEnterpriceService,
    private publicPriceService:           PublicPriceService,
    private publicProductService:         PublicProductService,
    private publicVendorService:          PublicVendorService,
    public  loadingController:            LoadingController,
    private alertController:              AlertController,
    public  formateoService:              FormateoService
  ) {}

  ngOnInit() {
    this.cargarData();
  }

  async loadingEspecificData( service:any, params:string,dataOut:string, loadingText:string, recursionCount:number = 0 ){
    const loading = await this.loadingController.create({ message: loadingText });
    await loading.present();
    service.getAll(params).subscribe(
      ok => {
        loading.dismiss();
        this[dataOut] = ok;
      },
      err => {
        loading.dismiss();
        if (recursionCount > 100){
          this[dataOut] = [];
        }
        return this.loadingEspecificData(service, params, dataOut, loadingText,recursionCount+1);
        
      }
    );
  }

  async cargarData(){
    this.loadingEspecificData(this.publicCategoryService, '',   'listado_categorias', 'Consultando categorías.');
    this.loadingEspecificData(this.publicEnterpriceService, '', 'listado_comercios',  'Consultando comercios.');
    this.loadingEspecificData(this.publicVendorService, '',     'listado_marcas',     'Consultando marcas.');
  }

  comercioChange(e:any){
    this.loadingEspecificData(this.publicBranchService, 'filter[enterprise_id]='+this.precio_form.comercio.id,   'listado_sucursales', 'Consultando sucursales.');
  }

  sucursalChange(e:any){}

  categoriaChange(e:any){
    this.loadingEspecificData(this.publicCategoryService, 'filter[root_category_id]='+this.precio_form.producto_categoria.id,   'listado_sub_categorias', 'Consultando sub categorias.');
  }

  subCategoriaChange(e:any){
  }

  marcaChange(e:any){
    this.loadingEspecificData(this.publicVendorService, 'filter[root_vendor_id]='+this.precio_form.marca.id,   'listado_sub_marcas', 'Consultando sub marcas.');
    this.loadingEspecificData(this.publicProductService, 'filter[vendor_id]='+this.precio_form.marca.id,   'listado_productos', 'Consultando productos.');
  }

  subMarcaChange(e:any){
    this.loadingEspecificData(this.publicProductService, 'filter[vendor_id]='+this.precio_form.sub_marca.id,   'listado_productos', 'Consultando productos.');
  }

  productoChage(e:any){}

  ingresar(){
    let precio:number = this.formateoService.getFloat(this.precio_form.precio);
    if(precio == undefined || precio<=0){
      this.alert("Ingrese un precio válido");
    }
    if (this.precio_form.comercio == undefined){ this.alert("Debe seleccionar un comercio");  }
    if (this.precio_form.sucursal == undefined){ this.alert("Debe seleccionar una sucursal");  }
    if (this.precio_form.marca == undefined && this.precio_form.sub_marca == undefined){ this.alert("Debe seleccionar una marca o sub marca");  }
    if (this.precio_form.producto_categoria == undefined && this.precio_form.producto_sub_categoria){ this.alert("Debe seleccionar una categorìa o sub categoría");  }
    if (this.precio_form.producto == undefined){ this.alert("Debe seleccionar un producto");  }
    
    
  }

  async alert(msg:string){
    const alert = await this.alertController.create({
      header: 'Atención',
      message: 'Debe ingresar un nombre de producto.',
      buttons: ['Aceptar']
    });
    await alert.present();
  }
}
