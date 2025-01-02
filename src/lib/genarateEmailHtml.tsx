
 export const genarateEmailHtml = (token:string,name="User")=>{
    return (`
        <div style="width:100%; height:100%; padding:0; margin:0; text-align:center; background-color:#f9f9f9;">
        <table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0" style="margin:0; padding:0; width:100%; height:100%; text-align:center; background-color:#f9f9f9;">
            <tr>
                <td align="center" valign="middle">
                    <table width="600" cellspacing="0" cellpadding="10" border="0" style="border: 1px solid #555555; border-radius: 17px; background-color: #ffffff; box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);">
                        <tr>
                            <td style="font-family: Arial, sans-serif; padding: 20px; text-align: left;">
                                <h1 style="font-weight: 900; font-size: 25px; margin: 0 0 10px; text-align: center;">Hi ${name},</h1>
                                <p style="font-size: 16px; color: #363636; margin: 0 0 10px;">
                                    Welcome to LaunchFrame!
                                </p>
                                <p style="font-size: 16px; color: #363636; margin: 0 0 20px;">
                                    To complete your login, click the button below. This link is valid for 4 hours.
                                </p>
                                <table cellspacing="0" cellpadding="0" border="0" style="margin: 0 auto; text-align: center;">
                                    <tr>
                                        <td>
                                            <a href="http://localhost:3000/api/auth/verify?token=${token}" 
                                               target="_blank" 
                                               style="display: inline-block; background-color: brown; color: #ffffff; text-decoration: none; padding: 15px 30px; border-radius: 26px; font-weight: 900; font-size: 16px;">
                                                Go To LaunchFrame
                                            </a>
                                        </td>
                                    </tr>
                                </table>
                                <p style="font-size: 14px; color: #999999; margin: 20px 0 0;">
                                    If you didn’t request this email, you can safely ignore it.
                                </p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
    
</div>`)
    }
