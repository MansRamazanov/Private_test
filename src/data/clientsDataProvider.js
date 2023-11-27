import { clientList } from "./data";
import { getDatesDiff } from "./../helpers/dateDiff";
import { sortDietsDescending } from "./../helpers/sortDiets";
import { DIET_STATUS } from "./constants";

export async function getClientsList() {
  return clientList.map(parseClient);
}

function parseClient(client) {
  return {
    id: client.o_id,
    clientName: client.client_name,
    diets: createDiets(client),
    address: client.address,
    discount: client.discount,
    orderSum: client.order_sum,
    orderPayed: client.order_payed,
    payStatus: client.pay_status,
    courierComment: client.courier_comment,
    innerComment: client.inner_comment,
    phone: client.phone,
  };
}

function createDiets(client) {
  return (
    client.diets
      .map((diet, index) => {
        const dates = parseDates(client.dates[index]);

        const startsIn = getDatesDiff(dates.startDate);
        const expiresIn = getDatesDiff(dates.endDate);

        return {
          dates,
          startsIn,
          expiresIn,
          name: diet,
          tariff: client.tariff[index],
          status: getStatus(startsIn, expiresIn),
        };
      })
      .sort(sortDietsDescending)
  );
}

function parseDates(date) {
  return {
    startDate: date.start_date,
    endDate: date.end_date,
  };
}

function getStatus(startsIn, expiresIn) {
  if (startsIn > 0) return DIET_STATUS.NOT_STARTED;
  if (expiresIn >= 0) return DIET_STATUS.IN_PROGRESS;
  return DIET_STATUS.EXPIRED; // expiresIn < 0
}
