export class PrecioForm {
    public comercio;
    public sucursal;
    public producto_categoria;
    public producto_sub_categoria;
    public marca;
    public sub_marca;
    public producto;
    public precio;  
    public es_oferta:Boolean = true;  
    public fecha = new Date().toISOString();
}
  