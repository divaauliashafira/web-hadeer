import { CCarousel, CCarouselItem } from "@coreui/react";
import Image from "next/image";

import {
  IMG_BACKGROUND1,
  IMG_BACKGROUND2,
  IMG_BACKGROUND3,
} from "../../assets/index.js";

function Background() {
  return (
    <CCarousel indicators>
      <CCarouselItem>
        <Image src={IMG_BACKGROUND1} alt="Gedung UPNVJ" />
      </CCarouselItem>
      <CCarouselItem>
        <Image src={IMG_BACKGROUND2} alt="Gedung UPNVJ" />
      </CCarouselItem>
      <CCarouselItem>
        <Image src={IMG_BACKGROUND3} alt="Gedung UPNVJ" />
      </CCarouselItem>
    </CCarousel>
  );
}

export default Background;
