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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import config from '@/config/config'

export default {
  name: 'PackagesList',
  data () {
    return {
      pageLimit: config.pageLimit
    }
  },
  computed: {
      ...mapGetters('packages', ['PACKAGES', 'PAGE'])
  },
  methods: {
    onClick (item) {
      console.log(item)
    }
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
