<template>
  <div class="alert">
    <h2 class="title">You can do better!</h2>
    <div class="finally">
      <div data-testid="result-turns">
        TURNS: <span>{{ turns }}</span>
      </div>
      <div data-testid="result-attempts">
        ATTEMPTS: <span>{{ attempts }}</span>
      </div>
      <div data-testid="result-wins">
        WINS: <span>{{ wins }}</span>
      </div>
    </div>
    <button class="btn" type="button" data-testid="continue" @click="start()">
      continue
    </button>
  </div>
</template>
<script>
export default {
  name: 'AlertWins',
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
  methods: {
    start() {
      this.$store.commit('memory/SET_ALERTWINS', false)
    },
  },
}
</script>
<style lang="scss" scoped>
@media (min-width: 0px) {
  .alert {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    background-color: rgba(31, 201, 251, 0.96);
    z-index: 999;
    opacity: 1;
    gap: 20px;
    transform: translate3d(0, 0, 100px);
    transition: opacity 0.2s ease-out, transform 0s;
    .title {
      font-size: 2.5rem;
      color: white;
    }
    .finally {
      display: flex;
      gap: 10px;
      width: 95%;
      justify-content: center;
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

    .btn {
      align-items: center;
      appearance: none;
      width: 40%;
      background-color: #fcfcfd;
      border-radius: 4px;
      border-width: 0;
      box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
        rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
      box-sizing: border-box;
      color: #36395a;
      cursor: pointer;
      display: inline-flex;
      font-family: 'JetBrains Mono', monospace;
      height: 48px;
      justify-content: center;
      line-height: 1;
      list-style: none;
      overflow: hidden;
      padding-left: 16px;
      padding-right: 16px;
      position: relative;
      text-align: left;
      text-decoration: none;
      transition: box-shadow 0.15s, transform 0.15s;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      white-space: nowrap;
      will-change: box-shadow, transform;
      font-size: 18px;
      &:focus {
        box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
          rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
      }
      &:hover {
        box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
          rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
        transform: translateY(-2px);
      }
      &:active {
        box-shadow: #d6d6e7 0 3px 7px inset;
        transform: translateY(2px);
      }
    }
  }
}

@media (min-width: 1200px) {
  .alert {
    .title {
      font-size: 3.5rem;
    }
    .btn {
      width: 20%;
    }
  }
}
</style>
