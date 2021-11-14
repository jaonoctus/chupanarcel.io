<script lang="ts" setup>
const tx = readonly({
  hash: '8a45257a73ffb4e31b0b3afe3e82f85ee71bdbcf1da26263a34c88f1c9c10dda'
})

const explorerLink = computed(() => `https://mempool.space/tx/${tx.hash}`)
</script>

<template>
  <div class="content">
    <div>
      <div>
        <h2 class="logo">
          Tapr<i class="fab fa-bitcoin"></i><i class="fab fa-bitcoin"></i>t Activated
        </h2>
        <div class="chupa-narcelio">
          CHUPA, NARCÉLIO!
        </div>
        <div class="tx">
          <h2>
            Transaction
          </h2>
          <a :href="explorerLink" target="_blank" class="">
            {{ tx.hash }} <i class="fas fa-share-square"></i>
          </a>
        </div>
        <div class="about">
          <h2>
            About
          </h2>
          <p>
            Para poder te contar essa história preciso voltar há 4 anos atrás...
          </p>
          <p>
            Nessa época ainda não tinhamos Lightning Network e estávamos brigando pelo tamanho do bloco! (Bons tempos!)
          </p>
          <p>
            Narcelio, desenvolvedor old school, estava brincando com o novo endereço segwit e decidiu criar uma transação escrevendo no OP_RETURN "Narcelio was here". 
          </p>
          <p>
            Ideia que intrigou o João Dias, desenvolvedor troll master. Aproveitando o momento para aprontar e estudar, João foi atrás de seu plano malígno para deixar o Narcélio para trás e bolou o projeto Chupa Narcélio.
          </p>
          <ul>
            <li>
              O primeiro passo é claro foi comprar esse domínio: chupanarcel.io
            </li>
            <li>
            O segundo foi descobrir como criar um endereço novo e já depositar uns satoshinhos na mainnet.
            </li>
          </ul>
          <p>
            Feito esses dois primeiros passos ele esperou até o bloco 709632 e soltou sua transação escrevendo no OP_RETURN: chupanarcel.io !
            Trolagem feita, o mundo está salvo!
          </p>
          <p>
            Brincadeiras a parte, esses dois feras são exemplos pra nós desenvolvedores! Com nós sabemos que a trolagem não tem limite e que o huehuebr vai dominar o bitcoin! Go horse galera, we luv you!
          </p>
        </div>
        <div class="team">
          <a href="#">
            <img src="jaonoctus.jpeg" alt="jaonoctus" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400');

  body {
    background: #14141b;
  }
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
    display: block;
  }
  .team img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin: 50px auto;
  }
  .tx {
    margin: 70px auto;
  }
  .tx a {
    margin: 50px auto;
    background: gray;
    padding: 20px;
    border-radius: 50px;
  }
  .tx a:hover {
    background: #212121;
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
  .chupa-narcelio {
    margin: 40px auto;
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