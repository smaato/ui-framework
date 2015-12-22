
export default function createRows(indexStart, newRowsCount, isSelected) {
  // Returns a random integer between min (inclusive) and max (inclusive)
  function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const newRows = [];
  const indexEnd = indexStart + newRowsCount;
  for (let i = indexStart; i < indexEnd; i++) {
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
      // TODO: In the case of requesting data from server this
      // could be a more distinct step when state is mixed in
      isSelected,
    });
  }

  return newRows;
}
