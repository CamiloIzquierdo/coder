import { scrollToRef, scrollToRefMobile } from "../../utils/ScrollToRef";
export const NavbarData = ({
    serviciosRef,
    sobreMiRef,
    testimoniosRef,
    contactoRef,
    open,
}) => {
    console.log(open);
    return (
        <ul className="lg:h-[90px] h-full pb-4 lg:pb-0 lg:items-center lg:justify-center items-start flex lg:flex-row flex-col lg:gap-20 w-full text-xl font-thin">
            <button
                onClick={
                    open
                        ? () =>
                              scrollToRefMobile({
                                  componentRef: serviciosRef,
                              })
                        : () =>
                              scrollToRef({
                                  componentRef: serviciosRef,
                              })
                }
            >
                <li className="w-full flex flex-col items-center justify-center gap-1">
                    <span className="block py-2 pl-3 pr-4 text-tertiary rounded xl:font-semibold justify-start lg:hover:bg-transparent lg:border-0 lg:hover:text-primary lg:p-0 ">
                        Servicios
                    </span>
                    <div className="h-[2px] w-9 bg-primary justify-center items-center hidden xl:flex"></div>
                </li>
            </button>
            <button
                onClick={
                    open
                        ? () =>
                              scrollToRefMobile({
                                  componentRef: sobreMiRef,
                              })
                        : () =>
                              scrollToRef({
                                  componentRef: sobreMiRef,
                              })
                }
            >
                <li className="w-full flex flex-col items-center justify-center gap-1">
                    <span className="block py-2 pl-3 pr-4 text-tertiary rounded xl:font-semibold justify-start lg:hover:bg-transparent lg:border-0 lg:hover:text-primary lg:p-0 ">
                        Sobre mi
                    </span>
                    <div className="h-[2px] w-9 bg-primary justify-center items-center hidden xl:flex"></div>
                </li>
            </button>
            <button
                onClick={
                    open
                        ? () =>
                              scrollToRefMobile({
                                  componentRef: testimoniosRef,
                              })
                        : () =>
                              scrollToRef({
                                  componentRef: testimoniosRef,
                              })
                }
            >
                <li className="w-full flex flex-col items-center justify-center gap-1">
                    <span className="block py-2 pl-3 pr-4 text-tertiary rounded xl:font-semibold justify-start lg:hover:bg-transparent lg:border-0 lg:hover:text-primary lg:p-0 ">
                        Testimonios
                    </span>
                    <div className="h-[2px] w-9 bg-primary justify-center items-center hidden xl:flex"></div>
                </li>
            </button>
            <button
                onClick={
                    open
                        ? () =>
                              scrollToRefMobile({
                                  componentRef: contactoRef,
                              })
                        : () =>
                              scrollToRef({
                                  componentRef: contactoRef,
                              })
                }
            >
                <li className="px-3 xl:px-0">
                    <span className="block py-2 px-10 text-white xl:font-semibold lg:border-0 lg:hover:text-tertiary lg:py-3 lg:px-10 bg-primary xl:rounded-3xl">
                        Contacto
                    </span>
                </li>
            </button>
        </ul>
    );
};
