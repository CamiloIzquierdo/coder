import { CardTestimonios } from "./CardTestimonios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Testimonios = ({ testimoniosRef }) => {
    return (
        <div
            className="flex xl:flex-row flex-col xl:items-start w-full xl:h-screen xl:gap-20 py-36 gap-16"
            ref={testimoniosRef}
        >
            <div className="flex xl:w-4/12 h-full justify-center items-center flex-col ">
                <h2 className="font-bold xl:text-4xl text-xl text-slate-800">
                    Testimonios
                </h2>
                <div className="h-[2px] w-16 bg-primary"></div>
            </div>
            <div className="xl:w-8/12 w-full items-center justify-center xl:h-full flex bg-gradient-to-l relative">
                <div class="absolute w-5/6 h-96 bg-primary xl:h-full right-0" />
                <CardTestimonios />
            </div>
        </div>
    );
};
