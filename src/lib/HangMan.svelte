<script lang="ts">
  import { base } from "$app/paths";

  let words = [
    "CAT",
    "SVELTE",
    "JAVASCRIPT",
    "TYPESCRIPT",
    "HANGMAN",
    "ARCADE",
  ];
  let word = words[Math.floor(Math.random() * words.length)];
  let guessedLetters: string[] = [];
  let remainingGuesses = 6;

  $: maskedWord = word
    .split("")
    .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
    .join(" ");

  $: gameOver = remainingGuesses <= 0;
  $: gameWon = !maskedWord.includes("_");

  function guessLetter(letter: string) {
    if (guessedLetters.includes(letter)) return;

    guessedLetters = [...guessedLetters, letter];

    if (!word.includes(letter)) {
      remainingGuesses--;
    }
  }

  function resetGame() {
    word = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    remainingGuesses = 6;
  }
</script>

<div
  class="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white"
>
  <h1 class="text-4xl font-bold mb-8">Hangman</h1>

  <div class="text-6xl mb-8">{maskedWord}</div>

  <div class="mb-4">Remaining guesses: {remainingGuesses}</div>

  {#if !gameOver && !gameWon}
    <div class="grid grid-cols-7 gap-2 mb-8">
      {#each "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("") as letter}
        <button
          class="w-10 h-10 bg-game-primary hover:bg-game-primary-hover text-xl font-bold flex items-center justify-center"
          on:click={() => guessLetter(letter)}
          disabled={guessedLetters.includes(letter)}
        >
          {letter}
        </button>
      {/each}
    </div>
  {:else}
    <p class="text-2xl mb-4">
      {gameWon
        ? "Congratulations! You won!"
        : "Game Over. The word was: " + word}
    </p>
  {/if}
  <button
    class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
    on:click={resetGame}
  >
    Play Again
  </button>

  <a href="{base}/" class="mt-8 text-blue-400 hover:underline">Back to Menu</a>
</div>
