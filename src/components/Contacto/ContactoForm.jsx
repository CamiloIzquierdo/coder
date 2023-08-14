import { useState } from "react";

export const ContactoForm = () => {
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
        <form
            action="https://formsubmit.co/manuca89@live.com"
            method="POST"
            className="flex flex-col xl:gap-7 gap-6 xl:items-start xl:justify-start items-center justify-center w-full xl:bg-transparent bg-white xl:px-0 xl:py-0 px-8 py-10 rounded-lg xl:rounded-none"
        >
            <label
                htmlFor=""
                className="flex-col flex w-full text-secondary xl:text-xl text-lg font-bold gap-1"
            >
                <span className="px-4">Nombre</span>
                <input
                    type="text"
                    className="border rounded-lg text-slate-800 w-full h-8 new-hero-regular-italic font-normal text-sm px-[15px]"
                    placeholder="Nombre y apellido"
                    name="nombre"
                    value={formulario.nombre}
                    onChange={handleChange}
                />
            </label>
            <label
                htmlFor=""
                className="flex-col flex w-full text-secondary xl:text-xl text-lg font-bold gap-1"
            >
                <span className="px-4">Correo electrónico</span>
                <input
                    type="text"
                    className="border rounded-lg w-full text-slate-800 h-8 new-hero-regular-italic font-normal text-sm px-[15px]"
                    placeholder="correo@dirección.com"
                    name="email"
                    value={formulario.email}
                    onChange={handleChange}
                />
            </label>
            <label
                className="xl:text-xl text-lg font-bold text-secondary flex xl:gap-44 gap-10 items-center justify-center px-4 rounded-xl"
                htmlFor="servicio"
            >
                Servicios
                <div className="flex relative ">
                    <select
                        className="w-fit h-[45px] new-hero-regular-italic font-medium text-sm text-[#9ca3b1] appearance-none outline-none border rounded-xl transform-none pl-4 pr-12"
                        type="text"
                        id="servicio"
                        name="servicio"
                        required
                        value={formulario.servicio}
                        onChange={handleChange}
                    >
                        <option value="" selected>
                            Selecciona
                        </option>
                        <option value="Servicio 1">Servicio 1</option>
                        <option value="Servicio 2">Servicio 2</option>
                        <option value="Servicio 3 ">Servicio 3</option>
                    </select>
                    <img
                        src="select.svg"
                        width={13}
                        className="absolute top-[20px] left-[110px] "
                        alt=""
                    />
                </div>
            </label>
            <label
                className="xl:text-xl text-lg font-bold text-secondary w-full h-full flex flex-col gap-2"
                htmlFor="mensaje"
            >
                <span className="px-4 flex">Mensaje</span>
                <textarea
                    className="h-44 w-full new-hero-regular-italic font-normal text-sm text-tertiary resize-none appearance-none border p-2 rounded-lg"
                    id="mensaje"
                    name="mensaje"
                    required
                    placeholder="Dudas, información adicional..."
                    value={formulario.mensaje}
                    onChange={handleChange}
                ></textarea>
            </label>
            <div className="w-full h-full flex gap-4 justify-end">
                <button
                    className="min-w-[130px] py-3 border flex justify-center items-center border-slate-300 rounded-[70px] text-lg font-semibold text-primary"
                    onClick={handleBorrarTodo}
                >
                    Borrar todo
                </button>
                <button
                    type="submit"
                    className="min-w-[130px] py-3 border flex justify-center items-center rounded-[70px] text-lg font-semibold text-white bg-primary"
                >
                    Enviar
                </button>
            </div>
        </form>
    );
};
