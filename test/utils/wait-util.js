var timeout = 10000;

module.exports = {

  waitForVisible : function (element) {
      if(!element.isVisible()){
        element.waitForVisible(timeout);
      }
  },

}