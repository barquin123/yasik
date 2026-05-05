"use client";

import { useEffect, useState, useRef } from "react";
import Carousel from "./Carousel";

const images = [
  "https://placehold.co/1920x720?text=1",
  "https://placehold.co/1920x720?text=2",
  "https://placehold.co/1920x720?text=3",
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
