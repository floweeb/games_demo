<script lang="ts">
  import { page } from "$app/stores";
  import { base } from "$app/paths";
  import TicTacToe from "$lib/TicTacToe.svelte";
  import HangMan from "$lib/HangMan.svelte";
  import GameOfLife from "$lib/GameOfLife.svelte";

  const gameId = $page.params.id;
</script>

<div class="container mx-auto">
  {#if gameId === "1"}
    <TicTacToe />
  {:else if gameId === "2"}
    <HangMan />
  {:else if gameId === "3"}
    <GameOfLife />
  {:else}
    <h1 class="text-3xl font-bold mb-4">Game {gameId}</h1>
    <p>Game content will go here.</p>
    <a href="{base}/" class="text-game-link hover:underline">Back to menu</a>
  {/if}
</div>
