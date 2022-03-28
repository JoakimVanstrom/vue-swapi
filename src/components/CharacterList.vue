<template>
  <section class="character-list">
    <ul>
      <Loader v-if="loading" />
      <li
        v-else
        v-for="char in characters"
        :key="char.name"
        @click="setCurrentCharacter(char)"
      >
        {{ char.name }}
      </li>
    </ul>
    <span class="buttons">
      <button class="prev" @click="previousPage">&lt;</button>
      <p>{{ currentPage }} / {{ maxPages }}</p>
      <button class="next" @click="nextPage">&gt;</button>
    </span>
  </section>
</template>

<script>
import Loader from "@/components/baseLoader.vue";
export default {
  components: { Loader },
  data() {
    return {
      loading: true,
    };
  },
    async mounted() {
    await this.$store.dispatch("fetchCharacters");
    this.loading = false;
  },

  computed: {
    currentChar(){
        return this.$store.state.currentCharacter
    },
    characters() {
      return this.$store.state.characters;
    },
    currentPage() {
      return this.$store.state.currentPage;
    },
    maxPages() {
      return this.$store.state.maxPages;
    },
  },
  methods: {
    async previousPage() {
      this.loading = true;
      await this.$store.dispatch("fetchPreviousPage");
      this.loading = false;
    },
    async nextPage() {
      this.loading = true;
      await this.$store.dispatch("fetchNextPage");
      this.loading = false;
    },
    async setCurrentCharacter(char) {
      this.$store.state.currentCharacter = char;
      this.$store.state.planetLoading = true;
      await this.$store.dispatch("fetchPlanet", char);
      this.$store.state.planetLoading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  background-color: #c4c4c4;
  transform: translateY(-6%);
  height: 36rem;
  width: 26rem;
  border-radius: 10px 10px 0 0;

  h2 {
    background-color: #535556;
    color: #ffd600;
    margin: 0;
    height: 3.5rem;
    border-radius: 10px 10px 0px 0px;
    letter-spacing: 6px;
    font-size: 2rem;
    font-weight: 400;
    padding: 15px 0;
    grid-row: 1;
    grid-column: 1/7;
    text-align: center;
  }
}

.buttons {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  font-size: 1.5rem;
  border: none;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding-bottom: 10px;

  p {
    grid-row: 1;
    grid-column: 6/8;
    text-align: center;
    margin: 0;
  }
  .prev,
  .next {
    border: none;
    background-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0;
  }
  .prev {
    grid-row: 1;
    grid-column: 5;
  }
  .next {
    grid-row: 1;
    grid-column: 8;
  }
}

.character-list {
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

    li:nth-child(odd) {
      color: #eee;
      background-color: grey;
      list-style-type: none;
      padding: 0.9rem;
      font-size: 1.4rem;
    }
    li:nth-child(even) {
      color: grey;
      background-color: #e1dede;
      list-style-type: none;
      padding: 0.9rem;
      font-size: 1.4rem;
    }

    li:hover {
      background-color: #444444;
      cursor: pointer;
    }
  }
}
</style>
