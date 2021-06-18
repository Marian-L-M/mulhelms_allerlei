import React from 'react';

function App() {
  return (

    <div className="grid-container">
      <header className="row">
        <div>
          <a href="" className="logo">Mulhems Allerlei</a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">
            <div className="card">
                <a href="product.html">
                    <img className="medium" src="./img/product_sample.jpg" alt="placeholder product"/>
                </a>
                <div className="card-body">
                    <a href="product.html">
                        <h2>Chicklet Normalsize White</h2>
                    </a>
                    <div className="rating">
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star-half" aria-hidden="true"></i></span>
                    </div>
                    <div className="price">
                        $120
                    </div>
                </div>
            </div>
            <div className="card">
                <a href="product.html">
                    <img className="medium" src="./img/chicken2.svg" alt="placeholder product"/>
                </a>
                <div className="card-body">
                    <a href="product.html">
                        <h2>Chicklet Normalsize White</h2>
                    </a>
                    <div className="rating">
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                    </div>
                    <div className="price">
                        $120
                    </div>
                </div>
            </div>
            <div className="card">
                <a href="product.html">
                    <img className="medium" src="./img/chicken3.svg" alt="placeholder product"/>
                </a>
                <div className="card-body">
                    <a href="product.html">
                        <h2>Chicklet Normalsize White</h2>
                    </a>
                    <div className="rating">
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                    </div>
                    <div className="price">
                        $120
                    </div>
                </div>
            </div>
            <div className="card">
                <a href="product.html">
                    <img className="medium" src="./img/chicken4.svg" alt="placeholder product"/>
                </a>
                <div className="card-body">
                    <a href="product.html">
                        <h2>Chicklet Normalsize White</h2>
                    </a>
                    <div className="rating">
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                    </div>
                    <div className="price">
                        $120
                    </div>
                </div>
            </div>
            <div className="card">
                <a href="product.html">
                    <img className="medium" src="./img/chicken5.svg" alt="placeholder product"/>
                </a>
                <div className="card-body">
                    <a href="product.html">
                        <h2>Chicklet Normalsize White</h2>
                    </a>
                    <div className="rating">
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                        <span><i className="fa fa-star"></i></span>
                    </div>
                    <div className="price">
                        $120
                    </div>
                </div>
            </div>
        </div>
      </main>
      <footer className="row center">All rights reserved</footer>
    </div>
  );
}

export default App;
