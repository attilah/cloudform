/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class S3Location {
    Bucket: Value<string>
    Key: Value<string>
    RoleArn: Value<string>

    constructor(properties: S3Location) {
        Object.assign(this, properties)
    }
}

export interface BuildProperties {
    Name?: Value<string>
    StorageLocation?: S3Location
    Version?: Value<string>
}

export default class Build extends ResourceBase {
    constructor(properties: BuildProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::GameLift::Build', properties, dependsOn)
    }
}
