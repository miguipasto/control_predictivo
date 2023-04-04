const express = require('express');
const router = express.Router();
const { getEstaciones, crearEstacion, modificarEstacion, getEstacion, deleteEstacionInfo, modificarEstacionIDTemp, modificarEstacionIDNivel} = require('../controllers/estacionesInfoController');
const { getEstacionNivel, getEstacionesNiveles, modificarEstacionNivel, crearEstacionNivel, deleteEstacionNivel } = require('../controllers/estacionesNivelController');
const { getEstacionesTemp, getEstacionTemp, crearEstacionTemp, modificarEstacionTemp, deleteEstacionTemp} = require('../controllers/estacionTempController')

/* INFO DE LAS ESTACIONES */
// Obtener todas las estaciones
router.get('/getEstaciones', getEstaciones);
//Obetener una estacion
router.get('/getEstacion/:_id', getEstacion);
// Crear una estacion
router.post('/crearEstacion', crearEstacion);
//Modificar una estacion
router.put('/modificarEstacion/:_id',modificarEstacion);
router.put('/modificarEstacionIDTemp/:_id',modificarEstacionIDTemp);
router.put('/modificarEstacionIDNivel/:_id',modificarEstacionIDNivel);
//Eliminar una estacion
router.delete('/deleteEstacionInfo/:_id',deleteEstacionInfo);

/* NIVELES DE LAS ESTACIONES */
// Obtener todas las estaciones
router.get('/getEstacionesNivel', getEstacionesNiveles);
//Obetener una estacion
router.get('/getEstacionNivel/:_id', getEstacionNivel);
// Crear una estacion
router.post('/crearEstacionNivel', crearEstacionNivel);
//Modificar una estacion
router.put('/modificarEstacionNivel/:_id',modificarEstacionNivel);
//Eliminar una estacion
router.delete('/deleteEstacionNivel/:_id', deleteEstacionNivel);

/* TEMPERATURAS DE LAS ESTACIONES */
// Obtener todas las estaciones
router.get('/getEstacionesTemp', getEstacionesTemp);
//Obetener una estacion
router.get('/getEstacionTemp/:_id', getEstacionTemp);
// Crear una estacion
router.post('/crearEstacionTemp', crearEstacionTemp);
//Modificar una estacion
router.put('/modificarEstacionTemp/:_id',modificarEstacionTemp);
//Eliminar una estacion
router.delete('/deleteEstacionTemp/:_id', deleteEstacionTemp);


module.exports = router;
