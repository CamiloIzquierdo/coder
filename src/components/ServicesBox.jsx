export const ServicesBox = ({ imagen, titulo, children }) => {
    return (
        <div className="w-full h-full pt-32 relative flex xl:flex-row flex-col justify-center xl:items-start items-center min-h px-3 xl:px-0">
            <div className="flex w-full h-full xl:px-0 px-3 xl:w-[580px] xl:h-[521px]">
                <div
                    className={`xl:w-[580px] xl:h-[521px] w-full h-[400px] bg-cover bg-center xl:rounded-tl-[177px] xl:rounded-t-none rounded-t-[100px]`}
                    style={{ backgroundImage: `url(${imagen})` }}
                />
            </div>
            <div className="flex flex-col items-center justify-center xl:-ml-44 xl:bg-transparent bg-primary">
                <h2 className="xl:text-secondary xl:flex-none xl:items-end items-center justify-center flex flex-col gap-6 text-white xl:text-3xl text-xl text-center new-hero-medium-italic py-10 xl:text-end xl:pr-20 w-full">
                    {titulo}
                    <div className="h-[2px] w-16 bg-white xl:hidden" />
                </h2>
                <div className="bg-primary max-w-[814px] right-0 bottom-0 xl:py-10 xl:px-16 px-4 pb-6 text-white new-hero-regular text-justify flex gap-7 xl:text-xl text-lg flex-col">
                    {children}
                </div>
            </div>
        </div>
    );
};
