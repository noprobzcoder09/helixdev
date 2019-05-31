<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"  "http://www.=w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  </head>
  <body>
    <table style="font-family:helvetica,arial,sans-serif;margin-left:auto;margin-right:auto;" width="600">
      <tbody>
        <tr>
        	<td bgcolor="#FFFFFF" style="display:block!important;max-width:600px!important;clear:both!important;margin:0 auto;padding:0;">
        		<div>
        			<table>
          			<tbody>
            			<tr>
            				<td style="font-family:helvetica,arial,sans-serif;font-size:14px;">
            					<p style="text-align: center;">
            						<img width="300px" style="font-family:Avenir,Helvetica,sans-serif;box-sizing:border-box;max-width:100%;margin-top:20px;" src="http://ec2-54-191-204-102.us-west-2.compute.amazonaws.com/helix/staging/public/img/helix-logo.png" alt="Welcome to Helix"/>
            					</p>
            					<p style="font-size:24px;color:#0a539e;text-align:center;font-weight:800;">
            						Reset Password Request
            					</p>
            					<p style="padding:0 25px;font-size:14px;">
            						We received your reset password request for Helix. Simply click the button below to verify this action.
            					</p>
            					<p style="text-align:center;padding:0 25px;font-size:14px;">
            						You request to change a password
                        <br>
                        <a style="display:inline-block;padding:10px;background:#3B5369;border-radius:5px;text-decoration:none;color:#fff;font-size:13px;" href="{{ route('password.change.view') }}?h={{ $hash }}">Verify Request</a>
            					</p>
            					<p style="max-width:600px;word-break:break-all;font-size:12px;padding:0 25px;">
            						If the button doesn't work, copy and paste the link into your browser:
                        <br>
                        <a href="{{ route('password.change.view') }}?h={{ $hash }}">{{ $hash }}</a>
            					</p>
            					<p style="padding:0 25px;font-size:14px;">
            						Thank you!
            					</p>
            					<br/>
            					<p style="padding:0 25px;font-size:14px;">
            						Sincerely,<br/> <strong>Helix</strong>
            					</p>
            					<br/>
            					<table style="width:100%;text-align:center;padding:14px;" bgcolor="#ebebeb">
              					<tbody>
                					<tr>
                						<td style="font-family:helvetica,arial,sans-serif;">
                							<p style="padding:0 25px;">
                								<strong>Contact Us at +0123456789</strong>
                                <br/>
                                <a href="mailto:customer.service@helix.com">customer.service@helix.com</a> | <a href="#" target="_blank">www.helix.com</a>
                							</p>
                						</td>
                					</tr>
              					</tbody>
            					</table>
            				</td>
            			</tr>
          			</tbody>
        			</table>
        		</div>
        	</td>
        	</tr>
      	</tbody>
    	</table>
  	</body>
	</html>
