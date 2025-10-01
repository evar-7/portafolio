# config.py
from dotenv import load_dotenv
import os

load_dotenv()

MAIL_USERNAME = os.getenv('MAIL_USERNAME')

# Prints temporales para depuración en Render
print("MAIL_USERNAME:", MAIL_USERNAME)
