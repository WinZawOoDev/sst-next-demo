/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "sst-next-demo",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {

    const bucket = new sst.aws.Bucket("premium-banking-next-demo");

    new sst.aws.Nextjs("premium-banking-demo-next-demo", {
      link: [bucket]
    });
    
  },
});