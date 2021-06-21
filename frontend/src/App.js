import React from 'react';
import data from './data';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalfAlt} from "@fortawesome/free-solid-svg-icons";
import { faStar  as farStar } from '@fortawesome/free-regular-svg-icons';

library.add(fasStar, farStar, faStarHalfAlt)

function App() {
  return (

    <div className="grid-container">
      <header className="row">
        <div>
          <a href="/" className="logo">Mulhems Allerlei</a>
        </div>
        <div>
          <a href="/cart" className="trans-under">Cart</a>
          <a href="/signin" className="trans-under">Sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {data.products.map((product) => (
              <div key={product._id} className="card">
                <a href={`/product/${product._id}`}>
                    <img 
                      className="medium" 
                      src={product.image}
                      alt={product.name}
                    />
                </a>
                <div className="card-body">
                    <a href={`/product/${product._id}`}>
                        <h2>{product.name}</h2>
                    </a>
                    <div className="rating">
                        <span><i><FontAwesomeIcon icon={fasStar} /></i></span>
                        <span><i><FontAwesomeIcon icon={faStarHalfAlt} /></i></span>
                        <span><i><FontAwesomeIcon icon={farStar} /></i></span>
                    </div>
                    <div className="price">${product.price}</div>
                </div>
              </div>
            ))
          }
        </div>
      </main>
      <footer className="row center">All rights reserved</footer>
    </div>
  );
}

export default App;
