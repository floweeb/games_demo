<script lang="ts">
  import { base } from "$app/paths";

  let board = Array(9).fill(null);
  let currentPlayer: "X" | "O" = "X";
  let winner: string | null = null;

  function handleClick(index: number) {
    if (board[index] || winner) return;

    board[index] = currentPlayer;
    board = board; // trigger reactivity

    if (checkWinner()) {
      winner = currentPlayer;
    } else if (board.every((cell) => cell !== null)) {
      winner = "Draw";
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }

  function checkWinner(): boolean {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // columns
      [0, 4, 8],
      [2, 4, 6], // diagonals
    ];

    return lines.some(
      (line) =>
        board[line[0]] &&
        board[line[0]] === board[line[1]] &&
        board[line[0]] === board[line[2]]
    );
  }

  function resetGame() {
    board = Array(9).fill(null);
    currentPlayer = "X";
    winner = null;
  }
</script>

<div class="flex flex-col items-center justify-center min-h-screen">
  <h1 class="text-4xl font-bold mb-8">Tic-Tac-Toe</h1>
  <p class="mb-2">Requires 2 to play.</p>
  <div class="grid grid-cols-3 gap-2 mb-8">
    {#each board as cell, index}
      <button
        class="w-20 h-20 bg-game-primary hover:bg-game-primary-hover text-4xl font-bold flex items-center justify-center"
        on:click={() => handleClick(index)}
        disabled={cell !== null || winner !== null}
      >
        {cell ? cell : ""}
      </button>
    {/each}
  </div>
  <button
    class="bg-game-secondary hover:bg-game-secondary-hover text-white font-bold py-2 px-4 rounded my-2"
    on:click={resetGame}
  >
    Play Again
  </button>

  {#if winner}
    <p class="text-2xl">
      {winner === "Draw" ? "It's a draw!" : `Player ${winner} wins!`}
    </p>
  {:else}
    <p class="text-2xl">Current player: {currentPlayer}</p>
  {/if}

  <a href="{base}/" class="mt-8 text-game-link hover:underline">Back to Menu</a>
</div>
