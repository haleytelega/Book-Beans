async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      setTimeout( () => document.location.replace('/'), 100);
      
    } else {
      alert(response.statusText);
    }
  }
}

async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value;
  const city_name = document.querySelector('#city-signup').value;
  const email = document.querySelector('#email-signup').value;
  const password = document.querySelector('#password-signup').value;

  if (username && email && password && city_name) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        email,
        password,
        city_name
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('#login').addEventListener('submit', loginFormHandler);

document.querySelector('#sign-up').addEventListener('submit', signupFormHandler);
