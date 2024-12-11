import { useEffect, useState } from "react";
import { fetchPhotos } from "../api/photos.js";

const PhotoGrid = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const getPhotos = async () => {
      try {
        await fetchPhotos().then((res) => {
          console.log("here you go: ", res);
          setPhotos(res);
        });
      } catch (err) {
        console.log("Error in getPhotos: ", err);
      }
    };

    getPhotos();
  }, []);

  return <div>PhotoGrid</div>;
};

export default PhotoGrid;
