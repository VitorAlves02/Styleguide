<template>
  <div class="inputs">
    <InputFilds></InputFilds>
    <br />
    <InputPassword></InputPassword>
    <br />
    <InputSelect></InputSelect>
    <br />
    <InputSelectMultiple></InputSelectMultiple>
    <br />
    <InputCheckbox></InputCheckbox>
    <br />
    <InputRadio></InputRadio>
  </div>
</template>

<script>
import InputFilds from "../components/inputs/InputFilds";
import InputPassword from "../components/inputs/InputPassword";
import InputCheckbox from "../components/inputs/InputCheckbox";
import InputRadio from "../components/inputs/InputRadio";
import InputSelect from "../components/inputs/InputSelect";
import InputSelectMultiple from "../components/inputs/InputSelectMultiple";

export default {
  components: {
    InputFilds,
    InputPassword,
    InputCheckbox,
    InputRadio,
    InputSelect,
    InputSelectMultiple
  }
};
</script>

<style>
.inputs {
  width: 50%;
  margin: 20px auto 20px auto;
  text-align: center;
}
</style>
