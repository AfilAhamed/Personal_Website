function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_f7k4u5b";
    const templateID = "template_3ynbnil"

    emailjs.send(serviceID,templateID,params)
        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                console.log(res);
                alert("your message sent succesfully");
            }
        )

        .catch((err) => console.log(err));
}








/*
<div class="form-group">
<label for="name">Subject</label>
<input type="text" class="form-control" name="subject" id="subject" required>
</div>*/