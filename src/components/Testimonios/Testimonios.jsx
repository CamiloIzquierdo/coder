import { CardTestimonios } from "./CardTestimonios";

export const Testimonios = ({ testimoniosRef }) => {
    return (
        <div
            className="flex flex-col items-center h-full gap-20 py-8"
            ref={testimoniosRef}
        >
            <span className="font-bold text-5xl">Testimonios</span>
            <div className="2xl:h-[50vh] h-full flex-wrap flex gap-8 justify-center">
                <CardTestimonios />
                <CardTestimonios />
                <CardTestimonios />
                <CardTestimonios />
            </div>
        </div>
    );
};
