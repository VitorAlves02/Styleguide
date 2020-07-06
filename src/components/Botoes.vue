<template>
  <div class="botoes">
    <BotaoPequeno label="pequeno"></BotaoPequeno>
    <br />
    <BotaoMedio label="medio"></BotaoMedio>
    <br />
    <BotaoOutline label="outline"></BotaoOutline>
    <br />
    <BotaoPesquisa></BotaoPesquisa>
  </div>
</template>

<script>
import BotaoPequeno from "../components/botões/BotaoPequeno";
import BotaoMedio from "../components/botões/BotaoMedio.vue";
import BotaoOutline from "../components/botões/BotaoOutline.vue";
import BotaoPesquisa from "../components/botões/BotaoPesquisa.vue";

export default {
  components: {
    BotaoPequeno,
    BotaoMedio,
    BotaoOutline,
    BotaoPesquisa
  }
};
</script>

<style>
.botoes {
  text-align: center;
  padding: 40px;
}
</style>
