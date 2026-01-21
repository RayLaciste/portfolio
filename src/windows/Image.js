import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { WindowControls } from "#components";
import WindowWrapper from "#constants/hoc/WindowWrapper";
import useWindowStore from "#store/window";
const ImageWindowContent = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile?.data;
    if (!data)
        return null;
    const { name, imageUrl } = data;
    return (_jsxs(_Fragment, { children: [_jsxs("div", { id: "window-header", children: [_jsx(WindowControls, { target: "imgfile" }), _jsx("h2", { children: name })] }), _jsx("div", { className: "p-5 bg-white", children: imageUrl ? (_jsx("div", { className: "w-full", children: _jsx("img", { src: imageUrl, alt: name, className: "w-full h-auto max-h-[70vh] object-contain rounded" }) })) : null })] }));
};
const ImageWindow = WindowWrapper(ImageWindowContent, "imgfile");
export default ImageWindow;
