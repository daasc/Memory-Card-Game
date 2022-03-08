<template>
  <div class="gamer">
    <result-game></result-game>
    <div class="cards">
      <card-memory
        v-for="(item, index) in cards"
        :id="item.id"
        :key="index"
        data-testid="check-memory"
        :url-img="item.img"
        :checked="item.checked"
      ></card-memory>
    </div>
  </div>
</template>
<script>
import CardMemory from '@/components/CardMemory'
import ResultGame from '@/components/ResultGame.vue'

export default {
  name: 'MemoryGame',
  components: { CardMemory, ResultGame },
  props: {
    cards: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
<style lang="scss" scoped>
@media (min-width: 0px) {
  .gamer {
    padding: 12px 0px;
    width: 100%;
    background: #4e4c4c;
    box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 12px;

    .cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      gap: 12px;
      width: 100%;
    }
  }
}
@media (min-width: 850px) {
  .gamer {
    width: 60%;
    align-self: center;
    margin: 10px 0px;
    .cards {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      gap: 12px;
      width: 100%;
    }
  }
}
</style>
