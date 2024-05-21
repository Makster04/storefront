
// App.jsx

import React from 'react';
import Header from './Components/Header/index.jsx';
import Footer from './Components/Footer/index.jsx';
import Categories from './Components/Categories/index.jsx';
import Products from './Components/Products/index.jsx';

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Categories />
        <Products />
      </main>
      <Footer />
    </div>
  );
};

export default App;
