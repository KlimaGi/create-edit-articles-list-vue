<template>
  <div class="form-control mb-3 d-grid gap-2">
    <form @submit.prevent="onSubmit">
      <label class=" my-2">Comments</label>

      <div class="input-group mb-3">
        <input
          class="form-control "
          aria-describedby="button-addon2"
          type="text"
          v-model="comment"
        />

        <button
          class="btn btn-color btn-outline-secondary"
          id="button-addon2"
          type="submit"
        >
          Add comment
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comment: "",
    };
  },
  methods: {
    onSubmit() {
      this.$emit("submit-comment", this.comment);
      this.comment = "";
    },
  },
};
</script>

<style scoped lang="scss">
$color: #553b55;
$color-light: #9c269c;
$pseudo-white: #f3eff2;

.btn-color {
  background: $color;
  color: $pseudo-white;
}
</style>
