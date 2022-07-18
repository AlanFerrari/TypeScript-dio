//geralmete é usado um T no lugar do NaoSei quando não se sabe o tipo que será recebido dentro do array, ficando <T>, T[] e T

function adicionaApendiceALista<NaoSei>(array: NaoSei[], valor: NaoSei){
    return array.map(() => valor);
}

adicionaApendiceALista(['a' , 2, 'c'], 'd', 4);