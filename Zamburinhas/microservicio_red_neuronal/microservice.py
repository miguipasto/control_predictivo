from flask import Flask, request, jsonify, Response
import tensorflow as tf
import numpy as np
from tratamiento_datos import cargar_datos_n_shift
import flask
from flask_cors import CORS

Response.charset= 'utf-8'
app = Flask(__name__)
CORS(app)
centrales = ["villarino","saucelle", "aguayo", "mequinenza", "cedillo", "aldeadavila", "jose_maria_oriol"]
modelos = {}
datos = {}

def predict_n_steps_ahead (x, central, maximo):
    mlp = modelos[central]
    predicciones = []
    for j in range(27):
        x[j+1][0] = mlp.predict(np.array( [x[j],] ))[0] 
        predicciones.append(x[j+1][0]*maximo)
    return predicciones

@app.before_first_request
def init():
    for central in centrales:
        modelo = tf.keras.models.load_model('modelos/'+central+'.h5')
        modelos[central] = modelo
        x_train, x_test, y_train, y_test, maximo = cargar_datos_n_shift(central,0,7)
        datos[central] = [x_train,x_test,y_test,y_test,maximo]

@app.route('/prediccion')
def prediccion():
    central = request.args.get('central').lower()
    try:
        fecha = int(request.args.get('fecha'))
    except:
        return jsonify({"mensaje":"fecha no valida"})
    if central in modelos:
        x_test = datos[central][1][fecha:fecha+28]
        maximo = datos[central][4]
        prediccion = predict_n_steps_ahead(x_test,central,maximo)
        return jsonify({
            "prediccion": prediccion
            })
    else:
        return jsonify({"mensaje":"central no encontrada"})

if __name__ == '__main__':
    from waitress import serve
    serve(app, host="0.0.0.0", port=8080)