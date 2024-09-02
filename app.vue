<script lang="ts" setup>
const txTaproot = readonly({
  hash: 'aba317fc0b85563625389947a6ff532f849d09b1224acc56a6e72ea5231849d4'
})

const txSegwit = readonly({
  hash: '738309023e4862493cfdaa85599c57a4508b4660f12d0944984bc8de78541ed8'
})

const txTaprootNarcelio = readonly({
  hash: 'de1dd38997b0e27b7b1d2db376c1438e24d10b2502e423786dccc83510f805d0'
})

const explorer = 'mempool.space'

const txTaprootLink = computed(() => `https://${explorer}/tx/${txTaproot.hash}`)
const txSegwitLink = computed(() => `https://${explorer}/tx/${txSegwit.hash}`)
const txTaprootNarcelioLink = computed(() => `https://${explorer}/tx/${txTaprootNarcelio.hash}`)


const isNarcelio = ref(true)

const narcelio = ref('/images/narcelio.jpg')

const switchPicture = () => {
  if (isNarcelio.value) {
    narcelio.value = '/images/safadao.jpg'
    isNarcelio.value = false
    return
  }

  isNarcelio.value = true
  narcelio.value = '/images/narcelio.jpg'
}

const actualYearsDifference = computed(() => {
  const pastDate = new Date('2017-08-24T01:49:35');
  const currentDate = new Date();
  const yearsDifference = currentDate.getFullYear() - pastDate.getFullYear();
  const isBeforeAnniversary =
      currentDate.getMonth() < pastDate.getMonth() ||
      (currentDate.getMonth() === pastDate.getMonth() && currentDate.getDate() < pastDate.getDate());

  const actualYearsDifference = isBeforeAnniversary ? yearsDifference - 1 : yearsDifference;
  return `${actualYearsDifference} years ago`;
})
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
          This story began {{ actualYearsDifference }} years ago...
        </p>
        <p>
          Back then we still didn't have Lightning Network and we were fighting over the block size! (the old days!)
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
          I was amazed! This inspired me to delve deeper into Bitcoin. Soon after, I hatched a playful plan to follow suit, which led to the creation of the "Chupa, Narcélio!" transaction.
        </p>
        <ul>
          <li>
            First step, of course, buy the chupanarcel.io domain.
          </li>
          <li>
            Second, find out how to create a taproot address and deposit a few satoshis there in the mainnet.
          </li>
        </ul>
        <p>
          After these two steps, waited until block 709,632 and broadcasted this transaction by writing to OP_RETURN: chupanarcel.io.
          Which means, "Suck it, Narcélio!"
        </p>
        <p>
          Joking aside, know that you have been an inspiration to me! Thank you so much.<br/>Go horse guys!
        </p>
        <p class="text-center">
          <a :href="txTaprootNarcelioLink" target="_blank" class="p-3 bg-gray-500 hover:bg-gray-600 rounded-full">
            "Narcelio is still here" <i class="fas fa-share-square"></i>
          </a>
        </p>
      </div>
      <div class="team">
        <a href="https://jaonoctus.dev" target="_blank">
          <img src="/images/jaonoctus.jpeg" alt="jaonoctus" />
        </a>
        <a href="https://twitter.com/narcelio" target="_blank" @mouseover="switchPicture" @mouseout="switchPicture">
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
ul {
  list-style: disc;
  text-align: left;
  width: 100%;
  max-width: 520px;
  margin: 20px auto 40px;
  font-size: 18px;
  padding-left: 40px;
  padding-right: 40px;
}

li {
  padding-bottom: 25px;
  line-height: 1.6;
}
</style>
