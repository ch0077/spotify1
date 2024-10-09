document.addEventListener("DOMContentLoaded", function () {
        // Função para mostrar/ocultar cards na seção de Playlists
        const verMaisBtn = document.getElementById("ver-mais-btn");
        const verMenosBtn = document.getElementById("ver-menos-btn");
        const hiddenCards = document.querySelectorAll("#playlists-destaque .hidden");

        verMaisBtn.addEventListener("click", function () {
            hiddenCards.forEach(function (card) {
                card.classList.remove("hidden");
            });
            verMaisBtn.style.display = "none";
            verMenosBtn.style.display = "inline-block";
        });

        verMenosBtn.addEventListener("click", function () {
            hiddenCards.forEach(function (card) {
                card.classList.add("hidden");
            });
            verMaisBtn.style.display = "inline-block";
            verMenosBtn.style.display = "none";
        });

        // Função para mostrar/ocultar cards na seção de Álbuns
        const verMaisBtnAlbuns = document.querySelector("#albuns .btn-ver-mais");
        const verMenosBtnAlbuns = document.querySelector("#albuns .btn-ver-menos");
        const hiddenAlbuns = document.querySelectorAll("#albuns .hidden");

        verMaisBtnAlbuns.addEventListener("click", function () {
            hiddenAlbuns.forEach(function (album) {
                album.classList.remove("hidden");
            });
            verMaisBtnAlbuns.style.display = "none";
            verMenosBtnAlbuns.style.display = "inline-block";
        });

        verMenosBtnAlbuns.addEventListener("click", function () {
            hiddenAlbuns.forEach(function (album) {
                album.classList.add("hidden");
            });
            verMaisBtnAlbuns.style.display = "inline-block";
            verMenosBtnAlbuns.style.display = "none";
        });

        // Função para mostrar/ocultar cards na seção de Cantores
        const verMaisBtnCantores = document.querySelector("#cantores .btn-ver-mais");
        const verMenosBtnCantores = document.querySelector("#cantores .btn-ver-menos");
        const hiddenCantores = document.querySelectorAll("#cantores .hidden");

        verMaisBtnCantores.addEventListener("click", function () {
            hiddenCantores.forEach(function (cantor) {
                cantor.classList.remove("hidden");
            });
            verMaisBtnCantores.style.display = "none";
            verMenosBtnCantores.style.display = "inline-block";
        });

        verMenosBtnCantores.addEventListener("click", function () {
            hiddenCantores.forEach(function (cantor) {
                cantor.classList.add("hidden");
            });
            verMaisBtnCantores.style.display = "inline-block";
            verMenosBtnCantores.style.display = "none";
        });
    });

