import React from "react";
import { BiSolidAddToQueue } from "react-icons/bi";
import Swal from "sweetalert2"; // Import SweetAlert2

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieCard({ movie, addToWatchList }) {
  const handleAddToWatchList = (movie) => {
    // Menambahkan film ke watchlist
    addToWatchList(movie);

    // Menampilkan SweetAlert
    Swal.fire({
      icon: "success", 
      title: "Success!", 
      text: `${movie.title} has been added to your Watchlist!`, 
      confirmButtonText: "Awesome!", 
      background: "#131520", 
      color: "#fff", 
      iconColor: "#28a745", 
    });
  };

  return (
    <section className="cursor-pointer transition-all duration-150 ease-in hover:scale-110 relative">
      <img
        src={IMAGE_BASE_URL + movie.poster_path}
        className="w-[110px] md:w-[200px] rounded-lg shadow-lg shadow-black hover:border-[3px] border-gray-400"
        alt={movie.title}
      />
      <div className="flex items-center justify-between mt-2 w-[110px] md:w-[200px]">
        <h2 className="text-sm text-white">{movie.title}</h2>
        <button
          onClick={() => handleAddToWatchList(movie)} // Menggunakan handleAddToWatchList
          className="text-white text-2xl px-2 py-1 rounded flex items-center hover:scale-110 transition-all duration-150 ease-in"
        >
          <BiSolidAddToQueue />
        </button>
      </div>
    </section>
  );
}

export default MovieCard;
