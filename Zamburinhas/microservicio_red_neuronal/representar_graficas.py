from matplotlib.patches import Rectangle
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
from tratamiento_datos import cargar_datos_n_shift
centrales = ["mequinenza", "villarino", "aguayo", "aldeadavila", "saucelle", "jose_maria_oriol", "cedillo"]
start_indice = 0
stop_indice = 1
train = 0
for central in centrales:
    x_train, x_test, y_train, y_test, maximo = cargar_datos_n_shift(central,train,7)

    start = round(len(x_test)*start_indice)
    stop = round(len(x_test)*stop_indice)
    x_test = x_test[start:stop]
    y_test = y_test[start:stop]
    figure, axes = plt.subplots(figsize=(15, 6))
    plt.title(central.upper())
    axes.plot(y_test*maximo, color = 'red', label = 'REAL')
    plt.savefig(central.upper() + '.png', bbox_inches='tight')
    # plt.show()