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
        <nav className="border-gray-200 lg:rounded bg-blue-800 sticky left-0  top-0 z-10 items-center justify-center lg:flex-nowrap lg:justify-between lg:px-[200px] lg:flex">
            {/*  <div className="container items-center justify-center mx-auto flex-wrap md:flex-nowrap lg:justify-between contents lg:flex"> */}
            <div className="flex items-center lg:justify-center bg-blue-800 py-3 justify-between px-5">
                <button onClick={scrollTop}>
                    <img
                        src="/vite.svg"
                        className="h-10 lg:h-12 cursor-pointer"
                        alt="Flowbite Logo"
                    />
                </button>
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
                <ul
                    onClick={() => setOpen(false)}
                    className={`${
                        open ? "max-h-96" : "max-h-0"
                    } overflow-hidden flex-col lg:items-center flex lg:flex-row lg:gap-6 items-start transition-all duration-500 lg:duration-0 lg:max-h-full lg:overflow-visible lg:transition-none lg:opacity-100`}
                >
                    <NavbarData
                        open={open}
                        serviciosRef={serviciosRef}
                        sobreMiRef={sobreMiRef}
                        testimoniosRef={testimoniosRef}
                        contactoRef={contactoRef}
                    />
                </ul>
            </div>
            {/*  </div> */}
        </nav>
    );
};
