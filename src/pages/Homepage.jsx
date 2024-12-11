import { useState } from "react";
import SearchBar from "../components/SearchBar";
import PhotoGrid from "../components/PhotoGrid";

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <SearchBar setSearchTerm={setSearchTerm} />
      <PhotoGrid searchTerm={searchTerm} />
    </div>
  );
};

export default Homepage;
