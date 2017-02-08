
export default function createRows(indexStart, newRowsCount) {
  // Returns a random integer between min (inclusive) and max (inclusive)
  function getRandomInteger(min, max) {
    return Math.floor(Math.random() * ((max - min) + 1)) + min;
  }

  const newRows = [];
  const indexEnd = indexStart + newRowsCount;
  for (let i = indexStart; i < indexEnd; i += 1) {
    newRows.push({
      id: i,
      name: `Ford F-${getRandomInteger(0, 50000)}`,
      status: 'In Production',
      fuel: 'Diesel, Unleaded',
      passengers: getRandomInteger(0, 100),
      cylinders: getRandomInteger(0, 8),
      fuelEconomy: getRandomInteger(0, 200000),
      sold: getRandomInteger(0, 2000000000),
      registered: getRandomInteger(0, 2000000000),
      kpiSold: getRandomInteger(0, 100),
      kpiRegistered: getRandomInteger(0, 100),
    });
  }

  return newRows;
}
