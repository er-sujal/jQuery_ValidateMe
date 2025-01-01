$(document).ready(function () {
  $("#loginForm").validate({
    rules: {
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 8,
      },
    },
    messages: {
      email: {
        required: "Please enter your email address.",
        email: "Please enter a valid email address."
      },
      password: {
        required: "Please provide your password.",
        minlength: "Your password must be at least 8 characters long."
      },
    },
    submitHandler: function (form) {
      alert("Login successful!");
      form.submit();
    },
  });

  $("#email, #password").on("input", function () {
    $(this).valid();
  });
});
