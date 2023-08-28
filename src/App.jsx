import { useRef } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { Contacto } from "./components/Contacto/Contacto";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { SecondHeader } from "./components/Header/SecondHeader";
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
        <>
            <div className="flex flex-col">
                <Navbar
                    serviciosRef={serviciosRef}
                    sobreMiRef={sobreMiRef}
                    testimoniosRef={testimoniosRef}
                    contactoRef={contactoRef}
                />
                <div className="gap-32 flex flex-col">
                    <Header />
                    <SecondHeader />
                    <SobreMi sobreMiRef={sobreMiRef} />
                    <Servicios serviciosRef={serviciosRef} />
                    <Testimonios testimoniosRef={testimoniosRef} />
                    <Contacto contactoRef={contactoRef} />
                    <Footer />
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
}

export default App;
