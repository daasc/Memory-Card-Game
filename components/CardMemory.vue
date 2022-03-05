<template>
  <div class="deck">
    <div class="card clickcard clicked">
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
  },
}
</script>
<style lang="scss">
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
.deck {
  margin: 15px;
  width: 25%;
  height: 280px;
  position: relative;
  -webkit-perspective: 1000px;
  perspective: 1000px;
  font-family: verdana;
  border-radius: 10px;

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
    background-color: whitesmoke;
    border-radius: 10px;
  }
  .back {
    overflow: hidden;
    z-index: -1;
    display: block;
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
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
</style>
