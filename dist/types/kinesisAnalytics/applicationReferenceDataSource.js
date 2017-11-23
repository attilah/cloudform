"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class S3ReferenceDataSource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.S3ReferenceDataSource = S3ReferenceDataSource;
class MappingParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MappingParameters = MappingParameters;
class JSONMappingParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.JSONMappingParameters = JSONMappingParameters;
class RecordFormat {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RecordFormat = RecordFormat;
class RecordColumn {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.RecordColumn = RecordColumn;
class CSVMappingParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CSVMappingParameters = CSVMappingParameters;
class ReferenceSchema {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ReferenceSchema = ReferenceSchema;
class ReferenceDataSource {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ReferenceDataSource = ReferenceDataSource;
class ApplicationReferenceDataSource extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::KinesisAnalytics::ApplicationReferenceDataSource', properties, dependsOn);
    }
}
exports.default = ApplicationReferenceDataSource;
