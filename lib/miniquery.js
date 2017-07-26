
/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */

 var SweetSelector = {
   select : function (element) {
     var el = document.querySelectorAll(element)
     return el
   }
}


/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */

var DOM = {
  hide: function(element){
    var elements = document.querySelectorAll(element)
    elements.forEach(ele => {
      ele.style.display = 'none';
    })
  },
  show: function(element){
    var elements = SweetSelector.select(element)
    elements.forEach(ele =>{
      ele.style.display = '';
    })
  },
  removeClass: function(element, cls){
    var elements = SweetSelector.select(element)
    elements.forEach(ele => {
      ele.classList.remove(cls)
    })
  },
  addClass: function(element, cls){
    var elements = SweetSelector.select(element)
    elements.forEach(ele =>{
      if(ele.classList){
        ele.classList.add(cls)
      }else {
        ele.className += ' ' + cls
      }
    })
  }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */

var EventDispatcher = {
  on: function(element, eventName, callback){
    var elements = SweetSelector.select(element)
    elements.forEach(ele => {
      ele.addEventListener(eventName, function(){
        callback()
      })
    })
  }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */

var AjaxWrapper = {
  request: function(options){
    var req = new XMLHttpRequest();
    console.log(req);
  }
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
