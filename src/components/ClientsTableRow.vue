<template>
  <tr>
    <td class="status_true">{{ client.id }}</td>
    <td>{{ client.clientName }}</td>
    <td>
      <ul>
        <li v-for="(diet, index) in client.diets" :key="diet[index]">
          {{ diet.name }}
        </li>
      </ul>
    </td>
    <td>
      <ul v-for="(diet, index) in client.diets" :key="diet[index]">
        <li>{{ diet.tariff }}</li>
      </ul>
    </td>
    <td>{{ client.address }}</td>
    <td>{{ client.phone }}</td>
    <td>
      <ul>
        <li v-for="(diet, index) in client.diets" :key="diet[index]">
          Начало: <nobr>{{ diet.dates.startDate }}</nobr> Конец: <nobr>{{diet.dates.endDate}}</nobr>
        </li>
      </ul>
    </td>
    <td class="status_true"
          :class="{ status_false: client.payStatus === 'Неоплачен ч.' }">
      <p>Стоим: {{ client.orderSum }}</p>
      <p>{{ client.payStatus }}</p>
      <p>Баланс: {{ client.orderPayed }}</p>
    </td>
    <td>
      <p>
        {{ client.courierComment }}
      </p>
    </td>
    <td>
      <p>
        {{ client.innerComment }}
      </p>
    </td>
    <td>
      <ul>
        <li v-for="(status, index) in dietsStatusTexts" :key="index">
          {{ status }}
        </li>
      </ul>
    </td>
  </tr>
</template>

<script setup>
import { toRefs, computed, defineProps } from "vue";
import { DIET_STATUS } from "../data/constants";

const props = defineProps(["client"]);
const { client } = toRefs(props);

const dietsStatusTexts = computed(() => {
  return client.value.diets.map((diet) => {
    if (diet.status === DIET_STATUS.NOT_STARTED) {
      return `Начинается через ${diet.startsIn} дней`;
    }

    if (diet.status === DIET_STATUS.IN_PROGRESS) {
      if(diet.expiresIn === 0){
        return 'Заканчивается сегодня'
      }else if(diet.expiresIn === 1){
        return 'Заканчивается завтра'
      }else{
        return `Заканчивается через ${diet.expiresIn} дней`;
      }
      
    }

    return `Закончилось ${-diet.expiresIn} дней назад`;
  });
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

th,
td {
  border: 1px solid black;
}

ul {
  padding-left: 0;
  text-align: center;
}

li {
  list-style-type: none;
}

ul:not(:first-child) {
  border-top: 1px dashed black;
}

.status_true {
  background-color: rgb(32, 211, 32);
}
.status_false {
  background-color: red;
}
.filter_inactive {
  visibility: hidden;
}

.filter_active {
  visibility: visible;
}

</style>
