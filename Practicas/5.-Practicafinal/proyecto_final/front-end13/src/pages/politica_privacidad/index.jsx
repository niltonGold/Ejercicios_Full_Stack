import { Fragment } from 'react';
import './style.css';
import { useHistory } from "react-router-dom";


export default function PoliticaPrivacidad(){

    let history = useHistory();

    return(
        <Fragment>
            <header className='header_container'>Politica y Privacidad</header>
            <button onClick={() => history.push("/")}>SALIR</button>
            <div className='main_container'>
                <p className='titulos'>Política de privacidad</p>
                <p>
                Última actualización: 21 de diciembre de 2021

                Esta Política de privacidad describe Nuestras políticas y procedimientos sobre la recopilación,
                uso y divulgación de Su información cuando usa el Servicio y le informa sobre Sus derechos de
                privacidad y cómo la ley lo protege.

                Usamos sus datos personales para proporcionar y mejorar el servicio. Al utilizar el Servicio,
                acepta la recopilación y el uso de información de acuerdo con esta Política de privacidad.
                Esta Política de privacidad se ha creado con la ayuda de la Plantilla de política de privacidad .    
                </p>

                <p className='titulos'>Interpretación y definiciones</p>

                <p className='titulos'>Interpretación</p>
                
                <p>
                    Las palabras cuya letra inicial está en mayúscula tienen significados definidos en las siguientes
                    condiciones. Las siguientes definiciones tendrán el mismo significado independientemente
                     que aparezcan en singular o en plural.
                </p>
                

                <p className='titulos'>Interpretación</p>

                <p>
                A los efectos de esta Política de privacidad: 
                </p>

                <p>
                    <ul className='lista'>
                        <li><label className='list_subtitulo'>Cuenta</label> significa una cuenta única creada para que usted acceda a nuestro Servicio o partes de nuestro Servicio.</li>
                        <li><label className='list_subtitulo'>Compañía</label> (denominada "la Compañía", "Nosotros", "Nos" o "Nuestro" en este Acuerdo) se refiere a restaurante tony.</li>
                        <li><label className='list_subtitulo'>Las cookies</label> son pequeños archivos que un sitio web coloca en su computadora, dispositivo móvil o cualquier otro dispositivo, que contienen los detalles de su historial de navegación en ese sitio web, entre sus muchos usos.</li>
                        <li><label className='list_subtitulo'>País se</label> refiere a: España</li>
                        <li><label className='list_subtitulo'>Dispositivo</label> significa cualquier dispositivo que pueda acceder al Servicio, como una computadora, un teléfono celular o una tableta digital. </li>
                        <li><label className='list_subtitulo'>Los datos personales</label> son cualquier información que se relacione con una persona identificada o identificable.</li>
                        <li><label className='list_subtitulo'>El servicio se</label> refiere al sitio web.</li>
                        <li><label className='list_subtitulo'>Proveedor de servicios</label> significa cualquier persona física o jurídica que procesa los datos en nombre de la Compañía. Se refiere a empresas de terceros o personas empleadas por la Compañía para facilitar el Servicio, para proporcionar el Servicio en nombre de la Compañía, para realizar servicios relacionados con el Servicio o para ayudar a la Compañía a analizar cómo se utiliza el Servicio.</li>
                        <li><label className='list_subtitulo'>Los Datos de uso se</label> refieren a los datos recopilados automáticamente, ya sea generados por el uso del Servicio o por la propia infraestructura del Servicio (por ejemplo, la duración de una visita a la página).</li>
                        <li><label className='list_subtitulo'>El sitio web se</label> refiere a restaurante tony, accesible desde http: // localhost: 3000 /</li>
                        <li><label className='list_subtitulo'>Usted se </label>refiere a la persona que accede o utiliza el Servicio, o la empresa u otra entidad legal en nombre de la cual dicha persona accede o utiliza el Servicio, según corresponda.</li>
                        
                    </ul>
                </p>

                <p className='titulos'>Recopilación y uso de sus datos</p>

                <p className='titulos'>personales</p>

                <p className='titulos'>Tipos de datos recopilados</p>

                <p className='titulos'>Información personal</p>

                <p>
                Al usar Nuestro Servicio, podemos pedirle que nos proporcione cierta información de identificación personal que 
                pueda usarse para contactarlo o identificarlo. La información de identificación personal puede incluir, entre otros:    
                </p>

                <ul>
                    <li>Dirección de correo electrónico</li>
                    <li>Datos de uso</li>
                </ul>

                <p className='titulos'>Datos de uso</p>

                <p>
                Los datos de uso se recopilan automáticamente cuando se utiliza el servicio.

                Los datos de uso pueden incluir información como la dirección del Protocolo de Internet de su dispositivo 
                (por ejemplo, la dirección IP), el tipo de navegador, la versión del navegador, las páginas de nuestro 
                Servicio que visita, la hora y fecha de su visita, el tiempo que pasó en esas páginas, el dispositivo único
                 identificadores y otros datos de diagnóstico.

                Cuando accede al Servicio a través de un dispositivo móvil, podemos recopilar cierta información automáticamente,
                 que incluye, entre otros, el tipo de dispositivo móvil que utiliza, la identificación única de su dispositivo
                  móvil, la dirección IP de su dispositivo móvil, su dispositivo móvil sistema operativo, el tipo de navegador
                   de Internet móvil que utiliza, identificadores de dispositivo únicos y otros datos de diagnóstico.

                También podemos recopilar información que su navegador envía cada vez que visita nuestro Servicio o cuando 
                accede al Servicio a través de un dispositivo móvil.

                </p>

                <p className='titulos'>Tecnologías de seguimiento y cookies</p>

                <p>
                Usamos cookies y tecnologías de seguimiento similares para rastrear la actividad en 
                nuestro servicio y almacenar cierta información. Las tecnologías de seguimiento 
                utilizadas son balizas, etiquetas y scripts para recopilar y rastrear información
                 y para mejorar y analizar Nuestro Servicio. Las tecnologías que utilizamos pueden incluir:
                </p>    

                <ul className='lista'>
                    <li><label className='list_subtitulo'>Cookies o cookies del navegador.</label> Una cookie es un pequeño archivo que se coloca en su dispositivo. Puede indicarle a su navegador que rechace todas las cookies o que indique cuándo se está enviando una cookie. Sin embargo, si no acepta las cookies, es posible que no pueda utilizar algunas partes de nuestro Servicio. A menos que haya ajustado la configuración de su navegador para que rechace las cookies, nuestro servicio puede utilizar cookies.</li>
                    <li><label className='list_subtitulo'>Cookies Flash.</label> Ciertas funciones de nuestro Servicio pueden usar objetos almacenados localmente (o Cookies Flash) para recopilar y almacenar información sobre Sus preferencias o Su actividad en nuestro Servicio. Las cookies flash no se administran con la misma configuración del navegador que las que se utilizan para las cookies del navegador. Para obtener más información sobre cómo puede eliminar las cookies de Flash, lea "¿Dónde puedo cambiar la configuración para deshabilitar o eliminar objetos compartidos locales?" disponible en https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_</li>
                    <li><label className='list_subtitulo'>Balizas web.</label> Ciertas secciones de nuestro Servicio y nuestros correos electrónicos pueden contener pequeños archivos electrónicos conocidos como balizas web (también denominados gifs transparentes, etiquetas de píxeles y gifs de un solo píxel) que permiten a la Compañía, por ejemplo, contar los usuarios que han visitado esas páginas. o abrió un correo electrónico y para otras estadísticas del sitio web relacionadas (por ejemplo, registrar la popularidad de una determinada sección y verificar la integridad del sistema y del servidor).</li>
                </ul>

                <p>
                Las cookies pueden ser cookies "persistentes" o de "sesión". Las cookies persistentes 
                permanecen en su computadora personal o dispositivo móvil cuando se desconecta, mientras 
                que las cookies de sesión se eliminan tan pronto como cierra su navegador web. Puede obtener
                 más información sobre las cookies aquí: Cookies by TermsFeed Generator .
                </p>

                <p className='titulos'>Contáctenos</p>

                <p>
                Si tiene alguna pregunta sobre esta Política de privacidad, puede contactarnos:
                </p>

                <p>
                Por correo electrónico: restaurante@rest.com
                </p>




            </div>
        </Fragment>
    )
}