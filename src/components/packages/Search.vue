<template>
  <div class="search-block">
    <form @submit.prevent="onSubmit">
      <div class="row mt-3">
        <div class="col-8 col-md-7 col-lg-5">
          <input
            id="searchString"
            class="form-control"
            v-model="form.searchString"
            type="text"
            placeholder="Search NPM packages..."
          >
        </div>
        <div class="col-3 col-sm-2 col-md-1">
          <button type="submit" class="btn btn-primary">Search</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  name: 'Search',
  data () {
    return {
      form: {
        searchString: ''
      }
    }
  },
  methods: {
    onSubmit () {
      if (!this.form.searchString) return
      this.SET_SEARCH_STRING(this.form.searchString)
      this.SET_PAGE(1)
      this.GET_PACKAGES_LIST()
    },
    ...mapMutations('packages', ['SET_SEARCH_STRING', 'SET_PAGE']),
    ...mapActions('packages', ['GET_PACKAGES_LIST'])
  }
}
</script>

<style lang="scss">
.search-block {
  width: 100%;
}
</style>
