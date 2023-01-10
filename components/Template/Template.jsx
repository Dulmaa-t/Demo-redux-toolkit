import React from 'react';
import Footer from '../layout/Footer';
import Header from '../layout/Header';

function Layout({children}) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
       <Footer /> 
      </>
  )
}

export default Layout