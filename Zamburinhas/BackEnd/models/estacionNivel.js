const mongoose = require('mongoose');

const estacionNivelSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  datos: [{
    fecha: {
      type: Date,
      required: true
    },
    reserva: {
      type: Number,
      required: true
    },
    salida: {
      type: Number,
      required: true
    }
  }],
  maximo : {
    type: Number,
    required : true,
  },
});


const EstacionNivel = mongoose.model('estacionNivel', estacionNivelSchema);

module.exports = EstacionNivel;
