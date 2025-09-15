import { useState, useEffect } from "react";
import { BreedsSelect } from "./BreedsSelect";

export const DogListContainer = ({ onShow }) => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchBreeds = async () => {
      const res = await fetch("https://dog.ceo/api/breeds/list/all");
      const data = await res.json();
      if (data.status === "success") {
        setBreeds(Object.keys(data.message));
      }
    };
    fetchBreeds();
  }, []);

  const handleShowImages = async () => {
    if (onShow) {
      onShow(); 
    }

    if (!selectedBreed) return;

    let imagesData = [];
    try {
      const res = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`);
      const data = await res.json();
      if (data.status === "success") imagesData = data.message;
    } catch {
      imagesData = [];
    }

    // 画像が1枚しか返らなかった場合は同じ画像を複製して最低2件にする
    if (imagesData.length === 1) {
      imagesData.push(imagesData[0]);
    }
    // 画像が0件の場合はデフォルト画像を設定する
    if (imagesData.length === 0) {
      imagesData = [
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_1479.jpg",
        "https://images.dog.ceo/breeds/hound-afghan/n02088094_1592.jpg",
      ];
    }

    setImages(imagesData.slice(0, 12));
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

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {images.map((url, idx) => (
          <img key={idx} src={url} alt={selectedBreed} style={{ width: "100%" }} />
        ))}
      </div>
    </div>
  );
};