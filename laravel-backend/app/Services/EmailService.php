<?php

namespace App\Services;

use Resend;

class EmailService
{
    protected $resend;
    protected $appUrl;

    public function __construct()
    {
        $this->resend = Resend::client(env('RESEND_API_KEY'));
        $this->appUrl = env('APP_URL', 'http://localhost:3000');
    }

    /**
     * Generate booking confirmation email template
     */
    public function bookingEmailTemplate($data)
    {
        $name = $data['name'];
        $phone = $data['phone'];
        $email = $data['email'];
        $service = $data['service'];
        $date = $data['date'];
        $time = $data['time'];
        
        $formattedDate = \Carbon\Carbon::parse($date)->locale('fr_FR')->isoFormat('dddd D MMMM YYYY');
        
        return "
<!DOCTYPE html>
<html lang=\"fr\">
<head>
  <meta charset=\"UTF-8\">
  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">
  <title>Nouvelle Réservation - InClean</title>
  <!--[if mso]>
  <style type=\"text/css\">
    body, table, td {font-family: Arial, Helvetica, sans-serif !important;}
  </style>
  <![endif]-->
  <script src=\"https://cdn.tailwindcss.com\"></script>
</head>
<body class=\"bg-gray-50 m-0 p-0\" style=\"font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\">
  
  <!-- Preheader text (hidden) -->
  <div style=\"display: none; max-height: 0; overflow: hidden; opacity: 0;\">Nouvelle réservation de {$name} pour {$service}</div>
  
  <table role=\"presentation\" class=\"w-full\" style=\"width: 100%; background-color: #f9fafb; padding: 40px 20px;\">
    <tr>
      <td align=\"center\">
        
        <!-- Main Container -->
        <table role=\"presentation\" class=\"max-w-2xl\" style=\"max-width: 600px; width: 100%; background: linear-gradient(135deg, #10b981 0%, #14b8a6 100%); border-radius: 20px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.15);\">
          
          <!-- Header -->
          <tr>
            <td class=\"text-center\" style=\"padding: 48px 32px 32px; border-bottom: 2px solid rgba(255,255,255,0.2);\">
              <div style=\"background: rgba(255,255,255,0.25); backdrop-filter: blur(10px); display: inline-block; padding: 16px 32px; border-radius: 16px; margin-bottom: 24px;\">
                <img src=\"{$this->appUrl}/images/cindel-nettoyage-logo.png\" alt=\"Cindel Nettoyage\" style=\"height: 60px; width: auto; display: block; margin: 0 auto;\" />
              </div>
              <h2 class=\"text-white text-2xl font-semibold\" style=\"margin: 12px 0 0; color: #ffffff; font-size: 26px; font-weight: 600;\">Nouvelle Réservation</h2>
              <p class=\"text-white opacity-90\" style=\"margin: 12px 0 0; color: rgba(255,255,255,0.95); font-size: 15px;\">De: <strong>{$name}</strong></p>
              <p class=\"text-white opacity-90\" style=\"margin: 8px 0 0; color: rgba(255,255,255,0.95); font-size: 14px;\">Vous avez reçu une nouvelle demande de réservation</p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td class=\"bg-white\" style=\"background-color: #ffffff; padding: 48px 32px;\">
              
              <!-- Customer Info -->
              <div style=\"margin-bottom: 36px;\">
                <table role=\"presentation\" style=\"width: 100%; margin-bottom: 20px;\">
                  <tr>
                    <td style=\"width: 40px; vertical-align: middle;\">
                      <div style=\"background: linear-gradient(135deg, #10b981, #14b8a6); width: 40px; height: 40px; border-radius: 10px; text-align: center; line-height: 40px; font-size: 20px;\">👤</div>
                    </td>
                    <td style=\"padding-left: 12px; vertical-align: middle;\">
                      <h3 style=\"margin: 0; color: #1f2937; font-size: 20px; font-weight: 600;\">Informations Client</h3>
                    </td>
                  </tr>
                </table>
                
                <table role=\"presentation\" style=\"width: 100%; border-collapse: separate; border-spacing: 0 12px;\">
                  <tr>
                    <td class=\"bg-gray-50 rounded-lg\" style=\"padding: 16px 20px; background-color: #f9fafb; border-left: 4px solid #10b981; border-radius: 8px;\">
                      <p class=\"text-gray-500 text-xs font-semibold uppercase tracking-wide m-0\" style=\"margin: 0; color: #6b7280; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;\">Nom Complet</p>
                      <p class=\"text-gray-900 text-base font-semibold\" style=\"margin: 6px 0 0; color: #111827; font-size: 17px; font-weight: 600;\">{$name}</p>
                    </td>
                  </tr>
                  <tr>
                    <td class=\"bg-gray-50 rounded-lg\" style=\"padding: 16px 20px; background-color: #f9fafb; border-left: 4px solid #14b8a6; border-radius: 8px;\">
                      <p class=\"text-gray-500 text-xs font-semibold uppercase tracking-wide m-0\" style=\"margin: 0; color: #6b7280; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;\">Téléphone</p>
                      <p style=\"margin: 6px 0 0;\">
                        <a href=\"tel:{$phone}\" class=\"text-emerald-600 font-semibold\" style=\"color: #10b981; text-decoration: none; font-size: 17px; font-weight: 600;\">{$phone}</a>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td class=\"bg-gray-50 rounded-lg\" style=\"padding: 16px 20px; background-color: #f9fafb; border-left: 4px solid #06b6d4; border-radius: 8px;\">
                      <p class=\"text-gray-500 text-xs font-semibold uppercase tracking-wide m-0\" style=\"margin: 0; color: #6b7280; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;\">Email</p>
                      <p style=\"margin: 6px 0 0;\">
                        <a href=\"mailto:{$email}\" class=\"text-emerald-600 font-semibold\" style=\"color: #0ea5e9; text-decoration: none; font-size: 17px; font-weight: 600; word-break: break-word;\">{$email}</a>
                      </p>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Service Details -->
              <div style=\"margin-bottom: 36px;\">
                <table role=\"presentation\" style=\"width: 100%; margin-bottom: 20px;\">
                  <tr>
                    <td style=\"width: 40px; vertical-align: middle;\">
                      <div style=\"background: linear-gradient(135deg, #f59e0b, #f97316); width: 40px; height: 40px; border-radius: 10px; text-align: center; line-height: 40px; font-size: 20px;\">📋</div>
                    </td>
                    <td style=\"padding-left: 12px; vertical-align: middle;\">
                      <h3 style=\"margin: 0; color: #1f2937; font-size: 20px; font-weight: 600;\">Détails du Service</h3>
                    </td>
                  </tr>
                </table>
                
                <div class=\"bg-yellow-50 rounded-lg\" style=\"padding: 20px 24px; background-color: #fef3c7; border-left: 4px solid #f59e0b; border-radius: 8px;\">
                  <p class=\"text-yellow-900 text-xs font-bold uppercase tracking-wide m-0\" style=\"margin: 0; color: #78350f; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;\">Service Sélectionné</p>
                  <p class=\"text-yellow-950 text-lg font-bold\" style=\"margin: 8px 0 0; color: #451a03; font-size: 19px; font-weight: 700;\">{$service}</p>
                </div>
              </div>

              <!-- Schedule -->
              <div>
                <table role=\"presentation\" style=\"width: 100%; margin-bottom: 20px;\">
                  <tr>
                    <td style=\"width: 40px; vertical-align: middle;\">
                      <div style=\"background: linear-gradient(135deg, #8b5cf6, #7c3aed); width: 40px; height: 40px; border-radius: 10px; text-align: center; line-height: 40px; font-size: 20px;\">📅</div>
                    </td>
                    <td style=\"padding-left: 12px; vertical-align: middle;\">
                      <h3 style=\"margin: 0; color: #1f2937; font-size: 20px; font-weight: 600;\">Date et Heure</h3>
                    </td>
                  </tr>
                </table>
                
                <table role=\"presentation\" style=\"width: 100%; border-collapse: separate; border-spacing: 12px 0;\">
                  <tr>
                    <td style=\"width: 50%; padding: 20px 24px; background-color: #ede9fe; border-left: 4px solid #8b5cf6; border-radius: 8px;\">
                      <p class=\"text-purple-700 text-xs font-bold uppercase tracking-wide m-0\" style=\"margin: 0; color: #6d28d9; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;\">Date</p>
                      <p class=\"text-purple-900 text-base font-bold\" style=\"margin: 8px 0 0; color: #4c1d95; font-size: 17px; font-weight: 700;\">{$formattedDate}</p>
                    </td>
                    <td style=\"width: 50%; padding: 20px 24px; background-color: #ede9fe; border-left: 4px solid #7c3aed; border-radius: 8px;\">
                      <p class=\"text-purple-700 text-xs font-bold uppercase tracking-wide m-0\" style=\"margin: 0; color: #6d28d9; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;\">Heure</p>
                      <p class=\"text-purple-900 text-lg font-bold\" style=\"margin: 8px 0 0; color: #4c1d95; font-size: 19px; font-weight: 700;\">{$time}</p>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Action Button -->
              <div class=\"text-center\" style=\"margin-top: 48px; text-align: center;\">
                <a href=\"tel:{$phone}\" class=\"inline-block\" style=\"display: inline-block; background: linear-gradient(135deg, #10b981, #14b8a6); color: #ffffff; padding: 18px 40px; border-radius: 14px; text-decoration: none; font-weight: 700; font-size: 17px; box-shadow: 0 12px 24px rgba(16, 185, 129, 0.35);\">
                  📞 Appeler le Client
                </a>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style=\"background: linear-gradient(135deg, #0f766e 0%, #0d9488 100%); padding: 36px 32px; text-align: center;\">
              <p class=\"text-white font-semibold\" style=\"margin: 0 0 12px; color: rgba(255,255,255,0.95); font-size: 15px; font-weight: 600;\">Cindel Nettoyage - Service de Nettoyage Professionnel</p>
              <p class=\"text-white opacity-80\" style=\"margin: 0 0 8px; color: rgba(255,255,255,0.8); font-size: 13px;\">115 Avenue Saint Vincent De Paul, Dax</p>
              <p class=\"text-white opacity-80\" style=\"margin: 0; color: rgba(255,255,255,0.8); font-size: 13px;\">
                <a href=\"tel:+33640604057\" style=\"color: rgba(255,255,255,0.95); text-decoration: none; font-weight: 500;\">+33 6 40 60 40 57</a> • 
                <a href=\"mailto:hadri.abdelmoumen@gmail.com\" style=\"color: rgba(255,255,255,0.95); text-decoration: none; font-weight: 500;\">hadri.abdelmoumen@gmail.com</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
        ";
    }

    /**
     * Generate contact form email template
     */
    public function contactEmailTemplate($data)
    {
        $name = $data['name'];
        $email = $data['email'];
        $phone = $data['phone'];
        $reason = $data['reason'];
        $message = $data['message'];
        
        $reasonLabels = [
            'booking' => 'Demande de Réservation',
            'quote' => 'Demande de Devis',
            'complaint' => 'Réclamation',
            'feedback' => 'Commentaire',
            'other' => 'Autre'
        ];

        $reasonColors = [
            'booking' => '#10b981',
            'quote' => '#3b82f6',
            'complaint' => '#ef4444',
            'feedback' => '#8b5cf6',
            'other' => '#6b7280'
        ];

        $reasonBgColors = [
            'booking' => '#d1fae5',
            'quote' => '#dbeafe',
            'complaint' => '#fee2e2',
            'feedback' => '#ede9fe',
            'other' => '#f3f4f6'
        ];

        $reasonLabel = $reasonLabels[$reason] ?? $reason;
        $reasonColor = $reasonColors[$reason] ?? $reasonColors['other'];
        $reasonBgColor = $reasonBgColors[$reason] ?? $reasonBgColors['other'];

        return "
<!DOCTYPE html>
<html lang=\"fr\">
<head>
  <meta charset=\"UTF-8\">
  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">
  <title>Nouveau Message de Contact - InClean</title>
  <!--[if mso]>
  <style type=\"text/css\">
    body, table, td {font-family: Arial, Helvetica, sans-serif !important;}
  </style>
  <![endif]-->
  <script src=\"https://cdn.tailwindcss.com\"></script>
</head>
<body class=\"bg-gray-50 m-0 p-0\" style=\"font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\">
  
  <!-- Preheader text (hidden) -->
  <div style=\"display: none; max-height: 0; overflow: hidden; opacity: 0;\">Nouveau message de {$name} - {$reasonLabel}</div>
  
  <table role=\"presentation\" class=\"w-full\" style=\"width: 100%; background-color: #f9fafb; padding: 40px 20px;\">
    <tr>
      <td align=\"center\">
        
        <!-- Main Container -->
        <table role=\"presentation\" class=\"max-w-2xl\" style=\"max-width: 600px; width: 100%; background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%); border-radius: 20px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.15);\">
          
          <!-- Header -->
          <tr>
            <td class=\"text-center\" style=\"padding: 48px 32px 32px; border-bottom: 2px solid rgba(255,255,255,0.2);\">
              <div style=\"background: rgba(255,255,255,0.25); backdrop-filter: blur(10px); display: inline-block; padding: 16px 32px; border-radius: 16px; margin-bottom: 24px;\">
                <img src=\"{$this->appUrl}/images/cindel-nettoyage-logo.png\" alt=\"Cindel Nettoyage\" style=\"height: 60px; width: auto; display: block; margin: 0 auto;\" />
              </div>
              <h2 class=\"text-white text-2xl font-semibold\" style=\"margin: 12px 0 0; color: #ffffff; font-size: 26px; font-weight: 600;\">Nouveau Message de Contact</h2>
              <p class=\"text-white opacity-90\" style=\"margin: 12px 0 0; color: rgba(255,255,255,0.95); font-size: 15px;\">De: <strong>{$name}</strong></p>
              <p class=\"text-white opacity-90\" style=\"margin: 8px 0 0; color: rgba(255,255,255,0.95); font-size: 14px;\">Vous avez reçu un nouveau message via le formulaire de contact</p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td class=\"bg-white\" style=\"background-color: #ffffff; padding: 48px 32px;\">
              
              <!-- Contact Info -->
              <div style=\"margin-bottom: 36px;\">
                <table role=\"presentation\" style=\"width: 100%; margin-bottom: 20px;\">
                  <tr>
                    <td style=\"width: 40px; vertical-align: middle;\">
                      <div style=\"background: linear-gradient(135deg, #0ea5e9, #06b6d4); width: 40px; height: 40px; border-radius: 10px; text-align: center; line-height: 40px; font-size: 20px;\">👤</div>
                    </td>
                    <td style=\"padding-left: 12px; vertical-align: middle;\">
                      <h3 style=\"margin: 0; color: #1f2937; font-size: 20px; font-weight: 600;\">Coordonnées</h3>
                    </td>
                  </tr>
                </table>
                
                <table role=\"presentation\" style=\"width: 100%; border-collapse: separate; border-spacing: 0 12px;\">
                  <tr>
                    <td class=\"bg-blue-50 rounded-lg\" style=\"padding: 16px 20px; background-color: #eff6ff; border-left: 4px solid #0ea5e9; border-radius: 8px;\">
                      <p class=\"text-blue-700 text-xs font-semibold uppercase tracking-wide m-0\" style=\"margin: 0; color: #1e40af; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;\">Nom Complet</p>
                      <p class=\"text-blue-900 text-base font-semibold\" style=\"margin: 6px 0 0; color: #1e3a8a; font-size: 17px; font-weight: 600;\">{$name}</p>
                    </td>
                  </tr>
                  <tr>
                    <td class=\"bg-blue-50 rounded-lg\" style=\"padding: 16px 20px; background-color: #eff6ff; border-left: 4px solid #06b6d4; border-radius: 8px;\">
                      <p class=\"text-blue-700 text-xs font-semibold uppercase tracking-wide m-0\" style=\"margin: 0; color: #1e40af; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;\">Email</p>
                      <p style=\"margin: 6px 0 0;\">
                        <a href=\"mailto:{$email}\" class=\"text-sky-600 font-semibold\" style=\"color: #0284c7; text-decoration: none; font-size: 17px; font-weight: 600; word-break: break-word;\">{$email}</a>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td class=\"bg-blue-50 rounded-lg\" style=\"padding: 16px 20px; background-color: #eff6ff; border-left: 4px solid #0284c7; border-radius: 8px;\">
                      <p class=\"text-blue-700 text-xs font-semibold uppercase tracking-wide m-0\" style=\"margin: 0; color: #1e40af; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;\">Téléphone</p>
                      <p style=\"margin: 6px 0 0;\">
                        <a href=\"tel:{$phone}\" class=\"text-sky-600 font-semibold\" style=\"color: #0284c7; text-decoration: none; font-size: 17px; font-weight: 600;\">{$phone}</a>
                      </p>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Reason -->
              <div style=\"margin-bottom: 36px;\">
                <table role=\"presentation\" style=\"width: 100%; margin-bottom: 20px;\">
                  <tr>
                    <td style=\"width: 40px; vertical-align: middle;\">
                      <div style=\"background: linear-gradient(135deg, #f59e0b, #f97316); width: 40px; height: 40px; border-radius: 10px; text-align: center; line-height: 40px; font-size: 20px;\">📌</div>
                    </td>
                    <td style=\"padding-left: 12px; vertical-align: middle;\">
                      <h3 style=\"margin: 0; color: #1f2937; font-size: 20px; font-weight: 600;\">Raison du Contact</h3>
                    </td>
                  </tr>
                </table>
                
                <div class=\"rounded-lg\" style=\"padding: 20px 24px; background-color: {$reasonBgColor}; border-left: 4px solid {$reasonColor}; border-radius: 8px;\">
                  <p class=\"text-xs font-bold uppercase tracking-wide m-0\" style=\"margin: 0; color: #1f2937; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;\">Catégorie</p>
                  <p class=\"text-lg font-bold\" style=\"margin: 8px 0 0; color: #111827; font-size: 19px; font-weight: 700;\">{$reasonLabel}</p>
                </div>
              </div>

              <!-- Message -->
              <div>
                <table role=\"presentation\" style=\"width: 100%; margin-bottom: 20px;\">
                  <tr>
                    <td style=\"width: 40px; vertical-align: middle;\">
                      <div style=\"background: linear-gradient(135deg, #8b5cf6, #7c3aed); width: 40px; height: 40px; border-radius: 10px; text-align: center; line-height: 40px; font-size: 20px;\">💬</div>
                    </td>
                    <td style=\"padding-left: 12px; vertical-align: middle;\">
                      <h3 style=\"margin: 0; color: #1f2937; font-size: 20px; font-weight: 600;\">Message</h3>
                    </td>
                  </tr>
                </table>
                
                <div style=\"padding: 24px; background-color: #f9fafb; border-left: 4px solid #8b5cf6; border-radius: 8px;\">
                  <p style=\"margin: 0; color: #374151; font-size: 16px; line-height: 1.7; white-space: pre-wrap;\">{$message}</p>
                </div>
              </div>

              <!-- Action Buttons -->
              <div class=\"text-center\" style=\"margin-top: 48px; text-align: center;\">
                <a href=\"mailto:{$email}\" class=\"inline-block\" style=\"display: inline-block; background: linear-gradient(135deg, #0ea5e9, #06b6d4); color: #ffffff; padding: 18px 36px; border-radius: 14px; text-decoration: none; font-weight: 700; font-size: 16px; box-shadow: 0 12px 24px rgba(14, 165, 233, 0.35); margin: 8px;\">
                  📧 Répondre par Email
                </a>
                <a href=\"tel:{$phone}\" class=\"inline-block\" style=\"display: inline-block; background: linear-gradient(135deg, #10b981, #14b8a6); color: #ffffff; padding: 18px 36px; border-radius: 14px; text-decoration: none; font-weight: 700; font-size: 16px; box-shadow: 0 12px 24px rgba(16, 185, 129, 0.35); margin: 8px;\">
                  📞 Appeler
                </a>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style=\"background: linear-gradient(135deg, #0c4a6e 0%, #0369a1 100%); padding: 36px 32px; text-align: center;\">
              <p class=\"text-white font-semibold\" style=\"margin: 0 0 12px; color: rgba(255,255,255,0.95); font-size: 15px; font-weight: 600;\">Cindel Nettoyage - Service de Nettoyage Professionnel</p>
              <p class=\"text-white opacity-80\" style=\"margin: 0 0 8px; color: rgba(255,255,255,0.8); font-size: 13px;\">115 Avenue Saint Vincent De Paul, Dax</p>
              <p class=\"text-white opacity-80\" style=\"margin: 0; color: rgba(255,255,255,0.8); font-size: 13px;\">
                <a href=\"tel:+33640604057\" style=\"color: rgba(255,255,255,0.95); text-decoration: none; font-weight: 500;\">+33 6 40 60 40 57</a> • 
                <a href=\"mailto:hadri.abdelmoumen@gmail.com\" style=\"color: rgba(255,255,255,0.95); text-decoration: none; font-weight: 500;\">hadri.abdelmoumen@gmail.com</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
        ";
    }

    /**
     * Send booking confirmation email
     */
    public function sendBookingEmail($data)
    {
        try {
            $htmlContent = $this->bookingEmailTemplate($data);
            
            $result = $this->resend->emails->send([
                'from' => env('EMAIL_FROM', 'onboarding@resend.dev'),
                'to' => [env('EMAIL_TO')],
                'subject' => 'Nouvelle Réservation - ' . $data['service'],
                'html' => $htmlContent,
            ]);

            return $result;
        } catch (\Exception $e) {
            throw new \Exception('Failed to send booking email: ' . $e->getMessage());
        }
    }

    /**
     * Send contact form email
     */
    public function sendContactEmail($data)
    {
        try {
            $htmlContent = $this->contactEmailTemplate($data);
            
            $reasonLabels = [
                'booking' => 'Demande de Réservation',
                'quote' => 'Demande de Devis',
                'complaint' => 'Réclamation',
                'feedback' => 'Commentaire',
                'other' => 'Autre'
            ];
            
            $subject = 'Nouveau Message - ' . ($reasonLabels[$data['reason']] ?? 'Contact');
            
            $result = $this->resend->emails->send([
                'from' => env('EMAIL_FROM', 'onboarding@resend.dev'),
                'to' => [env('EMAIL_TO')],
                'subject' => $subject,
                'html' => $htmlContent,
            ]);

            return $result;
        } catch (\Exception $e) {
            throw new \Exception('Failed to send contact email: ' . $e->getMessage());
        }
    }
}
