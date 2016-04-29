(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('dataservice', dataservice);

  dataservice.$inject = ['$http', '$q', 'exception', 'logger'];
  /* @ngInject */
  function dataservice($http, $q, exception, logger) {
    var service = {
      getCohorts: getCohorts,
      getPeople: getPeople,
      getMessageCount: getMessageCount
    };

    return service;

    function getMessageCount() { return $q.when(12); }
 /*
 *
 * Http Data Requests
 *
 */
    function getCohorts() {
      return $http.get('/api/cohorts')
        .then(success)
        .catch(fail);

      function success(response) {
        return response.data;
      }

      function fail(e) {
        return exception.catcher('XHR Failed for getCohorts')(e);
      }
    }

    function getPeople() {
      return $http.get('/api/people')
        .then(success)
        .catch(fail);

      function success(response) {
        return response.data;
      }

      function fail(e) {
        return exception.catcher('XHR Failed for getPeople')(e);
      }
    }
  }
})();
