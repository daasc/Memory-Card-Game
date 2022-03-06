<template>
  <div
    class="deck"
    data-testid="check-memory"
    :class="{ disabled: checked }"
    @click="check({ id })"
  >
    <div class="card clickcard" :class="{ clicked: checked }">
      <div class="front face"></div>
      <div class="back face">
        <img data-testid="img" :src="urlImg" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CardMemory',
  props: {
    urlImg: {
      type: String,
      required: false,
      default: '',
    },
    id: {
      type: Number,
      required: false,
      default: 0,
    },
    checked: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    check({ id }) {
      this.$store.commit('memory/CHECK', { id, img: this.urlImg })
    },
  },
}
</script>
<style lang="scss" scoped>
.clicked {
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
  .front {
    box-shadow: 0 0 0 #aaa;
  }
  .back {
    box-shadow: 5px 5px 5px #aaa;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.disabled {
  pointer-events: none;
  cursor: default;
}

@media (min-width: 0px) {
  .deck {
    width: 22%;
    height: 120px;
    position: relative;
    -webkit-perspective: 1000px;
    perspective: 1000px;
    font-family: verdana;
    border-radius: 10px;
    cursor: pointer;
    .card {
      width: 100%;
      height: 100%;
      -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;
      -webkit-transition: all 0.5s linear;
      transition: all 0.5s linear;
      border-radius: 10px;
    }

    .face {
      position: absolute;
      width: 100%;
      height: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      border-radius: 10px;
      background-color: #17141d;
    }
    .back {
      overflow: hidden;
      z-index: -1;
      display: block;
      -webkit-transform: rotateY(180deg);
      transform: rotateY(180deg);
      background: white !important;
      box-sizing: border-box;
      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
        background-size: 100% 100%;
        -webkit-transform: rotateY(180deg);
        -moz-transform: rotateY(180deg);
        -ms-transform: rotateY(180deg);
        -o-transform: rotateY(180deg);
        transform: rotateY(180deg);
      }
    }
  }
}

@media (min-width: 850px) {
  .deck {
    width: 20%;
    height: 170px;
  }
}
</style>
