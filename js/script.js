// ----------------------------------------------------------------
// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };
//   fetch("https://api.covid19api.com/summary", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));

// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow'
// };

  // fetch("https://cors-anywhere.herokuapp.com/https://health-api.com/api/v1/covid-19/US/full", requestOptions)
  // .then((response) => {
  //   return response.json();
  // })
  // .then((data) => {
  //   console.log(data);

  //   console.log(data[0])
  //   console.log(data[0].state)
  // })





// ------------------------------------------------------------------------

// fetch("https://pomber.github.io/covid19/timeseries.json")
//   .then(response => response.json())
//   .then(data => {
//     data["Argentina"].forEach(({ date, confirmed, recovered, deaths }) =>
//       console.log(`${date} active cases: ${confirmed - recovered - deaths}`)
//     );
//   });
  
  

  // ----------------------------------------------------
  // var requestOptions = {
  //   method: 'GET',
  //   redirect: 'follow'
  // };
  
  // fetch("https://cors-anywhere.herokuapp.com/https://health-api.com/api/v1/covid-19/US", requestOptions)
  //   .then(response => response.text())
  //   .then(result => console.log(result))
  //   .catch(error => console.log('error', error));
    
  // -------------------------------------------------------------------

//   fetch("https://cors-anywhere.herokuapp.com/https://covid-19-data.p.rapidapi.com/country/code?format=undefined&code=it", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
// 		"x-rapidapi-key": "143c64a232msh3a19a53c836431fp16c93cjsn1b6adc7cfdb6"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.log(err);
// });


 // -------------------------------------------------------------------


// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
// 	"headers": {
// 		"x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
// 		"x-rapidapi-key": "143c64a232msh3a19a53c836431fp16c93cjsn1b6adc7cfdb6"
// };

// fetch("https://covid-19-statistics.p.rapidapi.com/provinces?iso=CHN", requestOptions)

// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.log(err);
// });

// -------------------------------------------------------------------

// var requestOptions = {
//   method: 'GET',
//   headers: {
// 		"x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
// 		"x-rapidapi-key": "1bdd105de1msh082bf89a915d1bep123081jsn62ec3c344148"
// 	}
// };

//   fetch("https://cors-anywhere.herokuapp.com/https://covid-19-statistics.p.rapidapi.com/regions", requestOptions)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);

//   })


  // -------------------------------------------------------------------


//   var requestOptions = {
//     method: 'GET',
//     headers: {
//       "x-rapidapi-host": "coronavirus-monitor-v2.p.rapidapi.com",
//       "x-rapidapi-key": "1bdd105de1msh082bf89a915d1bep123081jsn62ec3c344148"
//     }
//   };


// fetch("https://coronavirus-monitor-v2.p.rapidapi.com/coronavirus/hopkins_united_states_all_states_latest.php", requestOptions)
// .then((response) => {
//   return response.json();
// })
// .then((data) => {
//   console.log(data);

// })



// fetch("https://coronavirus-monitor-v2.p.rapidapi.com/coronavirus/hopkins_united_states_all_states_latest.php", {
// 	method: "GET",
// 	headers: {
// 		"x-rapidapi-host": "coronavirus-monitor-v2.p.rapidapi.com",
// 		"x-rapidapi-key": "1bdd105de1msh082bf89a915d1bep123081jsn62ec3c344148"
// 	}
// })
// .then(response => {
// 	return response.json();
// })
// .then((data) => {
//   console.log(data);

// })
