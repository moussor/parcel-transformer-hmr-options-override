# Parcel HMR Options Override

This plugin addresses this Parcel issue [#7640](https://github.com/parcel-bundler/parcel/issues/7640)

## Install

    npm install parcel-transformer-hmr-options-override --save-dev

or with yarn

    yarn add -D parcel-transformer-hmr-options-override

## Usage

If you don't already have one create a `.parcelrc` configuration file in the same directory of your `package.json` and add the transformer in your pipeline. It is suggested to add it in the last position.

    {
      "extends": "@parcel/config-default",
      "transformers": {
        "*.js": [
          "...",
          "parcel-transformer-hmr-options-override"
        ]
      }
    }

For a more complex use please refer to the [Official Parcel Documentation](https://parceljs.org/docs/)
