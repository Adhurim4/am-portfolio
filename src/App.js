import "./App.css";
import { createContext, useState,Suspense } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";     
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import enTranslation from "./locales/en/translation.json";
import alTranslation from "./locales/al/translation.json";
import ReactSwitcher from "./components/ReactSwitcher";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    al: { translation: alTranslation }
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export const ThemeContext = createContext(null);

 function App() {

 const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      
    <div className="App" id={theme}>
    <Navbar />
    <ReactSwitcher toggleTheme={toggleTheme} theme={theme} />
    <Home/>
    <About/>
    <Skills/>
    <Work/>
    <Contact/>
    </div>
    </ThemeContext.Provider>
    </Suspense>
  );
}

export default App;
