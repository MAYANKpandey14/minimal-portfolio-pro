import emailjs from "emailjs-com";

export const sendEmail = async ({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  return await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID!,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
    {
      from_name: name,
      from_email: email,
      subject,
      message,
    },
    import.meta.env.VITE_EMAILJS_USER_ID!
  );
};
