import styled from "@emotion/styled";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { obtenerCalificaciones } from "../actions/califActions";
import { descargarMateriasFilterAction } from "../actions/materiasActions";

const Contenedor = styled.div`
  display: block;
  text-align: center;
  color: var(--secondary);
  font-size: 1.5rem;
`;
const FormularioStyle = styled.form`
  display: grid;
  grid-template-columns: 22% 22% 22% 22% 10%;
  font-size: 1rem;
  text-align: left;
  margin: 0 auto;
  padding-bottom: 2rem;
  padding-top: 1rem;
  height: 1%.5;
`;
const LabelText = styled.label`
  height: 2rem;
  margin-top: auto;
`;
const Campoinput = styled.input`
  border-radius: 5px;
  height: 1rem;
  width: 20%;
`;

const FormularioCalif = () => {
  return <Contenedor>Agregar Calificaciones</Contenedor>;
};

export default FormularioCalif;
