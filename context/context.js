import { createContext, useState } from "react";

export const Lang_Mode = createContext("En");

export default function Context({ children }) {
    const [lang, setLangMode] = useState('En');
    return (
            <Lang_Mode.Provider value={{ lang, setLangMode }}>
                {children}
            </Lang_Mode.Provider>
    );
}