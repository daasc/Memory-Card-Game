<template>
  <div>
    <result-game></result-game>
    <memory-game :cards="cards"></memory-game>
    <alert-wins v-if="alertWins"></alert-wins>
  </div>
</template>

<script>
import memoryGame from '@/components/MemoryGame.vue'
import ResultGame from '@/components/resultGame.vue'
import AlertWins from '@/components/AlertWins.vue'
export default {
  name: 'IndexPage',
  components: { memoryGame, ResultGame, AlertWins },
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
        this.$store.commit('memory/SET_MIXED')
      }
    },
  },
}
</script>
<style lang="scss"></style>
