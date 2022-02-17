import './style.css';
import { LangContext } from '../../language/language-context';
import { useContext } from 'react';

function Header() {
    // devuelve el value de su Provider más cercano
    const [lang, updateLang] = useContext(LangContext);

    return (
        <header className='header__container'>
            <h1>Esto es un header</h1>
            <label htmlFor="language">Cambia el idioma:</label>
            <select value={lang} onChange={e => updateLang(e.target.value)} name="lang" id="language">
                <option value="es">ES</option>
                <option value="en">EN</option>
            </select>
        </header>
    )
}

export default Header;
