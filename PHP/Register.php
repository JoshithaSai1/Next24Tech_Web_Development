<?php
include("Configuration.php");
if(isset($_POST['submit'])){
   echo "<link href='newstyle.css' rel='stylesheet' type='text/css'></link>";
    $username=$_POST['username'];
    $email=$_POST['email'];
    $password=$_POST['password'];
    $age=$_POST['age'];
$verify_query=mysqli_query($con,"SELECT Email,Username FROM users WHERE Email='$email' and Username='$username'");
if(mysqli_num_rows($verify_query)!=0)
{
    echo "<div class='message'>
            <h2>This email is used, Try another!</h2>
    <a href='javascript:self.history.go(-2)'><input type='submit' class='btn' value='Go Back'/></div>";
}
else{
    mysqli_query($con,"INSERT INTO users(Username,Email,Age,Password) VALUES('$username','$email','$age','$password')") or die("Error Occured");
    echo "<div class='message'>
    <h2>Registration Successful</h2>
    <a href='javascript:self.history.go(-2)'><input type='submit' class='btn' value='Login Now'/></div>";
}
}
?>