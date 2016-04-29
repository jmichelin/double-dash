/* jshint -W117, -W030 */
describe('DashboardController', function() {
  var controller;
  var people = mockData.getMockPeople();
  var cohorts = mockData.getMockCohorts();

  beforeEach(function() {
    bard.appModule('app.dashboard');
    bard.inject('$controller', '$log', '$q', '$rootScope', 'dataservice');
  });

  beforeEach(function() {
    sinon.stub(dataservice, 'getPeople').returns($q.when(people));
    sinon.stub(dataservice, 'getCohorts').returns($q.when(cohorts));
    controller = $controller('DashboardController');
    $rootScope.$apply();
  });

  bard.verifyNoOutstandingHttpRequests();

  describe('Dashboard controller', function() {
    it('should be created successfully', function() {
      expect(controller).to.be.defined;
    });

    describe('after activate', function() {
      it('should have title of Dashboard', function() {
        expect(controller.title).to.equal('Dashboard');
      });

      it('should have logged "Activated"', function() {
        expect($log.info.logs).to.match(/Activated/);
      });

      it('should have news', function() {
        expect(controller.news).to.not.be.empty;
      });

<<<<<<< 2cf7d7bbb959b6fccc199ec0c096c8c1a2860d7e
      it('should have cohorts', function() {
        expect(controller.cohorts).to.not.be.empty;
      });

      it('should have at least 1 cohort', function() {
        //console.log('controller.cohorts', controller.cohorts);
=======
      it('should have at least 1 cohort', function() {
>>>>>>> [feature] added cohort data and mock data to server and client plus tests
        expect(controller.cohorts).to.have.length.above(0);
      });

      it('should have cohort count of 7', function() {
        expect(controller.cohorts).to.have.length(7);
      });

      it('should have at least 1 person', function() {
        expect(controller.people).to.have.length.above(0);
      });

<<<<<<< 2cf7d7bbb959b6fccc199ec0c096c8c1a2860d7e
      it('should have people count of 7', function() {
        expect(controller.people).to.have.length(7);
=======
      it('should have people count of 8', function() {
        expect(controller.people).to.have.length(8);
>>>>>>> [feature] added cohort data and mock data to server and client plus tests
      });
    });
  });
});
