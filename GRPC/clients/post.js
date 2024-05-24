const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path");
const USER_SERVER_ADDRESS_PORT = "localhost:4000";

// load proto for gRPC server
const proto = path.join(process.cwd(), "GRPC/protos/post/post.proto");

// create the protobufjs
const protoBuf = grpc.loadPackageDefinition(
    protoLoader.loadSync(proto, {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    })
);

// Create gRPC client and export
module.exports.postService = new protoBuf.postPkg.postService(
    USER_SERVER_ADDRESS_PORT,
    grpc.credentials.createInsecure()
);
