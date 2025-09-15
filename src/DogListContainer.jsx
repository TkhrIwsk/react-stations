// @ts-check
// DogListContainer.js
import { useState, useEffect } from "react";

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await response.json();
        if (data.status === "success") {
          // オブジェクトのキー（犬種名）を配列に変換
          const breedList = Object.keys(data.message);
          // @ts-ignore
          setBreeds(breedList);
        }
      } catch (error) {
        console.error("犬種データの取得に失敗しました:", error);
      }
    };

    fetchBreeds();
  }, []); // 初回のみ実行

  return (
    <div>
      <h2>犬種一覧</h2>
      <ul>
        {breeds.map((breed) => (
          <li key={breed}>{breed}</li>
        ))}
      </ul>
    </div>
  );
};
