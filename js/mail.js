function SendMSG(e) {
  e.preventDefault();
  let nam_txt = document.querySelector("#name");
  let email_txt = document.querySelector("#email");
  let subject_txt = document.querySelector("#subject");
  let message_txt = document.querySelector("#message");

  // Create the object with the user's email included
  let temp = {
    from_name : nam_txt.value,
    email : email_txt.value, // <--- Add this! Matches {{reply_to}} in your template
    to_name : "Sabbella Laharika",
    subject : subject_txt.value,
    message : "Name: " + nam_txt.value + ", Email: " + email_txt.value + ", Message: " + message_txt.value
  };

  // Validation
  if (!nam_txt.value || !email_txt.value || !subject_txt.value || !message_txt.value) {
    return alert("Please Fill Complete Details!!");
  }

  // Send the main message
  emailjs.send('service_xd46v26', 'template_8d69q8y', temp, "RsFpOOT-1XgEt_jxm")
    .then((res) => {
      if (res.status == 200) {
        success();
        // If auto-reply is NOT linked in the dashboard, you can trigger it manually here:
        // emailjs.send('service_xd46v26', 'template_mew4slo', temp, "RsFpOOT-1XgEt_jxm")
      } else {
        failure();
      }
    });

  // Clear inputs
  nam_txt.value = "";
  email_txt.value = "";
  subject_txt.value = "";
  message_txt.value = "";
}