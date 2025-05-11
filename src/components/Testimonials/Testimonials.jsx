import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaPerson } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";


const Testimonials = () => {
  
 const TestimonialsData = [
  {
    id: 1,
    name: "Mr Babalola",
    occupation: " Adult Learner",
    text: "Before joining Sami Way, I struggled to read fluently. Now, I can read and write with confidence! Thank you for making learning so easy and fun!",
    img: <IoPerson size="30px"/>,
    delay: 0.2,
  },

  {
    id: 2,
    name: "Mrs. Adekunle",
    occupation: "parent",
    text: "My child used to find it hard to read, but with Sami Way's guidance, she now reads and writes confidently. I highly recommend their programs!",
    img: <IoPerson size="30px"/>,
    delay: 0.5,
  },
  {
    id: 3,
    name: " Emmanuel ",
    occupation: "Entrepreneur",
    text: "As a business owner, I needed to improve my communication skills. Thanks to Sami Way, I can now speak clearly and professionally with my customers!",
    img: <IoPerson size="30px"/>,
    delay: 0.8,
  },
  // {
  //   id: 5,
  //   name: "Ariana",
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
  //   img: "https://picsum.photos/103/103",
  //   delay: 1.1,
  // },
];

  const setting = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-14 ">
      <div className="container">
        {/* header section */}
        <div className="text-left mb-4  space-y-2 mr-auto w-full text-center">
          <h1 className="text-[20px] md:text-3xl font-bold text-center ">
            What Are Costumers Saying About Us
          </h1>
        </div>

        {/* Testimonials Cards */}
        <div className="items-center">
          <Slider {...setting}>
            {TestimonialsData.map((data) => (
              <div key={data.id} className="my-6  ">
                <div className="flex flex-col gap-4 p-4 shadow-lg mx-4 rounded-xl 
                 min-h-[300px]">
                  {/* upper section */}
                  <div className="flex justify-start items-center gap-5 ">
                    {/* <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-16 h-16"
                    /> */}
                    <div>{data.img}</div>
                    <div>
                      <p className="text-xl font-bold text-black/80">
                        {data.name}
                      </p>
                      <p className="text-grey-50">{data.occupation}</p>
                    </div>
                  </div>
                  {/* bottom section */}
                  <div className=" py-6 space-y-4">
                    <p className="text-sm text-gray-500">{data.text}</p>
                    <p>⭐⭐⭐⭐⭐</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
