<script lang="ts">
  import { base } from "$app/paths";

  const games = [
    { id: 1, name: "Tic-Tac-Toe", completed: true },
    { id: 2, name: "Snake", completed: false },
    { id: 3, name: "Flappy bird", completed: false },
  ];

  function handleClick(event: MouseEvent, completed: boolean) {
    if (!completed) {
      event.preventDefault();
      const target = event.currentTarget as HTMLElement;
      const emoji = target.querySelector(".game-emoji") as HTMLElement;
      emoji.classList.add("animate-wiggle");
      setTimeout(() => emoji.classList.remove("animate-wiggle"), 500);
    }
  }
</script>

<div class="flex flex-col items-center">
  <div class="container mx-auto p-8 flex-grow flex flex-col items-center">
    <h1 class="text-5xl font-bold mb-4 text-center text-yellow-400">
      Floweeb's Arcade
    </h1>
    <h2 class="text-2xl font-semibold mb-6 text-center">Menu</h2>
    <ul class="w-4/5 md:w-3/5 lg:w-1/2 space-y-4">
      {#each games as game}
        <li
          class="bg-blue-600 p-4 rounded shadow hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 relative group"
        >
          <a
            href={game.completed ? `${base}/game/${game.id}` : "#"}
            class="flex items-center"
            on:click={(e) => handleClick(e, game.completed)}
          >
            <span class="flex-grow">{game.name}</span>
            <span class="game-emoji text-2xl ml-2" aria-hidden="true">
              {game.completed ? "🎮" : "🚧"}
            </span>
            {#if !game.completed}
              <span class="sr-only">Still in development</span>
              <span
                class="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
              >
                Still in development
              </span>
            {/if}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</div>

<style>
  @keyframes wiggle {
    0%,
    100% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-15deg);
    }
    75% {
      transform: rotate(15deg);
    }
  }
  :global(.animate-wiggle) {
    animation: wiggle 0.5s ease-in-out;
  }
</style>
