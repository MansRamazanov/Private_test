<template>
  <div class="container">
    <input class="search-input" type="text" placeholder="Введите имя" />
    <table class="table">
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
        <th>Окончание</th>
      </tr>
      <tr v-for="client in clientList" :key="client.o_id">
        <td class="status_true">{{ client.o_id }}</td>
        <td>{{ client.client_name }}</td>
        <td>
          <ul v-for="(diet, index) in client.diets" :key="diet[index]">
            <li>{{ diet }}</li>
          </ul>
        </td>
        <td>
          <ul v-for="(tariff, index) in client.tariff" :key="tariff[index]">
            <li>{{ tariff }}</li>
          </ul>
        </td>
        <td>{{ client.address }}</td>
        <td>{{ client.phone }}</td>
        <td>
          <ul v-for="(date, index) in client.dates" :key="date[index]">
            <li>
              Начало: <nobr>{{ date.start_date }}</nobr> Конец:
              <nobr>{{ date.end_date }}</nobr>
            </li>
          </ul>
        </td>
        <td
          class="status_true"
          :class="{ status_false: client.pay_status === 'Неоплачен ч.' }"
        >
          <ul>
            <li>Стоим: {{ client.order_sum }}</li>
            <li>{{ client.pay_status }}</li>
            <li>Баланс: {{ client.order_payed }}</li>
          </ul>
        </td>
        <td>
          <p>
            {{ client.courier_comment }}
          </p>
        </td>
        <td>
          <p>
            {{ client.inner_comment }}
          </p>
        </td>
        <td>
          <ul v-for="(date, index) in client.dates" :key="client[index]">
          <li>{{ diffDate(date) }}</li>
          </ul>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import clientList from "../data/data.js";


function diffDate(obj) {
  let todayYear = new Date().getFullYear();
  let todayMonth = new Date().getMonth() + 1;
  let todayDate = new Date().getDate();
  let today = new Date(`${todayYear}-${todayMonth}-${todayDate}`);
  const start = new Date(obj.start_date);
  const end = new Date(obj.end_date);

  if (today > start) {
    let timeDiff = Math.abs(end.getTime() - today.getTime());
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return `Заканчивается через ${diffDays} дней`;
  } else {
    let timeDiff = Math.abs(start.getTime() - today.getTime());
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return `Начинается через ${diffDays} дней`;
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.table {
  display: table;
  border-collapse: collapse;
}
.status_true {
  background-color: rgb(32, 211, 32);
}
.status_false {
  background-color: red;
}
</style>
