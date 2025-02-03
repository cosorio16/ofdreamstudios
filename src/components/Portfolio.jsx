import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Autoplay } from "swiper/modules";

function Portfolio() {
  // const [currentVideo, setCurrentVideo] = useState(0);

  // useEffect(() => {
  //   document.querySelectorAll("video").forEach((video) => video.pause());
  //   const activeVideo = document.querySelector(`.swiper-slide-active video`);
  //   if (activeVideo) {
  //     activeVideo.play();
  //   }
  // }, [currentVideo]);

  return (
    <div className="xl:px-40 py-20 relative perspective-distant transform-3d">
      <Swiper
        effect={"coverflow"}
        // onSlideChange={(swiper) => setCurrentVideo(swiper.realIndex)}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="swiper_container"
      >
        {[...Array(8)].map((_, i) => (
          <SwiperSlide key={i}>
            <video
              src={`/videos/${i + 1}.mp4`}
              muted
              playsInline
              loop
              autoPlay
              preload="auto"
            ></video>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Portfolio;
