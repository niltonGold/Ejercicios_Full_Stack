import { useState } from 'react';
import { LangContext } from './language-context';

function LanguageProvider({ value, children }) {
     // inicializo con el idioma del navegador si lo que me entra 
     // es null o undefined. Este operador se llama Nullish coalescing operator
    value = value ?? navigator.language;
    const [lang, updateLang] = useState(value);
    console.log(lang);
    return(
        <LangContext.Provider value={[lang, updateLang]}>
            {children}
        </LangContext.Provider>
    )
}

export default LanguageProvider;