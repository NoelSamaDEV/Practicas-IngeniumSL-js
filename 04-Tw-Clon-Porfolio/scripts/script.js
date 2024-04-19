function cambiarEstilo() {
    let estiloActual = document.getElementById('estiloHoja').getAttribute('href');
    
    if (estiloActual === '../styles/dia.css') {
        document.getElementById('estiloHoja').setAttribute('href', '../styles/noche.css');
    } else {
        document.getElementById('estiloHoja').setAttribute('href', '../styles/dia.css');
    }
}