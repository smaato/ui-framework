
export default function createRows(indexStart, newRowsCount) {
  // Returns a random integer between min (inclusive) and max (inclusive)
  function getRandomInteger(min, max) {
    return Math.floor(Math.random() * ((max - min) + 1)) + min;
  }

  function getRandomDate(start, end) {
    return new Date(start.getTime() +
      (Math.random() * (end.getTime() - start.getTime())));
  }

  function getRandomCylinders() {
    const random = getRandomInteger(1, 16);
    if (random < 9) {
      return random;
    }
    if (random < 13) {
      return 'XL engine';
    }
    return 'XXL engine';
  }

  const newRows = [];
  const statuses = ['Active', 'Stopped', 'Archived'];
  const indexEnd = indexStart + newRowsCount;
  for (let i = indexStart; i < indexEnd; i += 1) {
    newRows.push({
      id: i,
      name: `Ford F-${getRandomInteger(0, 50000)}`,
      status: statuses[getRandomInteger(0, 2)],
      fuel: 'Diesel, Unleaded',
      passengers: getRandomInteger(0, 100),
      cylinders: getRandomCylinders(),
      fuelEconomy: getRandomInteger(0, 200000),
      sold: getRandomInteger(0, 2000000000),
      registered: getRandomInteger(0, 2000000000),
      kpiSold: getRandomInteger(0, 100),
      kpiRegistered: getRandomInteger(0, 100),
      releaseDate: getRandomDate(new Date(2019, 6, 1), new Date()),
    });
  }

  return newRows;
}
