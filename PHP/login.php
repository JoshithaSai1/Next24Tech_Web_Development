<?php
session_start();
?>
<?php
        
            include("Configuration.php");

            if(isset($_POST['submit'])){

                echo '<link href="newstyle.css" rel="stylesheet"></link>' ;
                $email = mysqli_real_escape_string($con,$_POST['email']);
                $password = mysqli_real_escape_string($con,$_POST['password']);

                $result = mysqli_query($con,"SELECT * FROM users WHERE Email='$email' AND Password='$password' ") or die("Select Error");
                $row = mysqli_fetch_assoc($result);

                if(is_array($row) && empty($row)){
                    $_SESSION['valid'] = $row['Email'];
                    $_SESSION['username'] = $row['Username'];
                    $_SESSION['age'] = $row['Age'];
                    $_SESSION['id'] = $row['Id'];
                }else{
                    echo "<div class='message'>
                    <h2>Wrong Username or Password</h2>
                    <br>
                    <button type='submit' class='btn' onclick='javascript:window.history.back()'>Go Back</button>
                    </div> ";
                }
                if(isset($_SESSION['valid'])){
                    echo "<div class='message'>
                    <h2>Logged in Successfully</h2>
                    <br>
                    <button type='submit' class='btn' onclick='javascript:window.history.back()'>Go Back</button>
                    </div> ";
                }
        
            }
            ?>