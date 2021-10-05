import { Fragment, useState,useEffect } from 'react'
import './Producto.css'
import Loader from "react-loader-spinner";
import Detalle from './Detalle';
function Producto({ productos, cargando }) {

  const [seleccionados, setSeleccionados] = useState([])
  const [esdetalle, setDetalle] = useState(false)
  const [producto, setProducto] = useState(null)
  const [agregadetalle,setAgregaDetalle]=useState(false)
  // const [productos, setProductos] = useState([
  //   {
  //     _id: "6158c891ba5c556259804332",
  //     id: "2872",
  //     brand: "dsaasd",
  //     description: "iuslfm mlscw",
  //     image: "www.lider.cl/catalogo/images/tvIcon.svg",
  //     price: 192525,
  //     newprice: 192525,
  //     palindromo: false
  //   }

  // ])

  const agregarItem = (item) => {
    setSeleccionados(seleccionados => [...seleccionados, item])

  }

  const total = () => {

    var total = 0

    seleccionados.forEach(element => {
      total = total + element.newprice
    });

    return total
  }
  function IsPar(value) {
    if (value % 2 == 0) {
      return true

    } else {
      return false
    }
  }
  useEffect(() => {
    
    if(agregadetalle)
    {
      agregarItem(producto)
    }

  }, [agregadetalle]);

  useEffect(() => {
    
    if(cargando)
    {
      setDetalle(false)
    }

  }, [cargando]);
  const actualizaDetalle = (item) =>{
      setDetalle(true)
      setProducto(item)
  }
  return (

    <Fragment>
      <div id="main_container">
        <div id="header">
          <div class="top_right">
            <div class="languages">
              <div class="lang_text">Languages:</div>
              <a href="#" class="lang"><img src="images/en.gif" alt="" border="0" /></a> <a href="#" class="lang"><img src="images/de.gif" alt="" border="0" /></a> </div>
            <div class="big_banner"> <a href="#"><img src="images/banner728.jpg" alt="" border="0" /></a> </div>
          </div>
          <div id="logo"> <a href="#"><img src="images/logo.png" alt="" border="0" width="182" height="85" /></a> </div>
        </div>
        <div id="main_content">
          <div id="menu_tab">
            <ul class="menu">
              <li><a href="#" class="nav"> Home </a></li>
              <li class="divider"></li>
              <li><a href="#" class="nav">Products</a></li>
              <li class="divider"></li>
              <li><a href="#" class="nav">Specials</a></li>
              <li class="divider"></li>
              <li><a href="#" class="nav">My account</a></li>
              <li class="divider"></li>
              <li><a href="#" class="nav">Sign Up</a></li>
              <li class="divider"></li>
              <li><a href="#" class="nav">Shipping </a></li>
              <li class="divider"></li>
              <li><a href="contact.html" class="nav">Contact Us</a></li>
              <li class="divider"></li>
              <li><a href="details.html" class="nav">Details</a></li>
            </ul>
          </div>

          <div class="crumb_navigation"> Navigation: <span class="current">Home</span> </div>
          <div class="left_content">
            <div class="title_box">Categorias</div>
            <ul class="left_menu">
              <li class="odd"><a href="#">Verduras</a></li>
              <li class="even"><a href="#">Lacteos</a></li>
              <li class="odd"><a href="#">Carnes</a></li>
              <li class="even"><a href="#">Libreria</a></li>
              <li class="odd"><a href="#">Automovil</a></li>
              <li class="even"><a href="#">Fiambreria</a></li>
            </ul>
            <div class="title_box">Productos con descuento</div>
            <div class="border_box">
              <div class="product_title"><a href="#">Ala por ser palindromo</a></div>
              <div class="product_img"><a href="#"><img src="images/p1.jpg" alt="" border="0" /></a></div>
              <div class="prod_price"><span class="reduce">350$</span> <span class="price">270$</span></div>
            </div>
            <div class="title_box">Ofertas</div>
            <div class="border_box">
              <input type="text" name="newsletter" class="newsletter_input" value="your email" />
              <a href="#" class="join">subscribete</a> </div>
            <div class="banner_adds"> <a href="#"><img src="images/bann2.jpg" alt="" border="0" /></a> </div>
          </div>


          
            <div class="center_content">
              <div class="center_title_bar">{productos.length==0?"Sin resultados":"Productos"}</div>
              {!cargando && !esdetalle ? (
                productos.map((producto) => (

                  <div class="prod_box">
                    <div class="center_prod_box">
                    <div class="product_title">
                      <span class="price">ID:{producto.id}</span>
                      </div>
                      <div class="product_title"><a href="#">{producto.brand} {producto.description}</a></div>
                      <div class="product_img"><a href="#"><img src={"https://" + producto.image} alt="" border="0" /></a></div>
                      <div class="prod_price">
                        {producto.palindromo ?
                          (<div>
                            <span class="reduce">{(new Intl.NumberFormat('es-CL', { currency: 'CLP', style: 'currency' }).format(producto.price))}</span>
                            <span class="price"> {(new Intl.NumberFormat('es-CL', { currency: 'CLP', style: 'currency' }).format(producto.newprice))}</span>

                          </div>
                          )
                          :
                          <span class="price">{(new Intl.NumberFormat('es-CL', { currency: 'CLP', style: 'currency' }).format(producto.price))}</span>}
                            
                      </div>
                   
                    </div>
                    <div class="prod_details_tab"> 
                    <a href="#" onClick={() => { agregarItem(producto) }} class="btn-3d">Agregar</a> 
                    <a href="#" onClick={()=>{actualizaDetalle(producto)}} class="btn-3d-detalle">Detalles</a> </div>
                  </div>

                ))) :
                (esdetalle? 
                  <Detalle producto={producto} setAgregaDetalle={setAgregaDetalle} setDetalle={setDetalle}/> 
                  :<div className="spinner">
                  <Loader type="ThreeDots" color="#0071DC" height="50" width="50" />
                </div>)}


            </div>
          
  
          <div class="right_content">

            <div class="shopping_cart">
              <div class="title_box">Tu Carro</div>
              <div class="cart_details">Items: {seleccionados.length}<br />
                <span class="border_cart"></span> Total: <span class="price">{(new Intl.NumberFormat('es-CL', { currency: 'CLP', style: 'currency' }).format(total()))}</span> </div>
              <div class="cart_icon"><a href="#"><img src="images/shoppingcart.png" alt="" width="35" height="35" border="0" /></a></div>
            </div>


            <div class="title_box">Productos seleccionados</div>
            <ul class="left_menu">

              {seleccionados.map((seleccionado, index) => (

                <li class={IsPar(index) ? "odd" : "even"}><a href="#">{seleccionado.brand.substring(0, 8)} {seleccionado.description.substring(0, 10)}:{seleccionado.newprice}</a></li>
              ))}

            </ul>
            <div class="banner_adds"> <a href="#"><img src="images/bann1.jpg" alt="" border="0" /></a> </div>
          </div>

        </div>

        <div class="footer">
          <div class="left_footer"> <img src="images/footer_logo.png" alt="" width="89" height="42" /> </div>
          <div class="center_footer"> Daniel Bustos Romero danielbustos86@gmail.com<br />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Producto