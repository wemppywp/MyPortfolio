"use server"

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {

    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    if(!validateString(senderEmail, 500)){
        return{
            error: "Invalid email"
        }
    }
    if(!validateString(message, 5000)){
        return{
            error: "Invalid message"
        }
    }

    let data;
    try{
        data = await resend.emails.send({
            from: "Contact form Web <onboarding@resend.dev>",
            to: "wemppywp@gmail.com",
            subject:"Message from portfolio website",
            reply_to: senderEmail as string,
            text: message as string,
            react: React.createElement(ContactFormEmail, {message: message as string,
                senderEmail: senderEmail as string})
        })
    } catch(error: unknown){
        return{
            error: getErrorMessage(error)
        }
    }
    return {
        data
    }
  };