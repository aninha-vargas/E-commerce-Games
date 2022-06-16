import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/models/game.model';
import { CadastroService } from 'src/services/cadastro.service';

@Component({
  selector: 'app-incluir',
  templateUrl: './incluir.component.html',
  styleUrls: ['./incluir.component.css']
})
export class IncluirComponent implements OnInit {

  game: Game = new Game();

  constructor(private cadastro: CadastroService,
              private router: Router) { }

  ngOnInit(): void {
  }

  salvarGame(){
    this.cadastro.incluirGame(this.game).subscribe(() => {
          this.router.navigate(['/cadastros/games']);
    });
  }

}
