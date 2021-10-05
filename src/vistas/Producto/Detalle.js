import { Fragment } from 'react'
import './Producto.css'

function Detalle({producto,setAgregaDetalle,setDetalle}) {

    return (
        <Fragment>

            <div class="center_content">
                <div class="center_title_bar">{producto.brand}</div>
                <div class="prod_box_big">
                    <div class="center_prod_box_big">
                        <div class="product_img_big"> 
                        
                        <a>
                            
                            <img src={"https://" + producto.image} alt="" border="0" /></a>
                        </div>
                        <div class="details_big_box">
                            <div class="product_title_big">Marca:{producto.brand}</div>
                            <div class="specifications"> 
                            ID: <span class="ID">{producto.id}</span><br />
                                Oferta: <span class="blue">{producto.palindromo?"Es Palindromo":"-"}</span><br />
                                Description :<span class="blue"> {producto.description} </span><br />
                            </div>

                            <div class="prod_price_big">
                        {producto.palindromo ?
                          (<div>
                            <span class="reduce">{(new Intl.NumberFormat('es-CL', { currency: 'CLP', style: 'currency' }).format(producto.price))}</span>
                            <span class="price"> {(new Intl.NumberFormat('es-CL', { currency: 'CLP', style: 'currency' }).format(producto.newprice))}</span>

                          </div>
                          )
                          :
                          <span class="price">{(new Intl.NumberFormat('es-CL', { currency: 'CLP', style: 'currency' }).format(producto.price))}</span>}
                      </div>
                            <a href="#" 
                           onClick={() => {setAgregaDetalle(true)}}
                            class="btn-3d">Agregar</a> 
                            
                            <a href="#" class="btn-3d-detalle"
                            onClick={() => {setDetalle(false)}}
                            >Regresar</a> 
                            
                            
                            
                            </div>
                   
                   
                   
                    </div>
                </div>
            </div>
        </Fragment>
    )

}

export default Detalle