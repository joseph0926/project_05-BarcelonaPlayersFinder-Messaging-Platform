<template>
  <BaseCard>
    <section>
      <h2>{{ name }}</h2>
      <h3>{{ rate }}억</h3>
    </section>
    <section>
      <header>
        <h2>선수에게 메일을 보내보세요!</h2>
        <BaseButton link :to="contactLink">Contact</BaseButton>
      </header>
      <RouterView></RouterView>
    </section>
    <section>
      <BaseBadge :title="position"></BaseBadge>
      <p>{{ description }}</p>
    </section>
  </BaseCard>
</template>

<script>
export default {
  props: ["playerId"],
  data() {
    return {
      selectedPlayer: null,
    };
  },
  computed: {
    contactLink() {
      return this.$route.path + "/" + this.playerId + "/contact";
    },
    name() {
      return this.selectedPlayer.name;
    },
    rate() {
      return this.selectedPlayer.rate;
    },
    position() {
      return this.selectedPlayer.position;
    },
    description() {
      return this.selectedPlayer.description;
    },
  },
  created() {
    this.selectedPlayer = this.$store.getters["players/players"].find((player) => player.id === this.playerId);
  },
};
</script>

<style scoped>
section {
  margin-bottom: 1.5rem;
}
header {
  display: flex;
  gap: 2rem;
}
</style>
