async function deleteFormHandlerClub(event) {
    event.preventDefault();
  
  
    const response = await fetch(`/api/book/${id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/bookclubs');
    } else {
      alert(response.statusText);
    }
  }
  
  const deleteButtons = [...document.querySelectorAll('.delete-post-btn')]
  deleteButtons.forEach(function(el){
    const value = el.value;
    console.log(value);
    el.addEventListener('click', (e)=>{
      deleteFormHandlerClub(e, value)
    })
  });