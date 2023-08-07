export const Header = () => {
    return (
        <div className="flex justify-center items-center xl:h-header h-[500px] w-full xl:py-5 xl:px-6 ">
            <div className="bg-primary w-full h-full">
                <div className="justify-center items-center flex flex-col h-full gap-5">
                    <span className="xl:text-8xl text-5xl new-hero-ultra text-white">
                        Manuel Lucero
                    </span>
                    <span className="new-hero-medium-italic xl:text-5xl text-3xl text-white">
                        Coaching
                    </span>
                </div>
            </div>
        </div>
    );
};
