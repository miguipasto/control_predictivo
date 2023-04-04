const EstacionInfo = require('../models/estacionesInfo');
const EstacionNivel = require('../models/estacionNivel');
const EstacionTemp = require('../models/estacionTemp');

const getEstaciones = async (req, res) => {
  try {
    const estaciones = await EstacionInfo.find();
    res.json(estaciones);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getEstacion = async (req, res) => {
  try {
    const estacion = await EstacionInfo.findById(req.params._id);
    res.json(estacion);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const crearEstacion = async (req, res) => {
  try {
    const {
      nombre,
      ubicacion,
      rio,
      potencia_instalada,
      coordenadas,
      tipo,
      explotador,
      superficie_cuenca_hidrografica,
      aportacion_media_anual,
      precipitacion_media_anual,
      caudal_punta_avenida_proyecto,
      cota_coronacion,
      altura_desde_cimientos,
      longitud_coronacion,
      cota_cimentacion,
      cota_cauce_presa,
      volumen_cuerpo_presa,
      superficie_embalse,
      capacidad_embalse,
      cota_nivel_max_normalizado,
      num_total_aliviaderos,
      regulacion_aliviaderos,
      capacidad_aliviaderos,
      num_total_desagues,
      capacidad_desagues,
    } = req.body;
    
    const estacion = new EstacionInfo({
      nombre,
      ubicacion,
      rio,
      potencia_instalada,
      coordenadas,
      tipo,
      explotador,
      superficie_cuenca_hidrografica,
      aportacion_media_anual,
      precipitacion_media_anual,
      caudal_punta_avenida_proyecto,
      cota_coronacion,
      altura_desde_cimientos,
      longitud_coronacion,
      cota_cimentacion,
      cota_cauce_presa,
      volumen_cuerpo_presa,
      superficie_embalse,
      capacidad_embalse,
      cota_nivel_max_normalizado,
      num_total_aliviaderos,
      regulacion_aliviaderos,
      capacidad_aliviaderos,
      num_total_desagues,
      capacidad_desagues,
    });
    const estacionNivel = await EstacionNivel.findOne({nombre});
    estacion.idEstacionNivel = estacionNivel._id;
    const estacionTemp = await EstacionTemp.findOne({nombre});
    estacion.idEstacionTemp = estacionTemp._id;
    const savedEstacion = await estacion.save();
    res.status(201).json(savedEstacion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const modificarEstacion = async (req, res) => {
  try {
    const {
      nombre,
      ubicacion,
      rio,
      potencia_instalada,
      coordenadas,
      tipo,
      explotador,
      superficie_cuenca_hidrografica,
      aportacion_media_anual,
      precipitacion_media_anual,
      caudal_punta_avenida_proyecto,
      cota_coronacion,
      altura_desde_cimientos,
      longitud_coronacion,
      cota_cimentacion,
      cota_cauce_presa,
      volumen_cuerpo_presa,
      superficie_embalse,
      capacidad_embalse,
      cota_nivel_max_normalizado,
      num_total_aliviaderos,
      regulacion_aliviaderos,
      capacidad_aliviaderos,
      num_total_desagues,
      capacidad_desagues,
      idEstacionTemp,
      idEstacionNivel
    } = req.body;
    const estacionModificada = await EstacionInfo.findByIdAndUpdate(req.params._id,{
      nombre,
      ubicacion,
      rio,
      potencia_instalada,
      coordenadas,
      tipo,
      explotador,
      superficie_cuenca_hidrografica,
      aportacion_media_anual,
      precipitacion_media_anual,
      caudal_punta_avenida_proyecto,
      cota_coronacion,
      altura_desde_cimientos,
      longitud_coronacion,
      cota_cimentacion,
      cota_cauce_presa,
      volumen_cuerpo_presa,
      superficie_embalse,
      capacidad_embalse,
      cota_nivel_max_normalizado,
      num_total_aliviaderos,
      regulacion_aliviaderos,
      capacidad_aliviaderos,
      num_total_desagues,
      capacidad_desagues,
      idEstacionTemp,
      idEstacionNivel
    });
    res.json(estacionModificada);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const modificarEstacionIDTemp = async (req, res) => {
  try {
    const {idEstacionTemp }= req.body;
    const estacionModificada = await EstacionInfo.findByIdAndUpdate(req.params._id,{idEstacionTemp});
    res.json(estacionModificada);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const modificarEstacionIDNivel = async (req, res) => {
  try {
    const { idEstacionNivel }= req.body;
    const estacionModificada = await EstacionInfo.findByIdAndUpdate(req.params._id,{idEstacionNivel});
    res.json(estacionModificada);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteEstacionInfo = async (req, res) => {
  try {
      const estacionDelete = await EstacionInfo.findByIdAndRemove(req.params._id);
      res.json(estacionDelete);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getEstaciones,
  crearEstacion,
  modificarEstacion,
  getEstacion,
  deleteEstacionInfo,
  modificarEstacionIDTemp,
  modificarEstacionIDNivel
  };