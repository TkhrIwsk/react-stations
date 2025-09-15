// DO NOT DELETE

import './App.css'
/*Reactのimport*/ 
import{useState}from "react";

/*ヘッダーのimport*/
import {Header} from "./Header";
/*DescriptionのImport*/ 
import {Description} from "./Description"

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  return (
    <div>
      <Header />
      <Description />
      <DogListContainer />
    </div>
  );
}
