<template>
  <div class="main">
    <memory-game :cards="cards"></memory-game>
    <alert-wins v-if="alertWins"></alert-wins>
  </div>
</template>

<script>
import { cards } from '@/db/cards.json'
import memoryGame from '@/components/MemoryGame.vue'
import AlertWins from '@/components/AlertWins.vue'
export default {
  name: 'IndexPage',
  components: { memoryGame, AlertWins },
  computed: {
    cards() {
      return this.$store.state.memory.mixedCard
    },
    alertWins() {
      return this.$store.state.memory.alertWins
    },
  },
  created() {
    this.get()
  },
  methods: {
    get() {
      if (!this.$store.state.memory.mixedCard.length) {
        this.$store.commit('memory/SET_MIXED', cards)
      }
    },
  },
}
</script>
<style lang="scss">
@media (min-width: 0px) {
  .main {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
  }
}
@media (min-width: 1050px) {
  .main {
    height: 100%;
  }
}
</style>
