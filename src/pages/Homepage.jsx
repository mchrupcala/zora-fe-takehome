import { useState } from "react";
import SearchBar from "../components/SearchBar";
import PhotoGrid from "../components/PhotoGrid";

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedColors, setSelectedColors] = useState([]);

  const colors = [
    "black_and_white",
    "black",
    "white",
    "yellow",
    "orange",
    "red",
    "purple",
    "magenta",
    "green",
    "teal",
    "blue",
  ];

  const handleColorChange = (color) => {
    setSelectedColors((prevColors) =>
      prevColors.includes(color)
        ? prevColors.filter((c) => c !== color)
        : [...prevColors, color]
    );
  };

  return (
    <div className="p-4">
      <SearchBar setSearchTerm={setSearchTerm} />

      <div>
        <label>Filter :</label>
        <div className="grid grid-cols-3 gap-1">
          {colors.map((color) => (
            <label key={color}>
              <input
                type="checkbox"
                value={color}
                checked={selectedColors.includes(color)}
                onChange={() => handleColorChange(color)}
              />
              <span>{color.replace("_", " ")}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label>Sort By:</label>
      </div>

      <PhotoGrid searchTerm={searchTerm} colors={selectedColors} />
    </div>
  );
};

export default Homepage;
