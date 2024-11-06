import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className="relative">
      <Carousel>
        <div className=" w-full h-[calc(100vh-70px)] mx-auto object-cover ">
          <img
            className="h-full w-full "
            src="https://media3.giphy.com/media/Y0bjWvdbsPgm1pQkCG/200w.gif?cid=ecf05e47m8gyy53fxt2nmz8dggge5nzy3nwtu4iclkjroww4&ep=v1_gifs_related&rid=200w.gif&ct=gs"
          />
        </div>
        <div className="h-[calc(100vh-70px)] w-[70%] mx-auto object-cover">
          <img
            className="h-full w-full "
            src="https://img.freepik.com/free-photo/doctor-wearing-mask-hospital-room_9975-22196.jpg?ga=GA1.1.344371072.1704792459&semt=ais_hybrid"
          />
        </div>
        <div className="h-[calc(100vh-70px)] w-full mx-auto object-cover">
          <img
            className="h-full w-full "
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDVzbmp3ejVnem9sN3ExZ2RyN3R0MnoxZ3BpYnR1YnQwcWRxd3NmNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Y0CioQvr6E2KVRVIru/giphy.gif"
          />
        </div>
      </Carousel>
      <div className="bg-black px-5 py-10 w-[35%] mx-auto text-center rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-80">
        <h2 className="text-3xl">We are ensure authentic Medicine </h2>
        <br></br>
        <a href="#_" class="relative px-5 py-2 font-medium text-white group">
          <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
          <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
          <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
          <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
          <span class="relative">Explore Now</span>
        </a>
      </div>
    </div>
  );
};

export default Banner;
