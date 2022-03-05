<template>
  <div>
    <result-game></result-game>
    <memory-game></memory-game>
  </div>
</template>

<script>
import memoryGame from '@/components/MemoryGame.vue'
import ResultGame from '@/components/resultGame.vue'
export default {
  name: 'IndexPage',
  components: { memoryGame, ResultGame },
}
</script>
<style lang="scss"></style>
