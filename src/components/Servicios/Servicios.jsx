export const Servicios = ({ serviciosRef }) => {
    return (
        <div
            className="py-8 px-16 2xl:h-screen h-full flex-col flex items-center gap-7"
            ref={serviciosRef}
        >
            <span className="font-bold text-5xl">SERVICIOS</span>
            <div className="justify-center items-center flex flex-wrap gap-10">
                <img src="servicio.webp" className="w-[600px]" alt="" />
                <img src="servicio.webp" className="w-[600px]" alt="" />
                <img src="servicio.webp" className="w-[600px]" alt="" />
                <img src="servicio.webp" className="w-[600px]" alt="" />
            </div>
        </div>
    );
};
