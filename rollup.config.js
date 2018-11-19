import rollupConfig from '@ovh-ux/component-rollup-config';

const config = rollupConfig({
  input: 'src/ovh-angular-actions-menu.js',
});

export default [
  config.cjs(),
  config.umd({
    output: {
      globals: {
        angular: 'angular',
        'ovh-angular-responsive-popover': 'ovh-angular-responsive-popover',
        'angular-translate': 'pascalprecht.translate',
      },
    },
  }),
];
