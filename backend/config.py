# config.py
from dotenv import load_dotenv
import os

load_dotenv()

MAIL_USERNAME = os.getenv('MAIL_USERNAME')


