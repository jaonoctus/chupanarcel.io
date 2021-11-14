<script lang="ts" setup>
import jaonoctusPicture from '../assets/images/jaonoctus.jpg'
import narcelioPicture from '../assets/images/narcelio.jpg'
import safadaoPicture from '../assets/images/safadao.jpg'

const txTaproot = readonly({
  hash: '8a45257a73ffb4e31b0b3afe3e82f85ee71bdbcf1da26263a34c88f1c9c10dda'
})

const txSegwit = readonly({
  hash: '738309023e4862493cfdaa85599c57a4508b4660f12d0944984bc8de78541ed8'
})

const explorer = 'mempool.space'

const txTaprootLink = computed(() => `https://${explorer}/tx/${txTaproot.hash}`)
const txSegwitLink = computed(() => `https://${explorer}/tx/${txSegwit.hash}`)

const isNarcelio = ref(true)

const narcelio = ref(narcelioPicture)

const switchPicture = () => {
  if (isNarcelio.value) {
    narcelio.value = safadaoPicture
    isNarcelio.value = false

    return
  }

  isNarcelio.value = true

  narcelio.value = narcelioPicture
}
</script>

<template>
  <div class="bg-gray-900 flex justify-center m-auto text-white text-center">
    <div class="container">
      <h2 class="logo">
        Tapr<i class="fab fa-bitcoin"></i><i class="fab fa-bitcoin"></i>t Activated
      </h2>
      <div>
        <span>TL;DR: I beat you, Narcélio!</span>
      </div>
      <div>
        <h2>
          Transaction
        </h2>
        <a :href="txTaprootLink" target="_blank" class="bg-gray-500 hover:bg-gray-600 p-5 rounded-full">
          "Chupa, Narcélio!" <i class="fas fa-share-square"></i>
        </a>
      </div>
      <div class="about pt-10">
        <h2>
          About
        </h2>
        <p>
          This story began four years ago...
        </p>
        <p>
          Back then we still didn't have Lightning Network and we were fighting over the size of the block! (the old days!)
        </p>
        <p>
          Narcelio, an old school developer, OG bitcoiner, was playing with the nested segwit addresses and decided to create one of the first spending-transactions, writing in the OP_RETURN:
        </p>
        <p class="text-center">
          <a :href="txSegwitLink" target="_blank" class="p-3 bg-gray-500 hover:bg-gray-600 rounded-full">
            "Narcelio was here" <i class="fas fa-share-square"></i>
          </a>
        </p>
        <p>
          I was amazed! This encouraged me to study more about Bitcoin. And then I started the evil plan to do the same and came up with the "Chupa, Narcélio!" project.
        </p>
        <ul>
          <li>
            First step, of course, buy the chupanarcel.io domain
          </li>
          <li>
            Second, find out how to create a taprrot address and deposit a few satoshis there in the mainnet.
          </li>
        </ul>
        <p>
          After these two steps, waited until block 709632 and broadcasted this transaction by writing to OP_RETURN: chupanarcel.io.
          Mission accomplished, the world is saved!
        </p>
        <p>
          Joking aside, know that you have been an inspiration to me! Thank you very much. Go horse guys!
        </p>
      </div>
      <div class="team">
        <a href="https://twitter.com/jaonoctus" target="_blank">
          <img :src="jaonoctusPicture" alt="jaonoctus" />
        </a>
        <a href="https://twitter.com/narceIio" target="_blank" @mouseover="switchPicture" @mouseout="switchPicture">
          <img :src="narcelio" alt="narcelio" />
        </a>
      </div>
    </div>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400');

  h2 {
    font-size: 30px;
    font-weight: 600;
    margin: 30px auto;
  }
  a {
    word-break: break-all;
  }
  p {
    text-align: justify;
    font-size: 18px;
    padding-bottom: 25px;
    padding-left: 40px;
    padding-right: 40px;
    line-height: 1.6;
  }
  ul {
    list-style: disc;
    text-align: left;
    width: 520px;
    margin: auto;
    font-size: 18px;
    margin: 20px auto 40px;
  }
  .team {
    text-align: center;
    margin: 0px auto 50px;
    display: flex;
    justify-content: center;
  }
  .team img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin: 50px 10px;
  }
  .about {
    max-width: 800px;
    margin: auto;
  }
  .content {
    text-align: center;
    display: flex;
    justify-content: center;
    margin: auto;
    color: #fff;
    font-family: 'Fira Code', monospace;
  }
  .logo {
    font-size: 80px;
    font-weight: 700;
    max-width: 700px;
    line-height: 1.1;
    margin: 80px auto 40px;
    color: yellow;
    background: -webkit-linear-gradient(#ff80bf, #9580ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  .fa-bitcoin {
    font-size: 57px;
    top: 0px;
    position: relative;
    margin: 0px 0px 0px 5px;
    background: -webkit-linear-gradient(yellow, orange);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
  }
  .fa-carrot {
    color: #f59e0b;
    transform: rotate(135deg);
    margin: auto 20px;
    font-size: 30px;
    animation-name: carrots;
    animation-duration: .65s;
    animation-timing-function: ease-out;
    animation-iteration-count: infinite;
  }
</style>
