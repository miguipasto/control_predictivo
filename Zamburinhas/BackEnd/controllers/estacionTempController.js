const EstacionTemp = require('../models/estacionTemp');

const getEstacionesTemp = async (req, res) => {
  try {
    const estaciones = await EstacionTemp.find();
    res.json(estaciones);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getEstacionTemp = async (req, res) => {
  try {
    const estacion = await EstacionTemp.findById(req.params._id);
    res.json(estacion);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const crearEstacionTemp = async (req, res) => {
  try {
    const {nombre, datos , maximo} = req.body;
    const estacion = new EstacionTemp({nombre, datos , maximo});
    const savedEstacion = await estacion.save();
    res.status(201).json(savedEstacion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const modificarEstacionTemp = async (req, res) => {
  try {
    const {nombre, datos, maximo} = req.body;
    const estacionModificada = await EstacionTemp.findByIdAndUpdate(req.params._id,{nombre, datos, maximo});
    res.json(estacionModificada);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteEstacionTemp = async (req, res) => {
  try {
      const estacionDelete = await EstacionTemp.findByIdAndRemove(req.params._id);
      res.json(estacionDelete);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getEstacionesTemp,
    getEstacionTemp,
    crearEstacionTemp,
    modificarEstacionTemp,
    deleteEstacionTemp
}