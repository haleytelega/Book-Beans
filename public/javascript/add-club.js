async function newFormHandlerClub(event) {
    event.preventDefault();
  
    const bookClub_name = document.querySelector('input[name="club-name"]').value;
    const city_name = document.querySelector('select[name="city-name"]').value;
    const meeting_weekday = document.querySelector('select[name="meeting-weekday"]').value;
    const meeting_time = document.querySelector('input[name="meeting-time"]').value;
  
    const response = await fetch(`/api/book`, {
      method: 'POST',
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
      document.location.replace('/bookclubs');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-club-form').addEventListener('submit', newFormHandlerClub);