class Financeiro {
  constructor() {
    this.contasPagar = [];
    this.contasReceber = [];
    this.saldo = 0;
  }

  registrarContaPagar(valor, descricao) {
    this.contasPagar.push({ valor, descricao });
    this.saldo -= valor;
  }

  registrarContaReceber(valor, descricao) {
    this.contasReceber.push({ valor, descricao });
    this.saldo += valor;
  }

  exibirSaldo() {
    console.log(`O saldo atual é de R$ ${this.saldo.toFixed(2)}.`);
  }
}
