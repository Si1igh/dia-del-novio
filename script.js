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


            <video
                class="memory-video"
                controls
                playsinline
                preload="metadata"
            >

                <source
                    src="media/foto%201.mp4"
                    type="video/mp4"
                >

                Tu navegador no puede reproducir este video.

            </video>


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


            <video
                class="memory-video"
                controls
                playsinline
                preload="metadata"
            >

                <source
                    src="media/foto%202.mp4"
                    type="video/mp4"
                >

                Tu navegador no puede reproducir este video.

            </video>


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
