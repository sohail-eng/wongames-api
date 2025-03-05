import type { EmailConfig } from "strapi-plugin-email-designer-5/dist/server/src";

export default ({ env }) => ({
    email: {
        config: {
            provider: "nodemailer",
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

    "email-designer-5": {
        enabled: true,
        config: {
            mergeTags: {
                company: {
                    name: "Won Games",
                    mergeTags: {
                        name: {
                            name: "Won Games",
                            value: "Won Games",
                            sample: "Won Games",
                        },
                    },
                },
            },
        } as EmailConfig,
    },
});
