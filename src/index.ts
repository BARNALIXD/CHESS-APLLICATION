import { WebSocketServer } from 'ws';
import { GameManager } from './gameManager';

const wss = new WebSocketServer({ port: 8080 });

const GameManager = new GameManager();

wss.on('connection', function connection(ws) {
  GameManager.addUser(ws);  
  ws.on ("disconnect" , () => gameManager.removeUser(ws));
});
