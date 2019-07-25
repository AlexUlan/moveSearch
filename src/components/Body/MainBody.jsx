import React from "react";
import SearchBar from "./SearchBar/SearchBar_Continer";
import BodyContent from "./BodyContent/BodyContent_Container";
import s from "./MainBody.module.css";

const MainBody = props => {
  return (
    <div>
      <SearchBar />
      <BodyContent />
    </div>
  );
};
export default MainBody;
