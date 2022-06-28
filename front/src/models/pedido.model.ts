import { Game } from 'src/models/game.model';

export interface Pedido{
    id?:number;
    game: Game;
    quantidade: number;
    preco: number;
    // gameId: number;
}
