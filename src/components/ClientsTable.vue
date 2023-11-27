<template>
  <div class="container">
    <div class="filter">
      <button v-on:click="isVisible = !isVisible">Фильтр</button>
      <div v-if="isVisible">
        <input
          class="search-input"
          type="text"
          placeholder="Введите имя"
          v-model="searchString"
          v-on:change="onChangeSelected"
        />
      </div>
    </div>
    <table class="table" id="table">
      <tr>
        <th>Номер</th>
        <th>Имя/Фамилия</th>
        <th>Диета</th>
        <th>Тариф</th>
        <th>Адрес</th>
        <th>Телефон</th>
        <th>Дата</th>
        <th>Статус оплаты</th>
        <th>Коммантарий курьеру</th>
        <th>Комментарий</th>
        <th>
          <button @click="toggleDatesSort">Статус</button>
        </th>
      </tr>
      <ClientsTableRow v-for="client in list" :key="client.id" :client="client" />
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { getClientsList } from "../data/clientsDataProvider";
import { sortDietsDescending, sortDietsAscending } from "../helpers/sortDiets";
import ClientsTableRow from './ClientsTableRow.vue'

let isVisible = ref(false);

const clientsList = ref([]);

const SORT_TYPE = {
  DATES_DESC: "DATES_DESC",
  DATES_ACS: "DATES_ACS",
};

const sortType = ref(SORT_TYPE.DATES_DESC);

onMounted(async () => {
  console.log("onMounted");
  const clientListData = await getClientsList();
  clientsList.value = clientListData;
  console.log(clientsList.value);
});

const list = computed(() => {
  const list = clientsList.value
    .filter((client) => client.diets.length > 0)
    .sort((first, second) => {
      switch (sortType.value) {
        case SORT_TYPE.DATES_DESC: {
          return sortDietsDescending(first.diets[0], second.diets[0]);
        }
        case SORT_TYPE.DATES_ACS: {
          return sortDietsAscending(first.diets[0], second.diets[0]);
        }
      }
    });

  console.log(list);
  return list;
});

function toggleDatesSort() {
  sortType.value =
    sortType.value === SORT_TYPE.DATES_DESC
      ? SORT_TYPE.DATES_ACS
      : SORT_TYPE.DATES_DESC;
}
</script>

<style>

.table {
  display: table;
  border-collapse: collapse;
}

</style>
