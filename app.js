const delay = (seconds) => {
  return new Promise((resolve, reject) => {
    if (typeof seconds !== "number") {
      return reject("Enter correct number");
    }

    setTimeout(() => {
      resolve("Done!");
    }, seconds * 1000);
  });
};

delay("5")
  .then((info) => {
    console.log(info);
  })
  .catch((ex) => {
    console.log(ex);
  });

const getPosts = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (result) => result.json()
  );

  console.log(resp);
};

getPosts();
