<template>
  <div v-show="MAX_PAGE > 1" class="pagination-block">
    <ul class="pagination row mt-3">
        <li
          class="page-item"
          :class="{ disabled: PAGE === 1 }"
          @click="prev"
        >
            <span class="page-link">Prev</span>
        </li>
        <li>
          <span class="page-current">{{ PAGE }} / {{ MAX_PAGE }}</span>
        </li>
        <li
          class="page-item"
          :class="{ disabled: PAGE === MAX_PAGE }"
          @click="next"
        >
          <span class="page-link">Next</span>
        </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  name: 'Pagination',
  computed: {
    ...mapGetters('packages', ['PAGE', 'MAX_PAGE'])
  },
  methods: {
    prev () {
      if (this.PAGE === 1) return
      this.SET_PAGE(this.PAGE - 1)
      this.GET_PACKAGES_LIST()
    },
    next () {
      if (this.page === this.MAX_PAGE) return
      this.SET_PAGE(this.PAGE + 1)
      this.GET_PACKAGES_LIST()
    },
    ...mapMutations('packages', ['SET_PAGE']),
    ...mapActions('packages', ['GET_PACKAGES_LIST'])
  }
}
</script>

<style lang="scss">
.pagination-block {
  /* width: 100%; */
  .page-item {
    &:hover {
      cursor: pointer;
    }
  }
  .page-current {
    position: relative;
    display: block;
    padding: 0.5rem 0.75rem;
    line-height: 1.25;
    color: #333;
    background-color: #fff;
  }
}
</style>
