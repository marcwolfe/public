//URL we get data from
let baseUrl = "https://swapi.dev/api/people";
let person = document.getElementById("app");

// fetch request to grab first set of data
fetch(baseUrl)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const names = data.results.map((name) => {
      console.log(name);
      return name;
    });
    console.log(names[0]);
    for (let i = 0; i < names.length; i++) {
      if ((names[i].films = "https://swapi.dev/api/films/5/")) {
        // 2nd fetch to return the actual name of the homeworld and gain access to the the population key.
        fetch(names[i].homeworld)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(
              `The names of the characters from Attack of the Clones are ${names[i].name}, there homeplanet is ${data.name}, and homeplanet population equals ${data.population}`
            );
          });
      }
    }
  });
