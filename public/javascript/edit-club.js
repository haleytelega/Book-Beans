async function editFormHandlerClub(event) {
    event.preventDefault();
  
    const bookClub_name = document.querySelector('input[name="club-name"]').value.trim();
    const city_name = document.querySelector('input[name="club-city-name"]').value.trim();
    const meeting_weekday = document.querySelector('input[name="club-meeting-weekday"]').value.trim();
    const meeting_time = document.querySelector('input[name="club-meeting-time"]').value.trim();
   
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/bookclubs/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        bookClub_name,
        city_name,
        meeting_weekday,
        meeting_time
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
  
  document.querySelector('#edit-club-form').addEventListener('submit', editFormHandlerClub);
  