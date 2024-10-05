import { WebSocket } from "ws";



export class Game {
    public player1: WebSocket;
    public player2: Webstring;
    private board: string;
    private moves: string[];
    private startTime: Date;

    constructor(player1:Websocket , player2:Websocket) {
        this.player1 = player1;
        this.player2 = player2;
        this.board = "---------";
        this.moves = [];
        this.startTime = new Date();
    }

    makeMove(socket: WebSocket , move: string) {
    //validation here
    //is it user move
    //is the move valid

    //update the board
    //push the move

    //check if the game is over

    //send the updated board to both player

    }
}

