function emailSend(){
   
    var userName = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    var messageBody = "Name " + userName +
    "<br/> E-mail" + email +
    "<br/> Subject" + subject +
    "<br/> Message" + message;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "csisbreno@gmail.com",
        Password : "74C23AEB01264B43FD56959B03D655659141",
        To : 'renzsisbreno@gmail.com',
        From : "csisbreno@gmail.com",
        Subject : "Confirmation Email",
        Body : messageBody
    }).then(
      message => {
        if(message=='OK'){
            swal("Sucessful", "An Email has been sent", "success");
        }
        else{
            swal("Error!", "Please try again", "error");
        }
      }
    );
}