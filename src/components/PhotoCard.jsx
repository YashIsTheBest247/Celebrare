import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const PhotoCard = ({ photo, dispatch, favourites }) => {
  const isFav = favourites.some((p) => p.id === photo.id);

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">

      <div className="h-48 overflow-hidden">
        <img
          src={photo.download_url}
          alt={photo.author}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex justify-between items-center p-3">
        <p className="text-sm font-medium">{photo.author}</p>

        <button
          onClick={() =>
            dispatch({ type: "TOGGLE_FAV", payload: photo })
          }
          className="text-xl"
        >
          {isFav ? (
            <AiFillHeart className="text-red-500" />
          ) : (
            <AiOutlineHeart />
          )}
        </button>
      </div>

    </div>
  );
};

export default PhotoCard;