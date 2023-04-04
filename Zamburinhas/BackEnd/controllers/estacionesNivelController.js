const EstacionNivel = require('../models/estacionNivel');

const getEstacionesNiveles = async (req, res) => {
  try {
    const estaciones = await EstacionNivel.find();
    res.json(estaciones);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getEstacionNivel = async (req, res) => {
  try {
    const estacion = await EstacionNivel.findById(req.params._id);
    res.json(estacion);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const crearEstacionNivel = async (req, res) => {
  try {
    const {nombre, datos , maximo} = req.body;
    const estacion = new EstacionNivel({nombre, datos , maximo});
    const savedEstacion = await estacion.save();
    res.status(201).json(savedEstacion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const modificarEstacionNivel = async (req, res) => {
  try {
    const {nombre, datos, maximo} = req.body;
    const estacionModificada = await EstacionNivel.findByIdAndUpdate(req.params._id,{nombre, datos, maximo});
    res.json(estacionModificada);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteEstacionNivel = async (req, res) => {
  try {
      const estacionDelete = await EstacionNivel.findByIdAndRemove(req.params._id);
      res.json(estacionDelete);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
    getEstacionesNiveles,
    getEstacionNivel,
    crearEstacionNivel,
    modificarEstacionNivel,
    deleteEstacionNivel
}