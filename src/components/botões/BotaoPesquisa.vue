<template>
  <v-btn
    width="40px"
    @mouseout="voltaCor()"
    @click="voltaCor()"
    @mouseover="mudaCor()"
    height="40px"
    fab
    :color="color"
  >
    <v-icon>mdi-pencil</v-icon>
  </v-btn>
</template>

<script>
export default {
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

<style></style>
