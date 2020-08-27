// Base
import React from "react";

// Addons
import { withA11y } from "@storybook/addon-a11y";

// Components

// Configuración del general del componente
export default {
  // Usar | para separar entre secciones y / para generar carpetas
  title: "Componentes|Alert",
  // Vinculamos el componente de react que estamos usando. Si no existe ninguno eliminar el campo.
  // Agregamos todos los plugins que usemos en las historias de este componente.
  decorators: [withA11y]
};

/*
 * Para cada historia vamos a exportar una constrante que devuelva un element JSX con el html.
 * Más información en https://storybook.js.org/docs/basics/writing-stories/
 *
 * No hace falta que las historias usen componentes de react.
 * pueden devolver solamente el html estático necesario
 */

// Los componentes

export const DangerDefault = (): JSX.Element => (
  <div className="alert alert-danger" role="alert">
    <div className="row">
      <div className="col-1">
        <img src="src/images/cross.png"></img>
      </div>
      <div className="col-10">
        <p> A simple danger alert—check it out!</p>
      </div>
      <div className="col-1">
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  </div>
);

export const DangerTittle = (): JSX.Element => (
  <div className="alert alert-danger" role="alert">
    <div className="row">
      <div className="col-1">
        <img src="src/images/cross.png"></img>
      </div>
      <div className="col-10">
        <h5> Un titulo por aqui</h5>
        <p>
          Y un texto contando algo <a href="#">por aqui</a>{" "}
        </p>
      </div>
      <div className="col-1">
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  </div>
);

export const DangerLinks = (): JSX.Element => (
  <div className="alert alert-danger" role="alert">
    <div className="row">
      <div className="col-1">
        <img src="../../src/images/cross.png"></img>
      </div>
      <div className="col-10">
        <h5> Un titulo por aqui</h5>
        <ol className="list-group">
          <li className="list-group-item">
            <a href="#">Un primer linkazo</a>
          </li>
          <li className="list-group-item">
            <a href="#">Un segundo linkazo</a>
          </li>
          <li className="list-group-item">
            <a href="#">Un tercer linkazo</a>
          </li>
        </ol>
      </div>
      <div className="col-1">
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  </div>
);

export const SuccessDefault = (): JSX.Element => (
  <div className="alert alert-success" role="alert">
    <div className="row">
      <div className="col-1">
        <img src="src/images/correct.png"></img>
      </div>
      <div className="col-11">
        <p> A simple succes alert—check it out!</p>
      </div>
    </div>
  </div>
);

export const SuccessTittle = (): JSX.Element => (
  <div className="alert alert-success" role="alert">
    <div className="row">
      <div className="col-1">
        <img src="src/images/correct.png"></img>
      </div>
      <div className="col-11">
        <h5> Un titulo por aqui</h5>
        <p>
          Y un texto contando algo <a href="#">por aqui</a>{" "}
        </p>
      </div>
    </div>
  </div>
);

export const InformationDefault = (): JSX.Element => (
  <div className="alert alert-info" role="alert">
    <div className="row">
      <div className="col-1">
        <img src="src/images/info.png"></img>
      </div>
      <div className="col-11">
        <p> A simple info alert—check it out!</p>
      </div>
    </div>
  </div>
);

export const InformationTittle = (): JSX.Element => (
  <div className="alert alert-info" role="alert">
    <div className="row">
      <div className="col-1">
        <img src="../src/images/info.png"></img>
      </div>
      <div className="col-11">
        <h5> Un titulo por aqui</h5>
        <p>
          Y un texto contando algo <a href="#">por aqui</a>{" "}
        </p>
      </div>
    </div>
  </div>
);

export const WarningnDefault = (): JSX.Element => (
  <div className="alert alert-warning" role="alert">
    <div className="row">
      <div className="col-1">
        <img src="src/images/warning.png"></img>
      </div>
      <div className="col-11">
        <p> A simple warning alert—check it out!</p>
      </div>
    </div>
  </div>
);

export const WarningTittle = (): JSX.Element => (
  <div className="alert alert-warning" role="alert">
    <div className="row">
      <div className="col-1">
        <img src="src/images/warning.png"></img>
      </div>
      <div className="col-11">
        <h5> Un titulo por aqui</h5>
        <p>
          Y un texto contando algo <a href="#">por aqui</a>{" "}
        </p>
      </div>
    </div>
  </div>
);
