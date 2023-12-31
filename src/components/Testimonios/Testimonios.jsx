import { CardTestimonios } from "./CardTestimonios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Testimonios = ({ testimoniosRef }) => {
    return (
        <div
            className="flex xl:flex-row flex-col xl:items-start w-full xl:h-screen xl:gap-20 py-36 gap-16"
            ref={testimoniosRef}
        >
            <div className="flex xl:w-4/12 h-full justify-center pt-10 items-center flex-col gap-10 ">
                <div className="flex justify-center flex-col items-center gap-2">
                    <h2 className="new-hero-medium xl:text-3xl text-xl text-tertiary">
                        TESTIMONIOS
                    </h2>
                    <div className="h-[2px] w-16 bg-primary"></div>
                </div>
                <div className="xl:flex gap-3 hidden">
                    <img src="flechaizquierda.svg" alt="" />
                    <img src="flechaderecha.svg" alt="" />
                </div>
            </div>
            <div className="xl:w-8/12 w-full items-center justify-center xl:h-[80vh] flex bg-gradient-to-l relative">
                <div class="absolute w-5/6 h-96 bg-primary xl:h-full right-0" />
                <CardTestimonios />
            </div>
            <div className="xl:hidden gap-5 items-center flex justify-center">
                <img src="flechaizquierda.svg" alt="" />
                <img src="flechaderecha.svg" alt="" />
            </div>
        </div>
    );
};
