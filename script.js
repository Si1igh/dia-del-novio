let currentMemory = 0;


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
