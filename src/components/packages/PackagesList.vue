<template>
  <div class="packages-list row mt-3">
    <div v-show="!PACKAGES.length" class="not-found ml-3">Packages no found</div>
    <table v-show="PACKAGES.length" class="table table-bordered table-striped table-hover">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Package name</th>
                <th scope="col">Package description</th>
                <th scope="col">Version</th>
            </tr>
        </thead>
        <tbody>
            <tr
                v-for="(item, index) in PACKAGES"
                :key="index"
                @click="onClick(item)"
            >
                <td>{{ (PAGE - 1) * pageLimit + index + 1 }}</td>
                <td>{{ item.package.name }}</td>
                <td>{{ item.package.description }}</td>
                <td>{{ item.package.version }}</td>
            </tr>
        </tbody>
    </table>
    <DetailModal :pkg="selectedItem" @close="hideDetail" />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import config from '@/config/config'
import DetailModal from '@/components/packages/DetailModal.vue'

export default {
  name: 'PackagesList',
  components: {
    DetailModal
  },
  data () {
    return {
      pageLimit: config.pageLimit,
      selectedItem: null
    }
  },
  computed: {
      ...mapGetters('packages', ['PACKAGES', 'PAGE'])
  },
  methods: {
    onClick (item) {
      this.selectedItem = item
      this.showDetail()
    },
    showDetail () {
      this.SET_SHOW_DETAIL(true)
    },
    hideDetail () {
      this.SET_SHOW_DETAIL(false)
    },
    ...mapMutations('packages', ['SET_SHOW_DETAIL']),
  }
}
</script>

<style lang="scss">
.packages-list {
  .not-found {
    font-size: 22px;
    font-style: italic;
    color: rgba(55, 55, 55, .9);
    text-align: left;
  }
  tbody {
    text-align: left;
    tr {
      &:hover {
        cursor: pointer;
      }
      td:nth-child(1) {
        text-align: center;
      }
    }
  }
}
</style>
