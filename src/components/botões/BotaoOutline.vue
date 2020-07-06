<template>
  <div>
    <v-btn
      class="botao_outline"
      outlined
      @mouseout="voltaCor()"
      @click="voltaCor()"
      @mouseover="mudaCor()"
      :color="color"
      width="264px"
      height="56px"
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
.botao_outline {
  border: solid 2px !important;
  border-radius: 28px !important;
}
</style>
