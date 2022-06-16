import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Game } from 'src/models/game.model';
import { CadastroService } from 'src/services/cadastro.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  game : Game = new Game();

  constructor(private cadastro: CadastroService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const str = this.route.snapshot.paramMap.get("id");
    this.cadastro.buscarGamePorId(Number(str)).subscribe((game) =>{
      this.game = game;
    });
  }

  salvarGame(){
    this.cadastro.atualizarGame(this.game, this.game.id).subscribe(() => {
          this.router.navigate(['/cadastros/games']);
    });
  }

}
