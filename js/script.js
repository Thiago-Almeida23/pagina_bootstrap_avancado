$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');

    $('#form-fale-conosco').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true, 
                email: true
            },
            telefone: {
                minlength: 15
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: {
                required: "Por favor, insira seu nome."
            },
            email: {
                required: "Por favor, insira seu e-mail.",
                email: "Por favor, insira um e-mail válido."
            },
            telefone: {
                minlength: "Por favor, insira um número de telefone válido."
            },
            mensagem: {
                required: "Por favor, insira uma mensagem."
            }
        },
        submitHandler: function(form) {
            $('#form-fale-conosco').submit();
        }
    });
});
