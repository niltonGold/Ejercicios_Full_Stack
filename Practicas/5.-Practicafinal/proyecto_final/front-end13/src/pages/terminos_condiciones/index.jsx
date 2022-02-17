import { Fragment } from 'react';
import './style.css';
import { useHistory } from "react-router-dom";


export default function TerminosCondiciones(){

    let history = useHistory();

    return(
        <Fragment>
            <header className='header_container'>TERMINOS Y CONDICIONES DE TONY</header>
            <button onClick={() => history.push("/")}>SALIR</button>
            <div className='main_container'>
                <p className='titulos'>PTérminos y condiciones</p>
                <p>
                Última actualización: 21 de diciembre de 2021

                Lea estos términos y condiciones detenidamente antes de utilizar Nuestro Servicio.
                </p>

                <p className='titulos'>Interpretación y definiciones</p>

                <p className='titulos'>Interpretación</p>
                
                <p>
                Las palabras cuya letra inicial está en mayúscula tienen significados definidos en las
                 siguientes condiciones. Las siguientes definiciones tendrán el mismo significado 
                 independientemente de que aparezcan en singular o en plural.
                </p>
                

                <p className='titulos'>Definiciones</p>

                <p>
                A los efectos de estos Términos y Condiciones
                </p>

                <p>
                    <ul className='lista'>
                        <li><label className='list_subtitulo'>Afiliado</label>  significa una entidad que controla, está controlada por o está bajo control común con una parte, donde "control" significa la propiedad del 50% o más de las acciones, participación en el capital social u otros valores con derecho a voto para la elección de directores u otra autoridad de gestión. .</li>
                        <li><label className='list_subtitulo'>País se </label> refiere a: España</li>
                        <li><label className='list_subtitulo'>Compañía</label> (denominada "la Compañía", "Nosotros", "Nos" o "Nuestro" en este Acuerdo) se refiere a TONY.</li>
                        <li><label className='list_subtitulo'>Dispositivo</label> significa cualquier dispositivo que pueda acceder al Servicio, como una computadora, un teléfono celular o una tableta digital.</li>
                        <li><label className='list_subtitulo'>Dispositivo</label> significa cualquier dispositivo que pueda acceder al Servicio, como una computadora, un teléfono celular o una tableta digital. </li>
                        <li><label className='list_subtitulo'>El servicio se</label> refiere al sitio web.</li>
                        <li><label className='list_subtitulo'>Términos y condiciones </label> (también denominados "Términos") se refieren a estos Términos y condiciones que forman el acuerdo completo entre Usted y la Compañía con respecto al uso del Servicio. Este acuerdo de Términos y Condiciones se ha creado con la ayuda del Generador de Términos y Condiciones .</li>
                        <li><label className='list_subtitulo'>Servicio de redes sociales de terceros</label> significa cualquier servicio o contenido (incluidos datos, información, productos o servicios) proporcionado por un tercero que puede ser mostrado, incluido o puesto a disposición por el Servicio.</li>
                        <li><label className='list_subtitulo'>El sitio web se</label> refiere a TONY, accesible desde http: // localhost: 3000 /</li>
                        <li><label className='list_subtitulo'>Usted se</label>  refiere a la persona que accede o utiliza el Servicio, o la empresa u otra entidad legal en nombre de la cual dicha persona accede o utiliza el Servicio, según corresponda.</li>
                    </ul>
                </p>

                <p className='titulos'>Reconocimiento</p>

                <p>
                Estos son los Términos y Condiciones que rigen el uso de este Servicio y el acuerdo que opera entre Usted 
                y la Compañía. Estos Términos y Condiciones establecen los derechos y obligaciones de todos los usuarios
                 con respecto al uso del Servicio.

                Su acceso y uso del Servicio está condicionado a su aceptación y cumplimiento de estos Términos y 
                Condiciones. Estos Términos y Condiciones se aplican a todos los visitantes, usuarios y otras personas
                 que acceden o utilizan el Servicio.

                Al acceder o utilizar el Servicio, usted acepta estar sujeto a estos Términos y Condiciones. Si no está
                 de acuerdo con alguna parte de estos Términos y condiciones, no podrá acceder al Servicio.

                Usted declara que es mayor de 18 años. La Compañía no permite que menores de 18 años utilicen el Servicio.

                Su acceso y uso del Servicio también está condicionado a Su aceptación y cumplimiento de la Política 
                de Privacidad de la Compañía. Nuestra Política de privacidad describe Nuestras políticas y procedimientos
                 sobre la recopilación, uso y divulgación de Su información personal cuando usa la Aplicación o el Sitio
                  web y le informa sobre Sus derechos de privacidad y cómo la ley lo protege. Lea nuestra Política de
                   privacidad detenidamente antes de utilizar nuestro servicio.   
                </p>


                <p className='titulos'>Enlaces a otros sitios web</p>

                <p>
                Nuestro Servicio puede contener enlaces a sitios web o servicios de terceros que no son propiedad ni 
                están controlados por la Compañía.

                La Compañía no tiene control ni asume responsabilidad por el contenido, las políticas de privacidad
                 o las prácticas de los sitios web o servicios de terceros. Además, reconoce y acepta que la Compañía
                  no será responsable, directa o indirectamente, por ningún daño o pérdida causados ​​o presuntamente
                   causados ​​por o en conexión con el uso o la confianza en dicho contenido, bienes o servicios 
                   disponibles en oa través de dichos sitios web o servicios.

                Le recomendamos encarecidamente que lea los términos y condiciones y las políticas de privacidad 
                de los sitios web o servicios de terceros que visite.   
                </p>

                <p className='titulos'>Terminación</p>

                <p>
                Podemos rescindir o suspender Su acceso de inmediato, sin previo aviso ni responsabilidad, 
                por cualquier motivo, incluido, entre otros, si incumple estos Términos y condiciones.

                Tras la rescisión, su derecho a utilizar el Servicio cesará de inmediato.
                </p>

                <p className='titulos'>Limitación de responsabilidad</p>

                <p>
                Sin perjuicio de los daños en los que pueda incurrir, la responsabilidad total de la Compañía
                 y cualquiera de sus proveedores bajo cualquier disposición de estos Términos y Su recurso 
                 exclusivo para todo lo anterior se limitará al monto realmente pagado por Usted a través del 
                 Servicio o 100 USD. si no ha comprado nada a través del Servicio.

                En la medida máxima permitida por la ley aplicable, en ningún caso la Compañía o sus proveedores
                 serán responsables de ningún daño especial, incidental, indirecto o consecuente de ningún tipo 
                 (incluidos, entre otros, daños por lucro cesante, pérdida de datos o otra información, por 
                 interrupción del negocio, por lesiones personales, pérdida de privacidad que surja de o de
                  alguna manera relacionada con el uso o la imposibilidad de usar el Servicio, software de 
                  terceros y / o hardware de terceros utilizado con el Servicio, o de lo contrario en relación 
                  con cualquier disposición de estos Términos), incluso si la Compañía o cualquier proveedor han
                   sido informados de la posibilidad de tales daños e incluso si el recurso no cumple con su propósito esencial.

                Algunos estados no permiten la exclusión de garantías implícitas o la limitación de responsabilidad 
                por daños incidentales o consecuentes, lo que significa que algunas de las limitaciones anteriores
                 pueden no aplicarse. En estos estados, la responsabilidad de cada parte estará limitada en la mayor 
                 medida permitida por la ley.    
                </p>

                <p className='titulos'>Descargo de responsabilidad "TAL CUAL" y "SEGÚN DISPONIBILIDAD"</p>

                <p>
                El Servicio se le proporciona "TAL CUAL" y "SEGÚN DISPONIBILIDAD" y con todas las fallas y defectos
                 sin garantía de ningún tipo. En la medida máxima permitida por la ley aplicable, la Compañía, en 
                 su propio nombre y en nombre de sus Afiliadas y sus respectivos licenciantes y proveedores de servicios,
                  renuncia expresamente a todas las garantías, ya sean expresas, implícitas, estatutarias o de otro 
                  tipo, con respecto a la Servicio, incluidas todas las garantías implícitas de comerciabilidad, 
                  idoneidad para un propósito particular, título y no infracción, y garantías que puedan surgir del 
                  curso del trato, el curso del desempeño, el uso o la práctica comercial. Sin limitación a lo anterior, 
                  la Compañía no ofrece garantía ni compromiso, y no hace ninguna representación de ningún tipo de que el 
                  Servicio cumplirá con Sus requisitos, logrará los resultados previstos,

                Sin perjuicio de lo anterior, ni la Compañía ni ninguno de los proveedores de la compañía hace ninguna
                 representación o garantía de ningún tipo, expresa o implícita: (i) en cuanto al funcionamiento o 
                 disponibilidad del Servicio, o la información, contenido y materiales o productos. incluido en el mismo;
                  (ii) que el Servicio será ininterrumpido o libre de errores; (iii) en cuanto a la precisión, 
                  confiabilidad o vigencia de cualquier información o contenido proporcionado a través del Servicio; 
                  o (iv) que el Servicio, sus servidores, el contenido o los correos electrónicos enviados desde o en
                   nombre de la Compañía están libres de virus, scripts, troyanos, gusanos, malware, bombas de tiempo 
                   u otros componentes dañinos.

                Algunas jurisdicciones no permiten la exclusión de ciertos tipos de garantías o limitaciones sobre los
                 derechos legales aplicables de un consumidor, por lo que algunas o todas las exclusiones y limitaciones
                  anteriores pueden no aplicarse a usted. Pero en tal caso, las exclusiones y limitaciones establecidas
                   en esta sección se aplicarán en la mayor medida exigible según la ley aplicable.
                </p>    


                <p className='titulos'>Ley que rige</p>    
                <p>Las leyes del País, excluyendo sus conflictos de reglas legales, regirán estos Términos y
                     Su uso del Servicio. Su uso de la Aplicación también puede estar sujeto a otras leyes 
                     locales, estatales, nacionales o internacionales.
                </p>    

                <p className='titulos'>Resolución de disputas</p>    
                <p>
                Si tiene alguna inquietud o disputa sobre el Servicio, acepta primero 
                intentar resolver la disputa de manera informal comunicándose con la Compañía.
                </p>  

                <p className='titulos'>Para usuarios de la Unión Europea (UE)</p>    
                <p>
                Si es un consumidor de la Unión Europea, se beneficiará de las disposiciones obligatorias de la ley del país en el que reside.
                </p>  

                <p className='titulos'>Cumplimiento legal de Estados Unidos</p>    
                <p>
                Usted declara y garantiza que (i) no se encuentra en un país que está sujeto al embargo del
                 gobierno de los Estados Unidos, o que ha sido designado por el gobierno de los Estados Unidos
                  como un país "que apoya al terrorismo", y (ii) no está enumerados en cualquier lista del gobierno 
                  de los Estados Unidos de partes prohibidas o restringidas.    
                </p>  




                <p className='titulos'>Divisibilidad y renuncia</p>

                <p className='titulos'>Divisibilidad</p>
                <p>
                Si alguna disposición de estos Términos se considera inaplicable o inválida, dicha 
                disposición se cambiará e interpretará para lograr los objetivos de dicha 
                disposición en la mayor medida posible según la ley aplicable y las disposiciones 
                restantes continuarán en pleno vigor y efecto.
                </p> 

                                            
                <p className='titulos'>Exención</p>
                <p>
                Salvo lo dispuesto en el presente, el hecho de no ejercer un derecho o exigir el 
                cumplimiento de una obligación en virtud de estos Términos no afectará la capacidad
                 de una de las partes para ejercer dicho derecho o requerir dicho cumplimiento en
                  cualquier momento posterior, ni la renuncia a un incumplimiento constituirá una
                   renuncia a cualquier incumplimiento posterior.
                </p> 

                <p className='titulos'>Interpretación de traducción</p>
                <p>
                Estos Términos y Condiciones pueden haberse traducido si los hemos puesto a su 
                disposición en nuestro Servicio. Usted acepta que el texto original en inglés
                 prevalecerá en caso de disputa.
                </p> 

                <p className='titulos'>Cambios a estos términos y condiciones</p>
                <p>
                Nos reservamos el derecho, a Nuestro exclusivo criterio, de modificar o reemplazar estos 
                Términos en cualquier momento. Si una revisión es importante, haremos los esfuerzos 
                razonables para proporcionar un aviso de al menos 30 días antes de que entren en vigencia
                 los nuevos términos. Lo que constituye un cambio material se determinará a Nuestro
                  exclusivo criterio.

                Al continuar accediendo o utilizando Nuestro Servicio después de que esas revisiones
                 entren en vigencia, usted acepta estar sujeto a los términos revisados. Si no está
                  de acuerdo con los nuevos términos, en su totalidad o en parte, deje de utilizar
                   el sitio web y el Servicio. 
                </p>      

                <p className='titulos'>Contáctenos</p>
                
                <p>
                Si tiene alguna pregunta sobre estos Términos y condiciones, puede contactarnos:
                </p> 
                <p>
                Por correo electrónico: TONY@ROMAS.COM
                </p>  
               



            </div>
        </Fragment>
    )
}