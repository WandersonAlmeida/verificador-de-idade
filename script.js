function verificar(){
    let data = new Date();
    let  ano = data.getFullYear();
    let fromAno = document.querySelector("#txtAno");
    let res = document.querySelector('.res');
    
    if (fromAno.value.length == 0 || Number(fromAno.value) > ano){
        window.alert(`[erro] Verifique os dados  e tente novamente`)
    }else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fromAno.value);
        let genero = '';
        let img = document.createElement('img')
        img.setAttribute('id','foto')
        //img.setAttribute('src','image/menino.jpg')
        if (fsex[0].checked){
            genero = 'homem'
            if( idade >=0 && idade <10){
                //criança
                img.setAttribute('src','image/menino.jpg')
            }else if(idade <21){
                //jovem
                img.setAttribute('src','image/jovemhomem.jpg')
            }else if(idade <55){
                //adulto
                img.setAttribute('src','image/homem.jpg')
            }else{
                //idoso
                img.setAttribute('src','image/idoso.jpg')
            }
        }else if (fsex[1].checked){
            genero = 'mulher'
            if( idade >=0 && idade <10){
                //criança
                img.setAttribute('src','image/menina.jpg')
            }else if(idade <21){
                //jovem
                img.setAttribute('src','image/jovemmulher.jpg')
            }else if(idade <55){
                //adulto
                img.setAttribute('src','image/mulher.jpg')
            }else{
                //idoso
                img.setAttribute('src','image/idosa.jpg')
            }
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
       
    }

}
