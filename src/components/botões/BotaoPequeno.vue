<template>
  <div>
    <v-btn
      class="botao_pequeno"
      @mouseout="voltaCor()"
      @click="voltaCor()"
      @mouseover="mudaCor()"
      :color="color"
      width="144px"
      height="40px"
      >{{ label }}</v-btn
    >
  </div>
</template>

<script>
export default {
  props: ["label"],
  data() {
    return {
      color: "success"
    };
  },
  methods: {
    mudaCor() {
      this.color = "primary";
    },
    voltaCor() {
      this.color = "success";
    }
  }
};
</script>

<style>
.botao_pequeno {
  border-radius: 28px !important;
}
</style>
