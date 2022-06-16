import { CadastroService } from 'src/services/cadastro.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from 'src/models/game.model';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent implements OnInit {

  game: Game = new Game();

  constructor(private cadastro: CadastroService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const str = this.route.snapshot.paramMap.get("id");
    this.cadastro.buscarGamePorId(Number(str)).subscribe((game) => {
      this.game = game;
    });
  }

  excluirGame(){
    this.cadastro.excluirGame(this.game.id).subscribe(() => {
      this.router.navigate(['/cadastros/games']);
    });
  }

}
