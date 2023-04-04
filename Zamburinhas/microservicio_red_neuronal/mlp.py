from tensorflow.keras.models import Sequential 
from tensorflow.keras.layers import Dense 
from tensorflow.keras.optimizers import Adam
from tensorflow.keras.optimizers import RMSprop 
from tensorflow.keras.callbacks import EarlyStopping 
import matplotlib.pyplot as plt
import pandas as pd
from matplotlib.patches import Rectangle
import numpy as np
from tratamiento_datos import *

train = 0.8
centrales = ["villarino","saucelle", "aguayo", "mequinenza", "cedillo", "aldeadavila", "jose_maria_oriol"]
for central in centrales:
   dias = 7
   x_train_saucelle, x_test_saucelle, y_train_saucelle, y_test_saucelle, nada = cargar_datos_n_shift(central,train,dias)
   x_train = x_train_saucelle
   x_test = x_test_saucelle
   y_train = y_train_saucelle
   y_test = y_test_saucelle
   inputs = 4
   #-------- MODELO MLP ----------
   model = Sequential() 
   model.add(Dense(100, kernel_initializer = 'normal', activation = 'tanh',input_shape = (inputs,))) 
   model.add(Dense(1))
   from tensorflow.keras import backend as K

   model.compile(
      loss = 'mse', 
      optimizer = "adam", 
      metrics = ['mean_absolute_error'])
   K.set_value(model.optimizer.learning_rate, 0.00001)

   # ------------- INICIO ENTRENAMIENTO -------------
   history = model.fit(
      x_train, y_train,    
      batch_size=52, 
      epochs = 1000, 
      verbose = 1, 
      shuffle = True,
      validation_split = 0.25, 
      callbacks = [EarlyStopping(monitor = 'val_loss', patience = 10)]
   )
   # ------------- FIN ENTRENAMIENTO -------------
   score = model.evaluate(x_test, y_test, verbose = 0) 
   print('Test loss:', score[0]) 
   print('Test mean_absolute_error:', score[1])
   print(score)

   model.save('modelos/'+central+'.h5')