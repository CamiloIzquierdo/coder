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
            className="flex 2xl:w-full xl:w-full w-full h-full justify-center items-center my-slider"
        >
            {TestimoniosMockup.map((testimonio) => (
                <div
                    className="max-w-[700px] xl:min-h-[360px] 2xl:max-h-[468px] 2xl:min-h-[468px] xl:max-h-[360px] min-h-[360px] shadow-md flex-col flex 2xl:p-16 xl:p-10 p-6 bg-white rounded-xl"
                    key={testimonio.id}
                >
                    <div className="flex gap-5  justify-start items-center">
                        <div className="flex xl:p-3 p-[10px] rounded-full bg-primary">
                            <img
                                src={testimonio.imagen}
                                alt=""
                                className="xl:w-[50px] xl:h-[50px] w-[35px]"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-secondary xl:text-xl text-sm font-bold">
                                {testimonio.nombre}
                            </span>
                            <span className="text-slate-400 xl:text-base text-sm italic">
                                {testimonio.cargo}
                            </span>
                        </div>
                    </div>
                    <div className="flex pt-4 xl:text-xl 2xl:text-2xl text-sm lg:text-lg text-slate-700">
                        <span>&quot;{testimonio.texto}&quot;</span>
                    </div>
                </div>
            ))}
        </Slider>
    );
};
