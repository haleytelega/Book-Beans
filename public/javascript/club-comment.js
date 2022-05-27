async function commentFormHandlerClub(event) {
    event.preventDefault();
  
    const book_text = document.querySelector('textarea[name="club-comment-body"]').value.trim();
    const book_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (book_text) {
      const response = await fetch('/api/clubcomments', {
        method: 'POST',
        body: JSON.stringify({
          book_id,
          book_text
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
  
  document.querySelector('#comment-club-form').addEventListener('submit', commentFormHandlerClub);