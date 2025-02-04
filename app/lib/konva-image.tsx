"use client";
import { useState, useEffect } from "react";
import { Image as KonvaImage } from "react-konva";

export default function KonvaURLImage({ src, imgLoad, ...props }: { src: string, imgLoad?: (img: HTMLImageElement) => void } & any ) {
  const [imageObj, setImageObj] = useState(new window.Image());

  useEffect(() => {
    const image_obj = new window.Image();

    image_obj.src = src;

    image_obj.onload = () => {
      setImageObj(image_obj);
    };

    return () => {
      imageObj.src = "";
      if (imgLoad) {
        imgLoad(imageObj);
      }
      setImageObj(new window.Image());
    };
  }, []);

  return (
    <KonvaImage
      image={imageObj}
      {...props}
    />
  );
}