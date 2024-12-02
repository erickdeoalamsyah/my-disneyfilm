import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth=window.innerWidth;

export const Slider = () => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);
  useEffect(() => {
    getTrendingMovies();
  }, []);
  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos.then((resp) => {
      console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };
  const SliderRight=(element)=>{
    element.scrollLeft+=screenWidth-110
  }
  const SliderLeft=(element)=>{
    element.scrollLeft-=screenWidth-110
  }
  return (
    <div>
      <HiChevronLeft className="hidden md:block text-[35px] absolute ml-9 mt-[155px] cursor-pointer"
      onClick={()=>SliderLeft(elementRef.current)}></HiChevronLeft>
      <HiChevronRight className="hidden md:block text-[35px] absolute ml-8 mt-[155px] cursor-pointer right-9"
      onClick={()=>SliderRight(elementRef.current)}></HiChevronRight>
      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth"
        ref={elementRef}
        
      >
        {movieList.map((item) => (
          <img
          key={item.id}
            src={IMAGE_BASE_URL + item.backdrop_path}
            className="min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-4 border-white transition-all duration-100 ease-in "
          />
        ))}
      </div>
    </div>
  );
};
export default Slider;
