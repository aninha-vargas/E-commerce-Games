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
  colunas: string[] = ['id', 'nome', 'descricao', 'acoes'];

  constructor(private cadastro : CadastroService) { }

  ngOnInit(): void {
    this.cadastro.listarGames().subscribe(games => {
      console.log(games);
      this.games = games;
    });
  }

}
