export function getDatesDiff(start) {
  const todayYear = new Date().getFullYear();
  const todayMonth = new Date().getMonth() + 1;
  const todayDate = new Date().getDate();
  const today = new Date(`${todayYear}-${todayMonth}-${todayDate}`);
  const startDate = new Date(start);

  let timeDiff = startDate.getTime() - today.getTime();
  return Math.round(timeDiff / (1000 * 3600 * 24));
}

