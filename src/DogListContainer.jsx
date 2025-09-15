
import { useState, useEffect } from "react";
import { BreedsSelect } from "./BreedsSelect";

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [images, setImages] = useState([]); // 犬種画像のリスト

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all");
        const data = await response.json();
        if (data.status === "success") {
          const breedList = Object.keys(data.message);
          setBreeds(breedList);
        }
      } catch (error) {
        console.error("犬種データの取得に失敗しました:", error);
      }
    };

    fetchBreeds();
  }, []);

  const handleShowImages = async () => {
    if (!selectedBreed) return;

    try {
      const response = await fetch(
        `https://dog.ceo/api/breed/${selectedBreed}/images`
      );
      const data = await response.json();
      if (data.status === "success") {
        // 取得件数を制限（12件）
        setImages(data.message.slice(0, 12));
      }
    } catch (error) {
      console.error("犬種画像の取得に失敗しました:", error);
    }
  };

  return (
    <div>
      <h2>犬種一覧</h2>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <BreedsSelect
          breeds={breeds}
          selectedBreed={selectedBreed}
          setSelectedBreed={setSelectedBreed}
        />
        <button onClick={handleShowImages}>表示</button>
      </div>

      {selectedBreed && <p>選択中の犬種: {selectedBreed}</p>}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px", marginTop: "20px" }}>
        {images.map((url, index) => (
          <img key={index} src={url} alt={selectedBreed} style={{ width: "100%", borderRadius: "8px" }} />
        ))}
      </div>
    </div>
  );
};