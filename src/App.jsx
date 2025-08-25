// DO NOT DELETE

import './App.css'
/*Reactのimport*/ 
import{useState}from "react";

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
const[dogUrl, setDogUrl] = useState(
    "https://images.dog.ceo/breeds/terrier-russell/jack-koda-1.jpg"
  );

  return (
    <div>
      <header>犬の画像</header>
      <main>
        <img 
          src={dogUrl}   // state を利用
          width="400"
          alt="ランダムに抽出した犬の画像"
        />
      </main>
    </div>
  );
}
