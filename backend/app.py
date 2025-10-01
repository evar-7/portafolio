# app.py
from flask import Flask, request, jsonify, render_template

from flask_cors import CORS
from mail_utils import send_contact_email

app = Flask(__name__)
# Restringir CORS solo al dominio del frontend en Render
CORS(app, resources={r"/*": {"origins": "https://portafolio-frontend-oqew.onrender.com"}})

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.get_json()
    nombre = data.get('nombre')
    correo = data.get('correo')
    mensaje = data.get('mensaje')
    try:
        success = send_contact_email(nombre, correo, mensaje)
        if success:
            return jsonify({'success': True, 'message': 'Correo enviado correctamente.'})
        else:
            return jsonify({'success': False, 'message': 'Error al enviar el correo.'}), 500
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500


# Ruta de bienvenida en la raíz
@app.route('/')
def home():
    return 'Backend funcionando correctamente'

if __name__ == '__main__':
    app.run(debug=True)
