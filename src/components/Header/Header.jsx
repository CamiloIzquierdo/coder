export const Header = () => {
    return (
        <div className="flex justify-center items-center xl:h-header h-[500px] w-full xl:px-11 xl:py-5 ">
            <div className="bg-primary w-full h-full">
                <div className="justify-center items-center flex flex-col h-full gap-5">
                    <span className="xl:text-8xl text-5xl text-white font-thin">
                        Manuel Lucero
                    </span>
                    <span className="font-semibold text-3xl text-white">
                        Coaching
                    </span>
                </div>
            </div>
        </div>
    );
};
