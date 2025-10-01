# config.py
from dotenv import load_dotenv
import os

load_dotenv()

MAIL_SERVER = 'smtp.office365.com'
MAIL_PORT = 587
MAIL_USE_TLS = True
MAIL_USERNAME = os.getenv('MAIL_USERNAME')
MAIL_PASSWORD = os.getenv('MAIL_PASSWORD')
MAIL_DEFAULT_SENDER = ('Portafolio', MAIL_USERNAME)

# Prints temporales para depuración en Render
print("MAIL_USERNAME:", MAIL_USERNAME)
print("MAIL_PASSWORD:", MAIL_PASSWORD)