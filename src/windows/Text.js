import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { WindowControls } from "#components";
import WindowWrapper from "#constants/hoc/WindowWrapper";
import useWindowStore from "#store/window";
const Text = () => {
    const { windows } = useWindowStore();
    const data = windows.txtfile?.data;
    if (!data)
        return null;
    const { name, image, subtitle, description } = data;
    return (_jsxs(_Fragment, { children: [_jsxs("div", { id: "window-header", children: [_jsx(WindowControls, { target: "txtfile" }), _jsx("h2", { children: name })] }), _jsxs("div", { className: "p-5 space-y-6 bg-white", children: [image ? (_jsx("div", { className: "w-full", children: _jsx("img", { src: image, alt: name, className: "w-full h-auto rounded" }) })) : null, subtitle ? (_jsx("h3", { className: "text-lg font-semibold", children: subtitle })) : null, Array.isArray(description) && description.length > 0 ? (_jsx("div", { className: "space-y-3 leading-relaxed text-base text-gray-800", children: description.map((para, idx) => (_jsx("p", { children: para }, idx))) })) : null] })] }));
};
const TextWindow = WindowWrapper(Text, "txtfile");
export default TextWindow;
