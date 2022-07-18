interface Animais{
    nome: string;
    tipo: 'terrestre' | 'aquático';
    domestico: boolean;
}

interface Felinos extends Animais {
    visaoNoturna: boolean;
}

interface Caninos extends Animais{
    porte: 'pequeno' | 'médio' | 'grande';
}

type Domestico = Felinos | Caninos;

const animal: Animais = {
    nome: 'Elefante',
    tipo: 'terrestre',
    domestico: false
}

const felino: Felinos = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: true,
    domestico: false
}

const animal2: Domestico = {
    nome: 'Cachorro',
    tipo: 'terrestre',
    porte: 'médio',
    domestico: true
}