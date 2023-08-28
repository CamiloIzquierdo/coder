import { useState } from "react";
import { toast } from "react-toastify";

export const ContactoForm = () => {
    const [formulario, setFormulario] = useState({
        nombre: "",
        email: "",
        servicio: "",
        mensaje: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("https://formsubmit.co/ajax/manuca89@live.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(formulario),
        })
            .then((resp) => resp.json())
            .then(() => toast.success("El email se envio correctamente!"))
            .catch(() => toast.error("Ocurrio un error al enviar el email"));
    };

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
            onSubmit={handleSubmit}
            className="flex flex-col xl:gap-7 gap-6 xl:items-start xl:justify-start items-center justify-center w-full xl:bg-transparent bg-white xl:px-0 xl:py-0 px-3 py-10 rounded-lg xl:rounded-none"
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
                    type="email"
                    className="border rounded-lg w-full text-slate-800 h-8 new-hero-regular-italic font-normal text-sm px-[15px]"
                    placeholder="correo@dirección.com"
                    name="email"
                    value={formulario.email}
                    onChange={handleChange}
                    required
                />
            </label>
            <label
                className="xl:text-xl text-lg font-bold text-secondary flex gap-2 xl:gap-14 items-center justify-center px-2 rounded-xl md:justify-between"
                htmlFor="servicio"
            >
                <span className="px-1">Servicios</span>
                <div className="flex min-w-[240px] justify-between border rounded-xl items-center ">
                    <select
                        className="w-fit py-2 new-hero-regular-italic font-medium text-[13px] px-1 md:text-base text-[#9ca3b1] appearance-none outline-none transform-none items-center flex justify-center"
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
                        <option value="Coaching psicológico integral">
                            Coaching psicológico integral
                        </option>
                        <option value="Coaching organizacional integral">
                            Coaching organizacional integral
                        </option>
                        <option value="Talleres y charlas">
                            Talleres y charlas
                        </option>
                    </select>
                    <img src="select.svg" width={13} alt="" />
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
            <input type="hidden" name="_next" value="/"></input>
            <input type="hidden" name="_captcha" value="false"></input>
        </form>
    );
};
