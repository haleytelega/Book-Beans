async function newFormHandlerCafe(event) {
    event.preventDefault();
  
    const cafe_name = document.querySelector('input[name="cafe-name"]').value;
    const city_name = document.querySelector('input[name="city-name"]').value;
  
    const response = await fetch(`/api/coffee`, {
      method: 'POST',
      body: JSON.stringify({
        cafe_name,
        city_name
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/coffeeshops');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('#new-cafe-form').addEventListener('submit', newFormHandlerCafe);