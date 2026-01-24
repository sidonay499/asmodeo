import { useState } from "react"
import './selector.css'

export default function Selector(){
    const [ toggle,setToggle ] = useState('5')
    
    return(
        <div className="container_selector">
            <div class="box_selector">
                <div class="selector">
                    <span style={{left:`${toggle}px`}}/>
                    <p onClick={()=>setToggle('5')}>CONSEJOS</p>
                    <p onClick={()=>setToggle('105')}>INFORMATE</p>
                    <p onClick={()=>setToggle('205')}>GUÍA</p>
                </div>
            </div>
            {toggle === '5' ? 
            <section className="box_article_home">
                <article>
                    <header>
                        <h2>¿QUÉ PODÉS ENCONTRAR EN ASMODEO ESCORT VIP?</h2>
                    </header>
                    <p>Bueno, acá en asmodeo.net básicamente encontrás VIP Escorts en Buenos Aires de verdad, no ese humo que ves en otros sitios. Si estás en Capital y querés ver a alguien en persona, podés ir al depto privado de la trabajadora sexual o arreglar algo a domicilio, hotel, lo que mejor te quede. Llamás o mandás WhatsApp desde el botón y listo, hablás directo con la chica o el chico. Nada de intermediarios raros.</p>
                    <p>Las fotos son reales, posta. Hay muchos sitios en Argentina que ponen fotos robadas o super editadas, y después aparece alguien que no tiene nada que ver. Acá no. Lo que ves es lo que te abre la puerta. Y eso, para mí, hace toda la diferencia cuando buscás Escorts femeninas en Argentina o Escorts masculinos en Argentina que no te mientan.</p>
                    <p>También están los sitios conocidos: bairesgirls, soloindependientes, selfiegirls, sexysabor, gemidos, argentinaxp, dulcesdiosas, argentinasensual, skokka, argentinasx, tacosaltos, sensualbaires, platynum, mimosasvip, escortsenbuenosaires, escortsvip, mininasvip, locanto, area-vip, selfiescorts, pkadoras. Algunos sirven, otros no tanto. Asmodeo se diferencia porque chequeamos los perfiles y hasta ahora viene funcionando.</p>
                </article>
                <hr/>
                <article>
                    <header>
                        <h3>VIP Escorts en Buenos Aires con fotos reales</h3>
                    </header>
                    <p>Si buscás fetiches, también hay. Fetiche de pies, BDSM, masoquismo, sadismo sexual, travestida, voyeurismo, amamantar, escort nodriza, nylon, pantyhose, medias, cuero, fantasías más raras también. Mejor decir lo que querés desde el principio. Si no, después se arma lío y nadie la pasa bien.</p>
                </article>
                <hr/>
                <article>
                    <header>
                        <h3>CONSEJOS DE VIDA (si vas a ver una escort)</h3>
                    </header>
                    <p>Te digo lo básico, porque muchos no lo entienden:</p>
                    <ul>
                        <li>no regatees, queda feo</li>
                        <li>respetá horarios</li>
                        <li>higiene, por favor</li>
                        <li>no pidas cosas que no están en el perfil</li>
                        <li>discreción siempre</li>
                    </ul>
                    <p>Las chicas y los chicos trabajan con reglas claras. Si vos respetás, ellos también.</p>
                </article>
                <hr/>
                <article>
                    <p>Algo que cambió mucho en 2024 y ahora en 2025 es que la gente quiere perfiles reales y verificados. Según algunos datos que comentan en grupos, más del 70% busca VIP Escorts en Buenos Aires con fotos reales y contacto directo. Tiene sentido, nadie quiere perder tiempo.</p>
                    <p>
                        Una escort independiente me dijo una vez:<br/>
                        <q>Si el cliente viene tranquilo y respetuoso, todo sale mejor para los dos.</q><br/>
                        Y es verdad.
                    </p>
                </article>
                <hr/>
                <article>
                    <header>
                        <h3>PRECIOS</h3>
                    </header>
                    <p>Los precios cambian un montón. Palermo y Recoleta suelen ser más caros. Microcentro también, depende del hotel. Algunas Escorts femeninas en Argentina trabajan solo con tarifas fijas y no quieren negociar nada. Los Escorts masculinos en Argentina a veces ofrecen acompañamiento social o cenas, y eso sube la tarifa. Cada uno marca su línea.</p> 
                </article>
                <hr/>
                <article>
                    <header>
                        <h3>Cómo elegir sin que te caguen </h3>
                    </header>
                    <p>Fijate:</p>
                    <ul>
                        <li>fotos sin filtros locos</li>
                        <li>perfil claro</li>
                        <li>forma de escribir</li>
                        <li>si responde bien</li>
                        <li>si parece persona real</li>
                    </ul>
                    <p>Cuando algo no te cierra, salí.</p>
                </article>
                <hr/>
                <article>
                    <h3>FAQ rápido</h3>
                    <details>
                        <summary>¿Las fotos son reales?</summary>
                        <p>Sí, acá sí.</p>
                    </details>
                    <details>
                        <summary>¿Puedo negociar precio?</summary>
                        <p>No, no da.</p>
                    </details>
                    <details>
                        <summary>¿Hay Escorts masculinos en Argentina?</summary>
                        <p>Sí, cada vez más.</p>
                    </details>
                    <details>
                        <summary>¿Hotel?</summary>
                        <p>Depende de la profesional.</p>
                    </details>
                    <details>
                        <summary>¿Cómo contacto?</summary>
                        <p>WhatsApp o llamada.</p>
                    </details>
                </article>
            </section> : null}
            {toggle === '105' ? 
            <section className="box_article_home">
                <article>
                    <header>
                        <h2>¿Qué es Asmodeo.net?</h2>
                    </header>
                    <p>Si alguna vez buscaste acompañantes en Buenos Aires o simplemente te picó la curiosidad, seguro encontraste páginas parecidas. Asmodeo.net funciona como un sitio donde distintas personas que trabajan como escorts o masajistas publican sus perfiles. Nada de agencia, nada de intermediarios raros. El sitio no arma encuentros ni decide precios. Tampoco te dice qué podés o no podés hacer. Cada persona publicada maneja su propio trabajo.</p>
                    <p>La idea es simple: alguien sube su perfil, vos lo ves, charlan por WhatsApp o donde acuerden, y listo. Todo queda entre ustedes dos. El sitio solamente organiza y mantiene el espacio para que sea fácil encontrar a alguien cerca de tu zona.</p>
                    <p>
                        Durante 2024 se habló bastante del aumento del trabajo independiente en este rubro. Un periodista de un medio local comentó en una nota:<br/>
                        <q>Hoy muchas trabajadoras prefieren manejarse solas porque sienten que tienen más control y menos riesgos.</q><br/>
                        Y tiene sentido. Si alguien fija sus horarios y elige a quién atender, suele sentirse más segura.
                    </p>
                </article>
                <article>
                    <header>
                        <h3>¿Qué significa “escort”?</h3>
                    </header>
                    <p>En teoría, la palabra viene de “acompañar”. Con el tiempo se empezó a usar para hablar de mujeres (y hombres también, aunque menos visible) que ofrecen compañía sensual o sexual a cambio de dinero. Pero ojo: no todas las escorts tienen sexo con los clientes. Algunas solo acompañan en eventos, otras hacen masajes, y hay quienes prefieren trabajar solo por videollamada.</p>
                    <p>Con los últimos años, mucha gente empezó a buscar experiencias virtuales. Algunos dicen que es por comodidad, otros porque se sienten menos expuestos. Después de la pandemia, quedó esa costumbre de hacer todo por teléfono o video.</p>
                </article>
                <article>
                    <header>
                        <h3>Sobre el lenguaje</h3>
                    </header>
                    <p>En Argentina es común escuchar palabras feas como “puta” o “prostituta” usadas de manera despectiva. Más allá del significado literal, suenan agresivas. Deshumanizan. Por eso muchas personas prefieren el término “escort” o “acompañante”. Es más respetuoso y describe mejor lo que realmente hacen.</p>
                </article>
                <article>
                    <header>
                        <h3>¿Es prostitución?</h3>
                    </header>
                    <p>Depende de a quién le preguntes. La prostitución clásica se asocia a la calle, a burdeles, a alguien manejando el negocio desde afuera. Una escort independiente trabaja distinto: publica online, elige clientes, fija límites y decide qué ofrece.</p>
                    <p>Hay quienes nunca tienen sexo con clientes y se enfocan en masajes, compañía o experiencias sensuales sin contacto. Así que meter todo en la misma bolsa no tiene mucho sentido</p>                
                </article>
                <hr />
                <article>
                    <header>
                        <h3>¿Es legal trabajar como escort?</h3>
                    </header>
                    <p>En Argentina, el trabajo sexual independiente es legal. Lo que está prohibido es el proxenetismo, es decir, cuando alguien organiza el trabajo de otras personas y se queda con parte de la plata. Por eso los famosos “privados” o lugares donde hay varias chicas bajo un encargado suelen tener problemas legales.</p>
                    <p>En Asmodeo.net solo aparecen perfiles independientes. Nadie les cobra comisión ni les maneja el trabajo.</p>
                </article>
                <article>
                    <header>
                        <h3>¿Es legal contratar?</h3>
                    </header>
                    <p>Sí, siempre y cuando el acuerdo sea entre la persona que ofrece el servicio y el cliente. El problema aparece cuando alguien contrata en un “privado” y sin saberlo termina financiando a un proxeneta. Ahí sí hay delito, aunque el cliente muchas veces ni lo sabe.</p>
                </article>
                <article>
                    <header>
                        <h3>¿Quiénes contratan?</h3>
                    </header>
                    <p>Acá hay de todo. Hombres casados, solteros, mujeres curiosas, parejas abiertas, gente que viaja por trabajo y quiere pasar un buen rato, incluso adultos mayores que buscan cariño o compañía. En redes, durante 2025, circuló una encuesta donde el dato más repetido fue la búsqueda de discreción. A mucha gente le preocupa más eso que el precio.</p>
                </article>
                <article>
                    <header>
                        <h3>Tipos de escorts</h3>
                    </header>
                    <p>No hay una sola forma de trabajar. Algunas se promocionan como VIP, con fotos de estudio, ropa cara y estética muy cuidada. Apuntan a clientes con mayor presupuesto.</p>
                    <p>También están las escorts maduras, muy buscadas por jóvenes. Muchos tienen la fantasía típica de la “MILF”. Ellas suelen tener más experiencia y seguridad en su oficio.</p>
                    <p>Las masajistas sensuales ofrecen algo distinto. Algunas trabajan en camillas, con aceites, música tranquila. No siempre hay sexo, pero sí un ambiente íntimo.</p>
                    <p>Después están las que cumplen fantasías específicas: dominación, fetiches, juguetes, ropa especial. Ese mundo es más caro y requiere confianza.</p>
                    <p>Y, claro, las virtuales crecieron muchísimo. Videollamadas, fotos personalizadas, sexting. Mucha gente prefiere eso.</p>
                </article>
                <article>
                    <header>
                        <h3>¿Dónde atienden?</h3>
                    </header>
                    <p>Algunas tienen departamento propio preparado para recibir. Es cómodo y privado. Otras prefieren hotel, que da seguridad a ambas partes. También existen las que van a domicilio, aunque suelen pedir referencias básicas. Lógico, nadie quiere meterse en una casa desconocida sin saber nada.</p>
                </article>
                <article>
                    <header>
                        <h3>¿Cómo contactar?</h3>
                    </header>
                    <p>Lo normal es entrar al sitio, buscar a alguien cerca, mirar fotos y leer qué ofrece. Después se escribe con respeto, se pregunta lo necesario y se acuerda un horario. Si las dos partes cumplen, la experiencia suele ser buena.</p>
                </article>
                <hr />
                <article>
                    <header>
                        <h3>¿Por qué algunas chicas eligen ser escort?</h3>
                    </header>
                    <p>
                        Depende. Hay chicas que dicen que ganan más que en trabajos de oficina. Una trabajadora de Capital comentó una vez:<br/>
                        <q>Prefiero elegir mis horarios y mis clientes. Me siento más tranquila.</q><br/>
                        Pero también requiere responsabilidad y cuidado.
                    </p>
                </article>
                <article>
                    <header>
                        <h3>¿Cómo comenzaron?</h3>
                    </header>
                    <p>La mayoría recomienda comenzar en hotel. Evitar los privados es clave. Además de ilegales, suelen quedarse con la mitad del dinero o más. Poner límites claros desde el principio ayuda muchísimo.</p>
                    <p>Asmodeo.net funciona como punto de encuentro. No juzga, no maneja agendas ni dinero. Simplemente conecta a quienes quieren ofrecer servicios con quienes buscan una experiencia. Respeto y claridad hacen que todo fluya mejor.</p>
                </article>
            </section> : null}
            {toggle === '205' ? 
            <section className="box_article_home">
                <article>
                    <div>
                        <header>
                            <h2>Guía para usuarios y escorts en Asmodeo</h2>
                        </header>
                        <p>Cuando alguien entra a Asmodeo por primera vez, suele pasar lo mismo: curiosidad, un poco de nervios y varias preguntas dando vueltas. A muchos les da pudor admitirlo, pero es normal. Contratar una escort no es algo que se aprende de un día para el otro, y aunque parezca sencillo, hay detalles que hacen toda la diferencia. Quienes ya tienen experiencia lo saben: cuando las dos partes respetan lo acordado, el encuentro fluye y todos quedan conformes.</p>
                        <p>En los últimos años pasó algo llamativo. Entre 2024 y 2025 aumentó muchísimo el uso de sitios independientes para contactar escorts en Argentina. Un informe del sector habló de un crecimiento arriba del 30 por ciento en consultas online. Eso muestra que cada vez más gente busca encuentros privados sin depender de intermediarios. Pero ese aumento también trajo estafas, malos entendidos y problemas que antes no se veían tanto. Por eso vale la pena hablar claro.</p>
                    </div>
                    <div>
                        <header>
                            <h3>Respeto, siempre</h3>
                        </header>
                        <p>Lo básico: las escorts, masajistas y acompañantes maduras son trabajadoras. No hay vuelta. Ofrecen un servicio y esperan ser tratadas con respeto. Algunas personas todavía miran el rubro con prejuicios, pero eso no cambia la realidad. Si llegás con soberbia o querés imponer cosas, la experiencia se arruina. Una trabajadora de Capital Federal lo dijo en una entrevista en 2024: “El respeto no es un plus, es lo mínimo”. Esa frase resume todo.</p>
                    </div>
                    <div>
                        <header>
                            <h3>Cumplir lo acordado</h3>
                        </header>
                        <p>Si pactaste un horario, llegá. Si se habló de duración, respetala. La higiene, la puntualidad y el trato cordial no son detalles; son la base de un buen encuentro. Muchos clientes terminan volviendo con la misma escort porque cumplen lo que prometen. Parece obvio, pero no siempre pasa.</p>
                    </div>
                    <div>
                        <header>
                            <h3>Sacarse las dudas antes</h3>
                        </header>
                        <p>A veces la gente coordina rápido, paga o reserva y después se da cuenta de que no entendió bien qué incluía el servicio. Evitalo. Preguntá todo antes: zona, tipo de servicio, límites, si atiende en departamento privado, hotel o a domicilio. No molestás por preguntar. Todo lo contrario, ayuda a evitar situaciones incómodas.</p>
                        <p>En Pkadoras.com usan un sistema de verificación interna que inspiró a varias plataformas, incluida Asmodeo, a promover perfiles más claros. No es lo mismo enviar un mensaje sin contexto que hablar con alguien que ya tiene referencias.</p>
                    </div>
                    <div>
                        <header>
                            <h3>Videollamadas y packs</h3>
                        </header>
                        <p>El tema de los packs y videollamadas se volvió muy común. También crecieron las estafas, especialmente en redes sociales abiertas. Si vas a pagar por adelantado, buscá alguna referencia. Comentarios, reseñas, algo. Si nada te cierra, no sigas. Mejor perder una oportunidad que perder plata.</p>
                    </div>
                    <div>
                        <header>
                            <h3>Sexo seguro</h3>
                        </header>
                        <p>Esto no se negocia. Prácticas de riesgo no sólo ponen en peligro a vos y a la escort, sino también a terceros. En 2025, organismos de salud insistieron en que el uso correcto de protección reduce el riesgo de transmisión de infecciones casi por completo. No es un capricho. Es responsabilidad.</p>
                    </div>
                    <div>
                        <header>
                            <h3>No confundas los roles</h3>
                        </header>
                        <p>Muchas personas creen que la escort está buscando un vínculo romántico o emocional. No funciona así. Podés ser amable, simpático, seductor, pero mandar mensajes cada dos horas, pedir fotos o intentar avanzar más allá del acuerdo sólo genera incomodidad. Si querés enamorarte, buscá otra cosa. Acá el objetivo es claro y profesional.</p>
                    </div>
                    <div>
                        <header>
                            <h3>Expectativas reales</h3>
                        </header>
                        <p>Lo que ves en contenido para adultos está editado, iluminado y pensado para cámara. En la vida real es distinto. Las escorts pueden tener varios turnos en un día, así que no esperes actuaciones de película. Disfrutá el momento sin compararlo con lo que viste online.</p>
                    </div>
                    <div>
                        <header>
                            <h3>Informarte ayuda</h3>
                        </header>
                        <p>Si todavía sentís dudas, leer experiencias ajenas sirve. El blog del sitio suele publicar notas con consejos reales: hoteles recomendados, seguridad personal, cómo manejar pagos y evitar riesgos. Vale la pena darse una vuelta.</p>
                    </div>
                    <div>
                        <header>
                            <h3>Soltarse un poco</h3>
                        </header>
                        <p>Cuando dejás los nervios de lado, todo sale mejor. Una experiencia con una escort puede ser muy placentera si se vive con naturalidad. No hace falta actuar ni demostrar nada. Sólo disfrutar.</p>
                    </div>
                </article>
                <hr />
                <article>
                    <div>
                        <header>
                            <h2>Consejos para escorts que trabajan en Asmodeo</h2>
                        </header>
                        <p>Del otro lado también hay cosas importantes. Muchas escorts que trabajan de forma independiente comentan que la organización es clave. Las que llevan registro, cuidan su imagen y manejan bien las consultas suelen tener mejores resultados.</p>
                    </div>
                    <div>
                        <header>
                            <h3>Separar lo personal de lo laboral</h3>
                        </header>
                        <p>Evitar mezclar fotos familiares con material de trabajo es fundamental. No sólo por seguridad, también por privacidad. Varias escorts contaron que al usar la misma foto que tienen en redes sociales empezaron a recibir mensajes fuera de contexto. Mantener todo separado evita problemas.</p>
                    </div>
                    <div>
                        <header>
                            <h3>Control de tarifas</h3>
                        </header>
                        <p>Un consejo simple: anotar las consultas y citas concretadas cada mes. En 2024, muchas trabajadoras ajustaron sus tarifas cuando empezaron a ver patrones. Algunas cobraban poco para el nivel de demanda que tenían. Ese tipo de registro ayuda más de lo que parece.</p>
                    </div>
                    <div>
                        <header>
                            <h3>Buena organización</h3>
                        </header>
                        <p>Superponer turnos o aceptar demasiadas citas en un mismo día termina afectando la calidad del servicio. La mayoría de los clientes busca calma y privacidad. Si la escort está apurada o cansada, se nota.</p>
                    </div>
                    <div>
                        <header>
                            <h3>Fotos que representen</h3>
                        </header>
                        <p>No hace falta contratar un estudio. Los celulares actuales sacan buenas fotos. Lo importante es que las imágenes reflejen cómo sos de verdad. Las fotos excesivamente retocadas generan desconfianza.</p>
                    </div>
                    <div>
                        <header>
                            <h3>Información clara</h3>
                        </header>
                        <p>Tener un texto preparado con horarios, servicios y tarifas facilita todo. Enviarlo por WhatsApp evita repreguntas eternas. La claridad atrae a clientes serios.</p>
                    </div>
                    <div>
                        <header>
                            <h3>Manejo de consultas</h3>
                        </header>
                        <p>Siempre aparece alguien que pregunta mil cosas y nunca concreta. Lo mejor es cortar por lo sano. Ignorar o bloquear sin insultos ni discusiones. Perder tiempo con gente así desgasta.</p>
                    </div>
                    <div>
                        <header>
                            <h3>Respetarte a vos misma</h3>
                        </header>
                        <p>Si no querés ofrecer algo, no lo hacés. Punto. Ser honesta desde el principio evita conflictos. Marcar límites no significa ser agresiva.</p>
                    </div>
                    <div>
                        <header>
                            <h3>Cumplir acuerdos</h3>
                        </header>
                        <p>Cuando hay pagos anticipados, la responsabilidad es cumplir o devolver el dinero. Si no, la reputación se cae y arrastra a toda la comunidad.</p>
                        <p>Asmodeo condena cualquier tipo de violencia o acoso hacia mujeres, sean o no escorts. Usar el sitio implica asumir responsabilidad por las propias acciones.</p>
                    </div>
                </article>
            </section> : null}
        </div>
    )
}