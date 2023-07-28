export const scrollToRef = ({ componentRef }) => {
    if (componentRef.current) {
        const navbarHeight = 100;
        const offsetTop = componentRef.current.offsetTop - navbarHeight;
        window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
        });
    }
};
export const scrollToRefMobile = ({ componentRef }) => {
    if (componentRef.current) {
        const navbarHeight = 240;
        const offsetTop = componentRef.current.offsetTop - navbarHeight;
        window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
        });
    }
};

export function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
