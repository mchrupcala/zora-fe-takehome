import { useEffect, useState } from "react";
import { fetchPhotos } from "../api/photos.js";
import InfiniteScroll from "react-infinite-scroll-component";
import Photo from "./Photo.jsx";

const PhotoGrid = ({ searchTerm }) => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!searchTerm || searchTerm.length === 0) {
      setPhotos([]);
      return;
    }

    const fetchInitialPhotos = async () => {
      setIsLoading(true);
      try {
        const res = await fetchPhotos(1, 10, searchTerm);
        setPhotos(res.results);
        setPage(2);
      } catch (err) {
        console.error("Error in fetchInitialPhotos:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInitialPhotos();
  }, [searchTerm]);

  const getMorePhotos = async () => {
    if (isLoading) return;
    if (!searchTerm || searchTerm.length === 0) {
      setPhotos([]);
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetchPhotos(page, 10, searchTerm);
      setPhotos((prev) => [...prev, ...res.results]);
      setPage((prevPage) => prevPage + 1);
    } catch (err) {
      console.error("Error in getMorePhotos:", err);
    } finally {
      setIsLoading(false);
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
            return <Photo photo={photo} />;
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </InfiniteScroll>
  );
};

export default PhotoGrid;
