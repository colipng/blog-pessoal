// FUNCAO 1: Mudar foto dos gatos
function mudarfoto(botao, direcao) {
    const container = botao.closest('.card-imagem-container');
    if (!container) return;

    const slides = container.querySelectorAll('.slide');
    if (!slides.length) return;
    
    let indiceAtual = 0;
    slides.forEach((slide, index) => {
        if (slide.classList.contains('active')) {
            indiceAtual = index;
        }
    });
    
    slides[indiceAtual].classList.remove('active');
    
    let novoIndice = indiceAtual + direcao;
    if (novoIndice >= slides.length) novoIndice = 0;
    if (novoIndice < 0) novoIndice = slides.length - 1;
    
    slides[novoIndice].classList.add('active');
}

// FUNCAO 2: Mostrar o Status do Dev no botao helloworld.html
const frasesDev = [
    "☕ Cafés consumidos na jornada: 420+ xícaras",
    "💻 Linhas de código refatoradas: 1.500+",
    "🐱 Gatos inspecionando o teclado: 3 (Luke, Artemis e Booh)",
    "🚀 Motivação para a transição de carreira: 100%",
    "⚡ Bugs resolvidos com sucesso hoje: 99",
    "🎓 Cursando Análise e Desenvolvimento de Sistemas no ENIAC",
    "🔥 Foco atual: HTML, CSS, JavaScript e resolução de problemas!"
];

let indiceFrase = 0;

function mostrarStatusDev() {
    const toast = document.getElementById('toast-status');
    if (!toast) return;
    
    toast.textContent = frasesDev[indiceFrase];
    toast.className = "toast-visivel";
    
    indiceFrase = (indiceFrase + 1) % frasesDev.length;
    
    setTimeout(() => {
        toast.className = "toast-escondido";
    }, 3500);
}