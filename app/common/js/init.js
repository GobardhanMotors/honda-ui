app.ng.requires.push('angularMoment');
app.ng.requires.push('ui.bootstrap');
app.ng.requires.push('ngSanitize');
app.ng.requires.push('nvd3ChartDirectives');
app.ng.requires.push('ngGrid');
app.ng.requires.push('ngFileReader');
app.ng.requires.push('ui.router');
app.ng.requires.push('checklist-model');
app.ng.requires.push('ui.mask');
app.ng.requires.push('ui.select2');
app.ng.requires.push('ngCkeditor');
app.ng.requires.push('multi-select');
app.ng.requires.push('ui.tree');
app.ng.requires.push('infinite-scroll');
app.ng.requires.push('nouislider');
app.ng.requires.push('base64');
app.ng.requires.push('angular-loading-bar');
app.ng.requires.push('ng-sortable');
app.ng.requires.push('ngIdle');

app.ng.run(
  ['$rootScope', '$state', '$stateParams',
  function ($rootScope, $state, $stateParams) {
    'use strict';
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  }
  ]
  );

if (!window.__karma__) {
  app.ng.provider('$exceptionHandler', {
    $get: function(errorLogSvc) {
      'use strict';
      return errorLogSvc;
    }
  });
}

app.ng.config(
  ['$stateProvider',
   '$httpProvider',
   'IdleProvider',
  function ($stateProvider, $httpProvider, idleProvider) {
    'use strict';

    // redirect user to login on session expiration
    $httpProvider.responseInterceptors.push(['$q', '$location', function($q, $location) {

      return function(promise) {
        return promise.then(function(response) {
          return response;
        }, function(response) {
          if (response.status === 401) {
            $location.path('/');
            return response;
          }

          return $q.reject(response);

        });
      };
    }]);

    // set autoResume so user activity will only reset idle state while not yet idle.
    idleProvider.autoResume('notIdle');

    // set idle interrupt events.  This is the default list except for 'mousemove', which is difficult to test with.
    idleProvider.interrupt('keydown DOMMouseScroll mousewheel mousedown');

    var ctrlRoot = app.root + 'modules/patient/Views/';
    var ctrlRootTaskBundle = app.root + 'modules/task-bundles/Views/';
    var managedPopulationctrlRoot = app.root + 'modules/administrator/Views/';
    var ctrlRootPopulationDefinition = app.root + 'modules/administrator/Views/';
    var ctrlRootManageMetrics = app.root + 'modules/manage-metrics/views/';
    var ctrlUserMgmt = app.root + 'modules/administrator/views/';
    var ctrlRootCareTeam = app.root + 'modules/administrator/views/';
    var ctrlRootAssessment = app.root + 'modules/administrator/views/';
    var ctrlRootMerge = app.root + 'modules/merge/Views/';
    var ctrlRootCampaign = app.root + 'modules/marketing/Views/';
    var ctrlRootEnrollment = app.root + 'modules/enrollments/Views/';
    $stateProvider
    // START CREATE USER WIZARD
    .state('userDetails',
    {
      templateUrl: ctrlUserMgmt + 'userDetails.html'
    })
    .state('userCredentials',
    {
      templateUrl: ctrlUserMgmt + 'userCredentials.html'
    })
    .state('securityRoles',
    {
      templateUrl: ctrlUserMgmt + 'securityRoles.html'
    })
    .state('userSummary',
    {
      templateUrl: ctrlUserMgmt + 'userSummary.html'
    })
    .state('managedPopulationInformation',
    {
      templateUrl: managedPopulationctrlRoot + 'managedPopulationInformation.html'
    })
    .state('mapPopulationDefinition',
    {
      templateUrl: managedPopulationctrlRoot + 'ManagedPopulationMapPopulation.html'
    })
    .state('mapReminderSchedule',
    {
      templateUrl: managedPopulationctrlRoot + 'mapReminderSchedule.html'
    })
    .state('mapCareTeam',
    {
      templateUrl: managedPopulationctrlRoot + 'ManagedPopulationCareTeam.html'
    })
    .state('managedPopulationSummary',
    {
      templateUrl: managedPopulationctrlRoot + 'managedPopulationSummary.html'
    })
    .state('populationPatients',
    {
      templateUrl: managedPopulationctrlRoot + 'populationPatients.html'
    })
    .state('mapTaskBundles',
    {
      templateUrl: managedPopulationctrlRoot + 'ManagedPopulationMapTaskBundles.html'
    })
    .state('mapResolveTaskConflicts',
    {
      templateUrl: managedPopulationctrlRoot + 'ManagedPopulationMapResolveTaskConflicts.html'
    })
    // END CREATE USER WIZARD
    // START EDIT USER WIZARD
    .state('editUserDetails',
    {
      templateUrl: ctrlUserMgmt + 'editUserDetails.html'
    })
    .state('editUserCredentials',
    {
      templateUrl: ctrlUserMgmt + 'editUserCredentials.html'
    })
    .state('editSecurityRoles',
    {
      templateUrl: ctrlUserMgmt + 'editSecurityRoles.html'
    })
    .state('editUserSummary',
    {
      templateUrl: ctrlUserMgmt + 'editUserSummary.html'
    })
    // END EDIT USER WIZARD
    .state('selectTaskType',
    {
      templateUrl: ctrlRoot + 'selectTaskType.html'
    })
    .state('selectTaskName',
    {
      templateUrl: ctrlRoot + 'selectTaskName.html'
    })
    .state('selectManagedPopulation',
    {
      templateUrl: ctrlRoot + 'selectManagedPopulation.html'
    })
    .state('addSummaryTask',
    {
      templateUrl: ctrlRoot + 'addPatientTaskSummary.html'
    })
    .state('selectDueDate',
    {
      templateUrl: ctrlRoot + 'selectDueDate.html'
    })
    .state('generalInformation',
    {
      templateUrl: ctrlRootTaskBundle + 'generalInformation.html'
    })
    .state('procedures',
    {
      templateUrl: ctrlRootTaskBundle + 'procedures.html'
    })
    .state('assessments',
    {
      templateUrl: ctrlRootTaskBundle + 'assessments.html'
    })
    .state('educationMaterials',
    {
      templateUrl: ctrlRootTaskBundle + 'educationMaterials.html'
    })
    .state('otherTasks',
    {
      templateUrl: ctrlRootTaskBundle + 'otherTasks.html'
    })
    .state('summary',
    {
      templateUrl: ctrlRootTaskBundle + 'summary.html'
    })

    .state('pdgeneralinformation',
    {
      templateUrl: ctrlRootPopulationDefinition + 'GeneralInformation.html'
    })
    .state('pdselectCriteria',
    {
      templateUrl: ctrlRootPopulationDefinition + 'SelectCriteria.html'
    })
    .state('pdbuildDefinition',
    {
      templateUrl: ctrlRootPopulationDefinition + 'BuildDefinition.html'
    })
    .state('pdsummary',
    {
      templateUrl: ctrlRootPopulationDefinition + 'populationDefintionSummary.html'
    })
    //The manage-metrics
    .state('metricsConfigGeneralInfo',
    {
      templateUrl: ctrlRootManageMetrics + 'generalInformation.html'
    })
    .state('metricsConfigMap',
    {
      templateUrl: ctrlRootManageMetrics + 'mapMetricsDN.html'
    })
    .state('metricsConfigSegmentation',
    {
      templateUrl: ctrlRootManageMetrics + 'segmentationMetrics.html'
    })
    .state('metricsConfigSummary',
    {
      templateUrl: ctrlRootManageMetrics + 'summaryMetrics.html'
    })
    .state('adminCareTeamName',
    {
      templateUrl: ctrlRootCareTeam + 'Add_Care_Team_Name.html'
    })
    .state('adminCareTeamDetails',
    {
      templateUrl: ctrlRootCareTeam + 'Add_Care_Team_Details.html'
    })
    .state('adminCareTeamSummary',
    {
      templateUrl: ctrlRootCareTeam + 'Add_Care_Team_Summary.html'
    })
    .state('adminassessmentGeneralInformation',
    {
      templateUrl: ctrlRootAssessment + 'assessmentGeneralInformation.html'
    })
    .state('adminassessmentQuestions',
    {
      templateUrl: ctrlRootAssessment + 'assessmentQuestions.html',
      controller: function(){
      },
      params: ['questionIndex']
    })
    .state('adminassessmentSummary',
    {
      templateUrl: ctrlRootAssessment + 'assessmentSummary.html'
    })

    .state('mapGeneralInformation',
    {
      templateUrl: ctrlRootMerge + 'generalInformation.html'
    })
     .state('mapscheduletasks',
    {
      templateUrl: ctrlRootMerge + 'scheduledTasks.html'
    })
      .state('mapAdhoc',
    {
      templateUrl: ctrlRootMerge + 'adhocTasks.html'
    })
       .state('mapManagedPopulation',
    {
      templateUrl: ctrlRootMerge + 'managePopulation.html'
    })
        .state('mapSummary',
    {
      templateUrl: ctrlRootMerge + 'summary.html'
    })
      //Campaign
        .state('campaignGeneralInformation',
    {
      templateUrl: ctrlRootCampaign + 'CampaignGeneralInformation.html'
    })
         .state('CampaignInformation',
    {
      templateUrl: ctrlRootCampaign + 'CampaignInformation.html'
    })
         .state('CampaignSummary',
    {
      templateUrl: ctrlRootCampaign + 'CampaignSummary.html'
    })
    .state('enrollmentPatientDetails',
    {
      templateUrl: ctrlRootEnrollment + 'patientDetails.html'
    })
    .state('enrollmentTasks',
    {
      templateUrl: ctrlRootEnrollment + 'tasks.html'
    })
    .state('enrollmentSummary',
    {
      templateUrl: ctrlRootEnrollment + 'summary.html'
    })
    ;
  }]);
