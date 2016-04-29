(function () {
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
      getMessageCount: getMessageCount,
      getZenQuote: getZenQuote
    };

    return service;

<<<<<<< 4fa7ceffa894319f6557c40d56c527629fc351ab
    function getMessageCount() {
      return $q.when(12);
    }

=======
    function getMessageCount() { return $q.when(12); }
 /*
 *
 * Http Data Requests
 *
 */
>>>>>>> [feature] added cohort data and mock data to server and client plus tests
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

    function getZenQuote() {
      let config = {
        //params: data,
        headers: {
          'Accept': 'application/json',
          'authorization': 'Basic am1pY2hlbGluOmczM2tmcjBudCEyMw=='
        }
      };

      return $http.get('https://api.github.com/zen', config)
        .then(success)
        .catch(fail);

      function success(response) {
        return response.data;
      }

      function fail(e) {
        return exception.catcher('XHR failed for getZenQuote')(e);
      }
    }
  }
})();
