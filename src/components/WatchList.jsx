import React from "react";
import { CiBookmarkRemove } from "react-icons/ci";
import Swal from "sweetalert2"

function WatchList({ watchList, removeFromWatchList }) {
  const handleRemoveFromWatchList = (id, title) =>{
    removeFromWatchList(id);

    Swal.fire({
      icon:"success",
      title: "Removed!",
      text: `${title} has been removed from your watch list`,
      confirmButtonText:"Okay",
      background:"#131520",
      color:"#fff",
      iconColor: "d9534f"
    })
  }
  return (
    <div>
      <h2 className="text-xl font-bold mb-3 ">Watch List</h2>
      {watchList.length === 0 ? (
        <p>No movies in Watch List</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 max-h-[640px] overflow-y-auto scrollbar-hide">
          {watchList.map((movie) => (
            <div key={movie.id} className="relative">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className=" rounded-lg hover:border-[3px] border-gray-400
                cursor-pointer transition-all duration-150 ease-in"
              />
              <button
                onClick={() => handleRemoveFromWatchList(movie.id, movie.title)}
                className="absolute bg-red-600 bottom-2 right-2 text-white text-4xl rounded"
              >
                <CiBookmarkRemove />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WatchList;
