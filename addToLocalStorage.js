<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>JS For Beginners</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header style="font-weight: bold;">
        Details entered by the user in the LOCAL STORAGE
      </header>
        <section class="container">
          <form id="my-form" onsubmit="storeInLocalStorage(event)">
              <h1>USER DETAILS</h1>
              <div>
                  <label></label>Name : </label>
                  <input type="text" name="username" required/>
              </div>
              <div>
                  <label>Email : </label>
                  <input type="text" name="emailId" required/>
              </div>
              <div>
                  <label>Phone_number : </label>
                  <input type="number" name="Phone_number"/>
              </div>
              <button>Submit</button>
          </form>
        </section>

        <script>
            function storeInLocalStorage(event){
                event.preventDefault();
                const input_name = event.target.username.value;
                const input_email = event.target.emailId.value;
                const input_phonenumber = event.target.Phone_number.value;
                localStorage.setItem('name', input_name);
                localStorage.setItem('email', input_email);
                localStorage.setItem('phonenumber', input_phonenumber);
            }
        </script>
  </body>
