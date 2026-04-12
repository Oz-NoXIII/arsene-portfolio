import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { AudioProvider } from "./components/audio/AudioProvider";
import { TransitionProvider } from "./components/layout/TransitionProvider";
import "./styles/variables.css";
import "./styles/global.css";
import "./styles/layout.css";
import "./styles/background.css";
import "./styles/components.css";
import "./styles/pages.css";
import "./styles/responsive.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <HashRouter>
            <TransitionProvider>
                <AudioProvider>
                    <App />
                </AudioProvider>
            </TransitionProvider>
        </HashRouter>
    </React.StrictMode>
);