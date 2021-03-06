/*
 *
 *  Appui the App-UI library
 *  Copyright 2012 Thomas Nabet
 *  v 0.2
 *
 *  bbn is a window object containing elements dispatched in 3 sub-objects:
 *  - functions (f),
 *  - variables (v),
 *  - language (l)
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.bbn = factory());
}(this, (
  function(){
  "use strict";
  if (axios) {
    axios.defaults.headers.post['Content-Type'] = 'text/json';
  }
  return {
    version: "1.0.1",
    opt: {
      _cat: {}
    },
    _(st, namespace){
      if (namespace && bbn.fn.isString(namespace)) {
        if (namespace.indexOf('_') !== 0) {
          namespace = '_' + namespace;
        }
        if (bbn.lng[namespace]) {
          return bbn.lng[namespace][st] || st;
        }
      }
      return bbn.lng[st] || st;
    },
    $(selector, context) {
      if (context && context.querySelectorAll) {
        return context.querySelectorAll(selector)
      }
      return document.body.querySelectorAll(selector)
    },
    _popups: [],
    lng: {
      /* User-defined languages elements */
      select_unselect_all: "Select/Clear all",
      select_all: "Select all",
      search: 'Search',
      loading: 'Loading...',
      choose: 'Choose',
      error: 'Error',
      server_response: 'Server response',
      reload: 'Reload',
      errorText: 'Something went wrong',
      closeAll: "Close all",
      closeOthers: "Close others",
      pin: "Pin",
      arrange: "Arrange",
      cancel: "Cancel",
      unpin: "Unpin",
      yes: "Yes",
      no: "No",
      unknown: "Unknown",
      untitled: "Untitled",
      confirmation: "Confirmation",
      Today: "Today",
      Tomorrow: "Tomorrow",
      Yesterday: "Yesterday"
    },
    app: {
      popups: [],
    },
  };
})));
