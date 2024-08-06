<script lang="ts">
  let grid: boolean[][] = [];
  const gridSize = 20;
  let isRunning = false;
  let intervalId: number | null = null;

  function initializeGrid() {
    grid = Array(gridSize)
      .fill(null)
      .map(() => Array(gridSize).fill(false));
  }

  function toggleCell(row: number, col: number) {
    grid[row][col] = !grid[row][col];
    grid = [...grid];
  }

  function startGame() {
    if (!isRunning) {
      isRunning = true;
      intervalId = setInterval(updateGrid, 200);
    }
  }

  function stopGame() {
    if (isRunning) {
      isRunning = false;
      if (intervalId !== null) {
        clearInterval(intervalId);
      }
    }
  }

  function updateGrid() {
    const newGrid = grid.map((row) => [...row]);

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const aliveNeighbors = countAliveNeighbors(i, j);
        if (grid[i][j]) {
          // Cell is alive
          if (aliveNeighbors < 2 || aliveNeighbors > 3) {
            newGrid[i][j] = false; // Cell dies
          }
        } else {
          // Cell is dead
          if (aliveNeighbors === 3) {
            newGrid[i][j] = true; // Cell becomes alive
          }
        }
      }
    }

    grid = newGrid;
  }

  function countAliveNeighbors(row: number, col: number): number {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        const newRow = row + i;
        const newCol = col + j;
        if (
          newRow >= 0 &&
          newRow < gridSize &&
          newCol >= 0 &&
          newCol < gridSize
        ) {
          count += grid[newRow][newCol] ? 1 : 0;
        }
      }
    }
    return count;
  }

  function resetGrid() {
    stopGame();
    initializeGrid();
  }

  initializeGrid();
</script>

<!-- ... (rest of the component remains the same) ... -->
<div class="flex flex-col items-center justify-center min-h-screen">
  <h1 class="text-4xl font-bold mb-8">Game of Life</h1>
  <p class="mb-2">Click cells to seed, then start the game.</p>

  <div class="game-grid gap-1 mb-8">
    {#each grid as row, rowIndex}
      {#each row as cell, colIndex}
        <button
          class="w-4 h-4 bg-game-primary hover:bg-game-primary-hover"
          class:bg-game-secondary={cell}
          on:click={() => toggleCell(rowIndex, colIndex)}
          disabled={isRunning}
        ></button>
      {/each}
    {/each}
  </div>

  <div class="flex space-x-4">
    <button
      class="bg-game-secondary hover:bg-game-secondary-hover text-white font-bold py-2 px-4 rounded"
      on:click={startGame}
      disabled={isRunning}
    >
      Start
    </button>
    <button
      class="bg-game-secondary hover:bg-game-secondary-hover text-white font-bold py-2 px-4 rounded"
      on:click={stopGame}
      disabled={!isRunning}
    >
      Stop
    </button>
    <button
      class="bg-game-secondary hover:bg-game-secondary-hover text-white font-bold py-2 px-4 rounded"
      on:click={resetGrid}
    >
      Reset
    </button>
  </div>
</div>

<style>
  .game-grid {
    display: grid;
    grid-template-columns: repeat(20, 1fr);
    gap: 1px;
    height: 100%;
  }

  .game-grid button {
    aspect-ratio: 1 / 1;
  }
</style>
