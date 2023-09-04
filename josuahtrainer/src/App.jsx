import "./App.css";
import { useState } from "react";
import ReactPlayer from "react-player";
import { FaInstagramSquare } from 'react-icons/fa';

function App() {
  const [item1, setItem1] = useState(false);
  const [item2, setItem2] = useState(false);
  const [item3, setItem3] = useState(false);
  const [item4, setItem4] = useState(false);
  const [item5, setItem5] = useState(false);
  const [item6, setItem6] = useState(false);
  const [item7, setItem7] = useState(false);

  const toggle = (n) => {
    if (n === 1) {
      setItem1(!item1);
    }
    if (n === 2) {
      setItem2(!item2);
    }
    if (n === 3) {
      setItem3(!item3);
    }
    if (n === 4) {
      setItem4(!item4);
    }
    if (n === 5) {
      setItem5(!item5);
    }
    if (n === 6) {
      setItem6(!item6);
    }
    if (n === 7) {
      setItem7(!item7);
    }
  };

  return (
    <>
      <nav>
        <img src="../logo.png" alt="logo" className="logo-img"></img>
        <a
          className="nombre"
          href="https://www.instagram.com/josuahtrainer/"
          target="_blank"
        >
          Josuah Trainer
        </a>
      </nav>
      <div className="header">
        <div className="letras">
          <p className="titulo">FITTEST</p>
          <p className="subtitulo">FUERTE Y FUNCIONAL</p>
          <p className="subtitulo">
              Membresía de entrenamiento <br /> para
              <span> potenciar</span> tu desarollo.
          </p>
          <h1>Entrenador personal online</h1>
        </div>
        <div className="btn-img">
          <a
            className="btn btn-1"
            href="https://buy.stripe.com/aEU28t9Nmbk27yoeUU"
            target="_blank"
          >
            UNIRME AHORA
          </a>
          <img src="../app-img.png" alt="app-foto" className="app-foto"></img>
        </div>
      </div>
      <div className="v-center">
        <div className="video">
          <ReactPlayer
            url="https://youtu.be/SXFvm8fh0QI"
            className="react-player"
            width="100%"
            height="100%"
            controls
          />
        </div>
        <a
          className="btn btn-3"
          href="https://buy.stripe.com/aEU28t9Nmbk27yoeUU"
          target="_blank"
        >
          UNIRME AHORA
        </a>
      </div>
      <section>
        <div className="wrap">
          <div className="productos">
            <h2 className="p-1">¿POR QUÉ ENTRAR EN FITTEST?</h2>
            <ul>
              <li>🟡 DESARROLLA TU FUERZA.</li>
              <li>🟡 MEJORA TU FUNCIONALIDAD.</li>
              <li>🟡 REDUCE MOLESTIAS/DOLORES CORPORALES.</li>
              <li>🟡 LLEVA TU CONDICIÓN FÍSICA AL SIGUIENTE NIVEL.</li>
            </ul>
          </div>

          <div className="productos">
            <h2>¿CÓMO SE CONSIGUE?</h2>
            <ul>
              <li>✅ 6 ENTRENAMIENTOS NUEVOS CADA SEMANA.</li>
              <li>✅ PERIODIZACIÓN DINÁMICA DEL ENTRENAMIENTO.</li>
              <li>
                ✅ EVOLUCIÓN CONSTANTE SEGÚN LA ÚLTIMA EVIDENCIA CIENTÍFICA.
              </li>
              <li>✅ REGISTRO COMPLETO DE LOS ENTRENAMIENTOS.</li>
              <li>✅ SOPORTE POR CHAT.</li>
            </ul>
          </div>
        </div>
      </section>
      <article>
        <div className="articulos">
          <div className=" art-1"></div>

          <div className="a-text borde-amarillo">
            <h3>Desarrolla tu fuerza como nunca antes.</h3>
            <p>
              Detrás de cada entrenamiento existe una planificación probada y
              respaldada por la última evidencia científica, atendiendo a los
              principios del entrenamiento que te llevarán a resultados reales.
              Así es, si sigues el plan te aseguro que aumentarás tu fuerza.
            </p>
          </div>
        </div>

        <div className="grid-box articulos ">
          <div className="a-text borde-amarillo">
            <h3>Potencia tu salud</h3>
            <p>
              Todos los entrenamientos te proporcionan una gran transferencia a
              tu día a día, para que seas más fuerte, más ágil y lleves una vida
              más saludable. Es un programa de entrenamiento correctamente
              estructurado que te permite mejorar en aquellas zonas pendientes,
              o en aquellos aspectos que más te hace falta (movilidad, dolores,
              molestias, fuerza...).
            </p>
          </div>
          <div className="art-2"></div>
        </div>

        <div className="articulos">
          <div className="art-3"></div>

          <div className="a-text borde-amarillo">
            <h3>La clave del éxito: las 3 Cs</h3>
            <p>
              Comunicación, Confianza y Compromiso. El plan de entrenamiento
              funciona, solo hay que seguirlo. Tienes acceso a un chat personal
              conmigo para resolver cualquier duda o realizar el cambio que
              necesites. Además de un grupo con los compañeros y compañeras que
              ya forman parte de la membresía Function First que te pueden
              ayudar a pasar de donde estás ahora mismo a donde quieres llegar a
              estar.
            </p>
          </div>
        </div>
        <div className="blok-btn">
          <a
            className="btn btn-2"
            href="https://buy.stripe.com/aEU28t9Nmbk27yoeUU"
            target="_blank"
          >
            UNIRME AHORA
          </a>
        </div>
      </article>
      <section className="faqs">
        <h2>PREGUNTAS FRECUENTES</h2>
        <div className="faq" onClick={() => toggle(1)}>
          <div className="question">
            <h3>
              ¿Qué es <span className="fittest">FITTEST</span> ?
            </h3>
            {item1 ? (
              <svg
                className="rotate"
                width="15"
                height="10"
                viewBox="0 0 42 25"
              >
                <path
                  d="M3 3L21 21L39 3"
                  stroke="#fce103"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="15" height="10" viewBox="0 0 42 25">
                <path
                  d="M3 3L21 21L39 3"
                  stroke="#fce103"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </div>
          <div className="answer">
            {item1 && (
              <p>
                <span className="fittest">FITTEST</span> es la única membresía
                de entrenamiento activa creada por mi en la que encontrarás
                entrenamientos efectivos, programados semana a semana, siguiendo
                una planificación y progresión previamente testada para
                ofrecerte los mejores resultados.
              </p>
            )}
          </div>
        </div>
        <div className="faq" onClick={() => toggle(2)}>
          <div className="question">
            <h3>
              ¿Qué equipamiento se necesita para los entrenos de{" "}
              <span className="fittest">FITTEST</span>?
            </h3>
            {item2 ? (
              <svg
                className="rotate"
                width="15"
                height="10"
                viewBox="0 0 42 25"
              >
                <path
                  d="M3 3L21 21L39 3"
                  stroke="#fce103"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="15" height="10" viewBox="0 0 42 25">
                <path
                  d="M3 3L21 21L39 3"
                  stroke="#fce103"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </div>
          <div className="answer">
            {item2 && (
              <p>
                Con el material de cualquier gimnasio convencional puedes
                realizar los entrenamientos sin problema. Además, si te falta
                algo de material para realizar algún ejercicio, puedes
                modificarlo directamente en tu perfil o pedirme a mi que te lo
                cambie por otro.
              </p>
            )}
          </div>
        </div>
        <div className="faq" onClick={() => toggle(3)}>
          <div className="question">
            <h3>¿Hay soporte por parte del entrenador en la membresía?</h3>
            {item3 ? (
              <svg
                className="rotate"
                width="15"
                height="10"
                viewBox="0 0 42 25"
              >
                <path
                  d="M3 3L21 21L39 3"
                  stroke="#fce103"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="15" height="10" viewBox="0 0 42 25">
                <path
                  d="M3 3L21 21L39 3"
                  stroke="#fce103"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </div>
          <div className="answer">
            {item3 && (
              <p>
                ¡Claro! Cada miembro tiene acceso al chat de la aplicación,
                tanto en un grupo con otros miembros como conmigo personalmente
                de forma privada para hacer preguntas, colgar videos, corregir
                técnica o resolver dudas. Todo desde la aplicación.
              </p>
            )}
          </div>
        </div>
        <div className="faq" onClick={() => toggle(4)}>
          <div className="question">
            <h3>
              ¿Por qué debería entrar en la membresía{" "}
              <span className="fittest">FITTEST</span>?
            </h3>
            {item4 ? (
              <svg
                className="rotate"
                width="15"
                height="10"
                viewBox="0 0 42 25"
              >
                <path
                  d="M3 3L21 21L39 3"
                  stroke="#fce103"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="15" height="10" viewBox="0 0 42 25">
                <path
                  d="M3 3L21 21L39 3"
                  stroke="#fce103"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </div>
          <div className="answer">
            {item4 && (
              <p>
                Se trata de una membresía activa que evoluciona al ritmo de los
                participantes. No es un programa cerrado de 12 semanas. Sea cual
                sea tu nivel se adaptará a ti y podrás progresar, consiguiendo
                resultados verídicos y aprendiendo en el proceso.
              </p>
            )}
          </div>
        </div>
        <div className="faq" onClick={() => toggle(5)}>
          <div className="question">
            <h3>¿Cuántos entrenos hay y cuanto duran?</h3>
            {item5 ? (
              <svg
                className="rotate"
                width="15"
                height="10"
                viewBox="0 0 42 25"
              >
                <path
                  d="M3 3L21 21L39 3"
                  stroke="#fce103"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="15" height="10" viewBox="0 0 42 25">
                <path
                  d="M3 3L21 21L39 3"
                  stroke="#fce103"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </div>
          <div className="answer">
            {item5 && (
              <p>
                6 entrenamientos nuevos cada semana. 4 enfocados a la mejora de
                la fuerza-hipertrofia y 2 enfocados al acondicionamiento
                metabólico. Según tus objetivos puedes ajustar el calendario
                para realizar los entrenamientos que necesites desde 1 a 6
                entrenamientos a la semana. Los entrenamientos pueden durar
                entre 45 y 90 minutos.
              </p>
            )}
          </div>
        </div>
        <div className="faq" onClick={() => toggle(6)}>
          <div className="question">
            <h3>
              ¿Cómo funciona la membresía{" "}
              <span className="fittest">FITTEST</span>?
            </h3>
            {item6 ? (
              <svg
                className="rotate"
                width="15"
                height="10"
                viewBox="0 0 42 25"
              >
                <path
                  d="M3 3L21 21L39 3"
                  stroke="#fce103"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="15" height="10" viewBox="0 0 42 25">
                <path
                  d="M3 3L21 21L39 3"
                  stroke="#fce103"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </div>
          <div className="answer">
            {item6 && (
              <p>
                ¡Muy sencillo! Dale al botón de “Unirme ahora”. Una vez el
                registro esté completado tendrás acceso a tu cuenta en la
                aplicación TrainHeroic con los entrenamientos semanales, chat,
                vídeos de ejercicios y mucho más.
              </p>
            )}
          </div>
        </div>
        <div className="faq" onClick={() => toggle(7)}>
          <div className="question">
            <h3>
              ¿Puedo cancelar mi suscripción a la membresía en cualquier
              momento?
            </h3>
            {item7 ? (
              <svg
                className="rotate"
                width="15"
                height="10"
                viewBox="0 0 42 25"
              >
                <path
                  d="M3 3L21 21L39 3"
                  stroke="#fce103"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="15" height="10" viewBox="0 0 42 25">
                <path
                  d="M3 3L21 21L39 3"
                  stroke="#fce103"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </div>
          <div className="answer">
            {item7 && (
              <p>
                Sí! Puedes cancelar tu suscripción en cualquier momento y sin
                dar explicaciones.
              </p>
            )}
          </div>
        </div>
      </section>
      <footer>
        <a
          className="contacto"
          href="https://www.instagram.com/josuahtrainer/"
          target="_blank"
        >
          Contacto
        </a>
        <a
        className="contacto"
          href="https://www.instagram.com/josuahtrainer/"
          target="_blank"
        >

        <FaInstagramSquare className="instagram-icon"/>
        </a>
      </footer>
    </>
  );
}

export default App;
