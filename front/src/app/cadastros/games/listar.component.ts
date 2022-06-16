import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game.model';
import { CadastroService } from 'src/services/cadastro.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  games : Game[] = [];
  colunas: string[] = ['id', 'nome', 'descricao', 'acoes'];

  constructor(private cadastro : CadastroService) { }

  ngOnInit(): void {
    this.cadastro.listarGames().subscribe(games => {
      console.log(games);
      this.games = games;
    });
  }

}
