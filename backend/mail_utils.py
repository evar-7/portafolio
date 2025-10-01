# mail_utils.py
from flask_mail import Message
from flask import render_template

def send_contact_email(mail, nombre, correo, mensaje):
    msg = Message(
        subject=f"Nuevo mensaje de contacto de {nombre}",
        recipients=["l.ev.var52@gmail.com"],
        html=render_template("email.html", nombre=nombre, correo=correo, mensaje=mensaje)
    )
    try:
        mail.send(msg)
    except Exception as e:
        print(f"Error al enviar correo: {e}")
        raise
