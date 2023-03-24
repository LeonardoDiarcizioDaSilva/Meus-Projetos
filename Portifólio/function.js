function entrouHTML() {
    var txtPrincipal = document.getElementById("txt_principal");
    var txtSecundário = document.getElementById("txt2");
    txtPrincipal.innerText = 'HTML (HyperText Markup Language) é uma linguagem de marcação utilizada para criar e estruturar conteúdo na internet. É a base de qualquer site, permitindo a criação de páginas da web que podem incluir texto, imagens, áudio, vídeo, links, formulários e outros elementos.'
    txtSecundário.style.opacity = 1
    txtSecundário.innerText = ' O HTML consiste em uma série de tags, que são códigos especiais colocados no texto que definem a estrutura e o estilo do conteúdo.';
}
function saiuHTML() {
    var txtPrincipal = document.getElementById("txt_principal");
    var txtSecundário = document.getElementById("txt2");
    txtPrincipal.innerText = 'Passe o mouse por cima de uma das imagens para saber mais informações.';
    txtSecundário.innerText = ''
}
function entrouCSS() {
    var txtPrincipal = document.getElementById("txt_principal");
    txtPrincipal.innerText = 'CSS (Cascading Style Sheets) é uma linguagem de estilo utilizada para controlar a apresentação visual de uma página HTML. É uma ferramenta poderosa para desenvolvedores de sites, permitindo a separação da estrutura e do conteúdo de uma página da sua apresentação visual.'
}
function saiuCSS() {
    var txtPrincipal = document.getElementById("txt_principal");
    txtPrincipal.innerText = 'Passe o mouse por cima de uma das imagens para saber mais informações.';
}
function entrouJS() {
    var txtPrincipal = document.getElementById("txt_principal");
    txtPrincipal.innerText = 'O JavaScript é executado diretamente no navegador do usuário e pode ser utilizado para criar páginas dinâmicas que respondem a eventos, como cliques em botões ou movimentos do mouse. Ele é também utilizado para criar aplicações mais complexas, como jogos e sistemas de gerenciamento de conteúdo.'
}
function saiuJS() {
    var txtPrincipal = document.getElementById("txt_principal");
    txtPrincipal.innerHTML = 'Passe o mouse por cima de uma das imagens para saber mais informações.';
}

function entrouLinkedin() {
    var btnContainer = document.getElementById('linkedin_container');
    var linkedinBtn = document.getElementById('linkedin_btn');
    btnContainer.style.alignItems = "flex-start";
    btnContainer.style.justifyContent = "flex-start";
    linkedinBtn.style.boxShadow = "5px 5px 5px aqua"
}
function saiuLinkedin() {
    var btnContainer = document.getElementById('linkedin_container');
    var linkedinBtn = document.getElementById('linkedin_btn');
    btnContainer.style.alignItems = "center";
    btnContainer.style.justifyContent = "center";
    linkedinBtn.style.boxShadow = "none";
}

function entrouGithub() {
    var btnContainer = document.getElementById('github_container');
    var githubBtn = document.getElementById('github_btn');
    btnContainer.style.alignItems = "flex-start";
    btnContainer.style.justifyContent = "flex-start";
    githubBtn.style.boxShadow = "5px 5px 5px dimgrey"
}
function saiuGithub() {
    var btnContainer = document.getElementById('github_container');
    var githubBtn = document.getElementById('github_btn');
    btnContainer.style.alignItems = "center";
    btnContainer.style.justifyContent = "center";
    githubBtn.style.boxShadow = "none";
}