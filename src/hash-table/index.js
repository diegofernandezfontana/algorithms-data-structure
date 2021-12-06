const randomPrime = 37;

function hashStringToInt(s = "", tableSize = 0) {
  let hash = randomPrime;

  for (let i = 0; i < s.length; i++) {
    hash = (hash * randomPrime + s.charCodeAt(i)) % tableSize;
  }

  return hash;
}

class HashTable {
  data = new Array(11);

  setItem(key, value) {
    const index = hashStringToInt(key, this.data.length);

    // store arr [key, value]
    if (!this.data[index]) {
      this.data[index] = [[key, value]];
    } else {
      this.data[index].push([key, value]);
    }
  }

  getItem(key) {
    const index = hashStringToInt(key, this.data.length);
    const values = this.data[index];

    if (!values) {
      return null;
    }

    return values.find((value) => value[0] === key)[1];
  }
}

const table = new HashTable();

table.setItem("name", "Diego");
table.setItem("surname", "Fernandez Fontana");
table.setItem("age", "37");
table.setItem("email", "diego@github.com");
table.setItem("password", "Im not going to type it");
