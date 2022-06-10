
async function deleteFormHandlerCafe(event, id) {
    event.preventDefault();
  
    // const id = document.querySelector("button[name='delete-cafe']").value;
    
    const response = await fetch(`/api/coffee/${id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/coffeeshops');
    } else {
      alert(response.statusText);
    }
  }
  
  const deleteButtons = [...document.querySelectorAll('.delete-post-btn')]
  deleteButtons.forEach(function(el){
    const value = el.value;
    console.log(value);
    el.addEventListener('click', (e)=>{
      deleteFormHandlerCafe(e, value)
    })
  });
