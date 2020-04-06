<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" lang="en-US">

<meta http-equiv="content-type" content="text/html;charset=UTF-8" />

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>LogIn Seconds Digital Solutions Pvt Ltd</title>

 <link rel='stylesheet' id='login-css' href='assets/wp-content/admin/login.min.css' type='text/css' media='all' />

    <link rel=icon href=assets/wp-content/uploads/2019/06/favicon.png sizes=32x32>
    <style>
        .button-primary {
            background: #0085ba;
            border: 1px solid #0073aa;
            color: #fff;
            text-decoration: none;
        }
        
        .button.button-large {
            height: 30px;
            line-height: 28px;
            padding: 0 12px 2px;
        }
    </style>
</head>

<body class="login ">
    <div id="login">

        <center>
            <img width="70%" src="assets/wp-content/uploads/logo.png">
        </center>

        <form name="loginform" id="loginform" action="<?=base_url('login');?>" method="post">
            <p>
                <label for="user_login">Username or Email Address
                    <br />
                    <input type="text" name="username" id="user_login" class="input" value="" size="20" autocapitalize="off" />
                </label>
            </p>
            <p>
                <label for="user_pass">Password
                    <br />
                    <input type="password" name="password" id="user_pass" class="input" value="" size="20" />
                </label>
            </p>
            <p class="forgetmenot">
                <label for="rememberme">
                    <input name="rememberme" type="checkbox" id="rememberme" value="forever" /> Remember Me</label>
            </p>
            <p class="submit">
                <input type="submit" name="submit" id="submit" class="button button-primary button-large" value="Log In" /><!-- 
                <input type="hidden" value="index.html" /> -->

        </form>

    </div>

    <div class="clear"></div>
</body>

</html>