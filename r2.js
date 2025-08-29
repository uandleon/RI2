function TelefoneCelular(ddd, numero) {
    this.ddd = ddd;
    this.numero = numero;
}

function Endereco(estado, cidade, rua, numero) {
    this.estado = estado;
    this.cidade = cidade;
    this.rua = rua;
    this.numero = numero;
}

function Cliente(nome, telefone, email, endereco) {
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
    this.endereco = endereco;

    this.descricao = function () {
        return `
--------------------
Informações do Cliente:
${this.nome}
--------------------
Telefone:
DDD: ${this.telefone.ddd}
Número: ${this.telefone.numero}

Endereço:
Rua: ${this.endereco.rua}
Número: ${this.endereco.numero}
Cidade: ${this.endereco.cidade}
Estado: ${this.endereco.estado}
`;
    };
}

let tel1 = new TelefoneCelular('11', '999999999');
let end1 = new Endereco('SP', 'São Paulo', 'Av. Paulista', '987');
let cliente1 = new Cliente('Carlos Conrado Heinz', tel1, 'carlos@app.com', end1);

let cliente2 = new Cliente('Ana Souza', tel1, 'ana@app.com', end1);
let cliente3 = new Cliente('Bruno Lima', tel1, 'bruno@app.com', end1);

console.log(cliente1.descricao());

let clientes = [cliente1, cliente2, cliente3];
clientes.sort((a, b) => a.nome.localeCompare(b.nome));

console.log("--- Clientes Ordenados ---");
clientes.forEach(c => console.log(c.nome));
