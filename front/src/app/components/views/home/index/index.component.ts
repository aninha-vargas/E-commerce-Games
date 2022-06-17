import { CadastroService } from './../../../../../services/cadastro.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/models/game.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  games!: Game[];
  constructor(private cadastroService: CadastroService,
  private router: Router) { }


  ngOnInit(): void {
    this.cadastroService.listarGames().subscribe((games) => {
      this.games = games
    });

  }

}
