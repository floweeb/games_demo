<script lang="ts">
  const games = [
    { id: 1, name: "Tic-Tac-Toe", completed: true },
    { id: 2, name: "Snake", completed: false },
    { id: 3, name: "Flappy bird", completed: false },
  ];
</script>

<div class="min-h-screen bg-gray-800 text-white flex flex-col">
  <div class="container mx-auto p-8 flex-grow">
    <h1 class="text-5xl font-bold mb-4 text-center text-yellow-400">
      Floweeb's Arcade
    </h1>
    <h2 class="text-2xl font-semibold mb-6 text-center">Menu</h2>
    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each games as game}
        <li
          class="bg-blue-600 p-4 rounded shadow hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 relative group"
        >
          <a href="/game/{game.id}" class="flex items-center">
            <span class="flex-grow">{game.name}</span>
            {#if game.completed}
              <svg
                class="w-6 h-6 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.92 3.845a1 1 0 011.41-.1l2.83 2.83a1 1 0 01.1 1.41l-1.415 1.415a1 1 0 01-1.414-.001l-2.83-2.83a1 1 0 01.1-1.41l1.415-1.415zM2 12.99V17h4.01l8.595-8.595-4.01-4.01L2 12.99z"
                />
              </svg>
            {:else}
              <svg
                class="w-6 h-6 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8.343a2 2 0 00-.586-1.414l-3.343-3.343A2 2 0 0012.343 3H4zm0 2h8v2H4V6z"
                  clip-rule="evenodd"
                />
              </svg>
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
