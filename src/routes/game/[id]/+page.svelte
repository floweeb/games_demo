<script lang="ts">
  import { page } from "$app/stores";
  import { base } from "$app/paths";
  import TicTacToe from "$lib/TicTacToe.svelte";

  const gameId = $page.params.id;
</script>

<div class="container mx-auto">
  {#if gameId === "1"}
    <TicTacToe />
  {:else}
    <h1 class="text-3xl font-bold mb-4">Game {gameId}</h1>
    <p>Game content will go here.</p>
    <a href="{base}/" class="text-blue-500 hover:underline">Back to menu</a>
  {/if}
</div>
