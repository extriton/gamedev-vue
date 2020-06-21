<template>
  <div class="search-block">
    <b-form @submit.prevent="onSubmit">
      <b-input-group class="mt-3">
        <b-form-input
          id="searchString"
          v-model="form.searchString"
          type="text"
          placeholder="Search NPM packages..."
        >
        </b-form-input>
        <b-input-group-append>
          <b-button
            type="submit"
            variant="success"
          >
            Search
          </b-button>
        </b-input-group-append>
      </b-input-group>
    </b-form>
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
