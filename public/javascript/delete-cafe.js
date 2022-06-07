async function deleteFormHandlerCafe(event) {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/coffee/${id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/coffeeshops');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandlerCafe);