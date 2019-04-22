$(".btn-submit").on('click', validacao);

function validacao() {

    var formcadastro = document.getElementById("form");
    var senha = formcadastro.senha;
    var cpf = formcadastro.cpf;
    var senhaAtualizar = formcadastro.password;
    var usuarioAtualizar = formcadastro.username;
    var conf_senha = formcadastro.confirmarSenha;
    var email = formcadastro.email;
    var nome = formcadastro.nome;
    var matricula = formcadastro.matricula;
    var setor = formcadastro.setor;
    var usuario = formcadastro.usuario;
    var cont = 0;



    $(".group-input span.error").remove();




        try {
            //validar senha e confirmar senha
            if (/^(((?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])).{6,32})$/i.test(senha.value)) {
                $("input[name='senha']").removeClass("input-error");
                $(".error").removeClass("error");
                cont += 1;
                //validar confirmação de senha
                if (conf_senha.value != senha.value) {
                    $("input[name='confirmarSenha']").addClass("input-error");
                    $("input[name='confirmarSenha']").after("<span class='error'>A senha não esta igual a primeira.</span>");
                } else {
                    $("input[name='confirmarSenha']").removeClass("input-error");
                    cont += 1;
                }
            } else {
                $("input[name='senha']").addClass("input-error");
                $("input[name='senha']").after("<span class='error'>A Senha precisa ter no minimo 6 digitos, com letras, números e caracteres especiais.</span>")
            }
        } catch (err) {
            //validar senha e confirmar senha
            if (/^(((?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])).{6,32})$/i.test(senhaAtualizar.value)) {
                $("input[name='password']").removeClass("input-error");
                cont += 1;
                //validar confirmação de senha
                if (conf_senha.value != senhaAtualizar.value) {
                    $("input[name='confirmarSenha']").addClass("input-error");
                    $("input[name='confirmarSenha']").after("<span class='error'>A senha não esta igual a primeira.</span>");
                } else {
                    $("input[name='confirmarSenha']").removeClass("input-error");
                    cont += 1;
                }
            } else {
                $("input[name='password']").addClass("input-error");
                $("input[name='senha']").after("<span class='error'>A Senha precisa ter no minimo 6 digitos, com letras, números e caracteres especiais.</span>")
            }
        }








        //validar email
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(email.value)) {
            $("input[name='email']").addClass("input-error");
            $("input[name='email']").after("<span class='error'>Informe um E-mail válido.</span>");
        } else {
            $("input[name='email']").removeClass("input-error");
            cont += 1;
        }







        //validar nome
        if (!nome.value.match(/[^a-z\s]/ig)) {
            if (/^([\w]{2,})([\s]{1})([\w]{2,})/ig.test(nome.value)) {
                $("input[name='nome']").removeClass("input-error");
                cont += 1;
            } else {
                $("input[name='nome']").addClass("input-error");
                $("input[name='nome']").after("<span class='error'>Informe o nome completo.</span>");
            }
        } else {
            $("input[name='nome']").addClass("input-error");
            $("input[name='nome']").after("<span class='error'>O nome não pode ter número ou caracteres especiais</span>");
        }







        //validar matricula
        if (!matricula.value.match(/[^0-9]/g)) {
            if (/^(\d+)/ig.test(matricula.value)) {
                $("input[name='matricula']").removeClass("input-error");
                cont += 1;
            } else {
                $("input[name='matricula']").addClass("input-error");
                $("input[name='matricula']").after("<span>Informe a matricula.</span>");
            }
        } else {
            $("input[name='matricula']").addClass("input-error");
            $("input[name='matricula']").after("<span>A matricula só pode ter números.</span>");
        }






        //validar setor
        if (!setor.value.match(/[^a-z\s]/ig)) {
            if (/^([\w]{2,})/ig.test(setor.value)) {
                $("input[name='setor']").removeClass("input-error");
                cont += 1;
            } else {
                $("input[name='setor']").addClass("input-error");
                $("input[name='setor']").after("<span>Informe o setor.</span>");
            }
        } else {
            $("input[name='setor']").addClass("input-error");
            $("input[name='setor']").after("<span>O nome do setor não pode ter número ou caracteres especiais.</span>");
        }







        try {
            //validar usuario
            if (!usuario.value.match(/[^a-z/-/_/#]/ig)) {
                if (/^([a-z]{3,})([/-/_/#]*)([a-z]{1,})$/ig.test(usuario.value)) {
                    $("input[name='usuario']").removeClass("input-error");
                    cont += 1;
                } else {
                    $("input[name='usuario']").addClass("input-error");
                    $("input[name='usuario']").after("<span>Informe um usuário válido.</span>");
                }
            } else {
                $("input[name='usuario']").addClass("input-error");
                $("input[name='usuario']").after("<span>Seu usuário só pode ter letras e os caracteres especiais(-)(_)(#).</span>");
            }
        } catch (err) {
            //validar usuario
            if (!usuarioAtualizar.value.match(/[^a-z/-/_/#]/ig)) {
                if (/^([a-z]{3,})([/-/_/#]*)([a-z]{1,})$/ig.test(usuarioAtualizar.value)) {
                    $("input[name='username']").removeClass("input-error");
                    cont += 1;
                } else {
                    $("input[name='username']").addClass("input-error");
                    $("input[name='username']").after("<span>Informe um usuário válido.</span>");
                }
            } else {
                $("input[name='username']").addClass("input-error");
                $("input[name='username']").after("<span>Seu usuário só pode ter letras e os caracteres especiais(-)(_)(#).</span>");
            }
        }



    //verifica se ta tudo validado pra subimeter

      if (cont == 3) {
          
          $("#form").submit();
      }



};







//FORMATA cpf
var formcadastro = document.getElementById("form");
var cpf = formcadastro.cpf;

cpf.oninput = formatarCPF;
cpf.onblur = formatarCPFBlur;



function formatarCPF() {

  var auxDt;
  var auxDt2 = "";

    if (!cpf.value.match(/[^0-9\.\-]/ig)) {
        cpf.value = cpf.value.replace(/^([\d]{3})([\d]{1,2})$/, "$1.$2");
        auxDt2 = cpf.value;
        if (cpf.value.length > 6) {
            cpf.value = cpf.value.replace(/^([\d]{3})\.([\d]{3})([\d]{1})$/, "$1.$2.$3");
            auxDt2 = cpf.value;
        }
        if (cpf.value.length > 11) {
            cpf.value = cpf.value.replace(/^([\d]{3})\.([\d]{3})\.([\d]{3})([\d]{1})$/, "$1.$2.$3-$4");
            auxDt2 = cpf.value;
        }
        if (/^([\d]{3})\.([\d]{3})\.([\d]{3})\-([\d]{2})$/ig.test(cpf.value)) {
            auxDt = cpf.value;
        }
        if (cpf.value.length > 14) {
            cpf.value = auxDt;
        }
    } else {
        if (cpf.value.length <= 14) {
            cpf.value = auxDt2;
        } else {
            cpf.value = auxDt;
        }
    }
};


function formatarCPFBlur(){
  cpf.value = cpf.value.replace(/^([\d]{3})([\d]{3})([\d]{3})([\d]{1,2})$/, "$1.$2.$3-$4");
}
