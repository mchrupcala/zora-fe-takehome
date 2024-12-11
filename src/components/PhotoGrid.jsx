import { useEffect, useState } from "react";
import { fetchPhotos } from "../api/photos.js";
import InfiniteScroll from "react-infinite-scroll-component";

const PhotoGrid = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

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

  const getMorePhotos = async () => {
    try {
      await fetchPhotos(page).then((res) => {
        setPhotos((prev) => [...prev, ...res]);
      });
      setPage(page + 1);
    } catch (err) {
      console.log("Error in getMorePhotos: ", err);
    }
  };

  return (
    <InfiniteScroll
      dataLength={photos.length}
      next={getMorePhotos}
      hasMore={true}
      // loader={<Loader />}
    >
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
    </InfiniteScroll>
  );
};

export default PhotoGrid;
