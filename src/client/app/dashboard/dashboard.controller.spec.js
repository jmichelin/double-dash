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

<<<<<<< HEAD
<<<<<<< 47637176503b9d8a0128e9cf6020d10753689465
<<<<<<< 2cf7d7bbb959b6fccc199ec0c096c8c1a2860d7e
=======
>>>>>>> [fix] adjusted data stream from api for specific teams
=======
>>>>>>> 6544f1cbd128d0e88e0376ab0e78c5d16de7363a
      it('should have cohorts', function() {
        expect(controller.cohorts).to.not.be.empty;
      });

<<<<<<< HEAD
<<<<<<< 47637176503b9d8a0128e9cf6020d10753689465
      it('should have at least 1 cohort', function() {
        //console.log('controller.cohorts', controller.cohorts);
=======
      it('should have at least 1 cohort', function() {
>>>>>>> [feature] added cohort data and mock data to server and client plus tests
=======
      it('should have at least 1 cohort', function() {
        //console.log('controller.cohorts', controller.cohorts);
>>>>>>> [fix] adjusted data stream from api for specific teams
=======
      it('should have at least 1 cohort', function() {
        //console.log('controller.cohorts', controller.cohorts);
>>>>>>> 6544f1cbd128d0e88e0376ab0e78c5d16de7363a
        expect(controller.cohorts).to.have.length.above(0);
      });

      it('should have cohort count of 7', function() {
        expect(controller.cohorts).to.have.length(7);
      });

      it('should have at least 1 person', function() {
        expect(controller.people).to.have.length.above(0);
      });

<<<<<<< HEAD
<<<<<<< 47637176503b9d8a0128e9cf6020d10753689465
<<<<<<< 2cf7d7bbb959b6fccc199ec0c096c8c1a2860d7e
=======
>>>>>>> 6544f1cbd128d0e88e0376ab0e78c5d16de7363a
      it('should have people count of 7', function() {
        expect(controller.people).to.have.length(7);
=======
      it('should have people count of 8', function() {
        expect(controller.people).to.have.length(8);
>>>>>>> [feature] added cohort data and mock data to server and client plus tests
=======
      it('should have people count of 7', function() {
        expect(controller.people).to.have.length(7);
>>>>>>> [fix] adjusted data stream from api for specific teams
      });

      it('should have a zenQuote', function() {
        expect(controller.zenQuote).to.not.be.empty;
      });

<<<<<<< HEAD
=======
      it('should have a zenQuote', function() {
        expect(controller.zenQuote).to.not.be.empty;
      });

>>>>>>> 6544f1cbd128d0e88e0376ab0e78c5d16de7363a
      it('should have a zenQuote as a string', function() {
        expect(controller.zenQuote).to.be.a('string');
      });

    });
  });
});
