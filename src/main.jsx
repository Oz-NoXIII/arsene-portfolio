import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AudioProvider } from "./components/audio/AudioProvider";
import "./styles/variables.css";
import "./styles/global.css";
import "./styles/layout.css";
import "./styles/background.css";
import "./styles/components.css";
import "./styles/pages.css";
import "./styles/responsive.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <AudioProvider>
                <App />
            </AudioProvider>
        </BrowserRouter>
    </React.StrictMode>
);