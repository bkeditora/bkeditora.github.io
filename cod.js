
var orelha = new Array();
orelha["Sem Orelha"] = 3;
orelha["Com Orelha"] = 4;

var valpag = new Array();
valpag[20] = 1;
valpag[30] = 0.96;
valpag[50] = 0.9;
valpag[100] = 0.8;
valpag[200] = 0.7;
function calculaValor(){
   var preco = 0.0;
   var form = document.forms["orcamento"];

   preco = 0.1*form.elements["pb"].value;
   preco += 0.5 * form.elements["cor"].value;

   if(form.elements["Orelha"][1].selected){
      preco+=4;
   } else preco +=3;

   if(form.elements["Papel"][1].selected){
      preco+=4;
   } else preco +=3;

   if(form.elements["Tamanho"][1].selected){
      preco+=4;
   } else preco +=3;

   var divobj = document.getElementById('valuni');
   divobj.style.display='block';
   divobj.innerHTML = "<b>Valor Unitário</b>: R$"+preco;


   divobj = document.getElementById('valtot');
   divobj.style.display='block';
   var copias = 0.0;
   copias = parseFloat(form.elements["livros"].value);
   var precoTotal = 0.0;
   
   if(copias !=null && copias >0){
      for (i in valpag){
         if(copias <= i){
            precoTotal = preco*copias*valpag[i];
            console.log(valpag[i]);
            console.log(copias);
            console.log(i);
            break;
         }
      }
      divobj.innerHTML = "<b>Valor Total </b>: R$"+precoTotal;
   }else{
      divobj.innerHTML = "<b>Valor Total </b>:";
   }
}

