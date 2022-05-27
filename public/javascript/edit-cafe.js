async function editFormHandlerCafe(event) {
    event.preventDefault();
  
    const cafe_name = document.querySelector('input[name="cafe-name"]').value.trim();
    const city_name = document.querySelector('input[name="city-name"]').value.trim();
   
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/cafes/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        cafe_name,
        city_name
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('#edit-cafe-form').addEventListener('submit', editFormHandlerCafe);
  