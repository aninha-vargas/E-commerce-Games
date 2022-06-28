import { Pedido } from './../../../../../models/pedido.model';
import { CarrinhoService } from 'src/services/carrinho.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ItemVenda } from 'src/models/item-venda';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  itens: ItemVenda[] = [];
  colunasExibidas: String[] = ["imagem", "nome", "quantidade", "preco"];
  valorTotal!: number;

  pedido : ItemVenda;
  constructor(private service: CarrinhoService,
        private router: Router) {
          this.pedido = {} as ItemVenda;
        }

  ngOnInit(): void {
    this.itens = JSON.parse(localStorage.getItem('itens')!)  || [];
    this.valorTotal = this.itens.reduce((total, item) => {
      return total + item.preco * item.quantidade;
  }, 0);
      // console.table(this.itens);
      // console.log(this.pedido);

  }
  // salvar(pedido: ItemVenda) {
  salvar() {
    const itens = JSON.parse(localStorage.getItem('itens')!)  || [];
    this.service.incluirPedido(itens).subscribe(() => {
      console.log("pedido salvo com sucesso!");

    });
    localStorage.clear();
    this.router.navigate(['/home/carrinho/sucesso']);
  }
  limpar() {
    localStorage.clear();
    window.location.reload();
  }
  voltar(){
    this.router.navigate(['/']);

  }

}
