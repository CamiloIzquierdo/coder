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
        <>
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
                <li>
                    <span className="block py-2 pl-3 pr-4 text-white rounded font-semibold justify-start lg:hover:bg-transparent lg:border-0 lg:hover:text-violet-600 lg:p-0 ">
                        Servicios
                    </span>
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
                <li>
                    <span className="block py-2 pl-3 pr-4 text-white rounded font-semibold lg:hover:bg-transparent lg:border-0 lg:hover:text-violet-600 lg:p-0 ">
                        Sobre mi
                    </span>
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
                <li>
                    <span className="block py-2 pl-3 pr-4 text-white rounded font-semibold lg:hover:bg-transparent lg:border-0 lg:hover:text-violet-600 lg:p-0 ">
                        Testimonios
                    </span>
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
                <li>
                    <span className="block py-2 pl-3 pr-4 text-white rounded font-semibold lg:hover:bg-transparent lg:border-0 lg:hover:text-violet-600 lg:p-0 ">
                        Contacto
                    </span>
                </li>
            </button>
        </>
    );
};
