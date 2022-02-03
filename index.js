const { Transformer } = require("@parcel/plugin");

module.exports = new Transformer({
  async transform({ asset, options }) {
    // Retrieve the asset's source code and source map.
    let source = await asset.getCode();
    const sourceMap = await asset.getMap();

    const { host: hmrHost, port: hmrPort } = options.hmrOptions;
    if (hmrHost) {
      source = source.replace(/HMR_HOST = null/g, `HMR_HOST = "${hmrHost}"`);
    }

    if (hmrPort) {
      source = source.replace(/HMR_PORT = null/g, `HMR_PORT = ${hmrPort}`);
    }

    asset.setCode(source);
    asset.setMap(sourceMap);

    // Return the asset
    return [asset];
  },
});
