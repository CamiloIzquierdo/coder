export const Header = () => {
    return (
        <div className="flex justify-center items-center xl:h-header h-[500px] w-full xl:py-5 xl:px-6 ">
            <div
                style={{ backgroundImage: `url(escaleras.jpg)` }}
                className="h-full w-full bg-center bg-cover"
            >
                <div className="bg-primary h-full w-full bg-opacity-70">
                    <div className="flex flex-col xl:p-44 gap-16 pt-24 pl-8">
                        <span className="text-white flex flex-col text-sm xl:text-3xl new-hero-ultra-italic gap-2 ">
                            <span>
                                “El que se conoce a sí mismo es iluminado
                            </span>
                            <span>
                                El que se domina a sí mismo es poderoso <br />
                            </span>
                            <span>
                                El que se conquista a sí mismo es{" "}
                                <strong>INVENCIBLE</strong>”
                            </span>
                            <span> Lao-Tse</span>
                        </span>
                        <div className="flex flex-col h-full xl:gap-5 gap-1">
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
