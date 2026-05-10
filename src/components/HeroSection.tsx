"use client";

import { useEffect, useState, useRef } from "react";
import Carousel from "./Carousel";

const images = [
  "./banner/1.jpg",
  "./banner/2.jpg",
  "./banner/3.jpg",
];


export default function HeroSection() {
  return(
    <div className="relative">
      <Carousel images = {images} navButtons={false} autoPlay={true}>
        <div className="absolute top-0 left-0">
          test
        </div>
      </Carousel>
    </div>
  )
}
