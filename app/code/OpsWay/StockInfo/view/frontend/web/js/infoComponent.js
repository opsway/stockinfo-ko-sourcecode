define([
    'jquery',
    'uiComponent',
    'OpsWay_StockInfo/js/getStock',
    'ko'
  ], function ($, Component, getStock, ko) {
    'use strict';

    var qty = ko.observable('');
    var showInfo = ko.observable(false);

    return Component.extend({
      productId: $('input[name="product"]').val(),
      qty: qty,
      showInfo: showInfo,

      initialize: function () {
        this._super();
      },

      checkTheStock: function () {
        var deferred = $.Deferred();
        var self = this;

        getStock(this.productId, deferred);

        $.when(deferred).done(function(response) {
          self.qty(response.response.qty);
          self.showInfo(true);
        });

        $.when(deferred).fail(function() {
          self.showInfo(false);
        });
      }
    });
  }
);