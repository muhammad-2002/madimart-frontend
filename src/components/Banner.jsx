import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  const sliders = [
    {
      id: 1,
      category: "Capsule",
      title: "Vitamin D3 Softgels",
      description:
        "Supports bone health and immune function. Each capsule contains 1000 IU of vitamin D3.",
      imageUrl:
        "https://www.nutrifactor.com.pk/cdn/shop/products/NucalZ30.png?v=1667559683",
    },
    {
      id: 2,
      category: "Tablet",
      title: "Calcium Magnesium Zinc Tablets",
      description:
        "A blend of essential minerals for bone health and muscle function.",
      imageUrl: "https://source.unsplash.com/random/800x600?tablet,calcium",
    },
    // {
    //   id: 3,
    //   category: "Capsule",
    //   title: "Fish Oil Omega-3 Capsules",
    //   description:
    //     "High-quality omega-3 fatty acids to support heart, brain, and joint health.",
    //   imageUrl: "https://source.unsplash.com/random/800x600?capsule,omega3",
    // },
    // {
    //   id: 4,
    //   category: "Tablet",
    //   title: "Aspirin Tablets",
    //   description:
    //     "Pain reliever and anti-inflammatory. Each tablet contains 325 mg of aspirin.",
    //   imageUrl: "https://source.unsplash.com/random/800x600?tablet,aspirin",
    // },
    // {
    //   id: 5,
    //   category: "Capsule",
    //   title: "Probiotic Capsules",
    //   description:
    //     "Helps maintain gut health and supports digestion with beneficial probiotics.",
    //   imageUrl: "https://source.unsplash.com/random/800x600?capsule,probiotic",
    // },
    // {
    //   id: 6,
    //   category: "Tablet",
    //   title: "Multivitamin Tablets",
    //   description:
    //     "A daily multivitamin supplement to help fill nutritional gaps.",
    //   imageUrl:
    //     "https://source.unsplash.com/random/800x600?tablet,multivitamin",
    // },
    // {
    //   id: 7,
    //   category: "Capsule",
    //   title: "Turmeric Curcumin Capsules",
    //   description:
    //     "Natural anti-inflammatory supplement to support joint and immune health.",
    //   imageUrl: "https://source.unsplash.com/random/800x600?capsule,turmeric",
    // },
    // {
    //   id: 8,
    //   category: "Tablet",
    //   title: "Vitamin C Tablets",
    //   description:
    //     "High-potency vitamin C to support immune health and antioxidant protection.",
    //   imageUrl: "https://source.unsplash.com/random/800x600?tablet,vitaminC",
    // },
    // {
    //   id: 9,
    //   category: "Capsule",
    //   title: "Collagen Capsules",
    //   description:
    //     "Supports skin, hair, and joint health with high-quality collagen peptides.",
    //   imageUrl: "https://source.unsplash.com/random/800x600?capsule,collagen",
    // },
    // {
    //   id: 10,
    //   category: "Tablet",
    //   title: "Iron Tablets",
    //   description:
    //     "Iron supplement for those with iron deficiency, supporting energy levels.",
    //   imageUrl: "https://source.unsplash.com/random/800x600?tablet,iron",
    // },
  ];

  return (
    <div className="relative">
      <Carousel>
        {sliders.map((slider) => (
          <div
            key={slider.id}
            className="bg-[#E7F6FD]  h-[calc(100vh-70px)] mx-auto object-cover "
          >
            <div className="flex flex-col md:flex-row gap-3 w-[95%] md:w-[70%] mx-auto   ">
              <div className="text-start flex flex-col  justify-center ">
                <h3 className="text-[var(--second)] font-bold text-[17px]">
                  #{slider.category}
                </h3>
                <h1 className="text-4xl text-[var(--first)] font-bold mt-3">
                  {slider.title}
                </h1>
                <p className="text-sm text-[var(--first)] font-semibold mt-3">
                  {slider.description}
                </p>
                <p>
                  <button className="bg-[var(--second)] mt-3 px-4 font-semibold py-2 rounded hover:bg-[var(--first)]">
                    Shop Product
                  </button>
                </p>
              </div>
              <div>
                <img className="h-[95%] w-full " src={slider.imageUrl} />
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <div className="bg-black hidden px-5 py-10 w-[35%] mx-auto text-center rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-40">
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
