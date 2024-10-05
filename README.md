Chess
Building a platform where people can

Sign up
Create a new match/get connected to an existing match
During the match, let users play moves
Have a rating system that goes up and down similar to standard chess rating
Tech stack
Let's keep it simple

React for Frontend
Node.js for Backend
Typescript as the language
Separate Websocket servers for handling real time games
Redis for storing all moves of a game in a queue
Setting it up locally
Clone the repo
Copy over .env.example over to .env everywhere
Update .env
Postgres DB Credentials
Github/Google Auth credentials
npm install
Start ws server
cd apps/ws
npm run dev
Start Backend
cd apps/backend
npm run dev
Start frontend
cd apps/frontend
npm run dev
