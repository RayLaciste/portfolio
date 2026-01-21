import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { locations } from "#constants";
import useLocationStore from "#store/location";
import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import { Draggable } from "gsap/Draggable";
const projects = locations.work?.children ?? [];
const Home = () => {
    const { setActiveLocation } = useLocationStore();
    const { openWindow } = useWindowStore();
    const handleOpenProjectFinder = (project) => {
        setActiveLocation(project);
        openWindow("finder");
    };
    useGSAP(() => {
        Draggable.create(".folder");
    }, []);
    return (_jsx("section", { id: "home", children: _jsx("ul", { children: projects.map((project) => (_jsxs("li", { className: clsx("group folder", project.windowPosition), onClick: () => handleOpenProjectFinder(project), children: [_jsx("img", { src: "/images/folder.png", alt: project.name }), _jsx("p", { children: project.name })] }, project.id))) }) }));
};
export default Home;
