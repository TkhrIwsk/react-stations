export const BreedsSelect = ({ breeds, selectedBreed, setSelectedBreed }) => {
  const handleChange = (event) => {
    setSelectedBreed(event.target.value);
  };

  return (
    <div>
      <label htmlFor="breed-select">犬種を選択: </label>
      <select
        id="breed-select"
        value={selectedBreed}
        onChange={handleChange}
      >
        <option value="">-- 選択してください --</option>
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
    </div>
  );
};