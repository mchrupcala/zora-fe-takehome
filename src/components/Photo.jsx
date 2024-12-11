const Photo = ({ photo }) => {
  if (!photo) return null;
  return (
    <div
      key={photo.id}
      className="overflow-hidden rounded-lg shadow-md max-w-96 max-h-96"
    >
      <img src={photo.urls.small} className="max-w-96 max-h-96 object-cover" />
    </div>
  );
};

export default Photo;
