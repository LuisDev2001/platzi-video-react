import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <>
    <h1>Pagina no encontrada</h1>
    <span>Codigo de error: </span>
    <strong>404</strong>
    <br />
    <Link to="/">Regresa al home</Link>
  </>
);

export default NotFound;
