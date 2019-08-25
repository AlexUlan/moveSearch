import React from "react";
import { Route } from "react-router-dom";
import RightMenu from "./components/RigthMenu/RightMenu";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainBody from "./components/Body/MainBody";
import MoviePage from "./components/Body/MoviePage/MoviePage_Container";
import "./App.css";
function App() {
  return (
    <div className="wrapper">
      <Header />
      <div>
        <Route exact path="/" render={() => <MainBody />} />
        <Route path="/selectMovies/:typeMovies/:idMovies" render={() => <MoviePage />} />
      </div>
      {/* / <MainBody /> */}
      <RightMenu />
      <Footer />
    </div>
  );
}
export default App;
