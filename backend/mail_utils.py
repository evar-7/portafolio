# mail_utils.py
import os
from mailjet_rest import Client

def send_contact_email(nombre, correo, mensaje):
        api_key = os.getenv('MAILJET_API_KEY')
        api_secret = os.getenv('MAILJET_API_SECRET')
        mailjet = Client(auth=(api_key, api_secret), version='v3.1')

        data = {
            'Messages': [
                {
                    "From": {
                        "Email": os.getenv('MAIL_USERNAME'),
                        "Name": "Portafolio"
                    },
                    "To": [
                        {
                            "Email": os.getenv('MAIL_USERNAME'),
                            "Name": "Portafolio"
                        }
                    ],
                    "Subject": f"Nuevo mensaje de contacto de {nombre}",
                    "HTMLPart": f"<strong>De:</strong> {nombre} ({correo})<br><strong>Mensaje:</strong><br>{mensaje}"
                }
            ]
        }

        try:
                result = mailjet.send.create(data=data)
                print(result.status_code)
                print(result.json())
                return result.status_code == 200
        except Exception as e:
                print(f"Error al enviar correo con Mailjet: {e}")
                return False
