import React from 'react';
import Header from './components/Header';
import ProductsContainer from './containers/ProductsContainer';
import Message from './components/Message';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
    return (
        <div className="hidden-sn animated deep-purple-skin">
            <Header />
            <main id="mainContainer">
                <div className="container">
                    <ProductsContainer />
                    <Message />
                    <Cart />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;
