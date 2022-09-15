( function() {

 const users = document.querySelector('.users')
 const btn = document.querySelector('#search-button');
 const loader = document.querySelector('#search-button div');

 btn.addEventListener('click', loadData);

 function loadData() {
  loader.classList.add('loading');

  let usersData = fetch('https://jsonplaceholder.typicode.com/users')
   usersData
    .then((response) => response.json())
    .then((data) => {

     loader.classList.remove('loading');
     btn.remove();
     data.forEach(user => {
      users.innerHTML += `
   
          <div class="user--container">
          <div class="name">
           <p>${user.name}</p>
          </div>
          <div class="username">
           <p>${user.username}</p>
          </div>
          <div class="email">
           <p>${user.email}</p>
          </div>
          <div class="address">
           <p>${user.address.street}</p>
          </div>
          <div class="phone">
           <p>${user.phone}</p>
          </div>
          <div class="website">
           <p>${user.website}</p>
          </div>
          <div class="company">
           <p>${user.company.name}</p>
          </div>
         </div>
      
      `;

    loader.classList.remove('loading')
   });
   
  })
  .catch((error) => { console.log(error.message) })

 };

} ());