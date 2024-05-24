const moduleAlias = require("module-alias");

moduleAlias.addAliases({
    "@routes": __dirname + "/src/routes",
    "@GrpcClients" :  __dirname + "/GRPC/clients",
    "@GrpcServices" :   __dirname + "/GRPC/services",
    "@controllers" :   __dirname + "/src/controllers",
    "@GrpcServers" :    __dirname + "/GRPC/servers",
    "@utility": __dirname + "/src/utility",


});
