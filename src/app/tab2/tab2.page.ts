import { Component, ViewChild } from '@angular/core';
import { PrecioForm } from './models/precio.form';
import { PublicBranchService } from './services/public.branch.service';
import { PublicCategoryService } from './services/public.category.service';
import { PublicEnterpriceService } from './services/public.enterprise.service';
import { PublicPriceService } from './services/public.price.service';
import { PublicProductCategoryService } from './services/public.product.category.service';
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
    private publicProductCategoryService: PublicProductCategoryService,
    private publicProductService:         PublicProductService,
    private publicVendorService:          PublicVendorService
  ) {}

  ngOnInit() {
    this.cargarData();
  }

  cargarData(){
    this.publicCategoryService.getAll().subscribe(
      ok => {
        this.listado_categorias = ok;
      },
      err => {}
    );

    this.publicEnterpriceService.getAll().subscribe(
      ok => {
        this.listado_comercios = ok;
      },
      err => {}
    );

    this.publicProductService.getAll().subscribe(
      ok => {
        this.listado_productos = ok;
      },
      err => {}
    );

    this.publicVendorService.getAll().subscribe(
      ok => {
        this.listado_marcas = ok;
      },
      err => {}
    );
  }

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
