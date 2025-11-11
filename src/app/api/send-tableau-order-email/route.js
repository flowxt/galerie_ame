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
      premium: "Format Premium",
    };

    // Envoyer l'email
    const { data, error } = await resend.emails.send({
      from: "Atelier Art'âme <onboarding@resend.dev>", // Remplace par ton domaine vérifié
      to: ["contact@atelierartame.com"],
      replyTo: formData.email,
      subject: `🌟 Nouvelle commande Tableau de Vie - ${formatLabel[formData.format]}`,
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
                background: linear-gradient(135deg, #f97316 0%, #8b5cf6 20%, #3b82f6 100%);
                color: white;
                padding: 40px 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .content {
                background: #fef3c7;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .section {
                background: white;
                padding: 20px;
                margin: 15px 0;
                border-radius: 8px;
                border-left: 4px solid #f97316;
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
                border-bottom: 1px solid #fef3c7;
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
                background: linear-gradient(135deg, #f97316 0%, #8b5cf6 50%, #3b82f6 100%);
                color: white;
                padding: 8px 16px;
                border-radius: 20px;
                font-size: 14px;
                font-weight: bold;
              }
              .question-section {
                background: #fef3c7;
                padding: 15px;
                margin: 10px 0;
                border-radius: 6px;
              }
              .question {
                font-weight: bold;
                color: #f97316;
                margin-bottom: 8px;
              }
              .answer {
                color: #374151;
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
              <h1 style="margin: 0; font-size: 32px;">🌟 Tableau de Vie</h1>
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
                ${formData.age ? `
                <div class="info-row">
                  <span class="label">Âge :</span>
                  <span class="value">${formData.age} ans</span>
                </div>
                ` : ''}
                ${formData.profession ? `
                <div class="info-row">
                  <span class="label">Profession :</span>
                  <span class="value">${formData.profession}</span>
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

              <div class="section">
                <div class="section-title">
                  🌈 Détails du Tableau de Vie
                </div>
                
                ${formData.personalityDescription ? `
                <div class="question-section">
                  <div class="question">👤 Comment décririez-vous votre personnalité ?</div>
                  <div class="answer">${formData.personalityDescription}</div>
                </div>
                ` : ''}

                ${formData.lifeValues ? `
                <div class="question-section">
                  <div class="question">💎 Quelles sont vos valeurs essentielles ?</div>
                  <div class="answer">${formData.lifeValues}</div>
                </div>
                ` : ''}

                ${formData.currentChallenges ? `
                <div class="question-section">
                  <div class="question">🎯 Quels défis traversez-vous actuellement ?</div>
                  <div class="answer">${formData.currentChallenges}</div>
                </div>
                ` : ''}

                ${formData.aspirations ? `
                <div class="question-section">
                  <div class="question">🌟 Quelles sont vos aspirations ?</div>
                  <div class="answer">${formData.aspirations}</div>
                </div>
                ` : ''}

                ${formData.significantMoments ? `
                <div class="question-section">
                  <div class="question">✨ Moments significatifs de votre vie</div>
                  <div class="answer">${formData.significantMoments}</div>
                </div>
                ` : ''}

                ${formData.emotionalState ? `
                <div class="question-section">
                  <div class="question">💫 Comment vous sentez-vous émotionnellement ?</div>
                  <div class="answer">${formData.emotionalState}</div>
                </div>
                ` : ''}

                ${formData.spiritualPath ? `
                <div class="question-section">
                  <div class="question">🕉️ Votre chemin spirituel</div>
                  <div class="answer">${formData.spiritualPath}</div>
                </div>
                ` : ''}

                ${formData.lifeTransitions ? `
                <div class="question-section">
                  <div class="question">🔄 Transitions de vie importantes</div>
                  <div class="answer">${formData.lifeTransitions}</div>
                </div>
                ` : ''}

                ${formData.learnings ? `
                <div class="question-section">
                  <div class="question">📚 Apprentissages clés de votre parcours</div>
                  <div class="answer">${formData.learnings}</div>
                </div>
                ` : ''}

                ${formData.relationshipPatterns ? `
                <div class="question-section">
                  <div class="question">👥 Vos schémas relationnels</div>
                  <div class="answer">${formData.relationshipPatterns}</div>
                </div>
                ` : ''}

                ${formData.careerPath ? `
                <div class="question-section">
                  <div class="question">💼 Votre parcours professionnel</div>
                  <div class="answer">${formData.careerPath}</div>
                </div>
                ` : ''}

                ${formData.familyDynamics ? `
                <div class="question-section">
                  <div class="question">👨‍👩‍👧‍👦 Dynamiques familiales</div>
                  <div class="answer">${formData.familyDynamics}</div>
                </div>
                ` : ''}

                ${formData.healthJourney ? `
                <div class="question-section">
                  <div class="question">🏥 Votre parcours de santé</div>
                  <div class="answer">${formData.healthJourney}</div>
                </div>
                ` : ''}

                ${formData.creativityExpression ? `
                <div class="question-section">
                  <div class="question">🎨 Expression de votre créativité</div>
                  <div class="answer">${formData.creativityExpression}</div>
                </div>
                ` : ''}

                ${formData.colorPreferences ? `
                <div class="question-section">
                  <div class="question">🌈 Préférences de couleurs</div>
                  <div class="answer">${formData.colorPreferences}</div>
                </div>
                ` : ''}

                ${formData.stylePreferences ? `
                <div class="question-section">
                  <div class="question">🎭 Préférences de style</div>
                  <div class="answer">${formData.stylePreferences}</div>
                </div>
                ` : ''}

                ${formData.symbolsImportant ? `
                <div class="question-section">
                  <div class="question">🔮 Symboles importants pour vous</div>
                  <div class="answer">${formData.symbolsImportant}</div>
                </div>
                ` : ''}

                ${formData.avoidElements ? `
                <div class="question-section">
                  <div class="question">🚫 Éléments à éviter</div>
                  <div class="answer">${formData.avoidElements}</div>
                </div>
                ` : ''}

                ${formData.portraitPurpose ? `
                <div class="question-section">
                  <div class="question">🎯 But du tableau</div>
                  <div class="answer">${formData.portraitPurpose}</div>
                </div>
                ` : ''}

                ${formData.shareWithOthers ? `
                <div class="question-section">
                  <div class="question">👥 Partager avec d'autres ?</div>
                  <div class="answer">${formData.shareWithOthers}</div>
                </div>
                ` : ''}

                ${formData.timeline ? `
                <div class="question-section">
                  <div class="question">⏰ Délai souhaité</div>
                  <div class="answer">${formData.timeline}</div>
                </div>
                ` : ''}

                ${formData.consultationPreference ? `
                <div class="question-section">
                  <div class="question">📞 Préférence de consultation</div>
                  <div class="answer">${formData.consultationPreference}</div>
                </div>
                ` : ''}

                ${formData.communicationStyle ? `
                <div class="question-section">
                  <div class="question">💬 Style de communication préféré</div>
                  <div class="answer">${formData.communicationStyle}</div>
                </div>
                ` : ''}

                ${formData.additionalInfo ? `
                <div class="question-section">
                  <div class="question">💬 Informations complémentaires</div>
                  <div class="answer">${formData.additionalInfo}</div>
                </div>
                ` : ''}
              </div>
              
              <div class="footer">
                <p>Cet email a été envoyé depuis le formulaire de commande Tableau de Vie</p>
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

