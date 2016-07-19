(function() {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$q', 'dataservice', 'logger'];
  /* @ngInject */
  function DashboardController($q, dataservice, logger) {
    var vm = this;
    vm.news = {
      title: 'Alerts Section',
      description: 'Timely alerts on students/milestones etc'
    };
    vm.messageCount = 0;
    vm.people = [];
    vm.title = 'Dashboard';

    activate();

    function activate() {
      var promises = [getMessageCount(), getPeople(), getCohorts()];
      return $q.all(promises).then(function() {
        logger.info('Activated Dashboard View');
      });
    }

    function getCohorts() {
      return dataservice.getCohorts().then(function(data) {
        vm.cohorts = data;
        return vm.cohorts;
      });
    }

    function getMessageCount() {
      return dataservice.getMessageCount().then(function(data) {
        vm.messageCount = data;
        return vm.messageCount;
      });
    }

    function getPeople() {
      return dataservice.getPeople().then(function(data) {
        vm.people = data;
        return vm.people;
      });
    }

    function getZenQuote() { //random zen quote from github
      return dataservice.getZenQuote().then(function(data) {
        vm.zenQuote = data;
        return vm.zenQuote;
      });
    }
  }
})();
