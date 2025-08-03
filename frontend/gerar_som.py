import base64

audio_base64 = '''PASTE_AQUI_O_TEXTO_BASE64_COMPLETO'''

audio_bytes = base64.b64decode(audio_base64)

with open("sci-fi-beep.mp3", "wb") as f:
    f.write(audio_bytes)

print("Arquivo sci-fi-beep.mp3 criado com sucesso!")
