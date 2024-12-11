document.getElementById('copiarJs').addEventListener('click', copiarJs); 
async function copiarJs() {
  let text = document.querySelector("#input_copy").value;               
  await navigator.clipboard.writeText(text);                          

}


function metodo_pagamento() {

  const met_escolhido = document.getElementById("metodo_pagamento").value; 

  
  document.getElementById("cartao").style.display = "none";       
  document.getElementById("pix").style.display = "none";
  document.getElementById("boleto").style.display = "none";

                                                              
  if (met_escolhido === "Cartão") {
    document.getElementById("cartao").style.display = "block";
  } else if (met_escolhido === "Pix") {
    document.getElementById("pix").style.display = "block";
  } else if (met_escolhido === "Boleto") {
    document.getElementById("boleto").style.display = "block";
  }
}



  function valor() {

    const quant = document.getElementById("quantidade").value;

    const preco_de_uma = 12000.00;

    const valort = quant * preco_de_uma;

    document.getElementById("valor").value = valort;

  }

  function passar_dados1 () 
  {

   const nome = document.getElementById('nome').value;
   localStorage.setItem('nome', nome);
   window.location.href = 'dados_de_compra.html';

   const email = document.getElementById('email').value;
   localStorage.setItem('email', email);
   window.location.href = 'dados_de_compra.html';

   const cpf = document.getElementById('cpf').value;
   localStorage.setItem('cpf', cpf);
   window.location.href = 'dados_de_compra.html';



   const cidade = document.getElementById('cidade').value;
   localStorage.setItem('cidade', cidade);
   window.location.href = 'dados_de_compra.html';

   const rua = document.getElementById('rua').value;
   localStorage.setItem('rua', rua);
   window.location.href = 'dados_de_compra.html';

   const cep = document.getElementById('cep').value;
   localStorage.setItem('cep', cep);
   window.location.href = 'dados_de_compra.html';

   const telefone = document.getElementById('telefone').value;
   localStorage.setItem('telefone', telefone);
   window.location.href = 'dados_de_compra.html';


   const bairro = document.getElementById('bairro').value;
   localStorage.setItem('bairro', bairro);
   window.location.href = 'dados_de_compra.html';

   const numero = document.getElementById('numero').value;
   localStorage.setItem('numero', numero);
   window.location.href = 'dados_de_compra.html';

  }

  function passar_dados2 () 
  {
  const meto_escolhido = document.getElementById('metodo_pagamento').value;
  localStorage.setItem('meto_escolhido', meto_escolhido);
  window.location.href = 'dados_de_compra.html';
 
  const quantid = document.getElementById('quantidade').value;
  localStorage.setItem('quantid', quantid);
  window.location.href = 'dados_de_compra.html';
 
  const total = document.getElementById('valor').value;
  localStorage.setItem('total', total);
  window.location.href = 'dados_de_compra.html';
 


  }

  function carregar()
  {

  const nome = localStorage.getItem('nome');
  document.getElementById('nome_in').value = nome;
       
  const email = localStorage.getItem('email');
  document.getElementById('email_in').value = email;

  const cpf = localStorage.getItem('cpf');
  document.getElementById('cpf_in').value = cpf;

  const telefone = localStorage.getItem('telefone');
  document.getElementById('telefone_in').value = telefone;


  const rua = localStorage.getItem('rua');
  document.getElementById('rua_in').value = rua;
    
  const cidade = localStorage.getItem('cidade');
  document.getElementById('cidade_in').value = cidade;

  const cep = localStorage.getItem('cep');
  document.getElementById('cep_in').value = cep;

  const bairro = localStorage.getItem('bairro');
  document.getElementById('bairro_in').value = bairro;


  const numero = localStorage.getItem('numero');
  document.getElementById('numero_in').value = numero;


  const meto_escolhido = localStorage.getItem('meto_escolhido');
  document.getElementById('met_in').value = meto_escolhido;
    
  const quantid = localStorage.getItem('quantid');
  document.getElementById('qnt_in').value = quantid;

  const total = localStorage.getItem('total');
  document.getElementById('vlr_in').value = total;

  }


  function enviar ()
  {
    document.getElementById("caixa-alerta").style.display = "block";
  }

  function fechar ()
  {
    document.getElementById("caixa-alerta").style.display = "none";
  }