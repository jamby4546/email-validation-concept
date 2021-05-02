function validateEmail(emailField){
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (reg.test(emailField.value) == false)
        {
            $(".error").removeClass("hide").addClass("appear");
            $(".email").addClass("appear");
            return false;
        } else {
          $(".error").removeClass("appear").addClass("hide");
          $(".email").removeClass("appear");
          return true;
        }



}
