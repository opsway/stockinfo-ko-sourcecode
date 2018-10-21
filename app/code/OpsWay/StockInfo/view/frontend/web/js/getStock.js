define(
  [
    'jquery',
    'mage/storage'
  ],
  function (
    $,
    storage
  ) {
    'use strict';
    return function (product, deferred) {
      deferred = deferred || $.Deferred();
      var url = 'opsway/stock/info';

      return storage.post(
        url,
        JSON.stringify({
          productId: product
        })
      ).done(
        function (response) {
          if (response) {
            deferred.resolve({
              response: response
            });
          } else {
            deferred.reject();
          }
        }
      ).fail(
        function (response) {
          deferred.reject();
        }
      );
    };
  }
);