export const fetchPhotos = async (
  page = 1,
  limit = 10,
  search,
  colors = null
) => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_UNSPLASH_API_URL}search/photos?query=${search}&page=${page}&limit=${limit}${colors ? `color=${colors}` : null}`,
      {
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
        },
      }
    );

    return await res.json();
  } catch (err) {
    console.log("Something went wrong while fetching photos...", err);
    return [];
  }
};
