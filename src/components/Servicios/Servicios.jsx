import { servicesInfo } from "../../mockup/servicesMockup";
import { ServicesBox } from "../ServicesBox";

export const Servicios = ({ serviciosRef }) => {
    return (
        <div
            className="py-8 xl:px-16 h-full flex flex-col items-center gap-7"
            ref={serviciosRef}
        >
            <div className="flex items-center justify-center flex-col gap-2">
                <span className="font-bold text-4xl text-slate-800">
                    SERVICIOS
                </span>
                <div className="h-[2px] w-16 bg-primary" />
            </div>
            {servicesInfo.map((service) => (
                <ServicesBox
                    titulo={service.titulo}
                    imagen={service.imagen}
                    key={service.id}
                >
                    {service.texto}
                </ServicesBox>
            ))}
        </div>
    );
};
