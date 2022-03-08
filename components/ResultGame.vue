<template>
  <div class="results">
    <div data-testid="result-turns">
      TURNS: <span>{{ turns }}</span>
    </div>
    <div data-testid="result-attempts">
      ATTEMPTS: <span>{{ attempts }}</span>
    </div>
    <div data-testid="result-wins">
      WINS: <span> {{ wins }}</span>
    </div>
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
<style lang="scss" scoped>
@media (min-width: 0px) {
  .results {
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 10px 5px 15px 5px;
    div {
      background: white;
      padding: 10px;
      font-weight: bolder;
      font-size: 18px;
      span {
        color: rgba(31, 201, 251, 0.96);
      }
    }
  }
}
@media (min-width: 850px) {
  .results {
    width: 40%;
    margin: 0 auto;
    justify-content: space-around;
  }
}
</style>
