<template>
  <div>
    <result-game></result-game>
    <memory-game :cards="cards"></memory-game>
  </div>
</template>

<script>
import memoryGame from '@/components/MemoryGame.vue'
import ResultGame from '@/components/resultGame.vue'
export default {
  name: 'IndexPage',
  components: { memoryGame, ResultGame },
  data() {
    return {
      cards: this.$store.state.memory.mixedCard,
    }
  },
  created() {
    this.get()
  },
  methods: {
    get() {
      this.$store.commit('memory/SET_MIXED')
      console.log('=>', this.cards)
    },
  },
}
</script>
<style lang="scss"></style>
