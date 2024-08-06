// place files you want to import through the `$lib` alias in this folder.
export interface Game{
    name: string,
    completed: boolean,
}

const games: Game[] = [
    { name: "Tic-Tac-Toe", completed: true },
    { name: "Hangman", completed: true },
    { name: "Game Of Life", completed: true },
    { name: "Snake", completed: false },
    { name: "Flappy bird", completed: false },
    // Add more games as needed
  ];
  
export default games;