import $ from 'jquery';

$.fn.extend({
    novaFuncao(){
        console.log('Chamou nova fução');
    }
});

$('body').novaFuncao();