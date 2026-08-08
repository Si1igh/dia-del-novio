let currentMemory = 0;

/* =========================
LEVEL 01 · NUESTRA HISTORIA
========================= */

const memories = [

    {
        date: "03 · MAY · 2026",
        title: "EL COMIENZO",
        icon: "🌊",

        text: `
            Nos conocimos gracias a unos amigos
            que organizaron una salida a la playa.

            <br><br>

            Fuimos todos juntos a la playa
            y después a comer.

            <br><br>

            Cuando nos sentamos, hablamos un poco.

            <br><br>

            Y cuando llegué a casa,
            te agradecí por haberme invitado a comer.

            <br><br>

            Sin saberlo, esa conversación iba a ser
            el comienzo de todo.
        `,

        video: null
    },


    {
        date: "03 · MAY · 2026",
        title: "LOS JUEGOS",
        icon: "🐭",

        text: `
            Ese mismo día terminamos jugando
            los cuatro en Chuck E. Cheese.

            <br><br>

            Aunque ustedes alcanzaron a pagar
            y recargar la tarjeta...

            <br><br>

            después tuvieron que irse porque
            estaban todos mojados. 😂
        `,

        video: "media/raton%20cec.mp4"
    },


    {
        date: "04 · MAY · 2026",
        title: "TOMODACHI",
        icon: "🎪",

        text: `
            Al día siguiente me invitaste
            a la feria Tomodachi.

            <br><br>

            Y después de ese día seguimos hablando.

            <br><br>

            Y hablando.

            <br><br>

            Y hablando.

            <br><br>

            Hasta que empezamos a vernos
            prácticamente todos los días.
        `,

        videos: [
            "media/foto%20dumb.mp4",
            "media/foto%20plaza.mp4",
            "media/foto%20pulseras.mp4"
        ]
    },


    {
        date: "09 · MAY · 2026",
        title: "DÍA 07",
        icon: "💙",

        text: `
            Solo habían pasado siete días
            desde que nos conocimos.
        `,

        special: `
            Y después de solamente una semana...

            <br><br>

            <strong>
                nos hicimos novios.
            </strong>
        `,

        video: "media/primera%20foto.mp4"
    },


    {
        date: "24 · MAY · 2026",
        title: "NUESTRO HOGAR",
        icon: "🏠",

        text: `
            Empezó el círculo.

            <br><br>

            Yo iba a tu casa.

            <br>

            Tú venías a la mía.

            <br><br>

            Hasta que dejamos de pensar
            en cuál casa nos tocaba estar.

            <br><br>

            Y aproximadamente el 24 de mayo,
            empezamos a vivir juntos.
        `,

        video: null
    },


    {
        date: "UNO DE NUESTROS MEJORES DÍAS",
        title: "EL MAR",
        icon: "🌅",

        text: `
            El mar.

            <br>

            La arena.

            <br>

            El atardecer.

            <br><br>

            Uno de nuestros mejores días.
        `,

        videos: [
            "media/playa.mp4",
            "media/foto%20polaroid.mp4",
            "media/foto%20polaroid%202.mp4"
        ]
    }

];


/* =========================
INICIO
========================= */

function startGame() {

    document
        .getElementById("welcomeScreen")
        .classList
        .add("hidden");

    document
        .getElementById("loadingScreen")
        .classList
        .remove("hidden");

    const progress =
        document.getElementById("progress");

    setTimeout(() => {

        progress.style.width = "100%";

    }, 100);

    let number = 0;

    const counter = setInterval(() => {

        number += 4;

        if (number >= 100) {

            number = 100;

            clearInterval(counter);

            setTimeout(() => {

                document
                    .getElementById("loadingScreen")
                    .classList
                    .add("hidden");

                document
                    .getElementById("menuScreen")
                    .classList
                    .remove("hidden");

            }, 500);
        }

        document
            .getElementById("percentage")
            .textContent =
            number + "%";

    }, 100);
}


/* =========================
LEVEL 01
========================= */

function openLevel1() {

    document
        .getElementById("menuScreen")
        .classList
        .add("hidden");

    document
        .getElementById("level1")
        .classList
        .remove("hidden");

    currentMemory = 0;

    showMemory();
}


function showMemory() {

    const memory =
        memories[currentMemory];

    let days = "";

    if (currentMemory === 3) {

        days = `

            <div class="days">

                <div class="day active">01</div>
                <div class="day active">02</div>
                <div class="day active">03</div>
                <div class="day active">04</div>
                <div class="day active">05</div>
                <div class="day active">06</div>
                <div class="day active">07</div>

            </div>

        `;
    }


    let media = "";

    if (memory.video) {

        media = `

            <video
                class="memory-video"
                controls
                playsinline
                preload="metadata"
            >

                <source
                    src="${memory.video}"
                    type="video/mp4"
                >

                Tu navegador no puede reproducir este video.

            </video>

        `;
    }


    if (memory.videos) {

        memory.videos.forEach(video => {

            media += `

                <video
                    class="memory-video"
                    controls
                    playsinline
                    preload="metadata"
                >

                    <source
                        src="${video}"
                        type="video/mp4"
                    >

                    Tu navegador no puede reproducir este video.

                </video>

            `;

        });
    }


    const special =
        memory.special
            ? `
                <div class="memory-highlight">
                    ${memory.special}
                </div>
              `
            : "";


    const isLast =
        currentMemory ===
        memories.length - 1;


    document
        .getElementById("memoryContent")
        .innerHTML = `

            <div class="memory-number">

                MEMORY
                ${String(currentMemory + 1).padStart(3, "0")}

                /

                ${String(memories.length).padStart(3, "0")}

            </div>


            <div class="memory-date">

                ${memory.date}

            </div>


            <div class="memory-icon">

                ${memory.icon}

            </div>


            <div class="memory-title">

                ${memory.title}

            </div>


            <div class="memory-text">

                ${memory.text}

            </div>


            ${media}

            ${days}

            ${special}


            <button
                class="button"
                onclick="nextMemory()"
            >

                ${
                    isLast
                        ? "✓ LEVEL COMPLETE"
                        : "NEXT MEMORY →"
                }

            </button>

        `;
}


function nextMemory() {

    if (
        currentMemory <
        memories.length - 1
    ) {

        currentMemory++;

        showMemory();

    } else {

        completeLevel();

    }
}


function completeLevel() {

    document
        .getElementById("memoryContent")
        .innerHTML = `

            <div class="complete">

                LEVEL 01 COMPLETE ✓

            </div>


            <div class="big-heart">

                💙

            </div>


            <div class="memory-title">

                Y EL RESTO
                <br>
                ES HISTORIA

            </div>


            <div class="memory-text">

                Todo comenzó con una salida
                a la playa.

                <br><br>

                Y de alguna manera terminamos aquí.

                <br><br>

                Todavía nos queda mucha historia
                por escribir.

            </div>


            <button
                class="button"
                onclick="backToMenu()"
            >

                ← RETURN TO ARCHIVE

            </button>

        `;
}


/* =========================
LEVEL 02 · SOBRE TI
========================= */

function openLevel2() {

    document
        .getElementById("menuScreen")
        .classList
        .add("hidden");

    document
        .getElementById("level1")
        .classList
        .remove("hidden");

    showLevel2();
}


function showLevel2() {

    document
        .getElementById("memoryContent")
        .innerHTML = `

            <div class="memory-number">
                PLAYER PROFILE · 002
            </div>


            <div class="memory-date">
                MEMORY CARD
            </div>


            <div class="memory-icon">
                🎮
            </div>


            <div class="memory-title">
                BRAYAN
            </div>


            <div class="memory-text">

                <div class="profile-card">

                    <div class="profile-header">

                        <span>
                            PLAYER 01
                        </span>

                        <span>
                            STATUS: ACTIVE
                        </span>

                    </div>


                    <div class="profile-name">
                        BRAYAN
                    </div>


                    <div class="profile-line"></div>


                    <div class="profile-stat">

                        <span class="profile-label">
                            MAIN GAME
                        </span>

                        <span class="profile-value">
                            Dragon Ball: Sparking! ZERO
                        </span>

                    </div>


                    <div class="profile-stat">

                        <span class="profile-label">
                            FAVORITE WORLDS
                        </span>

                        <span class="profile-value">
                            Dragon Ball · One Piece
                        </span>

                    </div>


                    <div class="profile-stat">

                        <span class="profile-label">
                            TEAM
                        </span>

                        <span class="profile-value">
                            Santiago Wanderers
                        </span>

                    </div>


                    <div class="profile-stat">

                        <span class="profile-label">
                            BAND
                        </span>

                        <span class="profile-value">
                            Avenged Sevenfold
                        </span>

                    </div>


                    <div class="profile-stat">

                        <span class="profile-label">
                            FREE TIME
                        </span>

                        <span class="profile-value">
                            Juegos online · juntas · tocatas
                        </span>

                    </div>


                    <div class="profile-stat">

                        <span class="profile-label">
                            FAVORITE LOADOUT
                        </span>

                        <span class="profile-value">
                            🌭 Chaparritas · 🍟 Papas fritas · 🍕 Underpizza
                        </span>

                    </div>


                    <div class="profile-stat">

                        <span class="profile-label">
                            SIGNATURE ITEM
                        </span>

                        <span class="profile-value">
                            🎮 Mando de PlayStation
                        </span>

                    </div>

                </div>

            </div>


            <div class="memory-highlight">

                Hay muchas cosas que hacen que seas tú.

                <br><br>

                Pero creo que una de las que más me gusta
                es que disfrutas las cosas que amas
                sin necesitar demasiado.

                <br><br>

                Un juego, música, comida rica,
                tus amigos, las mascotas...

                <br>

                y yo.

            </div>


            <button
                class="button"
                onclick="level2Next()"
            >

                CONTINUE →

            </button>

        `;
}


function level2Next() {

    document
        .getElementById("memoryContent")
        .innerHTML = `

            <div class="memory-number">
                PLAYER PROFILE · 002
            </div>


            <div class="memory-date">
                FAVORITES
            </div>


            <div class="memory-icon">
                🎸
            </div>


            <div class="memory-title">
                SU MUNDO
            </div>


            <div class="memory-text">

                <div class="favorite-grid">

                    <div class="favorite-item">

                        <div class="favorite-icon">
                            🐉
                        </div>

                        <div class="favorite-name">
                            DRAGON BALL
                        </div>

                        <div class="favorite-description">
                            Uno de sus mundos favoritos.
                        </div>

                    </div>


                    <div class="favorite-item">

                        <div class="favorite-icon">
                            ☠️
                        </div>

                        <div class="favorite-name">
                            ONE PIECE
                        </div>

                        <div class="favorite-description">
                            Otra de sus grandes obsesiones.
                        </div>

                    </div>


                    <div class="favorite-item">

                        <div class="favorite-icon">
                            ⚽
                        </div>

                        <div class="favorite-name">
                            SANTIAGO WANDERERS
                        </div>

                        <div class="favorite-description">
                            Su equipo.
                        </div>

                    </div>


                    <div class="favorite-item">

                        <div class="favorite-icon">
                            🎸
                        </div>

                        <div class="favorite-name">
                            AVENGED SEVENFOLD
                        </div>

                        <div class="favorite-description">
                            Su banda favorita.
                            <br>
                            LIVE · JAN 2026
                        </div>

                    </div>

                </div>

            </div>


            <div class="memory-highlight">

                Y entre juegos, música, fútbol,
                amigos y comida...

                <br><br>

                también están esos momentos
                en los que simplemente
                pasamos tiempo juntos.

            </div>


            <button
                class="button"
                onclick="completeLevel2()"
            >

                ✓ COMPLETE LEVEL

            </button>

        `;
}


function completeLevel2() {

    document
        .getElementById("memoryContent")
        .innerHTML = `

            <div class="complete">

                LEVEL 02 COMPLETE ✓

            </div>


            <div class="big-heart">

                🎮💙

            </div>


            <div class="memory-title">

                PLAYER
                <br>
                IDENTIFIED

            </div>


            <div class="memory-text">

                Ahora sé un poquito más
                sobre el jugador.

                <br><br>

                Pero todavía queda mucho
                por descubrir.

            </div>


            <button
                class="button"
                onclick="backToMenu()"
            >

                ← RETURN TO ARCHIVE

            </button>

        `;
}


/* =========================
LEVEL 03 · NUESTROS RECUERDOS
========================= */

function openLevel3() {

    document
        .getElementById("menuScreen")
        .classList
        .add("hidden");

    document
        .getElementById("level1")
        .classList
        .remove("hidden");

    showLevel3();
}


function showLevel3() {

    document
        .getElementById("memoryContent")
        .innerHTML = `

            <div class="memory-number">
                MEMORY ARCHIVE · 003
            </div>


            <div class="memory-date">
                RECUERDOS PEQUEÑOS
            </div>


            <div class="memory-icon">
                📸
            </div>


            <div class="memory-title">
                ESOS MOMENTOS
            </div>


            <div class="memory-text">

                No todos nuestros recuerdos
                necesitan una fecha.

                <br><br>

                Algunos simplemente existen.

                <br><br>

                Una foto.

                <br>

                Un beso.

                <br>

                Un momento juntos.

                <br><br>

                Y aunque parezcan pequeños,
                terminan significando muchísimo.

            </div>


            <button
                class="button"
                onclick="level3Memory1()"
            >

                OPEN MEMORY →

            </button>

        `;
}


function level3Memory1() {

    document
        .getElementById("memoryContent")
        .innerHTML = `

            <div class="memory-number">
                MEMORY 001 · PRIVATE
            </div>


            <div class="memory-date">
                UN MOMENTO JUNTOS
            </div>


            <div class="memory-title">
                UN BESO
            </div>


            <img
                class="memory-photo"
                src="media/foto%20hospital.jpg"
                alt="Foto juntos"
            >


            <div class="memory-highlight">

                Hay momentos en los que
                simplemente estar juntos
                ya significa mucho.

                <br><br>

                Y este es uno de ellos.

            </div>


            <button
                class="button"
                onclick="level3Memory2()"
            >

                NEXT MEMORY →

            </button>

        `;
}


function level3Memory2() {

    document
        .getElementById("memoryContent")
        .innerHTML = `

            <div class="memory-number">
                MEMORY 002 · PRIVATE
            </div>


            <div class="memory-date">
                NO RECUERDO EL LUGAR
            </div>


            <div class="memory-title">
                PERO SÍ EL BESO
            </div>


            <img
                class="memory-photo"
                src="media/foto%20kiss%201.jpg"
                alt="Foto de un beso"
            >


            <div class="memory-highlight">

                No recuerdo exactamente
                dónde fue.

                <br><br>

                Pero sí recuerdo
                lo tierno que se siente
                mirar esta foto.

            </div>


            <button
                class="button"
                onclick="completeLevel3()"
            >

                ✓ COMPLETE LEVEL

            </button>

        `;
}


function completeLevel3() {

    document
        .getElementById("memoryContent")
        .innerHTML = `

            <div class="complete">

                LEVEL 03 COMPLETE ✓

            </div>


            <div class="big-heart">

                💙

            </div>


            <div class="memory-title">

                PEQUEÑOS
                <br>
                MOMENTOS

            </div>


            <div class="memory-text">

                Quizás no podamos recordar
                exactamente dónde ocurrió
                cada momento.

                <br><br>

                Pero sí podemos recordar
                cómo nos hizo sentir.

                <br><br>

                Y creo que eso es lo que
                hace que un recuerdo
                sea realmente nuestro.

            </div>


            <button
                class="button"
                onclick="backToMenu()"
            >

                ← RETURN TO ARCHIVE

            </button>

        `;
}


/* =========================
LEVEL 04 · UNA CARTA PARA TI
========================= */

let letterPage = 0;


const letterPages = [

    {
        date: "PARA TI, BRAYAN",
        icon: "💙",

        text: `
            no sé muy bien cómo empezar esta carta jaja,
            porque siento que podría escribir muchísimo
            y aun así me quedarían cosas por decir.

            <br><br>

            A veces pienso en cómo empezó todo
            y todavía me parece demasiado random
            que una salida a la playa terminara
            cambiándonos la vida de esta forma.

            <br><br>

            Literalmente nos conocimos el 3 de mayo,
            fuimos a comer, terminamos en el Chuck E. Cheese,
            después me invitaste a la feria Tomodachi
            y seguimos hablando y hablando hasta que,
            sin darnos cuenta,
            ya estábamos viéndonos prácticamente todos los días.

            <br><br>

            Y después de una semana ya éramos novios JAJA.

            <br><br>

            Es demasiado loco pensar que llevábamos
            tan poquito tiempo conociéndonos
            y aun así terminamos llegando tan lejos.
        `
    },


    {
        date: "TODO LO QUE PASÓ",
        icon: "🌊",

        text: `
            En tan poco tiempo pasaron demasiadas cosas.

            <br><br>

            Empezamos a ir a nuestras casas,
            después ya ni importaba mucho cuál era
            “nuestra” casa porque simplemente estábamos juntos,
            y terminamos construyendo una vida compartida.

            <br><br>

            Y creo que una de las cosas que más me gusta
            de nosotros es justamente eso.

            <br><br>

            Que no todo tiene que ser algo enorme.

            <br><br>

            A veces somos simplemente tú y yo
            haciendo cualquier tontera,
            jugando algo, comiendo alguna cosa,
            estando con las mascotas, saliendo,
            viendo algo o simplemente estando juntos
            sin hacer absolutamente nada.

            <br><br>

            Y aun así esos momentos terminan
            siendo de mis favoritos.
        `
    },


    {
        date: "CONOCERTE",
        icon: "🎮",

        text: `
            Me gusta conocerte en esas pequeñas cosas
            que quizás para otras personas no significan tanto.

            <br><br>

            Sé que te encanta jugar,
            que Dragon Ball y One Piece
            son parte de tu mundo,
            que puedes pasar horas jugando online,
            que te gusta salir a juntas o ir a tocatas
            cuando puedes,
            que eres demasiado Wanderers JAJA
            y que Avenged Sevenfold es literalmente
            otra parte importante de ti.

            <br><br>

            También sé que si aparece una chaparrita,
            unas papas fritas o algo del Underpizza
            probablemente vas a decir que sí
            sin pensarlo demasiado.

            <br><br>

            Y sí, también siento que un mando de Play
            es probablemente uno de los objetos
            más Brayan que existen. 😭

            <br><br>

            Pero más allá de todas esas cosas,
            me gusta conocerte a ti.

            <br><br>

            Al Brayan que existe detrás de todas esas cosas.

            <br><br>

            Al que se ríe conmigo.
            <br>
            Al que me acompaña.
            <br>
            Al que comparte conmigo sus días.

            <br><br>

            Al que se ha convertido en una parte tan grande
            de mi vida que ya cuesta imaginar muchas cosas
            sin pensar en ti.
        `
    },


    {
        date: "LO QUE HEMOS CONSTRUIDO",
        icon: "🏠",

        text: `
            También hemos tenido momentos difíciles,
            obviamente.

            <br><br>

            No todo ha sido perfecto y los dos sabemos
            que hemos pasado por cosas que no siempre
            han sido fáciles.

            <br><br>

            Pero incluso con eso, cuando pienso
            en nuestra historia,
            no quiero quedarme solamente
            con los momentos malos.

            <br><br>

            Quiero quedarme con todo lo que hemos construido.

            <br><br>

            Con todas las veces que nos hemos elegido.

            <br><br>

            Con todos esos días que quizás
            en el momento parecían normales
            y que ahora, cuando los recuerdo,
            se sienten importantes.

            <br><br>

            Quiero quedarme con las fotos tontas.

            <br>
            Con los besitos.

            <br>
            Con las pulseras.

            <br>
            Con el mar.

            <br>
            Con la playa.

            <br>
            Con los días en que simplemente
            estuvimos juntos.

            <br><br>

            Con todas esas pequeñas cosas
            que probablemente nunca imaginamos
            que algún día iban a convertirse
            en recuerdos que iba a querer guardar
            para siempre.
        `
    },


    {
        date: "Y TODAVÍA NOS QUEDA",
        icon: "💙",

        text: `
            Y creo que eso es lo bonito de nosotros, mamor.

            <br><br>

            Que nuestra historia no está hecha
            solamente de grandes momentos.

            <br><br>

            Está hecha de un montón de momentos pequeños
            que fuimos juntando hasta terminar
            formando algo enorme.

            <br><br>

            Y no sé qué nos espera después de todo esto.

            <br><br>

            No sé cómo va a verse nuestra vida
            dentro de un año, ni dentro de cinco,
            ni qué cosas vamos a terminar
            viviendo juntos.

            <br><br>

            Pero sí sé que me gusta pensar
            en todo lo que todavía nos queda por vivir.

            <br><br>

            Todavía nos quedan muchas fotos.
            <br>
            Muchas salidas.
            <br>
            Muchas comidas.
            <br>
            Muchas partidas.
            <br>
            Muchas tonteras.
            <br>
            Muchos días buenos.

            <br><br>

            Y probablemente también algunos días difíciles,
            porque así es la vida.

            <br><br>

            Pero espero que incluso en esos días
            podamos seguir encontrando la forma
            de volver a mirarnos y recordar
            todo lo que hemos construido.
        `
    },


    {
        date: "GRACIAS, AMOR",
        icon: "🫶",

        text: `
            Cariño, gracias por todos los momentos
            bonitos que me has dado.

            <br><br>

            Gracias por las risas,
            por los recuerdos,
            por las salidas,
            por las tonteras
            y por todas esas pequeñas cosas
            que quizás ni siquiera sabes
            que significan tanto para mí.

            <br><br>

            Gracias por formar parte de mi vida
            de una manera que nunca imaginé
            cuando te conocí aquel dia de mayo.

            <br><br>

            Porque si alguien me hubiera dicho ese día
            que ese chico con el que estaba hablando
            iba a terminar siendo mi pololo,
            mi compañero,
            la persona con la que iba a compartir mi casa,
            mis días y tantos recuerdos...

            <br><br>

            probablemente me habría reído.

            <br><br>

            Y míranos ahora. JAJA.
        `
    },


    {
        date: "PARA TI",
        icon: "💙",

        text: `
            Te amo, mamor.

            <br><br>

            Y aunque probablemente nunca voy a saber
            cómo escribir exactamente todo lo que siento
            por ti,
            espero que cuando leas esto puedas entender
            aunque sea un poquito.

            <br><br>

            Eres una parte muy importante de mi vida.

            <br><br>

            Y me hace feliz saber que,
            de alguna manera,
            entre todas las personas que podríamos
            haber conocido ese día...

            <br><br>

            <strong>
                nos encontramos nosotros.
            </strong>

            <br><br>

            Te amo mucho, Brayan. 💙

            <br><br>

            — Cata
        `
    }

];


/* =========================
ABRIR LEVEL 04
========================= */

function openLevel4() {

    document
        .getElementById("menuScreen")
        .classList
        .add("hidden");

    document
        .getElementById("level1")
        .classList
        .remove("hidden");

    letterPage = 0;

    showLetterPage();
}


/* =========================
MOSTRAR CARTA
========================= */

function showLetterPage() {

    const page =
        letterPages[letterPage];

    const isLast =
        letterPage ===
        letterPages.length - 1;


    document
        .getElementById("memoryContent")
        .innerHTML = `

            <div class="memory-number">
                PERSONAL FILE · 004
            </div>


            <div class="memory-date">
                ${page.date}
            </div>


            <div class="memory-icon">
                ${page.icon}
            </div>


            <div class="memory-title">
                UNA CARTA PARA TI
            </div>


            <div class="memory-text">

                ${page.text}

            </div>


            <button
                class="button"
                onclick="${
                    isLast
                        ? "completeLevel4()"
                        : "nextLetterPage()"
                }"
            >

                ${
                    isLast
                        ? "✓ FIN DE LA CARTA"
                        : "CONTINUE →"
                }

            </button>

        `;
}


/* =========================
SIGUIENTE PÁGINA
========================= */

function nextLetterPage() {

    if (
        letterPage <
        letterPages.length - 1
    ) {

        letterPage++;

        showLetterPage();

    }
}


/* =========================
LEVEL 04 COMPLETE
========================= */

function completeLevel4() {

    document
        .getElementById("memoryContent")
        .innerHTML = `

            <div class="complete">

                LEVEL 04 COMPLETE ✓

            </div>


            <div class="big-heart">

                💙

            </div>


            <div class="memory-title">

                CARTA
                <br>
                ENTREGADA

            </div>


            <div class="memory-text">

                Esta vez no había ninguna misión.

                <br><br>

                Solo quería que supieras
                todo esto.

                <br><br>

                Y que guardaras estas palabras
                junto con todos nuestros recuerdos.

            </div>


            <button
                class="button"
                onclick="backToMenu()"
            >

                ← RETURN TO ARCHIVE

            </button>

        `;
}


/* =========================
VOLVER AL ARCHIVO
========================= */

function backToMenu() {

    document
        .getElementById("level1")
        .classList
        .add("hidden");

    document
        .getElementById("menuScreen")
        .classList
        .remove("hidden");
}
