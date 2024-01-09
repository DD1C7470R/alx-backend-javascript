const groceriesList = () => {
  const groceryArray = [['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];
  return new Map(groceryArray);
};

export default groceriesList;
