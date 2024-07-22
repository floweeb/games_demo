// place files you want to import through the `$lib` alias in this folder.
export interface Game{
    id: number,
    name: string,
    completed: boolean,
}

const games: Game[] = [
    { id: 1, name: "Tic-Tac-Toe", completed: true },
    { id: 2, name: "Hangman", completed: true },
    { id: 3, name: "Snake", completed: false },
    { id: 4, name: "Flappy bird", completed: false },
    // Add more games as needed
  ];
  
export default games;