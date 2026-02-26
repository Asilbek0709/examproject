"use client"
import "../globals.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

export default function Slider() {

    return(
        <div className="wrapper">
        <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={3}
      speed={10000}
      loop
      autoplay={{disableOnInteraction: false, delay: 0}} 
      freeMode={{ 
        enabled: true, 
        momentumBounce: false,
        momentum: true 
      }}
      breakpoints={{
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
        >
      <SwiperSlide className="feedback">
            <div >
                <p>“With Oneflow, I’ve been able to reduce the time spent on admin significantly. Every hour that I used to spend on admin, can now be spent on selling and closing!”</p>
                <Link className="feedback-link" href={'/'}>Read full story</Link>
                <div className="author">
                    <img src="/person1.png" alt="" />
                    <p>Mattias Johnson <br /> Key Account Manager <br /> Sweco</p>
                </div>
            </div>
      </SwiperSlide>
      <SwiperSlide  className="feedback">
            <div >
                <p>“The fact that Oneflow is 100% digital makes it so simple and flexible. It gives us peace of mind by providing control and a complete overview of our contract process at all times.”</p>
                <Link className="feedback-link" href={'/'}>Read full story</Link>
                <div className="author">
                    <img src="/person2.png" alt="" />
                    <p>Elin Skoglund <br />HR Business Partner <br />Hedin Bil</p>
                </div>
            </div>
      </SwiperSlide>
      <SwiperSlide className="feedback">
            <div >
                <p>“From board meeting protocols to GDPR agreements, and approval of keycards — Oneflow has removed the pains we weren’t even aware of.”</p>
                <Link className="feedback-link" href={'/'}>Read full story</Link>
                <div className="author">
                    <img src="/person4.png" alt="" />
                    <p>Tor Myhrman <br />Head of Indirect Sourcing <br />Systembolaget</p>
                </div>
            </div>
      </SwiperSlide>
      <SwiperSlide className="feedback">
            <div >
                <p>“With Oneflow, it’s very easy to create contracts and templates. Instead of uploading a PDF for signing, we create the contract on the same platform as we sign. And Oneflow’s templates make it very easy to create multiple contracts in one click.”</p>
                <Link className="feedback-link" href={'/'}>Read full story</Link>
                <div className="author">
                    <img src="/person4.png" alt="" />
                    <p>Jonatan Larsson <br />Head of People <br />Kundo</p>
                </div>
            </div>
      </SwiperSlide>
      <SwiperSlide className="feedback">
            <div >
                <p>“With Oneflow, I’ve been able to reduce the time spent on admin significantly. Every hour that I used to spend on admin, can now be spent on selling and closing!”</p>
                <Link className="feedback-link" href={'/'}>Read full story</Link>
                <div className="author">
                    <img src="/person1.png" alt="" />
                    <p>Mattias Johnson <br /> Key Account Manager <br /> Sweco</p>
                </div>
            </div>
      </SwiperSlide>
      <SwiperSlide className="feedback">
            <div >
                <p>“The fact that Oneflow is 100% digital makes it so simple and flexible. It gives us peace of mind by providing control and a complete overview of our contract process at all times.”</p>
                <Link className="feedback-link" href={'/'}>Read full story</Link>
                <div className="author">
                    <img src="/person2.png" alt="" />
                    <p>Elin Skoglund <br />HR Business Partner <br />Hedin Bil</p>
                </div>
            </div>
      </SwiperSlide>
      <SwiperSlide className="feedback">
            <div >
                <p>“From board meeting protocols to GDPR agreements, and approval of keycards — Oneflow has removed the pains we weren’t even aware of.”</p>
                <Link className="feedback-link" href={'/'}>Read full story</Link>
                <div className="author">
                    <img src="/person4.png" alt="" />
                    <p>Tor Myhrman <br />Head of Indirect Sourcing <br />Systembolaget</p>
                </div>
            </div>
      </SwiperSlide>
      <SwiperSlide className="feedback">
            <div >
                <p>“With Oneflow, it’s very easy to create contracts and templates. Instead of uploading a PDF for signing, we create the contract on the same platform as we sign. And Oneflow’s templates make it very easy to create multiple contracts in one click.”</p>
                <Link className="feedback-link" href={'/'}>Read full story</Link>
                <div className="author">
                    <img src="/person4.png" alt="" />
                    <p>Jonatan Larsson <br />Head of People <br />Kundo</p>
                </div>
            </div>
      </SwiperSlide>
    </Swiper>
    </div>
    )
}