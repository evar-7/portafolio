# app.py
from flask import Flask, request, jsonify, render_template
from flask_mail import Mail
from flask_cors import CORS
from config import MAIL_SERVER, MAIL_PORT, MAIL_USE_TLS, MAIL_USERNAME, MAIL_PASSWORD, MAIL_DEFAULT_SENDER
from mail_utils import send_contact_email

app = Flask(__name__)
# Permitir peticiones desde el frontend desplegado en Render
   CORS(app, resources={r"/api/*": {"origins": "https://portafolio-frontend-oqew.onrender.com"}})

# Configuración de Flask-Mail
app.config.update(
    MAIL_SERVER=MAIL_SERVER,
    MAIL_PORT=MAIL_PORT,
    MAIL_USE_TLS=MAIL_USE_TLS,
    MAIL_USERNAME=MAIL_USERNAME,
    MAIL_PASSWORD=MAIL_PASSWORD,
    MAIL_DEFAULT_SENDER=MAIL_DEFAULT_SENDER
)
mail = Mail(app)

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.get_json()
    nombre = data.get('nombre')
    correo = data.get('correo')
    mensaje = data.get('mensaje')
    try:
        send_contact_email(mail, nombre, correo, mensaje)
        return jsonify({'success': True, 'message': 'Correo enviado correctamente.'})
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500


# Ruta de bienvenida en la raíz
@app.route('/')
def home():
    return 'Backend funcionando correctamente'

if __name__ == '__main__':
    app.run(debug=True)
