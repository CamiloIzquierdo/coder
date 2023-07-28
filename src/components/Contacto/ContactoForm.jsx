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
            action=""
            className="flex flex-col xl:gap-12 gap-6 xl:items-start xl:justify-start items-center justify-center w-full xl:bg-transparent bg-white xl:px-0 xl:py-0 px-5 py-10 rounded-lg xl:rounded-none"
        >
            <label
                htmlFor=""
                className="flex-col flex w-full text-secondary xl:text-xl text-lg font-bold gap-1"
            >
                <span className="px-4">Nombre</span>
                <input
                    type="text"
                    className="border rounded-lg text-slate-800 w-full h-8 text-base font-normal px-[15px]"
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
                    className="border rounded-lg w-full text-slate-800 h-8 text-base font-normal px-[15px]"
                    placeholder="correo@dirección.com"
                    name="email"
                    value={formulario.email}
                    onChange={handleChange}
                />
            </label>
            <label
                className="xl:text-xl text-lg font-bold text-secondary flex xl:gap-48 gap-10 items-center justify-center px-4"
                htmlFor="servicio"
            >
                Servicios:
                <select
                    className="w-fit h-[40px] xl:text-xl text-lg text-slate-800"
                    type="text"
                    id="servicio"
                    name="servicio"
                    required
                    value={formulario.servicio}
                    onChange={handleChange}
                >
                    <option value="">Selecciona</option>
                    <option value="Servicio 1">Servicio 1</option>
                    <option value="Servicio 2">Servicio 2</option>
                    <option value="Servicio 3">Servicio 3</option>
                </select>
            </label>
            <label
                className="xl:text-xl text-lg text-secondary w-full h-full flex flex-col gap-2"
                htmlFor="mensaje"
            >
                Mensaje:
                <textarea
                    className="h-32 w-full text-slate-800 resize-none"
                    id="mensaje"
                    name="mensaje"
                    required
                    placeholder="Dudas, información adicional..."
                    value={formulario.mensaje}
                    onChange={handleChange}
                ></textarea>
            </label>
            <div className="w-full flex gap-4 justify-end">
                <button
                    className="min-w-[150px] min-h-[55px] border border-slate-500 rounded-[70px] text-lg font-semibold text-primary"
                    onClick={handleBorrarTodo}
                >
                    Borrar todo
                </button>
                <button className="min-w-[150px] min-h-[55px] border border-slate-500 rounded-[70px] text-lg font-semibold text-white bg-primary">
                    Enviar
                </button>
            </div>
        </form>
    );
};
