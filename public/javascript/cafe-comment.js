async function commentFormHandlerCafe(event) {
    event.preventDefault();
  
    const comment_text = document.querySelector('textarea[name="cafe-comment-body"]').value.trim();
    const coffee_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (comment_text) {
      const response = await fetch('/api/cafecomments', {
        method: 'POST',
        body: JSON.stringify({
          coffee_id,
          comment_text
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        // document.location.reload();
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document.querySelector('#comment-cafe-form').addEventListener('submit', commentFormHandlerCafe);