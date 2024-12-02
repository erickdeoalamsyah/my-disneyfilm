import React, { useState, useEffect } from "react";
import GenresList from "../Constant/GenresList";
import MovieList from "./MovieList";
import WatchList from "./WatchList"; // Sidebar Watch List
import { BiSolidAddToQueue } from "react-icons/bi";
import { MdOutlineCloseFullscreen } from "react-icons/md";

export const GenreMovieList = () => {
  const [watchList, setWatchList] = useState([]); // State Watch List
  const [showSidebar, setShowSidebar] = useState(false); // State Sidebar
  const [showButton, setShowButton] = useState(false); // State untuk tombol yang muncul saat scroll

  // Menambahkan movie ke watchlist
  const addToWatchList = (movie) => {
    if (!watchList.some((item) => item.id === movie.id)) {
      setWatchList([...watchList, movie]);
    }
  };

  // Menghapus movie dari watchlist
  const removeFromWatchList = (id) => {
    setWatchList(watchList.filter((item) => item.id !== id));
  };

  // Mengontrol tampilan tombol berdasarkan scroll
  const handleScroll = () => {
    if (window.scrollY > 200) { // Ganti angka 200 dengan jumlah scroll yang diinginkan
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Menambahkan event listener untuk scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {/* Tombol untuk membuka sidebar, hanya muncul saat scroll */}
      {showButton && (
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="fixed top-2 right-2 z-50 text-3xl px-2 py-2 rounded-md"
        >
          {showSidebar ? <MdOutlineCloseFullscreen /> : <BiSolidAddToQueue />}
        </button>
      )}

      {/* Sidebar Watch List */}
      {showSidebar && (
        <div className="fixed top-0 right-0 w-80 h-full bg-gray-900 border-[1px] border-white shadow-lg p-4 z-40">
          <WatchList
            watchList={watchList}
            removeFromWatchList={removeFromWatchList}
          />
        </div>
      )}

      {/* Genre Movie List */}
      <div>
        {GenresList.genere.map(
          (item, index) =>
            index <= 4 && (
              <div key={item.id} className="py-3 px-8 md:px-16">
                <h2 className="text-xl shadow-md shadow-black pb-2">
                  {item.name}
                </h2>
                <MovieList genreId={item.id} addToWatchList={addToWatchList} />
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default GenreMovieList;

