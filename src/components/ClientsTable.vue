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
        <td>{{ client.o_id }}</td>
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
            <li>{{ date }}</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>Стоим: {{ client.order_sum }}</li>
            <li> {{ client.pay_status }} </li>
            <li>Долг: {{ client.order_payed }}</li>
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
        <!-- <td>{{ client. }}</td> -->
      </tr>
    </table>
  </div>
</template>

<script setup>
import clientList from "../data/data.js";

console.log(clientList);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table {
  display: table;
  border-collapse: collapse;
}

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
</style>
