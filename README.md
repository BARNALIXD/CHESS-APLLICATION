Chess
Building a platform where people can
<br>

Sign up
<br>
Create a new match/get connected to an existing match
<br>
During the match, let users play moves
<br>
Have a rating system that goes up and down similar to standard chess rating
<br>
Tech stack
<br>
Let's keep it simple
<br>
React for Frontend
<br>
Node.js for Backend
<br>
Typescript as the language
<br>
Separate Websocket servers for handling real time games
<br>
Redis for storing all moves of a game in a queue
<br>
Setting it up locally
<br>
Clone the repo <br>
Copy over .env.example over to .env everywhere<br>
Update .env<br>
Postgres DB Credentials<br>
Github/Google Auth credentials<br>
npm install<br>
Start ws server<br>
cd apps/ws<br>
npm run dev<br>
Start Backend<br>
cd apps/backend<br>
npm run dev<br>
Start frontend<br>
cd apps/frontend<br>
npm run dev<br>
