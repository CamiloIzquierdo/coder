import { useEffect, useState } from "react";

export const Header = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(true); // Mostrar el div cuando el componente se monta después del timeout
        }, 1000); // Cambia el valor en milisegundos según el tiempo de espera deseado

        return () => {
            clearTimeout(timeout); // Limpiar el timeout si el componente se desmonta antes de que ocurra
        };
    }, []);

    return (
        <div className="flex justify-center items-center xl:h-header h-[500px] w-full xl:py-5 xl:px-6 ">
            <div
                style={{ backgroundImage: `url(escaleras.jpg)` }}
                className="h-full w-full bg-center bg-cover"
            >
                <div className="h-full flex items-center xl:px-32 px-7 w-full ">
                    <div className="flex flex-col gap-12">
                        <div
                            className={`${
                                isVisible
                                    ? "ease-in opacity-100 transform transition-all duration-1000 delay-500 translate-y-0"
                                    : "opacity-0 transform transition-all duration-1000 delay-500 translate-y-full"
                            }`}
                        >
                            <span className="text-white flex flex-col text-sm xl:text-3xl new-hero-ultra-italic gap-2 ">
                                <span>
                                    “El que se conoce a sí mismo es iluminado
                                </span>
                                <span>
                                    El que se domina a sí mismo es poderoso{" "}
                                    <br />
                                </span>
                                <span>
                                    El que se conquista a sí mismo es{" "}
                                    <strong>Invencible</strong>”
                                </span>
                                <span> Lao-Tse</span>
                            </span>
                        </div>
                        <div
                            className={`${
                                isVisible
                                    ? "ease-in opacity-100 transform transition-all duration-1000 delay-[1500ms] translate-y-0 flex flex-col h-full xl:gap-5 gap-1"
                                    : "opacity-0 transform transition-all duration-1000 delay-500 translate-y-full"
                            }`}
                        >
                            <span className="xl:text-8xl text-5xl new-hero-ultra text-white">
                                Manuel Lucero
                            </span>
                            <span className="new-hero-medium-italic xl:text-5xl text-3xl text-white">
                                Coaching
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
