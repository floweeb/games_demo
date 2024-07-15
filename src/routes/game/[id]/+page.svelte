<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/stores";

  const gameId = $page.params.id;
</script>

<div class="container mx-auto p-4">
  <h1 class="text-3xl font-bold mb-4">
    Game {gameId} is still under construction
  </h1>
  <p>Game content will go here.</p>
  <a href="{base}/" class="text-blue-500 hover:underline">Back to menu</a>
</div>
