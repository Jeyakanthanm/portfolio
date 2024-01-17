/*window.addEventListener("scroll", function() {
    var image = document.getElementById("profile_pic");
    var scrolledRatio = window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight);
    var scale = 1 - scrolledRatio;
    
    image.style.transform = "scale(" + scale + ")";
    image.style.center = -scale  + "px";
    
  });*/


/*
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("profile_pic").style.width = "10%";
    
    
  } else {
    document.getElementById("profile_pic").style.width = "20%";
    
    
  }
}
*/
/*

window.addEventListener("scroll", function() {
  var image = document.getElementById("profile_pic");
  var contentHeight = document.documentElement.scrollHeight - window.innerHeight;
  var scrollY = window.scrollY;
  var opacity = 0 - scrollY / contentHeight;
  var scale = 0 - scrollY / (2 * contentHeight);
  image.style.opacity = opacity;
  image.style.transform = "translate(-50%, -50%) scale (" + scale + ")";
});



*/
/*
function submitForm() {
  alert('Form submitted!'); // Replace with your own form submission logic
}
*/
(function(){
  emailjs.init("d3oXhHeGqqmKJ4VuQ")
})();

function submitForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simulate sending an email using Email.js (this is just an example, you would need to set up an Email.js account)
  emailjs.send("service_yiaow6l","template_m39rfr9", {
    from_name: name,
    from_email: email,
    message: message,
  }).then(
    function(response) {
      console.log("Email sent:", response);
      // Refresh the page after sending the email (you might want to show a confirmation message instead)
      location.reload();
    },
    function(error) {
      console.error("Email failed to send:", error);
    }
  );
}


