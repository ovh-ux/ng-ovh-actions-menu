/**
 * @ngdoc overview
 *
 * @name actionsMenu
 *
 *  @requires [pascalprecht.translate](https://github.com/angular-translate/angular-translate)
 *  @requires [ovh-angular-responsive-popover](https://github.com/ovh-ux/ovh-angular-responsive-popover)
 *
 * @description
 * _An actions menu gives the opportunity to group a set of actions available for a specific context under a single menu._
 *
 *  ## TODO
 *
 *  - customizing page width ;
 *  - customizing open animation ;
 *  - actions with confirmation.
 */

import responsivePopover from 'ovh-angular-responsive-popover';

import actionsMenuItemDirective from './ovh-angular-actions-menu-item.directive';
import actionsMenuItemFactory from './ovh-angular-actions-menu-item.factory';

export default angular
    .module("ovh-angular-actions-menu-item", [
        responsivePopover
    ])
    .factory("ActionsMenuItem", actionsMenuItemFactory)
    .directive("actionsMenuItem", actionsMenuItemDirective)
    .name;
