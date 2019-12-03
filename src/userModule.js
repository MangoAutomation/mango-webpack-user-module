import angular from 'angular';
import testComponent from './components/testComponent/component';
import testService from './services/testService';

const userModule = angular.module('userModule', ['maUiApp'])
    .component('testComponent', testComponent)
    .factory('testService', testService);

export default userModule;