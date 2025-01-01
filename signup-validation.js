$(document).ready(function () {
  $("#password, #confirmPassword").on("input", function () {
    const password = $("#password").val();
    const confirmPassword = $("#confirmPassword").val();
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

    if (confirmPassword !== password) {
      $("#confirmPassword").addClass("is-invalid");
    } else {
      $("#confirmPassword").removeClass("is-invalid");
    }
  });

  $("#signupForm").validate({
    rules: {
      name: "required",
      email: {
        required: true,
        email: true,
      },
      dob: {
        required: true,
        date: true,
        max: new Date().toISOString().split("T")[0],
      },
      country: "required",
      password: {
        required: true,
        minlength: 8,
      },
      confirmPassword: {
        required: true,
        equalTo: "#password",
      },
    },
    messages: {
      name: "Name is required.",
      email: "Please enter a valid email address.",
      dob: "Date of Birth cannot be empty or future.",
      country: "Please select your country.",
      password: {
        required: "Password is required.",
        minlength: "Password must be at least 8 characters long.",
      },
      confirmPassword: "Passwords do not match.",
    },
    errorClass: "error",
    submitHandler: function (form) {
      alert("Singup Successful.");
      window.location.href = "index.html";
    },
  });

  $("#email, #password").on("input", function () {
    $(this).valid();
  });
});
