import { servicesInfo } from "../../mockup/servicesMockup";
import { ServicesBox } from "../ServicesBox";

export const Servicios = ({ serviciosRef }) => {
    return (
        <div
            className="xl:px-16 h-full flex flex-col items-center gap-7"
            ref={serviciosRef}
        >
            <div className="flex items-center justify-center flex-col gap-2">
                <span className="new-hero-medium xl:text-3xl text-xl text-tertiary">
                    SERVICIOS
                </span>
                <div className="h-[2px] w-16 bg-primary" />
            </div>
            {servicesInfo.map((service) => (
                <ServicesBox
                    titulo={service.titulo}
                    imagen={service.imagen}
                    key={service.id}
                    subtitulo={service.subtitulo}
                    autor={service.autor}
                >
                    {service.texto}
                </ServicesBox>
            ))}
        </div>
    );
};
