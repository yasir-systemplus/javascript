const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello from P1");
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello from P2");
  }, 2000);
});

const info = (info) => {
  console.log(info);
};

p1.then(info);
p2.then(info);
