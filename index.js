fetch('https://my-own-counter-api-production.up.railway.app/hit/myownwebsite/myownwebsite', {
  method: 'POST'
})
.then(response => response.json())
.then(data => {
  console.log(data); // Handle the response data
})
.catch(error => {
  console.error('Error:', error); // Handle errors
});

