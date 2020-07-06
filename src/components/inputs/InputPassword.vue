<template>
  <v-text-field
    v-model="valor"
    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
    color="success"
    :label="valor ? 'label' : ''"
    :type="show1 ? 'text' : 'password'"
    required
    hint="Helper"
    persistent-hint
    placeholder="placeholder"
    @click:append="show1 = !show1"
  ></v-text-field>
</template>

<script>
export default {
  data() {
    return {
      valor: "",
      show1: false
    };
  }
};
</script>

<style></style>
