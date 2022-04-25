// elementos HTML
let video = document.getElementById('videoInicial');
let btnplayPause = document.getElementById('playPause');
let controles = document.getElementById('controles');
let volume = document.getElementById('regularVolume');
let barraVolume = document.getElementById('regularVolume');
let barraProgresso = document.getElementById('barraProgresso');
let tituloVideo = document.getElementById('tituloVideo');
let listaVideos = document.querySelectorAll('.listaVideos');
// ler lista dos videos
let todosVideos = [
    {
        titulo: '<h3 id="tituloVideo"> Shingeki no Kyojin - The Rumbling </h3>',
        src: './videos/abertura snk.mp4',
        img: './imagens/eren.jpg',
    },
    {
        titulo: '<h3 id="tituloVideo"> Os Cavaleiros do Zodíaco - Saga do Santuário </h3>',
        src: './videos/CDZ Saga do santuário.mp4',
        img: './imagens/saga santuário.webp',
    },
    {
        titulo: '<h3 id="tituloVideo"> Shingeki no Kyojin - Shinzou Wo Sasageyo </h3>',
        src: './videos/Shinzou Wo Sasageyo.mp4',
        img: './imagens/snk.webp',
    },
    {
        titulo: '<h3 id="tituloVideo"> Dragon Ball Z - We Gotta Power </h3>',
        src: './videos/DBZ.mp4',
        img: './imagens/DBZ1.jpg',
    },
    {
        titulo: '<h3 id="tituloVideo"> Kimetsu no Yaiba - Gurenge </h3>',
        src: './videos/Demon Slayer.mp4',
        img: './imagens/kimetsu.webp',
    },
    {
        titulo: '<h3 id="tituloVideo"> Jujutsu Kaisen - Kaikai Kitan </h3>',
        src: './videos/jujutsu.mp4',
        img: './imagens/jujutsu.jpg',
    },
    {
        titulo: '<h3 id="tituloVideo"> Os Cavaleiros do Zodíaco - Saga de Hades </h3>',
        src: 'videos/CDZ Saga de hades.mp4',
        img: './imagens/saga hades.jpg',
    },
    {
        titulo: '<h3 id="tituloVideo"> Dragon Ball Z - CHA-LA HEAD-CHA-LA </h3>',
        src: './videos/DBZ  CHA-LA HEAD-CHA-LA.mp4',
        img: './imagens/DBZ2.webp',
    },
    {
        titulo: '<h3 id="tituloVideo"> Boku no Hero Academia - Peace Sign </h3>',
        src: './videos/Boku no hero.mp4',
        img: './imagens/boku no hero.png',
    },
];
for (let i = 0; listaVideos.length > i; i++) {
    listaVideos[i].addEventListener('click', function (e) {
        tituloVideo.innerHTML = todosVideos[i].titulo;
        video.setAttribute('src', todosVideos[i].src);
        video.setAttribute('poster', todosVideos[i].img);
    });
}
// regular tempo video
function retroceder() {
    video.currentTime -= 10;
}
function avancar() {
    video.currentTime += 10;
}
function trocarPP() {
    if (video.paused) {
        btnplayPause.setAttribute('src', './icons/pause.png');
        video.play();
    } else {
        btnplayPause.setAttribute('src', './icons/play.png');
        video.pause();
    }
}
// volume
function trocarVolume() {
    let regularVolume = document.getElementById('regularVolume').value / 100;
    video.volume = regularVolume;
    if (video.volume === 0) {
        volumebtn.setAttribute('src', './icons/mudo.png');
    } else if (video.volume < 0.5) {
        volumebtn.setAttribute('src', './icons/volume_baixo.png');
    } else if (video.volume >= 0.5) {
        volumebtn.setAttribute('src', './icons/volume_alto.png');
    }
}
function mudo() {
    let volume = document.getElementById('volumebtn');
    if (video.volume > 0) {
        volume.setAttribute('src', './icons/mudo.png');
        video.volume = 0;
        barraVolume.value = 0;
    } else {
        volume.setAttribute('src', './icons/volume_alto.png');
        video.volume = 1;
        barraVolume.value = 100;
    }
}
// tela
function telaCheia() {
    video.requestFullscreen();
}
// opacidade comandos
function aparecer() {
    controles.style.opacity = '1';
    controles.style.transition = '1s';
    tituloVideo.style.opacity = '1';
    tituloVideo.style.transition = '1s';
}

function sumir() {
    controles.style.opacity = '0';
    controles.style.transition = '1s';
    tituloVideo.style.opacity = '0';
    tituloVideo.style.transition = '1s';
}
