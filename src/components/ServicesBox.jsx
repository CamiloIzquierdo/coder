export const ServicesBox = ({ imagen, titulo, children, subtitulo, autor }) => {
    return (
        <div className="w-full h-full pt-32 relative flex xl:flex-row flex-col justify-center xl:items-start items-center min-h px-3 xl:px-0">
            <div className="flex flex-col w-full h-full xl:px-0 px-3 xl:w-[580px] xl:h-[521px]">
                <h2 className="xl:hidden text-secondary text-xl text-center new-hero-medium-italic py-5 xl:text-end xl:pr-20 w-full">
                    {titulo}
                </h2>
                <div
                    className={`xl:w-[580px] xl:h-[521px] w-full h-[400px] bg-cover bg-center xl:rounded-tl-[177px] xl:rounded-t-none rounded-t-[100px]`}
                    style={{ backgroundImage: `url(${imagen})` }}
                />
            </div>
            <div className="flex flex-col items-center justify-center xl:-ml-44 xl:bg-transparent bg-primary">
                <h2 className="hidden xl:text-secondary xl:flex-none xl:items-end items-center justify-center xl:flex flex-col gap-6 text-white xl:text-3xl text-xl text-center new-hero-medium-italic py-10 xl:text-end xl:pr-20 w-full">
                    {titulo}
                </h2>

                <div className="xl:hidden w-full items-center justify-center flex flex-col py-6 px-4">
                    <h4 className=" py-6 new-hero-medium-italic text-xl text-white text-center">
                        {subtitulo}{" "}
                        <span className="new-hero-regular-italic text-xl">
                            {autor}
                        </span>
                    </h4>
                    <div className="h-[2px] w-16 bg-white xl:hidden" />
                </div>
                <div className="bg-primary shadow-2xl xl:shadow-bottom max-w-[814px] right-0 bottom-0 xl:py-10 xl:px-16 px-4 pb-6 text-white new-hero-regular text-justify flex gap-7 xl:text-xl text-lg flex-col">
                    <div className="xl:flex hidden w-full items-center justify-center flex-col py-10 px-4">
                        <h4 className="justify-center items-center new-hero-medium-italic text-2xl text-white">
                            {subtitulo}{" "}
                            <span className="new-hero-regular-italic text-xl text-white">
                                {autor}
                            </span>
                        </h4>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
};
