'use script';

var fb = new Firebase('https://tc-landingpage.firebaseio.com/');


  $('form').submit(function (e) {
    var $form     = $(e.target),
        $fullName = $form.find('input[name="fullname"]'),
        $contactEmail    = $form.find('input[name="email"]'),
        $contactLocation = $form.find('input[name="location"]'),
        name = $fullName.val(),
        email = $contactEmail.val(),
        location = $contactLocation.val();

        $fullName.val('');
        $contactEmail.val('');
        $contactLocation.val('');

        fb.push({name: name, email: email, location: location});
        e.preventDefault();
  });
