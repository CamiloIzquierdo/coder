import { useState } from 'react';

export const Contacto = ({ contactoRef }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    servicio: '',
    mensaje: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí llamar al servicio de envío de correo electrónico y pasar los datos de formData
    console.log(formData);
  };

  return (
    <div className="bg-slate-500 flex w-full h-screen items-center justify-center px-1" ref={contactoRef}>
      <div className="border lg:py-20 lg:w-[1200px] w-full lg:px-8 px-3 flex items-center justify-center">
        <form className="flex flex-col gap-10 w-full" onSubmit={handleSubmit}>
          <label className="text-3xl flex flex-col gap-2" htmlFor="nombre">
            Apellido y Nombre:
            <input
              className="w-full h-[40px] text-xl"
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              required
            />
          </label>

          <label className="text-3xl flex flex-col gap-2" htmlFor="email">
            Correo electrónico:
            <input
              className="w-full h-[40px] text-xl"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </label>

          <label className="text-3xl flex gap-7" htmlFor="servicio">
            Servicio:
            <select
              className="w-fit h-[40px] text-xl"
              id="servicio"
              name="servicio"
              value={formData.servicio}
              onChange={handleInputChange}
              required
            >
              <option value="">Seleccionar servicio</option>
              <option value="Servicio 1">Servicio 1</option>
              <option value="Servicio 2">Servicio 2</option>
              <option value="Servicio 3">Servicio 3</option>
            </select>
          </label>

          <label className="text-3xl flex flex-col gap-2" htmlFor="mensaje">
            Mensaje:
            <textarea
              className="h-40"
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleInputChange}
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
