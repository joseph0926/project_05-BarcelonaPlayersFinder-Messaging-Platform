<template>
  <section>Filter</section>
  <section>
    <BaseCard>
      <div class="controls">
        <BaseButton>Refresh</BaseButton>
        <BaseButton link to="/register">Register as Player</BaseButton>
      </div>
      <ul v-if="hasPlayer">
        <PlayerItem
          v-for="player in filteredPlayers"
          :key="player.id"
          :id="player.id"
          :name="player.name"
          :position="player.position"
          :rate="player.rate"
          :description="player.description"
        />
      </ul>
      <h3 v-else>No Players Found</h3>
    </BaseCard>
  </section>
</template>

<script>
import PlayerItem from "@/components/players/PlayerItem.vue";

export default {
  components: {
    PlayerItem,
  },
  computed: {
    filteredPlayers() {
      return this.$store.getters["players/players"];
    },
    hasPlayer() {
      return this.$store.getters["players/hasPlayers"];
    },
  },
};
</script>

<style scoped>
.controls {
  display: flex;
  justify-content: space-between;
}
</style>
