import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Game } from 'src/models/game.model';
import { ItemVenda } from 'src/models/item-venda';
import { Pedido } from 'src/models/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens: Game[];

  constructor(private http: HttpClient) {
    this.itens = [];
   }

   url = "http://localhost:3000/pedidos";

   incluirPedido(itemVenda : ItemVenda) : Observable<ItemVenda> {
      let quantidade = 0;
      let valor = 0;
      let itens = [];

      for (let [key, value] of Object.entries(itemVenda)) {
        itens.push({
          "id": value.game.id,
          "nome": value.game.nome,
          "desc": value.game.desc,
          "foto": value.game.foto,
          "preco": value.game.preco,
        });
        quantidade++;
        valor += Number(value.preco)
      }

      console.log(JSON.stringify({
        'itens': itens,
        'quantidade': quantidade,
        'total':valor
      }));

      let headers = new HttpHeaders();
      headers= headers.set('content-type', 'application/json');

      return this.http.post<ItemVenda>(this.url, JSON.stringify({
        'itens': itens,
        'quantidade': quantidade,
        'total':valor
      }), {headers});
   }

   adicionarAoCarrinho(game: Game) {
    this.itens.push(game);
   }

   listarItens() {
    return this.itens;
   }

   limparCarrinho() {
    this.itens = [];
    return this.itens;
   }
}
