$(document).ready(function () {
  $("#password").on("input", function () {
    const password = $("#password").val();
    const feedbackElement = $("#passwordFeedback");
    const requirements = [];

    if (!/(?=.*[A-Z])/.test(password)) {
      requirements.push("at least one uppercase letter");
    }
    if (!/(?=.*[a-z])/.test(password)) {
      requirements.push("at least one lowercase letter");
    }
    if (!/(?=.*\d)/.test(password)) {
      requirements.push("at least one number");
    }
    if (!/(?=.*[@$!%*?&])/.test(password)) {
      requirements.push("at least one special character (@, $, !, %, *, ?, &)");
    }

    if (requirements.length > 0) {
      feedbackElement
        .text(`Password must include ${requirements.join(", ")}.`)
        .show();
      $("#password").addClass("is-invalid");
    } else {
      feedbackElement.text("").hide();
      $("#password").removeClass("is-invalid");
    }
  });

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
        email: "Please enter a valid email address.",
      },
      password: {
        required: "Please provide your password.",
        minlength: "Your password must be at least 8 characters long.",
      },
    },
    errorClass: "error",
    errorPlacement: function (error, element) {
      error.appendTo(element.parent().parent());
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
