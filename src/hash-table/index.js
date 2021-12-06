const randomPrime = 37;

function hashStringToInt(s = "", tableSize = 0) {
  let hash = randomPrime;

  for (let i = 0; i < s.length; i++) {
    hash = (hash * randomPrime + s.charCodeAt(i)) % tableSize;
  }

  return hash;
}

class HashTable {
  // Use prime numbers to have better distribution
  // This implementation needs to have a resize method to extend current data.length

  data = new Array(111);

  setItem(key, value) {
    const index = hashStringToInt(key, this.data.length);
    // Would work great if linked list is used instead of array for insertion
    // but would also need to update getItem -> find -> return value

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
