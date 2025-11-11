import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { formData } = await request.json();

    // Validation
    if (!formData || !formData.email) {
      return NextResponse.json(
        { error: "Données manquantes" },
        { status: 400 }
      );
    }

    const formatLabel = {
      intime: "Format Intime",
      elegant: "Format Élégant",
      duo: "Format Duo",
    };

    // Envoyer l'email
    const { data, error } = await resend.emails.send({
      from: "Atelier Art'âme <onboarding@resend.dev>", // Remplace par ton domaine vérifié
      to: ["contact@atelierartame.com"],
      replyTo: formData.email,
      subject: `🎨 Nouvelle commande Portrait d'Âme - ${formatLabel[formData.format]}`,
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
                max-width: 700px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);
                color: white;
                padding: 40px 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .content {
                background: #faf5ff;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .section {
                background: white;
                padding: 20px;
                margin: 15px 0;
                border-radius: 8px;
                border-left: 4px solid #ec4899;
              }
              .section-title {
                font-size: 18px;
                font-weight: bold;
                color: #8b5cf6;
                margin-bottom: 15px;
                display: flex;
                align-items: center;
                gap: 10px;
              }
              .info-row {
                padding: 10px 0;
                border-bottom: 1px solid #f3e8ff;
              }
              .info-row:last-child {
                border-bottom: none;
              }
              .label {
                font-weight: bold;
                color: #6b7280;
                display: inline-block;
                width: 180px;
              }
              .value {
                color: #111827;
              }
              .badge {
                display: inline-block;
                background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);
                color: white;
                padding: 8px 16px;
                border-radius: 20px;
                font-size: 14px;
                font-weight: bold;
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
              <h1 style="margin: 0; font-size: 32px;">🎨 Portrait d'Âme</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 18px;">Nouvelle Commande</p>
            </div>
            <div class="content">
              
              <div class="section">
                <div class="section-title">
                  📦 Détails de la Commande
                </div>
                <div class="info-row">
                  <span class="label">Format :</span>
                  <span class="badge">${formatLabel[formData.format]}</span>
                </div>
                <div class="info-row">
                  <span class="label">Budget :</span>
                  <span class="value">${formData.budget} €</span>
                </div>
              </div>

              <div class="section">
                <div class="section-title">
                  👤 Informations Client
                </div>
                <div class="info-row">
                  <span class="label">Prénom :</span>
                  <span class="value">${formData.firstName}</span>
                </div>
                <div class="info-row">
                  <span class="label">Nom :</span>
                  <span class="value">${formData.lastName}</span>
                </div>
                ${formData.maidenName ? `
                <div class="info-row">
                  <span class="label">Nom de jeune fille :</span>
                  <span class="value">${formData.maidenName}</span>
                </div>
                ` : ''}
                ${formData.birthDate ? `
                <div class="info-row">
                  <span class="label">Date de naissance :</span>
                  <span class="value">${formData.birthDate}</span>
                </div>
                ` : ''}
                ${formData.birthPlace ? `
                <div class="info-row">
                  <span class="label">Lieu de naissance :</span>
                  <span class="value">${formData.birthPlace}</span>
                </div>
                ` : ''}
                <div class="info-row">
                  <span class="label">Email :</span>
                  <span class="value"><a href="mailto:${formData.email}" style="color: #8b5cf6; text-decoration: none;">${formData.email}</a></span>
                </div>
                ${formData.phone ? `
                <div class="info-row">
                  <span class="label">Téléphone :</span>
                  <span class="value">${formData.phone}</span>
                </div>
                ` : ''}
              </div>

              ${formData.address ? `
              <div class="section">
                <div class="section-title">
                  📍 Adresse
                </div>
                <div class="info-row">
                  <span class="label">Rue :</span>
                  <span class="value">${formData.address}</span>
                </div>
                ${formData.city ? `
                <div class="info-row">
                  <span class="label">Ville :</span>
                  <span class="value">${formData.city}</span>
                </div>
                ` : ''}
                ${formData.postalCode ? `
                <div class="info-row">
                  <span class="label">Code postal :</span>
                  <span class="value">${formData.postalCode}</span>
                </div>
                ` : ''}
                ${formData.country ? `
                <div class="info-row">
                  <span class="label">Pays :</span>
                  <span class="value">${formData.country}</span>
                </div>
                ` : ''}
              </div>
              ` : ''}

              ${formData.message ? `
              <div class="section">
                <div class="section-title">
                  💬 Message / Informations Complémentaires
                </div>
                <p style="margin: 0; white-space: pre-wrap;">${formData.message}</p>
              </div>
              ` : ''}
              
              <div class="footer">
                <p>Cet email a été envoyé depuis le formulaire de commande Portrait d'Âme</p>
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

