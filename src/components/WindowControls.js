import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import useWindowStore from "#store/window";
const WindowControls = ({ target }) => {
    const { closeWindow } = useWindowStore();
    return (_jsxs("div", { id: "window-controls", children: [_jsx("div", { className: "close", onClick: () => closeWindow(target) }), _jsx("div", { className: "minimize" }), _jsx("div", { className: "maximize" })] }));
};
export default WindowControls;
