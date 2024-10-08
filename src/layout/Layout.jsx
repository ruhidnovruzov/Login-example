import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';

const Layout = ({ children, onAddCategory, onLogout }) => {
  return (
    <div>
      <Header onAddCategory={onAddCategory} onLogout={onLogout}/>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
