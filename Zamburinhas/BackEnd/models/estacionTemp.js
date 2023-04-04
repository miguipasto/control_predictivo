const mongoose = require('mongoose');

const estacionTempSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  temperaturas: [{
    year: {
      type: Number,
      required: true
    },
    mo: {
      type: Number,
      required: true
    },
    dy: {
      type: Number,
      required: true
    },
    t2m: {
      type: Number,
      required: true
    },
    t2mdew: {
      type: Number,
      required: true
    },
    t2mwet: {
      type: Number,
      required: true
    },
    ts: {
      type: Number,
      required: true
    },
    t2m_range: {
      type: Number,
      required: true
    },
    t2m_max: {
      type: Number,
      required: true
    },
    t2m_max: {
      type: Number,
      required: true
    },
    t2m_min: {
      type: Number,
      required: true
    },
    prectotcorr: {
      type: Number,
      required: true
    },
    allsky_sfc_sw_dwn: {
      type: Number,
      required: true
    },
    clrsky_sfc_sw_dwn: {
      type: Number,
      required: true
    },
    ps: {
      type: Number,
      required: true
    },

    rh2m: {
      type: Number,
      required: true
    },

    qv2m: {
      type: Number,
      required: true
    },


  }]
});


const EstacionTemp = mongoose.model('estacionTemp', estacionTempSchema);

module.exports = EstacionTemp;
