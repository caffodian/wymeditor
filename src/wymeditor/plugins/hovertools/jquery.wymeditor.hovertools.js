/*
 * WYMeditor : what you see is What You Mean web-based editor
 * Copyright (C) 2007 H.O.net - http://www.honet.be/
 * Dual licensed under the MIT (MIT-license.txt)
 * and GPL (GPL-license.txt) licenses.
 *
 * For further information visit:
 *        http://www.wymeditor.org/
 *
 * File Name:
 *        jquery.wymeditor.hovertools.js
 *        hovertools plugin for WYMeditor
 *
 * File Authors:
 *        Jean-Francois Hovinne (jf.hovinne@wymeditor.org)
 */

//Extend WYMeditor
Wymeditor.prototype.hovertools = function() {
  
  var wym = this;
  
  //bind events on buttons
  $(this._box).find('.wym_tools a').hover(
    function() {
      wym.status($(this).html());
    },
    function() {
      wym.status('&nbsp;');
    }
  );

  //classes: add/remove a style attr to matching elems
  //while mouseover/mouseout
  $(this._box).find('.wym_classes a').hover(
    function() {
      var aClasses = eval(wym._options.aClassesItems);
      var sName = $j(this).attr(sWYM_NAME);
      var oClass = aClasses.findByName(sName);

      if(oClass){
        jqexpr = oClass.expr;
        $(wym._doc).find(jqexpr).css('background-color','#cfc');
      }
    },
    function() {
      $(wym._doc).find('*').removeAttr('style');
    }
  );

};
