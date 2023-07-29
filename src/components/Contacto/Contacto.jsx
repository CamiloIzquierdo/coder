import React, { useState } from "react";
import { ContactoForm } from "./ContactoForm";

export const Contacto = ({ contactoRef }) => {
    const [formulario, setFormulario] = useState({
        nombre: "",
        email: "",
        servicio: "",
        mensaje: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormulario((prevFormulario) => ({
            ...prevFormulario,
            [name]: value,
        }));
    };

    const handleBorrarTodo = () => {
        setFormulario({
            nombre: "",
            email: "",
            servicio: "",
            mensaje: "",
        });
    };

    return (
        <div
            className="bg-white flex w-full h-screen items-center justify-center xl:px-1"
            ref={contactoRef}
        >
            <div
                className="xl:w-1/2 w-full items-center justify-center flex h-screen bg-cover bg-center bg-custom-opacity"
                style={{
                    backgroundImage: `linear-gradient(rgba(200, 200, 200, 0.5), rgba(200, 200, 200, 0.5)), url("contacto.jpg")`,
                }}
            >
                <div className="xl:hidden flex flex-col justify-center items-center gap-6">
                    <div className="flex w-full h-full justify-center items-center flex-col gap-2 ">
                        <h2 className="new-hero-medium text-xl text-tertiary">
                            CONTÁCTAME!
                        </h2>
                        <div className="h-[2px] w-16 bg-primary"></div>
                    </div>
                    <ContactoForm />
                </div>
            </div>
            <div className="hidden xl:w-1/2 h-screen bg-white xl:flex xl:flex-row flex-col items-center">
                <div className="xl:w-[550px] xl:h-[655px] w-full h-full items-start flex  xl:-mx-72 bg-white px-12 py-12 rounded-2xl drop-shadow-2xl">
                    <ContactoForm />
                </div>
                <div className="flex w-full h-full justify-center items-center pl-72 flex-col gap-2 ">
                    <h2 className="new-hero-medium xl:text-3xl text-tertiary">
                        CONTÁCTAME!
                    </h2>
                    <div className="h-[2px] w-16 bg-primary"></div>
                </div>
            </div>
        </div>
    );
};
