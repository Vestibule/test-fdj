<script setup lang="ts">
import axios from 'axios'
import type { Ref } from 'vue'
import type { Signin, Team } from '../../types'

const route = useRoute()
const team: Ref<Team | null> = ref(null)

const fetchTeam = async function () {
  const response = await axios.get(`http://127.0.0.1:3000/teams/${route.params.id}`)
  team.value = response.data
}
fetchTeam()

const formatBirthDate = function (date: string) {
  const birthDate = new Date(date)
  return `${birthDate.getFullYear()}-${birthDate.getMonth() + 1}-${birthDate.getDay() + 1}`
}

const poundCurrencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

const eurCurrencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

const formatCurrency = function (signin: Signin) {
  if (signin.currency === 'eur')
    return eurCurrencyFormatter.format(signin.amount)

  return poundCurrencyFormatter.format(signin.amount)
}
</script>

<template>
  <template v-if="team">
    <div>
      <main class="mt-2 px-2 flex flex-col space-y-2">
        <template v-for="player in team.players" :key="player._id">
          <div class="flex">
            <img class="w-1/3" :src="player.thumbnail">
            <ul class="ml-2">
              <li class="text-lg font-bolder">
                {{ player.name }}
              </li>
              <li>
                {{ player.position }}
              </li>
              <li>
                Born: {{ formatBirthDate(player.born) }}
              </li>
              <li>
                Price: {{ formatCurrency(player.signin) }}
              </li>
            </ul>
          </div>
        </template>
      </main>
    </div>
  </template>
</template>

<route lang="yaml">
meta:
  name: team
</route>
