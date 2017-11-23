"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class VPCOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VPCOptions = VPCOptions;
class ElasticsearchClusterConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ElasticsearchClusterConfig = ElasticsearchClusterConfig;
class SnapshotOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SnapshotOptions = SnapshotOptions;
class EBSOptions {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EBSOptions = EBSOptions;
class Domain extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Elasticsearch::Domain', properties, dependsOn);
    }
}
exports.default = Domain;
