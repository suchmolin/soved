"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default function CardSliderHome() {
  const data = [
    {
      img: "endoscopy.jpeg",
      titulo: "Endoscopy",
      href: "https://endoscopy.thieme.com/current-issue",
    },
    {
      img: "ajg.jpeg",
      titulo: "AJG",
      href: "https://journals.lww.com/ajg/pages/default.aspx",
    },
    {
      img: "REED.jpeg",
      titulo: "REED",
      href: "https://www.reed.es/",
    },
    {
      img: "ajog.jpeg",
      titulo: "Arab Journal of Gastroenterology",
      href: "https://www.sciencedirect.com/journal/arab-journal-of-gastroenterology",
    },
    {
      img: "VideoGIE.jpeg",
      titulo: "VideoGIE",
      href: "https://www.videogie.org/",
    },
    {
      img: "saberucv.png",
      titulo: "Saber UCV",
      href: "http://saber.ucv.ve/ojs/index.php/rev_gen/issue/view/2929",
    },
    {
      img: "ncbi.jpeg",
      titulo: "NCBI",
      href: "https://www.ncbi.nlm.nih.gov/",
    },
  ];
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full flex items-center justify-center py-10">
      <div className="w-11/12 slider-container">
        <Slider {...settings}>
          {data.map((item) => (
            <div key={item.titulo} className="p-2">
              <a
                target="_blank"
                href={item.href}
                className="flex flex-col items-center justify-center "
              >
                <div className="w-[310px] h-[440px] rounded-lg relative overflow-hidden">
                  <Image
                    src={`/img/${item.img}`}
                    objectFit="cover"
                    layout="fill"
                    alt="endoscopy"
                  />
                </div>
                <h2 className="text-center mt-3 text-4xl text-[#0315ae] font-bold">
                  {item.titulo}
                </h2>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
