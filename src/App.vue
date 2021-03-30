<template>
  <div id="app">
    <h1 class="title" v-bind:title="title">{{ title }}</h1>
    <div class="menu">
      <div class="input__group">
        <label for="easy"
          >Легкий
          <input
            type="radio"
            name="radio"
            id="easy"
            :disabled="!disabled"
            @click="turnTime = 1500"
            checked
          />
        </label>
        <label for="medium"
          >Средний
          <input
            type="radio"
            name="radio"
            id="medium"
            :disabled="!disabled"
            @click="turnTime = 1000"
          />
        </label>
        <label for="hard"
          >Сложный
          <input
            type="radio"
            name="radio"
            id="hard"
            :disabled="!disabled"
            @click="turnTime = 400"
          />
        </label>
      </div>
    </div>
    <div class="simon">
      <button
        class="green"
        :style="{ backgroundColor: green }"
        @click="greenClick"
        value="4"
      ></button>
      <button
        class="red"
        :style="{ backgroundColor: red }"
        @click="redClick"
        value="2"
      ></button>
      <button
        class="yellow"
        :style="{ backgroundColor: yellow }"
        @click="yellowClick"
        value="3"
      ></button>
      <button
        class="blue"
        :style="{ backgroundColor: blue }"
        @click="blueClick"
        value="1"
      ></button>
    </div>
    <label class="strict" for="strict"
      >Strict
      <input
        type="checkbox"
        name="strict"
        id="strict"
        :disabled="!disabled"
        @click="strict = !strict"
      />
    </label>
    <button class="start" @click="start" :disabled="!disabled">Start</button>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      order: [],
      playerOrder: [],
      flash: "",
      turn: 0,
      good: "",
      compTurn: "",
      intervalId: null,
      noise: true,
      win: Boolean,
      green: "green",
      red: "red",
      yellow: "goldenrod",
      blue: "darkblue",
      title: "Simon Game",
      turnTime: 1500,
      disabled: Boolean,
      strict: false,
      started: false,
    };
  },
  methods: {
    selfRandom() {
      return Math.floor(Math.random() * 4) + 1;
    },
    start() {
      this.disabled = !this.disabled;
      if (this.win) {
        this.started = true;
        this.play();
      }
    },
    play() {
      this.win = false;
      this.order = [];
      this.playerOrder = [];
      this.flash = 0;
      this.intervalId = 0;
      this.turn = 1;
      this.good = true;
      this.compTurn = true;

      for (let i = 0; i < 20; i++) {
        this.order.push(this.selfRandom());
      }

      this.intervalId = setInterval(this.gameTurn, this.turnTime);
      console.log(this.strict);
      console.log(this.order);
    },
    gameTurn() {
      if (this.flash == this.turn) {
        clearInterval(this.intervalId);
        this.compTurn = false;
        this.clearColor();
      }

      if (this.compTurn) {
        this.clearColor();
        setTimeout(() => {
          if (this.order[this.flash] == 1) this.one();
          if (this.order[this.flash] == 2) this.two();
          if (this.order[this.flash] == 3) this.three();
          if (this.order[this.flash] == 4) this.four();
          this.flash++;
        }, 200);
      }
    },
    one() {
      if (this.noise) {
        let audio = new Audio(
          "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"
        ); 
        audio.play();
      }
      this.noise = true;
      this.green = "lightgreen";
    },
    two() {
      if (this.noise) {
        let audio = new Audio(
          "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"
        ); 
        audio.play();
      }
      this.noise = true;
      this.red = "darkred";
    },
    three() {
      if (this.noise) {
        let audio = new Audio(
          "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"
        ); 
        audio.play();
      }
      this.noise = true;
      this.yellow = "yellow";
    },
    four() {
      if (this.noise) {
        let audio = new Audio(
          "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"
        ); 
        audio.play();
      }
      this.noise = true;
      this.blue = "lightskyblue";
    },
    clearColor() {
      this.green = "green";
      this.red = "red";
      this.yellow = "goldenrod";
      this.blue = "darkblue";
    },
    flashColor() {
      this.green = "lightgreen";
      this.red = "lightred";
      this.yellow = "yellow";
      this.blue = "lightskyblue";
    },
    greenClick() {
      if (this.started) {
        this.playerOrder.push(1);
        this.check();
        this.one();
      } else {
        this.one();
        setTimeout(() => {
          this.clearColor();
        }, 400);
      }
      if (!this.win)
        setTimeout(() => {
          this.clearColor();
        }, 400);
    },
    redClick() {
      if (this.started) {
        this.playerOrder.push(2);
        this.check();
        this.two();
      } else {
        this.two();
        setTimeout(() => {
          this.clearColor();
        }, 400);
      }
      if (!this.win)
        setTimeout(() => {
          this.clearColor();
        }, 400);
    },
    yellowClick() {
      if (this.started) {
        this.playerOrder.push(3);
        this.check();
        this.three();
      } else {
        this.three();
        setTimeout(() => {
          this.clearColor();
        }, 400);
      }
      if (!this.win)
        setTimeout(() => {
          this.clearColor();
        }, 400);
    },
    blueClick() {
      if (this.started) {
        this.playerOrder.push(4);
        this.check();
        this.four();
      } else {
        this.four();
        setTimeout(() => {
          this.clearColor();
        }, 400);
      }

      if (!this.win)
        setTimeout(() => {
          this.clearColor();
        }, 400);
    },
    check() {
      
      if (
        this.playerOrder[this.playerOrder.length - 1] !==
        this.order[this.playerOrder.length - 1]
      ) {
        this.good = false;
      }

      if (this.playerOrder.length == 20 && this.good == true) {
        this.winGame();
      }

      if (this.good == false) {
        if (this.started === true) {
          this.flashColor();
          this.title = "WRONG!";

          if (this.strict){
            this.disabled = true
          }
          
        }

        setTimeout(() => {
          this.title = "Simon Game";
          this.compTurn = true;
          this.flash = 0;
          this.playerOrder = [];
          this.good = true;

          if (this.strict) {
            this.win = true;
            this.started = false;
          } else {
            this.intervalId = setInterval(this.gameTurn, this.turnTime);
          }
        }, this.turnTime);
      }

      if (this.turn == this.playerOrder.length && this.good && !this.win) {
        this.turn++;
        this.playerOrder = [];
        this.compTurn = true;
        this.flash = 0;
        this.intervalId = setInterval(this.gameTurn, this.turnTime);
      }
    },
    winGame() {
      this.flashColor();
      this.title = "WIN!";
      this.win = true;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  height: 100%;
  width: 100%;
}
</style>
