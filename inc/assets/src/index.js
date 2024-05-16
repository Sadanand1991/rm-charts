import { createRoot } from "@wordpress/element";
import App from "./app";

const root = createRoot(document.getElementById("rm-charts-widget-container"));
root.render(<App />);
