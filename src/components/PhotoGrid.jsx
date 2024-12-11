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

  return (
    <div className="grid grid-cols-3 gap-4 m-10">
      {photos.length > 0 ? (
        photos.map((photo) => {
          return (
            <div
              key={photo.id}
              className="overflow-hidden rounded-lg shadow-md max-w-96 max-h-96"
            >
              <img
                src={photo.urls.small}
                className="max-w-96 max-h-96 object-cover"
              />
            </div>
          );
        })
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default PhotoGrid;
