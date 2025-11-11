import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { firstName, lastName, email, message } = await request.json();

    // Validation
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

    // Envoyer l'email
    const { data, error } = await resend.emails.send({
      from: "Atelier Art'âme <onboarding@resend.dev>", // Remplace par ton domaine vérifié
      to: ["contact@atelierartame.com"],
      replyTo: email,
      subject: `Nouveau message de ${firstName} ${lastName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .content {
                background: #f9fafb;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .info-block {
                background: white;
                padding: 15px;
                margin: 10px 0;
                border-radius: 8px;
                border-left: 4px solid #667eea;
              }
              .label {
                font-weight: bold;
                color: #667eea;
                display: block;
                margin-bottom: 5px;
              }
              .message-box {
                background: white;
                padding: 20px;
                margin: 15px 0;
                border-radius: 8px;
                border: 1px solid #e5e7eb;
              }
              .footer {
                text-align: center;
                color: #6b7280;
                font-size: 12px;
                margin-top: 20px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0;">✨ Nouveau Message</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Formulaire de Contact</p>
            </div>
            <div class="content">
              <div class="info-block">
                <span class="label">👤 Nom complet</span>
                ${firstName} ${lastName}
              </div>
              
              <div class="info-block">
                <span class="label">📧 Email</span>
                <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a>
              </div>
              
              <div class="message-box">
                <span class="label">💬 Message</span>
                <p style="margin: 10px 0 0 0; white-space: pre-wrap;">${message}</p>
              </div>
              
              <div class="footer">
                <p>Cet email a été envoyé depuis le formulaire de contact d'Atelier Art'âme</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Erreur Resend:", error);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi de l'email" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Email envoyé avec succès",
      data,
    });
  } catch (error) {
    console.error("Erreur:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue" },
      { status: 500 }
    );
  }
}

