import { readFile, readFileSync } from "fs";

// Playing with sync/async code

const cache = new Map();

function consistentReadSync(filename) {
  if (cache.has(filename)) {
    console.log("this file is already in memory");
    return cache.get(filename);
  } else {
    /* 
      This will block node's single thread" 
      Meaning this blocks the event loop and puts every concurrent request on hold
    */
    const data = readFileSync(filename, "utf-8");
    cache.set(filename, data);
    return data;
  }
}

consistentReadSync("text.txt"); // Reads file sync blocking
consistentReadSync("text.txt"); // Read from memory avoid blocking the event loop
