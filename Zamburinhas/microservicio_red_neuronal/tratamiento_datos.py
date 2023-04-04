import pandas as pd
import numpy as np
import matplotlib.pyplot
from numpy import mean
from numpy import std

def cargar_datos_n_shift(nombre_fichero, train, step) :
   #-------- INICIO PROCESADO DE DATOS ----------

   df = pd.read_csv("datos/" + nombre_fichero+".csv", usecols=['Reserva(Hm3)', 'Salida(m3/s)'], na_values=['nan'])

   df2 = pd.read_csv("datos/" + nombre_fichero+"_meteo.csv", na_values=['nan'])

   reserva = df['Reserva(Hm3)'].values
   salida = df['Salida(m3/s)'].values
   earth_temperature = df2['TS'].values
   precipitation = df2['PRECTOTCORR'].values

   reserva_final = []
   salida_final = []
   precipitation_final = []
   earth_temperature_final = []
   for i in range(step,len(reserva),step):
      reserva_final.append(reserva[i-step])
      salida_final.append(sum(salida[i-step:i])*3600*10/1000000) 
      precipitation_final.append(sum(precipitation[i-step:i]))
      earth_temperature_final.append(sum(earth_temperature[i-step:i])/step)
   maximo = max(reserva_final)
   max_salida = max(salida_final)
   max_precipitacion = max(precipitation_final)
   max_temperature = max(earth_temperature_final)

   x = [[reserva_final[i]/maximo, salida_final[i]/max_salida, earth_temperature_final[i]/max_temperature, precipitation_final[i]/max_precipitacion] for i in range(len(reserva_final))]
   print("[RESERVA]: MAX:", maximo)
   print("[SALIDA]: MAX:", max_salida)
   print("[PRECIPITATION]: MAX:", max_precipitacion)
   print("[EARTH_TEMPERATURE]: MAX:", max_temperature)
   y = reserva_final
   x_train = x[:round(len(x)*train)]
   x_test = x[round(len(x)*train):]
   y_train = y[:round(len(x)*train)]
   y_test = y[round(len(x)*train):]
   x_train_scaled = np.array(x_train[:-1])
   x_test_scaled = np.array(x_test[:-1])
   y_test = np.array(y_test[1:])/maximo
   y_train = np.array(y_train[1:])/maximo
   return x_train_scaled,x_test_scaled,y_train,y_test, maximo