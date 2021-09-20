const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA'
  ]
  
const createArrayOfArrays = (arr) => {
    const newArray = [];
    arr.map((item, index) => {
      newArray[index] = [];
      newArray[index].push(
        item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
      );
      newArray[index].push(item.substring(0, 3));
      newArray[index].push(item.length);
    });
    return newArray;
  };
  console.log(createArrayOfArrays(countries));