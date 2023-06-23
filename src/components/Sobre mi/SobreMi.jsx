export const SobreMi = ({ sobreMiRef }) => {
    return (
        <div
            className="xl:h-screen h-full flex flex-col items-center gap-20 py-8"
            ref={sobreMiRef}
        >
            <span className="font-bold text-5xl">Sobre mi</span>
            <div className="xl:flex-row flex-col xl:px-0 px-4 flex justify-center gap-4 xl:gap-20 items-center">
                <img src="servicio.webp" className="w-[750px]" alt="" />
                <span className="max-w-xl text-xl font-semibodl">
                    ¡Bienvenido! Soy Manuel Lucero, un apasionado coach
                    comprometido con tu éxito y desarrollo personal. Con una
                    trayectoria de experiencia en el campo del coaching, mi
                    objetivo es guiarte hacia tu máximo potencial y ayudarte a
                    alcanzar tus metas con confianza y claridad. A través de
                    sesiones individuales y personalizadas, te proporcionaré las
                    herramientas y estrategias necesarias para superar
                    obstáculos, descubrir tus fortalezas y diseñar un plan de
                    acción efectivo. Mi enfoque se basa en fomentar la
                    autenticidad, la motivación interna y el crecimiento
                    sostenible. Juntos, exploraremos tus metas, desafiaremos tus
                    creencias limitantes y te empoderaremos para lograr un
                    cambio duradero en todas las áreas de tu vida. ¡Es un honor
                    acompañarte en este emocionante viaje de transformación
                    personal!
                </span>
            </div>
        </div>
    );
};
