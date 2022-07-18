interface Usuario {
    id: string;
    email: string;
    cargo?: 'funcionário' | 'gerente' | 'coordenador' | 'supervisor';
}

function redirecione(usuario: Usuario) {
    if(usuario.cargo){
        //redirecionar para a área do administrador
    }

        //redirecionar para a área do usuário
}