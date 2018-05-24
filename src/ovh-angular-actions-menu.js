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

import translate from 'angular-translate';
import responsivePopover from 'ovh-angular-responsive-popover';

import actionsMenuItem from './ovh-angular-actions-menu-item/ovh-angular-actions-menu-item'

import actionsMenuDirective from './ovh-angular-actions-menu.directive';
import actionsMenuProvider from './ovh-angular-actions-menu.provider';
import actionsMenuFactory from './ovh-angular-actions-menu.factory';

export default angular
    .module("ovh-angular-actions-menu", [
        translate,
        responsivePopover,
        actionsMenuItem
    ])
    .provider("actionsMenu", actionsMenuProvider)
    .factory("ActionsMenu", actionsMenuFactory)
    .directive("actionsMenu", actionsMenuDirective)
    .name;
