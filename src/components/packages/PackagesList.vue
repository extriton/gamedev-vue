<template>
  <div class="packages-list row mt-3">
    <div v-show="!PACKAGES.length" class="not-found ml-3">Packages no found</div>
      <b-table
        v-show="PACKAGES.length"
        :fields="fields"
        :items="packages"
        striped
        bordered
        hover
        head-variant="dark"
        @row-clicked="onClick"
      >

        <template v-slot:cell(index)="data">
          {{ (PAGE - 1) * pageLimit + data.index + 1 }}
        </template>

        <template v-slot:cell(package_name)="data">
          {{ data.item.package_name }}
        </template>

        <template v-slot:cell(package_description)="data">
          {{ data.item.package_description }}
        </template>

        <template v-slot:cell(version)="data">
          {{ data.item.version }}
        </template>

    </b-table>
    <!-- Detail modal -->
      <b-modal
        id="package-detail-modal"
        hide-footer
        :title="pkg.name + ' ' + pkg.version"
        scrollable
      >
        <p><b>Publisher:</b><br />
          Username: {{ pkg.publisher.username }}<br />
          Email: {{ pkg.publisher.email }}<br />
        </p>
        <p><b>Date:</b><br />{{ pkg.date | localdate }}</p>
        <p><b>Description:</b><br />{{ pkg.description }}</p>
        <p><b>Keywords:</b><br />
          <span
            v-for="(item, index) in pkg.keywords"
            :key="'k' + index"
          >
            {{ item}}, 
          </span>
        </p>
        <p><b>Links:</b><br />
          <span
            v-for="(item, index) in pkg.links"
            :key="'l' + index"
          >
            {{ item}}<br />
          </span>
        </p>
        <p><b>Etc...</b></p>
        <b-button class="mt-3" variant="success" block @click="hideDetail">Close</b-button>
      </b-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import config from '@/config/config'

export default {
  name: 'PackagesList',
  data () {
    return {
      pageLimit: config.pageLimit,
      pkg: {
        name: '',
        version: '',
        publisher: {
          username: '',
          email: ''
        },
        date: new Date(),
        description: '',
        keywords: [],
        links: []
      },
      fields: [
          { key: 'index', label: '#' },
          { key: 'package_name', label: 'Package name' },
          { key: 'package_description', label: 'Package description' },
          { key: 'version', label: 'Version' },
        ],
    }
  },
  computed: {
    packages () {
      return this.PACKAGES.map(elem => {
        return {
          package_name: elem.package.name,
          package_description: elem.package.description,
          version: elem.package.version
        }
      })
    },
    ...mapGetters('packages', ['PACKAGES', 'PAGE'])
  },
  methods: {
    onClick (record) {
      this.pkg = (this.PACKAGES.find(elem => elem.package.name === record.package_name)).package
      this.showDetail()
    },
    showDetail () {
      this.$bvModal.show('package-detail-modal')
    },
    hideDetail () {
      this.$bvModal.hide('package-detail-modal')
    },
  },
  filters: {
    localdate: function (value) {
      if (!value) return ''
      return new Date(value).toLocaleString()
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
