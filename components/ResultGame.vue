<template>
  <div class="results">
    <div data-testid="result-turns">TURNS: {{ turns }}</div>
    <div data-testid="result-attempts">ATTEMPTS: {{ attempts }}</div>
    <div data-testid="result-wins">WINS: {{ wins }}</div>
  </div>
</template>
<script>
export default {
  name: 'ResultGame',
  computed: {
    turns() {
      return this.$store.state.memory.turns
    },
    attempts() {
      return this.$store.state.memory.attempts
    },
    wins() {
      return this.$store.state.memory.wins
    },
  },
}
</script>
<style lang="scss">
@media (min-width: 0px) {
  .results {
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-top: 10px;
    margin-bottom: 50px;
  }
}
@media (min-width: 850px) {
  .results {
    width: 40%;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 50px;
  }
}
</style>
