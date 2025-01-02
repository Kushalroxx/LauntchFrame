import Mailgun from "mailgun.js"
import formData from "form-data";
import { genarateEmailHtml } from "../genarateEmailHtml";

export const sendMail = async(email:string,msg:string)=>{
    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({username: 'api', key:"5882d3f07fb457bc51e5b257048d7907-2e68d0fb-1e31e9f1"});
    
    mg.messages.create('sandbox5602b437d1f4427a87d5cd3460cb3fa2.mailgun.org', {
        from: "Launtch Frame <mailgun@sandbox5602b437d1f4427a87d5cd3460cb3fa2.mailgun.org>",
        to: ["jack349no@gmail.com"],
        subject: "Get Started",
        html: genarateEmailHtml("ok")
    })
    .then(msg => console.log(msg)) // logs response data
    .catch(err => console.log(err)); // logs any error 
}
