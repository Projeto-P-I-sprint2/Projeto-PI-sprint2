function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

function verificar_email(){
        var Email= email_input.value

        var termina_certo= Email.endsWith(".com")
        if(termina_certo){
            resultado.innerHTML=``
        }

        else{
           resultado.innerHTML=`<span style="color: rgb(255, 24, 24);">*email invalido, sem ".com"</span>`
        }
    }

    function verificar_senha(){
        var senha= senha_input.value
        var cSenha= Csenha_input.value 

        if(cSenha == senha){
             resultado.innerHTML=``
        }

       else {
          resultado.innerHTML=`<span style="color: rgb(255, 24, 24);">*senha invalida, senhas diferentes</span>`
       }
       

    }