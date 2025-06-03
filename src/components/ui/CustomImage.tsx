import { useState } from "react";
import Image from "next/image";
import { CustomImageT } from "./type";
import { twMerge } from "tailwind-merge";

function CustomImage({
  url,
  emptyImageUrl = "/images/emptyimage.webp",
  className,
}: CustomImageT) {
  const [imgSrc, setImgSrc] = useState(url || emptyImageUrl);

  return (
    <Image
      width={100}
      height={100}
      alt="Image"
      src={imgSrc}
      loading="lazy"
      onError={() => {
        if (imgSrc !== emptyImageUrl) {
          setImgSrc(emptyImageUrl);
        }
      }}
      className={twMerge("object-cover", className)}
    />
  );
}

export default CustomImage;
