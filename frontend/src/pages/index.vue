<script setup lang="ts">
import axios from 'axios'
import type { Ref } from 'vue'
import type { League } from '../types'

const apiUrl = import.meta.env.VITE_API_URL

const showSearchResult = ref(false)
const leagueSearch = ref('')
const leagueSearchResults: Ref<League[]> = ref([])
const autocompleteLeagueSearch = async function () {
  if (leagueSearch.value.length === 0)
    showSearchResult.value = false
  else
    showSearchResult.value = true

  const response = await axios.post(`${apiUrl}/leagues/search`, {
    search: leagueSearch.value,
  })

  leagueSearchResults.value = response.data
}

const selectedLeague: Ref<League | null> = ref(null)

const selectLeague = async function (leagueId: string) {
  const response = await axios.get(`${apiUrl}/leagues/${leagueId}`)
  selectedLeague.value = response.data as League

  showSearchResult.value = false
  leagueSearch.value = selectedLeague.value.name
}
</script>

<template>
  <div>
    <header class="relative">
      <input v-model="leagueSearch" class="w-full border" type="text" @input="autocompleteLeagueSearch">
      <template v-if="showSearchResult">
        <div class="w-full h-24 absolute z-10 bg-white">
          <template v-for="league in leagueSearchResults" :key="league._id">
            <div @click="selectLeague(league._id)">
              {{ league.name }}
            </div>
          </template>
        </div>
      </template>
    </header>
    <main class="px-2 flex flex-wrap">
      <template v-if="selectedLeague !== null">
        <template v-for="team in selectedLeague.teams" :key="team._id">
          <div class="w-1/2 mt-4">
            <a :href="`team/${team._id}`">
              <img :src="team.thumbnail">
            </a>
          </div>
        </template>
      </template>
    </main>
  </div>
</template>
