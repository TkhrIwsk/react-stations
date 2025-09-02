// @ts-check
import {useState} from "react";
import {DogImage} from "./DogImage"

export const Description = () => {
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
    <main className="Dog_image"> 
      <button onClick={FetchRandomImage}>
          画像を変更
      </button>
      <DogImage imageUrl={dogUrl} />
    </main>
  );
}

//export default Description
