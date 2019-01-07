/**
 * @ngdoc overview
 *
 * @name actionsMenu
 *
 *  @requires [pascalprecht.translate](https://github.com/angular-translate/angular-translate)
 *  @requires [ovh-angular-responsive-popover](https://github.com/ovh-ux/ovh-angular-responsive-popover)
 *
 * @description
 * _An actions menu gives the opportunity to group a set of actions available for a specific
 * context under a single menu._
 *
 *  ## TODO
 *
 *  - customizing page width ;
 *  - customizing open animation ;
 *  - actions with confirmation.
 */

import angular from 'angular';
import 'angular-translate';
import 'ovh-angular-responsive-popover';

import ngOvhActionsMenuItem from './item';

import directive from './directive';
import factory from './factory';
import provider from './provider';

import './index.less';

const moduleName = 'ngOvhActionsMenu';

angular
  .module(moduleName, [
    'pascalprecht.translate',
    'ovh-angular-responsive-popover',
    ngOvhActionsMenuItem,
  ])
  .directive('actionsMenu', directive)
  .factory('ActionsMenu', factory)
  .provider('actionsMenu', provider)
  .run(/* @ngTranslationsInject ./translations */);

export default moduleName;
