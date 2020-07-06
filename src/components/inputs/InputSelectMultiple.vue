<template>
  <div>
    <v-select
      v-model="valor"
      :label="valor ? 'label' : ''"
      :items="states"
      color="success"
      :menu-props="{ offsetY: true }"
      multiple
      placeholder="placeholder"
      hint="Helper"
      persistent-hint
      item-color="success"
    ></v-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      states: [
        "Alabama",
        "Alaska",
        "American Samoa",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "District of Columbia",
        "Federated States of Micronesia",
        "Florida",
        "Georgia",
        "Guam",
        "Hawaii",
        "Idaho"
      ],
      valor: ""
    };
  }
};
</script>

<style></style>
