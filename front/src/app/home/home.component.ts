import { ItemVenda } from './../../models/item-venda';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Game } from 'src/models/game.model';
import { CadastroService } from 'src/services/cadastro.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  games : Game[] = [];
  itens:ItemVenda[]=[];
  colunas: string[] = ['id', 'nome', 'descricao', 'acoes'];

  constructor(private cadastro : CadastroService,
    private router: Router) { }

  ngOnInit(): void {
    this.cadastro.listarGames().subscribe(games => {
      console.log(games);
      this.games = games;
      this.itens = JSON.parse(localStorage.getItem('itens')!)  || [];
    });
  }

  adicionar(game: Game): void{
    let item : ItemVenda = {
      game: game,
      // gameId: gameId!,
      quantidade: 1,
      preco: game.preco,
    };
    this.itens.push(item);
    localStorage.setItem("itens", JSON.stringify(this.itens));
    this.router.navigate(["/home/carrinho"]);
  }

}
