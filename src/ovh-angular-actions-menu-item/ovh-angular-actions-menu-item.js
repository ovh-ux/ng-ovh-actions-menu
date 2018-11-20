/**
 * @ngdoc overview
 *
 * @name actionsMenu
 *
 *  @requires [pascalprecht.translate](https://github.com/angular-translate/angular-translate)
 *  @requires [ovh-angular-responsive-popover](https://github.com/ovh-ux/ovh-angular-responsive-popover)
 *
 * @description
 * _An actions menu gives the opportunity to group a set of actions available for a specific context
 * under a single menu._
 *
 *  ## TODO
 *
 *  - customizing page width ;
 *  - customizing open animation ;
 *  - actions with confirmation.
 */

import angular from 'angular';
import 'ovh-angular-responsive-popover';

import actionsMenuItemDirective from './ovh-angular-actions-menu-item.directive';
import actionsMenuItemFactory from './ovh-angular-actions-menu-item.factory';

const moduleName = 'ovh-angular-actions-menu-item';

angular
  .module(moduleName, [
    'ovh-angular-responsive-popover',
  ])
  .factory('ActionsMenuItem', actionsMenuItemFactory)
  .directive('actionsMenuItem', actionsMenuItemDirective);

export default moduleName;
