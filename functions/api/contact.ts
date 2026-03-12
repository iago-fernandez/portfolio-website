import { EmailMessage } from "cloudflare:email";

export const onRequestPost = async (context) => {
    try {
        const formData = await context.request.formData();
        const replyTo = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        if (!replyTo || !subject || !message) {
            return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
        }

        const sender = context.env.SENDER_EMAIL;
        const destination = context.env.DESTINATION_EMAIL;

        if (!sender || !destination) {
            return new Response(JSON.stringify({ error: "Server configuration error" }), { status: 500 });
        }

        const rawMessage = `From: Portfolio <${sender}>\r\nTo: ${destination}\r\nReply-To: ${replyTo}\r\nSubject: Portfolio Inquiry: ${subject}\r\nContent-Type: text/plain; charset="utf-8"\r\n\r\nMessage from: ${replyTo}\r\n\r\n${message}`;

        const emailMessage = new EmailMessage(sender, destination, rawMessage);
        
        await context.env.SEND_EMAIL.send(emailMessage);

        return new Response(JSON.stringify({ success: true }), { 
            status: 200, 
            headers: { "Content-Type": "application/json" } 
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
    }
};