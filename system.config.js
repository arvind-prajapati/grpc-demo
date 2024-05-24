module.exports = {
    apps: [
          {
              name: "Local",
              script: "./server.js",
              watch: true,
              env: {
                  NODE_ENV: "development"
              },
              instances: 1
          },
          {
              name: "user server",
              script: "./GRPC/servers/user.js",
              watch: true,
              env: {
                  NODE_ENV: "development"
              },
              instances: 1
          },
          {
            name: "post server",
            script: "./GRPC/servers/post.js",
            watch: true,
            env: {
                NODE_ENV: "development"
            },
            instances: 1
        }
      ]
  }