/*JavaScript Document*/
/*Objetivo: Criar máscaras para os campos de entrada do formulário utilizando a biblioteca de funções JQuery*/

/*Habilitar as funções somente após o carregamento do DOM*/
$(document).ready(function(){
	
	/*Máscara para o campo nome*/
	$('#nome').mask('aaaaaaaaaaaaaaaaaaaaaaaaa', {		/*Aceita apenas letras e espaços*/
		translation: {
			'a':{pattern: /[a-z A-Z]/}
		}
	});

	/*Máscara para o campo CPF*/
	$('#cpf').mask('000.000.000-00');					/*Aceita apenas números*/

	/*Máscara para o campo CNPJ*/
	$('#cnpj').mask('000.000.000/0000-00');				/*Aceita apenas números*/

	/*Máscara para o campo RG*/
	$('#rg').mask('00.000.000-X', {
		translation: {
			'X':{pattern: /[X0-9]/}						/*Aceita apenas números e a letra X*/
		}
	});

	/*Máscara para o campo Telefone*/
	$('#telefone').mask('(00) 0000-0000');				/*Aceita apenas números*/

	/*Máscara para o campo celular*/
	$('#celular').mask('(00) 0000-00009');				/*Aceita apenas números - o nono dígito é opcional*/
	
	/*Configurando a máscara do campo
	  celular para uma melhor visualização*/
	$('#celular').blur(function(event){
		if ($(this).val().length == 15){				/*Se tiver nove digitos*/
			$('#celular').mask('(00) 00000-0009'); 		/*Passa os quinto digito para o segundo campo*/
		}
		else{											/*Senão*/
			$('#celular').mask('(00) 0000-0000');		/*Usa a máscara igual a do telefone*/
		}
	});/*Fim da configuração do campo celular */

	/*Máscara para o campo salário*/
	$('#salario').mask('000.000.000,00', {reverse:true});	/*Inverte o campo para receber os centavos primeiro*/

	/*Máscara para o campo CEP*/
	$('#cep').mask('00000-000');

	/*Máscara para o campo Data de Nascimento*/
	$('#dataNascimento').mask('00/00/0000');

	/*Máscara para o campo Placa de Carro*/
	$('#placa').mask('AAA-0000', {
		translation: {
			'A':{pattern:/[A-Z]/}
		}
	});
});
/*-----------------------Fim da criação de máscaras com a biblioteca de funções JQuery-----------------------------------*/

/*--------------------------------Função de validação em JavaScript puro--------------------------------------------------*/
/*Objetivo: Criar uma função que verifica se os campos de entrada foram corretamente preenchidos antes
de enviar o formulário*/

/*Função de validação*/
function validacao(){
	/*Declaração e atribuição de variáveis*/
	var nome = document.formCadastro.nome.value;
	var cpf = document.formCadastro.cpf.value;
	var cnpj = document.formCadastro.cnpj.value;
	var rg = document.formCadastro.rg.value;
	var telefone = document.formCadastro.telefone.value;
	var celular = document.formCadastro.celular.value;
	var salario = document.formCadastro.salario.value;
	var cep = document.formCadastro.cep.value;
	var dataNascimento = document.formCadastro.dataNascimento.value;
	var placa = document.formCadastro.placa.value;

	/*Variável para verificar se o campo foi preenchido de forma errada*/
	var erro = false;   /*false quer dizer que ainda não tem erro*/
	var msg;			/*Exibir mensagem de erro no campo*/


	/*Validação para o campo nome (Se o campo não tem nome e sobrenome)*/
	if (nome.indexOf(' ')  == -1){
		document.getElementById('msgNome').style.display='inline';
		erro = true;
	}

	/*Validação para o campo CPF*/
	if (cpf.length != 14) {
		document.getElementById('msgCpf').style.display='inline';
		erro = true;
	}

	/*Validação para o campo CNPJ*/
	if(cnpj.length != 19){
		document.getElementById('msgCnpj').style.display='inline';
		erro = true;
	}

	/*Validação para o campo RG*/
	if (rg.length != 12) {
		document.getElementById('msgRg').style.display='inline';
		erro = true;
	}

	/*Validação do campo telefone*/
	if(telefone.length != 14){
		document.getElementById('msgTelefone').style.display='inline';
		erro = true;
	}

	/*Validação do campo celular*/
	if (celular.length != 14){
		document.getElementById('msgCelular').style.display='inline';
		erro = true;
	}

	/*Validação do campo salário*/
	if (salario.length < 4) {
		document.getElementById('msgSalario').style.display='inline';
		erro = true;
	}

	/*Validação do campo CEP*/
	if(cep.length != 9){
		document.getElementById('msgCep').style.display='inline';
		erro = true;
	}

	/*Validação do campo Data de Nascimento*/
	if (dataNascimento.length != 10){
		document.getElementById('msgDataNasc').style.display='inline';
		erro = true;
	}

	/*Validação do campo placa de carro*/
	if(placa.length != 8){
		document.getElementById('msgPlaca').style.display='inline';
		erro = true;
	}

	/*Verifica se o formulário tem erros, se houver não faz o submit*/
	if(erro){
		return false;
	}
	else{
		return true;
	}

	/*Apenas um teste para ver se o javascript recuperava os campos corretamente*/
	/*document.write('O nome digitado é: ' + nome);
	document.write('  O CPF digitado é: ' + cpf);
	document.write('  O CNPJ digitado é: ' + cnpj);
	document.write('  O RG digitado é: ' + rg);
	document.write('  O telefone digitado é: ' + telefone);
	document.write('  O celular digitado é: ' + celular);
	document.write('  O salario digitado é: ' + salario);
	document.write('  O CEP digitado é: ' + cep);
	document.write('  A Data de Nascimento é: ' + dataNascimento);
	document.write('  A Placa digitada é: ' + placa);
	return false;*/
}