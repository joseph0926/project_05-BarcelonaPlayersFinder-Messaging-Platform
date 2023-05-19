<template>
  <li>
    <h3>{{ name }}</h3>
    <h4>${{ rate }}억</h4>
    <div>
      <span>{{ position }}</span>
      <p>{{ description }}</p>
    </div>
    <div class="actions">
      <RouterLink :to="playerContactLink">Contact</RouterLink>
      <RouterLink :to="playerDetailLink">View Details</RouterLink>
    </div>
  </li>
</template>

<script>
export default {
  props: ["id", "name", "rate", "positions", "description"],
  computed: {
    playerContactLink() {
      return this.$route.path + "/" + this.id + "/contact";
    },
    playerDetailLink() {
      return this.$route.path + "/" + this.id;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
