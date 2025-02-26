export default ({ env }) => ({
    email: {
        config: {
            provider: 'nodemailer',
            providerOptions: {
                host: env('SMTP_HOST', 'smtp.gmail.com'),
                port: env('SMTP_PORT', 587),
                service: "gmail",
                auth: {
                    user: env('SMTP_USERNAME'),
                    pass: env('SMTP_PASSWORD'),
                },
            },
            settings: {
                defaultFrom: 'contatonoisefy@gmail.com',
                defaultReplyTo: 'contatonoisefy@gmail.com',
            },
        },
    },
});