// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };
//   fetch("https://api.covid19api.com/summary", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://cors-anywhere.herokuapp.com/https://health-api.com/api/v1/covid-19/US/full", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


  
  // var requestOptions = {
  //   method: 'GET',
  //   redirect: 'follow'
  // };
  
  // fetch("https://cors-anywhere.herokuapp.com/https://health-api.com/api/v1/covid-19/US", requestOptions)
  //   .then(response => response.text())
  //   .then(result => console.log(result))
  //   .catch(error => console.log('error', error));
    