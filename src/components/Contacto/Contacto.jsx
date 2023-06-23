export const Contacto = ({ contactoRef }) => {
    return (
        <div
            className="bg-slate-500 flex w-full h-screen items-center justify-center px-1"
            ref={contactoRef}
        >
            <div className="border lg:py-20 lg:w-[1200px] w-full lg:px-8 px-3 flex items-center justify-center">
                <form className="flex flex-col gap-10 w-full">
                    <label
                        className="text-3xl flex flex-col gap-2"
                        htmlFor="nombre"
                    >
                        Nombre:
                        <input
                            className="w-full h-[40px] text-xl"
                            type="text"
                            id="nombre"
                            name="nombre"
                            required
                        />
                    </label>

                    <label
                        className="text-3xl flex flex-col gap-2"
                        htmlFor="email"
                    >
                        Correo electrónico:
                        <input
                            className="w-full h-[40px] text-xl"
                            type="email"
                            id="email"
                            name="email"
                            required
                        />
                    </label>

                    <label className="text-3xl flex gap-7" htmlFor="servicio">
                        Servicio:
                        <select
                            className="w-fit h-[40px] text-xl"
                            type="text"
                            id="servicio"
                            name="servicio"
                            required
                        >
                            <option value="">Seleccionar servicio</option>
                            <option value="Servicio 1">Servicio 1</option>
                            <option value="Servicio 2">Servicio 2</option>
                            <option value="Servicio 3">Servicio 3</option>
                        </select>
                    </label>

                    <label
                        className="text-3xl flex flex-col gap-2"
                        htmlFor="mensaje"
                    >
                        Mensaje:
                        <textarea
                            className="h-40"
                            id="mensaje"
                            name="mensaje"
                            required
                        ></textarea>
                    </label>
                    <div className="w-full flex justify-center items-center">
                        <input
                            type="submit"
                            value="Enviar"
                            className="border flex items-center w-fit justify-center py-2 px-4 rounded-lg"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};
