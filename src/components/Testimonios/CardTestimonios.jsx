import Slider from "react-slick";
import { TestimoniosMockup } from "../../mockup/testimoniosMockup";

export const CardTestimonios = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 1.6,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows: false,
        className: "my-slider",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.2,
                },
            },
        ],
    };
    return (
        <Slider
            {...settings}
            className="flex 2xl:w-full xl:w-[700px] w-full h-full justify-center items-center my-slider"
        >
            {TestimoniosMockup.map((testimonio) => (
                <div
                    className="max-w-[700px] xl:min-h-[468px] min-h-[320px] shadow-md flex-col flex xl:p-16 p-6 bg-white rounded-xl"
                    key={testimonio.id}
                >
                    <div className="flex gap-5 justify-start items-center">
                        <img
                            src={testimonio.imagen}
                            alt=""
                            className="xl:w-[67px] xl:h-[68px] w-[55px]"
                        />
                        <div className="flex flex-col">
                            <span className="text-secondary xl:text-xl text-sm font-bold">
                                {testimonio.nombre}
                            </span>
                            <span className="text-slate-400 xl:text-base text-sm italic">
                                {testimonio.cargo}
                            </span>
                        </div>
                    </div>
                    <div className="flex pt-4 xl:text-2xl text-sm text-slate-700">
                        <span>&quot;{testimonio.texto}&quot;</span>
                    </div>
                </div>
            ))}
        </Slider>
    );
};
