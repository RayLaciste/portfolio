import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { WindowControls } from "#components";
import WindowWrapper from "#constants/hoc/WindowWrapper";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();
const Resume = () => {
    return (_jsxs(_Fragment, { children: [_jsxs("div", { id: "window-header", children: [_jsx(WindowControls, { target: "resume" }), _jsx("h2", { children: "Resume.pdf" }), _jsx("a", { href: "files/resume.pdf", download: true, className: "cursor-pointer", title: "Download Resume", children: _jsx(Download, { className: "icon" }) })] }), _jsx(Document, { file: "files/resume.pdf", children: _jsx(Page, { pageNumber: 1, renderTextLayer: true, renderAnnotationLayer: true }) })] }));
};
const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;
