<template>
  <v-select
    :items="colors"
    v-model="valor"
    :label="valor ? 'label' : ''"
    placeholder="placeholder"
    hint="helper"
    persistent-hint
    color="success"
    :menu-props="{ offsetY: true }"
  ></v-select>
</template>

<script>
export default {
  data() {
    return {
      colors: ["accent", "teal", "blue", "error", "success"],
      valor: ""
    };
  }
};
</script>

<style></style>
