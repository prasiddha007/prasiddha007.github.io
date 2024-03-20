import arrr
from pyscript import document


def translate_english(event):
    input_email = document.querySelector("#email")
    input_password = document.querySelector("#password")
    email = input_email.value
    password = input_password.value
    output_div = document.querySelector("#output")
    output_div.innerText = arrr.translate(email)