const util = require('../pages/utils/uti1l.js');
let LayerView = require('behavior-layer');
Component({
  behaviors: [
    LayerView
  ],
  properties: {
    message: {
      type: String
    }
  },
  data: {
    maskEventName: 'onToastHide'
  },

  attached: function () { 
    //console.log(this)
  },
  methods: {
  }
})