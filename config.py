import os

class Config(object):
    """ Clase para manejar las configuraciones necesarias de la app """
    SECRET_KEY = os.getenv("SECRET_KEY")
