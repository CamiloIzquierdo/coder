import { useRef } from "react";
import "./App.css";
import { Contacto } from "./components/Contacto/Contacto";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Servicios } from "./components/Servicios/Servicios";
import { SobreMi } from "./components/Sobre mi/SobreMi";
import { Testimonios } from "./components/Testimonios/Testimonios";

function App() {
    const serviciosRef = useRef(null);
    const sobreMiRef = useRef(null);
    const testimoniosRef = useRef(null);
    const contactoRef = useRef(null);

    return (
        <div className="flex flex-col">
            <Navbar
                serviciosRef={serviciosRef}
                sobreMiRef={sobreMiRef}
                testimoniosRef={testimoniosRef}
                contactoRef={contactoRef}
            />
            <Header />
            <Servicios serviciosRef={serviciosRef} />
            <SobreMi sobreMiRef={sobreMiRef} />
            <Testimonios testimoniosRef={testimoniosRef} />
            <Contacto contactoRef={contactoRef} />
        </div>
    );
}

export default App;
