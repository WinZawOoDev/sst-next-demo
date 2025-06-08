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

    const bucket = new sst.aws.Bucket("sst-next-demo");

    new sst.aws.Nextjs("sst-next-demo", {
      link: [bucket],
      imageOptimization:{
        memory:"512 MB",
        staticEtag: true
      },
      invalidation:{
        paths: "all",
        wait: true,
      }
    });

  },
});