<template>
    <h1>Power consumption through flight time</h1>
    <section>
    <div v-if="data" class="scatters">
      <div v-for="scatter in data?.scatters" :key="scatter.scatterId">
        <ScatterChart v-if="data" :chartData="scatter"/>
      </div>
    </div>
    </section>
    
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import ScatterChart from '@/components/ScatterChart.vue';

export default {
  components: {
    ScatterChart,
  },
  setup (){
    const store = useStore()
    const data = computed(() => {
      return store.state.data
    })

    onMounted(() => {
      store.dispatch('getData')
    })

    return {
      data
    }
  }
}
</script>

<style>
.scatters {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 100px 50px;
}
</style>