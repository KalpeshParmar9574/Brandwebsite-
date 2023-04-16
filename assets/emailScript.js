
// get the  values from the email feilds

var btn = document.getElementById('git_btn')


document.getElementById("contact").addEventListener("submit", function(event) {
    // Prevent form from being submitted and page from being reloaded
    event.preventDefault();
    debugger
   
    var fname = document.getElementById('fname').value;
   
    var email = document.getElementById('email').value;
    var msg = document.getElementById('msg').value;

    let body = { // corrected const declaration
        name: fname,
      
        email: email,
        message: msg
    };
    if (_formValidate(body)) {
        btn.innerText='Mail is sending...'
        console.log(body);
        sendMail(body)
   } 
    // Optionally, you can manually submit the form after processing the data
    // event.target.submit();
  
  });

function _formValidate(data){
    
    if (data.name == "") { 
        alert("Please enter your first name");
        return false

    }
   

    if(!data.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    )) {
        alert("enter valid contact email")
    }
    return true
}


// Load the EmailJS library

  
    
    // Send the email
function sendMail(body) {
    const service_id = "service_r9a64ij";
    const template_id = "template_i84dit8";
   
    emailjs.send(service_id, template_id, body)
      .then(function(response) {
          btn.innerText = 'Mail is send'
          document.getElementById('contact').reset()
          setInterval(() => {
              btn.innerText = 'Get In Touch'
          },3000)
      })
        .catch(function (error) {
            btn.innerText = 'Please Try Again'
            document.getElementById('contact').reset()
       
      });   
    }
  


