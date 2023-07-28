export const SobreMi = ({ sobreMiRef }) => {
    return (
        <div
            className="xl:h-screen h-full flex flex-col items-center gap-20 py-8"
            ref={sobreMiRef}
        >
            <div className="flex items-center justify-center flex-col gap-2">
                <span className="xl:font-bold font-semibold xl:text-4xl text-xl text-slate-800">
                    SOBRE MI
                </span>
                <div className="h-[2px] w-16 bg-primary"></div>
            </div>
            <div className="xl:flex-row-reverse flex-col xl:px-0 flex justify-center gap-16 xl:gap-20 xl:items-start items-center">
                <img
                    src="sobremi.jpg"
                    className="xl:h-[600px] xl:w-[550px] h-[400px] w-[350px] object-cover xl:rounded-tr-[177px] xl:rounded-t-none rounded-t-[107px] shadow-2xl"
                    alt=""
                />
                <div className="flex flex-col xl:max-w-2xl xl:text-2xl xl:font-semibold font-normal max-w-xs text-lg text-secondary gap-5">
                    <span className="">
                        En el año 2017, me formé como Coach en fundación
                        Univercitas y descubrí el maravilloso mundo del
                        empoderamiento personal. En el 2018 sumé la formación en
                        &quot;Coaching por competencia, para organizaciones y
                        equipos de altos rendimientos&quot;, en el mismo
                        establecimiento.
                    </span>
                    <span>
                        En el año 2019, seguí sumando herramientos para poder
                        estar al servicio de manera individual y grupal. Me
                        capacité en &quot;MindFulness&quot;, un curso dictado
                        por la Universidad de Cordoba. Ese mismo año participé
                        del curso de &quot;Distinciones de Psicología&quot;,
                        nociones básicas que necesita cada coachee para hacer
                        una derivación responsable. A su vez, asistí a los
                        talleres de &quot;Abordaje Emocional y Corporal&quot;
                        dictados por Joaquín Muknich.
                    </span>
                    <span>
                        Actualmente estoy cursando el último año de la formación
                        como &quot;Terapista Gestáltico&quot; e integro el
                        equipi de tutores de Fundación Empowerment, asistiendo y
                        acompañando a las personas que deciden estudiar
                        Coaching.
                    </span>
                </div>
            </div>
        </div>
    );
};
