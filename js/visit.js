// GET API REQUEST
async function get_visitors() {
  try {
      let response = await fetch('https://s2xay292ob.execute-api.us-west-1.amazonaws.com/v1/counter/', {
          method: 'GET'
      });
      let data = await response.json()
      document.getElementById("visits-counter").innerHTML = data['count'];
      console.log(data);
      return data;
  } catch (err) {
      console.error(err);
  }
}

get_visitors();