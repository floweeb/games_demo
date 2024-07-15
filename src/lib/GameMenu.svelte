<script lang="ts">
  const games = [
    { id: 1, name: "Snake", completed: false },
    { id: 2, name: "Tic-Tac-Toe", completed: false },
    { id: 3, name: "Flappy bird", completed: false },
  ];
</script>

<div class="container mx-auto p-4">
  <h1 class="text-3xl font-bold mb-4">Floweeb's Arcade</h1>
  <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each games as game}
      <li
        class="bg-blue-500 text-white p-4 rounded shadow hover:bg-blue-600 transition-colors"
      >
        <a href="/game/{game.id}">{game.name}</a>
      </li>
    {/each}
  </ul>
</div>
