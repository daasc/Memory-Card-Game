<template>
  <div class="gamer">
    <card-memory
      v-for="(item, index) in cards"
      :id="item.id"
      :key="index"
      data-testid="check-memory"
      :url-img="item.img"
      :index="index"
    ></card-memory>
  </div>
</template>
<script>
import CardMemory from '@/components/CardMemory'

export default {
  name: 'MemoryGame',
  components: { CardMemory },
  computed: {
    cards() {
      this.$store.commit('memory/SET_MIXED')
      return this.$store.state.memory.mixedCard
    },
  },
}
</script>
<style lang="scss" scoped>
@media (min-width: 0px) {
  .gamer {
    padding: 12px 0px;
    width: 100%;
    background: wheat;
    box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;
    border-radius: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 12px;
  }
}
@media (min-width: 850px) {
  .gamer {
    width: 60%;
    margin: 0 auto;
  }
}
</style>
