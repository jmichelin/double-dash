/* jshint -W117, -W030 */
describe('DashboardController', function() {
  var controller;
  var people = mockData.getMockPeople();
  var cohorts = mockData.getMockCohorts();
  var zenQuote = mockData.getMockZenQuote();

  beforeEach(function() {
    bard.appModule('app.dashboard');
    bard.inject('$controller', '$log', '$q', '$rootScope', 'dataservice');
  });

  beforeEach(function() {
    sinon.stub(dataservice, 'getPeople').returns($q.when(people));
    sinon.stub(dataservice, 'getCohorts').returns($q.when(cohorts));
    sinon.stub(dataservice, 'getZenQuote').returns($q.when(zenQuote));
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

<<<<<<< HEAD
<<<<<<< 19ebb514b0f4c1c84017f671611c8fa1f40c74de
      it('should have a zenQuote', function() {
        expect(controller.zenQuote).to.not.be.empty;
=======
=======
>>>>>>> cb5f6f6dec7fdb7c7c210fbbbe44bc62ffcfc04f
      it('should have people count of 7', function() {
        expect(controller.people).to.have.length(7);
>>>>>>> [fix] adjusted data stream from api for specific teams
      });

<<<<<<< HEAD
<<<<<<< 49ca5fcdc255732b343c10e323eb3466e9d57b7e
=======
=======
>>>>>>> cb5f6f6dec7fdb7c7c210fbbbe44bc62ffcfc04f
      it('should have a zenQuote', function() {
        expect(controller.zenQuote).to.not.be.empty;
      });

<<<<<<< HEAD
>>>>>>> [feature] adds random zen quote from git to dashboard
=======
>>>>>>> cb5f6f6dec7fdb7c7c210fbbbe44bc62ffcfc04f
      it('should have a zenQuote as a string', function() {
        expect(controller.zenQuote).to.be.a('string');
      });

    });
  });
});
