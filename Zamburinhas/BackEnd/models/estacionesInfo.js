const mongoose = require('mongoose');

const estacionesInfoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    index: true
  },
  ubicacion: {
    type: String,
    required: true
  },
  rio:{
    type : String,
    required : true,
  },
  potencia_instalada: {
    type: Number,
    required: true
  },
  coordenadas: {
    type: [Number], // [lat, lng]
    required: true
  },
  tipo: {
    type: String,
    required: true
  },
  explotador: {
    type: String,
    required: true
  },
  superficie_cuenca_hidrografica: {
    type: Number,
    required: true
  },
  aportacion_media_anual: {
    type: Number,
    required: true
  },
  precipitacion_media_anual: {
    type: Number,
    required: true
  },
  caudal_punta_avenida_proyecto: {
    type: Number,
    required: true
  },
  cota_coronacion: {
    type: Number,
    required: true
  },
  altura_desde_cimientos: {
    type: Number,
    required: true
  },
  longitud_coronacion: {
    type: Number,
    required: true
  },
  cota_cimentacion: {
    type: Number,
    required: true
  },
  cota_cauce_presa: {
    type: Number,
    required: true
  },
  volumen_cuerpo_presa: {
    type: Number,
    required: true
  },
  superficie_embalse: {
    type: Number,
    required: true
  },
  capacidad_embalse: {
    type: Number,
    required: true
  },
  cota_nivel_max_normalizado: {
    type: Number,
    required: true
  },
  num_total_aliviaderos: {
    type: Number,
    required: true
  },
  regulacion_aliviaderos: {
    type: String,
    required: true
  },
  capacidad_aliviaderos: {
    type: Number,
    required: true
  },
  num_total_desagues: {
    type: Number,
    required: true
  },
  capacidad_desagues: {
    type: Number,
    required: true
  },
  idEstacionNivel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'estacionnivels'
  },
  idEstacionTemp: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'estaciontemps'
  }
});

estacionesInfoSchema.index({nombre: 1, coordenadas: 1}, {unique:true});

const EstacionInfo = mongoose.model('estacionInfo', estacionesInfoSchema);

module.exports = EstacionInfo;
