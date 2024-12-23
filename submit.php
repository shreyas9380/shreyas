
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$phone = htmlspecialchars($_POST['phone']);
$dob = htmlspecialchars($_POST['dob']);
// You can add your database insertion code here.
// For simplicity, we redirect back to index.html with the user data.
echo "<script>
window.location.href = 'index.html';
alert('Registration Successful');
</script>";
}
?>
