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
                let myObj = {
                    name : event.target.username.value,
                    email : event.target.emailId.value,
                    phonenumber : event.target.Phone_number.value
                };
                let myObj_serialized = JSON.stringify(myObj);
                localStorage.setItem('firstUser', myObj_serialized);
                //console.log(localStorage);
                let myObj_deSerialized = JSON.parse(localStorage.getItem("firstUser"));
                console.log(myObj_deSerialized);
            }
        </script>
  </body>
