import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Hello from "./App.jsx";
import Header from "./componets/header.jsx";
import Footer from "./componets/footer.jsx";
import Body from "./componets/body.jsx";

createRoot(document.getElementById('root')).render(
    <>
    <Hello/>
    <Header/>
    <Body/>
    <Footer/>
</>
);