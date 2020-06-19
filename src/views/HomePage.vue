<template>
  <div class="container">
    <Search />
    <PackagesList />
    <Pagination />
  </div>
</template>

<script>
import Search from '@/components/packages/Search.vue'
import PackagesList from '@/components/packages/PackagesList.vue'
import Pagination from '@/components/packages/Pagination.vue'

export default {
  name: 'HomePage',
  components: {
    Search,
    PackagesList,
    Pagination
  }
}
</script>
