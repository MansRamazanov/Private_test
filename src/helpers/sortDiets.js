import { DIET_STATUS } from './../data/constants';

// Сортируем диеты.
// Саначала не начавшиеся, чем дальше, тем выше в списке.
// Затем в процессе, чем ближе конец, тем выше в списке.
// Затем кончившиеся, чем меньше прошло от конца, тем выше.

export function sortDietsDescending(first, second) {
  const firstStartsIn = first.startsIn;
  const secondStartsIn = second.startsIn;
  const firstExpiresIn = first.expiresIn;
  const secondExpiresIn = second.expiresIn;
  const firstStatus = first.status;
  const secondStatus = second.status;

  if (
    firstStatus === DIET_STATUS.NOT_STARTED &&
    secondStatus === DIET_STATUS.NOT_STARTED
  ) {
    return secondStartsIn - firstStartsIn;
  }
  
  if (
    firstStatus === DIET_STATUS.IN_PROGRESS &&
    secondStatus === DIET_STATUS.IN_PROGRESS
  ) {
    return firstExpiresIn - secondExpiresIn;
  }

  if (
    firstStatus === DIET_STATUS.EXPIRED &&
    secondStatus === DIET_STATUS.EXPIRED
  ) {
    return secondExpiresIn - firstExpiresIn;
  }

  if (firstStatus === DIET_STATUS.NOT_STARTED && secondStatus === DIET_STATUS.IN_PROGRESS) return -1;
  if (firstStatus === DIET_STATUS.NOT_STARTED && secondStatus === DIET_STATUS.EXPIRED) return -1;
  if (firstStatus === DIET_STATUS.IN_PROGRESS && secondStatus === DIET_STATUS.NOT_STARTED) return 1;
  if (firstStatus === DIET_STATUS.IN_PROGRESS && secondStatus === DIET_STATUS.EXPIRED) return -1;
  if (firstStatus === DIET_STATUS.EXPIRED && secondStatus === DIET_STATUS.NOT_STARTED) return 1;
  if (firstStatus === DIET_STATUS.EXPIRED && secondStatus === DIET_STATUS.IN_PROGRESS) return 1;

  return 0;
}

// Сортируем диеты.
// Саначала кончившиес, чем больше от конца, тем выше.
// Затем в процессе, чем ближе конец, тем выше в списке.
// Затем не начавшиеся, чем меньше до начана, тем выше.

export function sortDietsAscending(first, second) {
  const firstStartsIn = first.startsIn;
  const secondStartsIn = second.startsIn;
  const firstExpiresIn = first.expiresIn;
  const secondExpiresIn = second.expiresIn;
  const firstStatus = first.status;
  const secondStatus = second.status;

  if (
    firstStatus === DIET_STATUS.NOT_STARTED &&
    secondStatus === DIET_STATUS.NOT_STARTED
  ) {
    return firstStartsIn - secondStartsIn;
  }
  
  if (
    firstStatus === DIET_STATUS.IN_PROGRESS &&
    secondStatus === DIET_STATUS.IN_PROGRESS
  ) {
    return firstExpiresIn - secondExpiresIn;
  }

  if (
    firstStatus === DIET_STATUS.EXPIRED &&
    secondStatus === DIET_STATUS.EXPIRED
  ) {
    return  firstExpiresIn - secondExpiresIn;
  }

  if (firstStatus === DIET_STATUS.NOT_STARTED && secondStatus === DIET_STATUS.IN_PROGRESS) return 1;
  if (firstStatus === DIET_STATUS.NOT_STARTED && secondStatus === DIET_STATUS.EXPIRED) return 1;
  if (firstStatus === DIET_STATUS.IN_PROGRESS && secondStatus === DIET_STATUS.NOT_STARTED) return -1;
  if (firstStatus === DIET_STATUS.IN_PROGRESS && secondStatus === DIET_STATUS.EXPIRED) return 1;
  if (firstStatus === DIET_STATUS.EXPIRED && secondStatus === DIET_STATUS.NOT_STARTED) return -1;
  if (firstStatus === DIET_STATUS.EXPIRED && secondStatus === DIET_STATUS.IN_PROGRESS) return -1;

  return 0;
}