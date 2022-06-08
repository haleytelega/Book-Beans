async function deleteFormHandlerCafe(event) {
    event.preventDefault();
  
    const id = document.querySelector("button[name='delete-cafe']").value;
    
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