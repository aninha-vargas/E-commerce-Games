import { Game } from 'src/models/game.model';

export interface ItemVenda{
    id?:number;
    game: Game;
    quantidade: number;
    preco: number;
    // gameId: number;
}
