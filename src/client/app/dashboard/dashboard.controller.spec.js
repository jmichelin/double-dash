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

      it('should have cohorts', function() {
        expect(controller.cohorts).to.not.be.empty;
      });

      it('should have at least 1 cohort', function() {
        //console.log('controller.cohorts', controller.cohorts);
        expect(controller.cohorts).to.have.length.above(0);
      });

      it('should have cohort count of 7', function() {
        expect(controller.cohorts).to.have.length(7);
      });

      it('should have at least 1 person', function() {
        expect(controller.people).to.have.length.above(0);
      });

      it('should have people count of 7', function() {
        expect(controller.people).to.have.length(7);
      });
    });
  });
});
