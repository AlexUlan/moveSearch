import React from 'react';
import RightMenu from './components/RigthMenu/RightMenu';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainBody from './components/Body/MainBody_Container';
import "./App.css"

function App() {
  return (
    <div className="wrapper">
      <Header />
      <MainBody />
      <RightMenu />
      <Footer />
    </div>
  )
}

export default App;
