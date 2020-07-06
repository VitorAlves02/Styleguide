<template>
  <v-text-field
    v-model="valor"
    color="success"
    :label="valor ? 'label' : ''"
    required
    hint="Helper"
    persistent-hint
    placeholder="placeholder"
  ></v-text-field>
</template>

<script>
export default {
  data() {
    return {
      valor: ""
    };
  }
};
</script>

<style></style>
