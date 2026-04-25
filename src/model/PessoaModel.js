class PessoaModel{
   constructor({id, nome, contato, endereco}){
       this.id = id;
       this.nome = nome;
       this.contato = contato;
       this.endereco = endereco;                     
   }                         
}

module.exports = PessoaModel;