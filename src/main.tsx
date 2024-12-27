import { createRoot } from "react-dom/client";
import "./index.css";
import { Footer } from "@components/footer";
import { Header } from "@components/header";
import { About } from "@pages/about";
import { Contact } from "@pages/contact";
import { Home } from "@pages/home";
import { Project } from "@pages/project";
import { BrowserRouter, Route, Routes } from "react-router";

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <Header />
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/:slug" element={<Project />} />
            </Routes>
        </main>
        <Footer />
    </BrowserRouter>,
);
