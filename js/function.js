function trocar(){
    let titulo = document.getElementById('titulo')
    let cor1 = (Math.random() * 0xffffff * 1000000).toString(16);
    let cor2 = (Math.random() * 0xffffff * 1000000).toString(16);
    document.body.style.backgroundColor = '#' + cor1.slice(0,6);
    titulo.style.color = '#' + cor2.slice(0,6)
}