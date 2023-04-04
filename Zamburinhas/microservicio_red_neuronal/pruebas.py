from matplotlib.patches import Rectangle
import matplotlib.pyplot as plt
import tensorflow as tf
import numpy as np
from tratamiento_datos import cargar_datos_n_shitf

def predict_n_steps_ahead (n, x, modelo):
    mlp = tf.keras.models.load_model('modelos/'+modelo+'.h5')
    predicciones = []
    for j in range(n):
        x[j+1][0] = mlp.predict(np.array( [x[j],] ))[0] 
        predicciones.append(x[j+1][0])
    return np.array(predicciones)

def prueba_2(start_indice,stop_indice, central, step) :
    n = 26
    mlp = tf.keras.models.load_model('modelos/'+central+'.h5')
    handles = [Rectangle((0,0),1,1,color="black",ec="k"),Rectangle((0,0),1,1,color="red",ec="k")]
    labels = ["MLP", "REAL"]
    x_train, x_test, y_train, y_test, maximo = cargar_datos_n_shitf(central,0,step)
    start = round(len(x_test)*start_indice)
    stop = round(len(x_test)*stop_indice)
    x_test = x_test[start:stop]
    y_test = y_test[start:stop]
    figure, axes = plt.subplots(figsize=(15, 6))
    plt.legend(handles, labels)
    plt.title(central.upper())
    #prediction = mlp.predict(x_test)
    prediction = predict_n_steps_ahead(n,x_test,central)
    axes.plot(y_test[:n]*maximo, color = 'red', label = 'REAL')
    axes.plot(prediction[:n]*maximo,color = 'black', label = 'PREDICTION')
    plt.xlabel("DIAS DESDE PRIMER DATO")
    plt.ylabel("NIVEL EMBALSE")
    #plt.savefig("imagenes/" + central.upper() + "_6_meses" + '.png', bbox_inches='tight')
    plt.show()

start_indice = 0.82
stop_indice = 1
centrales = ["villarino","saucelle", "aguayo", "mequinenza", "cedillo", "aldeavila", "jose_maria_oriol"]
for central in centrales:
    prueba_2 (start_indice,stop_indice,central,7)
    
