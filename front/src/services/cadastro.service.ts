import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Game } from 'src/models/game.model'

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient){ }

  URL = "http://localhost:3001/games";

  listarGames() : Observable<Game[]>{
    return this.http.get<Game[]>(this.URL);
  }

  buscarGamePorId(id : number) : Observable<Game>{
    return this.http.get<Game>(this.URL + "/" + id);
  }

  incluirGame(game : Game) : Observable<any>{
    return this.http.post(this.URL, game);
  }

  atualizarGame(game : Game, id : number) : Observable<any>{
    return this.http.put(this.URL + "/" + id, game);
  }

  excluirGame(id : number) : Observable<any>{
    return this.http.delete(this.URL + "/" + id);
  }

}
