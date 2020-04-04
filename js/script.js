let requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
fetch("https://api.covid19api.com/summary", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  console.log("works");