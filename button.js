
$(document).ready(function() {
$('#registrationForm').on('submit', function(e) {
e.preventDefault(); // Prevent default form submission
var name = $('#name').val();
var email = $('#email').val();
var phone = $('#phone').val();
var dob = $('#dob').val();
// Display confirmation message and submitted data
$('#dispName').text(name);
$('#dispEmail').text(email);
$('#dispPhone').text(phone);
$('#dispDob').text(dob);
// Hide the form and show the confirmation message
$('#registrationForm').hide();
$('#confirmation').show();
});
});
