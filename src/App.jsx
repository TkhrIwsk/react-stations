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

    const FetchRandomImage = () => {
      const DogAPI = "https://dog.ceo/api/breeds/image/random";
      
      fetch(DogAPI)
      .then((response)=>{
        if(!response.ok){
          throw new Error(`HTTP ${response.status}`);
        }
        return response.json();
      })
      .then((data)=>{
        setDogUrl(data.message);
      })
      .catch((error)=>{
        console.error("Fetch Error:", error);
      }); 
    }

  return (
    <div>
      <header>犬の画像</header>
      <main>
        <img 
          src={dogUrl}   // state を利用
          width="400"
          alt="ランダムに抽出した犬の画像"
        />

        <button onClick={FetchRandomImage}>
          画像を変更
        </button>
      </main>
    </div>
  );
}
