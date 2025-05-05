class Atendimento{
    #nome;
    #cpf;
    data;
    hora;

constructor(nome,cpf){
    this.nome = nome;
    this.cpf = cpf;
    this.data = obterDataAtual();
    this.hora = obterHoraAtual();
}

    toString(){
        return this.nome + " | " + this.cpf + " | " + this.data + " | " + this.hora;
    }

}