import './style.css';
import { LangContext } from '../../language/language-context';
import { useContext } from 'react';

function Footer(){
    const [lang] = useContext(LangContext);
    const footerDescription = lang === 'es' ? 'Esto es un Footer' : 'This is a footer';
    return (
        <footer className="footer__container">
            <p>{footerDescription}</p>
        </footer>
    )
}

export default Footer;