const getStoredData = () => {
  const storedBook = localStorage.getItem("MyBooks");
  if (storedBook) {
    const parseData = JSON.parse(storedBook);
    return parseData;
  } else {
    return [];
  }
};

const addToDB = (id) => {
  const storedBookData = getStoredData();
  if (storedBookData.includes(id)) {
    alert("This book is already stored");
  } else {
    storedBookData.push(id);
    console.log(storedBookData);
    const data = JSON.stringify(storedBookData);
    localStorage.setItem("MyBooks", data);
  }
};

export { addToDB, getStoredData };
