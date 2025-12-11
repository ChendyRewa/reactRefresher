// const http = require("http");
// let server = http.createServer(function (request, response) {
//   let body = "hello world";
//   response.writeHead(200, {
//     "Content-Length": body.length,
//     "Content-Type": "text/plain",
//   });
//   response.end(body);
// });

// server.listen(8080);

function searchLargeElement(arr) {
  let large = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > large) {
      large = arr[i];
    }
  }
  return large;
}

function searchSmallestElement(arr) {
  let smallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

function secondLargest(arr) {
  if (arr.length < 2) return `Array should have 2 elements`;

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest === -Infinity ? `No Second largest` : secondLargest;
}

let arrayNum = [, 9, 9, 9, 9, 9];

console.log(searchLargeElement(arrayNum));
console.log(searchSmallestElement(arrayNum));
console.log(secondLargest(arrayNum));
