import { CustomWebpackBrowserSchema, TargetOptions } from '@angular-builders/custom-webpack';
import { Configuration, container } from 'webpack';

export default (config: Configuration, options: CustomWebpackBrowserSchema, targetOptions: TargetOptions) => {
  config.plugins = config.plugins || [];

  config.plugins.push(
    new container.ModuleFederationPlugin({
      name: 'order',
      library: { type: 'var', name: 'order' },
      filename: 'remoteEntry.js',
      exposes: {
        './OrderApp': './src/bootstrap.ts',
      },
      shared: {
        '@angular/core': { singleton: true, eager: true, strictVersion: true },
        'mfe-ui-kit': { singleton: true, eager: true, requiredVersion: false },
      },
    }),
  );

  config.output = {
    ...config.output,
    uniqueName: 'order',
    publicPath: 'auto',
    scriptType: 'text/javascript',
  };

  config.optimization = {
    ...config.optimization,
    runtimeChunk: false,
  };

  return config;
};
