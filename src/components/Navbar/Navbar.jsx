"use client";
import { Twirl as Hamburger } from "hamburger-react";
import { useState } from "react";
import { NavbarData } from "./NavbarData";
import { scrollTop } from "../../utils/ScrollToRef";
export const Navbar = ({
    serviciosRef,
    sobreMiRef,
    testimoniosRef,
    contactoRef,
}) => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="border-gray-200 bg-white lg:rounded sticky left-0 top-0 z-10 items-center w-full justify-center lg:flex-nowrap lg:flex">
            <div className="flex items-center lg:justify-center py-3 justify-between">
                <div className="flex justify-center gap-6 items-center lg:hidden">
                    <div>
                        <Hamburger
                            toggled={open}
                            color="gray"
                            toggle={() => setOpen(!open)}
                        />
                    </div>
                </div>
            </div>
            <div className="md:block md:w-fit" id="navbar-solid-bg">
                <div
                    onClick={() => setOpen(false)}
                    className={`${
                        open ? "max-h-96" : "max-h-0"
                    } overflow-hidden flex-col lg:items-center w-full flex lg:flex-row lg:gap-6 items-start transition-all duration-500 lg:duration-0 lg:max-h-full lg:overflow-visible lg:transition-none lg:opacity-100`}
                >
                    <NavbarData
                        open={open}
                        serviciosRef={serviciosRef}
                        sobreMiRef={sobreMiRef}
                        testimoniosRef={testimoniosRef}
                        contactoRef={contactoRef}
                    />
                </div>
            </div>
            {/*  </div> */}
        </nav>
    );
};
