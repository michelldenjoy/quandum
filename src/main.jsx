import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import ScrollToTop from "./components/ScrollToTop";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';


console.log("RECAPTCHA_SITE_KEY:", import.meta.env.VITE_RECAPTCHA_SITE_KEY);

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleReCaptchaProvider reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}> 
    <React.StrictMode>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </GoogleReCaptchaProvider>
);
