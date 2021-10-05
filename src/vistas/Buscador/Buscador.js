import React, { Fragment,useEffect,useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import InputIcon from '@material-ui/icons/Input';
import logo from "../../assets/logo.svg";

import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import './Buscador.css'
import Producto from '../Producto/Producto';
import axios from 'axios';
import { set } from 'date-fns';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  logoImg: {
    width: "200px",
    padding: "4px"
  },
  search: {

    width: "400px",
    textAlign: "left",
    marginLeft: "50px",
    justifyContent: "center",
    position: "relative",
    backgroundColor: "white",
    color: "black",
    borderRadius: "10px"

  },
  searchIcon: {
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "420px",
    color: "white",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    paddingLeft: `calc(1em + 10px`,
    width: "100%"

  },
}));

const Buscador = () => {

  const classes = useStyles();
  const [productos, setProductos] = useState([])

  const[busqueda,setBusqueda] = useState("")
  const[cargando,setCargando] = useState(false)

  useEffect(() => {
    if(busqueda.length>2)
    {
      getProductos()
    }

}, [busqueda])
  async function getProductos() {
    try {
      setCargando(true)
      const response = await axios.get(`/api/buscar?producto=${busqueda}`);
      setCargando(false)
      if(response.data.mensaje=="ok")
      {   
        setProductos(response.data.productos)
      }
  
      console.log(response);
    } catch (error) {

      console.error(error);
    }
  }

  //const [notifications] = useState([]);

  return (
    <Fragment>

      <AppBar style={{ backgroundColor: "#0071DC", }}>
        <Toolbar>

          <img alt="Logo" src={logo} className={classes.logoImg} />

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Buscar Producto"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            value={busqueda}
            onChange={(event, newValue) => {
              setBusqueda(event.target.value);
            }}
            />
          </div>



        </Toolbar>

      </AppBar>
     
     <Producto productos={productos} cargando={cargando}/>

    </Fragment>

  );
};



export default Buscador;