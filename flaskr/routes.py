import smtplib, ssl, os
from flaskr import app
from flask import render_template, request, redirect, url_for

@app.route("/", methods=["GET"])
def index():
    """ Funcion para la vista principal de la pagina """
    return render_template("index.html")

@app.route("/send_email", methods=["GET", "POST"])
def send_email():
    """ Funcion para manejar el envio de correos """
    if request.method == "GET":
        return redirect(url_for("index"))
    elif request.method == "POST":
        firstname = request.form["firstname"]
        lastname = request.form["lastname"]
        email = request.form["email"]
        phonenumber = request.form["phonenumber"]
        message = request.form["message"]

        user_password = str(os.getenv("USER_PASSWORD"))
        user_domain = str(os.getenv("USER_DOMAIN"))
        user_email = str(os.getenv("USER_EMAIL"))

        sender = email
        receiver = user_email
        final_message = f"""
            De: <{sender}>
            Para: <{receiver}>
            Asunto: Mensaje recibido desde la pagina <Glitch>

            Nombre del cliente: {firstname} {lastname}
            Numero telefonico: {phonenumber}

            Mensaje: {message}
        """

        context = ssl.create_default_context()

        with smtplib.SMTP_SSL(user_domain, 465, context=context) as server:
            server.login(user_email, user_password)
            server.sendmail(sender, receiver, final_message)

        return redirect(url_for("index"))
