const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path");
const USER_SERVER_ADDRESS_PORT = "localhost:5002";

// load proto for gRPC server
const proto = path.join(process.cwd(), "GRPC/protos/user/user.proto");

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
module.exports.userService = new protoBuf.userPkg.userService(
    USER_SERVER_ADDRESS_PORT,
    grpc.credentials.createInsecure()
);
