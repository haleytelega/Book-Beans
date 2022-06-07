async function commentFormHandlerClub(event) {
    event.preventDefault();
  
    const comment_text = document.querySelector('textarea[name="club-comment-body"]').value.trim();
    const book_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (comment_text) {
      const response = await fetch('/api/clubcomments', {
        method: 'POST',
        body: JSON.stringify({
          book_id,
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
  
  document.querySelector('#comment-club-form').addEventListener('submit', commentFormHandlerClub);