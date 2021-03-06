// Base
import React from 'react';
import './Nav.stories.scss';

// Addons
import { withA11y } from '@storybook/addon-a11y';

// Configuración del general del componente
export default {
  title: 'Componentes|Navegación',
  decorators: [withA11y]
};

export const Simple = (): JSX.Element => (
  <div className="nav-container">
    <ul className="nav flex-column">
      <li className="nav-item">
        <a className="nav-link" href="#">
          Active
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" href="#">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">
          Disabled
        </a>
      </li>
    </ul>
  </div>
);

export const ConFondo = (): JSX.Element => (
  <div className="nav-container">
    <ul className="nav nav-pills flex-column">
      <li className="nav-item">
        <a className="nav-link active" href="#">
          Active
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">
          Disabled
        </a>
      </li>
    </ul>
  </div>
);

export const Con2Niveles = (): JSX.Element => (
  <div className="nav-container">
    <ul className="nav flex-column">
      <li className="nav-item">
        <a className="nav-link active" href="#">
          Locales y comercios
        </a>
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Local Indumentaria y calzado. (Actividades comerciales de venta).
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Locales gastronómicos: “para llevar/takeaway”
            </a>
            <ul className="nav nav-pills flex-column">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Con local a la calle
                </a>
                <ul className="nav nav-pills flex-column">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Restaurante
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      Rotisería
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Food trucks
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Locales de óptica.
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Comercial minorista (excluyendo indumentaria y calzado)
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Actividades jurídicas
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Otras actividades
        </a>
      </li>
    </ul>
  </div>
);
