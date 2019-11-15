import "./styles.css";

document.getElementById("fetch-button").addEventListener("click", () => {
  const amount = document.getElementById("value").value;
  const year = document.getElementById("year").value;

  console.log(amount, year);

  fetch(
    `https://the-inflation-api.herokuapp.com/api/?value=${amount}&year=${year}`
  )
    .then(reponse => reponse.json())
    // if just one return, use the one line, as abobe
    // .then(reponse => {
    //   return reponse.json()
    // })
    .then(data => {
      console.log(data);
      document.getElementById("app").innerHTML = `<h1>Current value: $${
        data.response.adjustedValue
      }</h1>`;
    });
});

// document.getElementById("app").innerHTML = ``;
