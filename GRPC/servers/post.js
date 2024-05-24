require("../../alias-config")
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path");
const USER_SERVER_ADDRESS_PORT = "localhost:4000";
const server = new grpc.Server();
const proto = path.join(process.cwd(), "GRPC/protos/post/post.proto");

const protoBuf = grpc.loadPackageDefinition(
    protoLoader.loadSync(proto, {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    })
);

const { postServices } = require("@GrpcServices/post.js");

server.addService(protoBuf.postPkg.postService.service, postServices);

server.bindAsync(USER_SERVER_ADDRESS_PORT, grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err != null) {
        return console.error(err);
    } else {
        server.start();
        const ServerMessage = "gRPC post server listening on " + port;
        console.log(ServerMessage);
    }
});
