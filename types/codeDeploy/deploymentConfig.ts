/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class MinimumHealthyHosts {
    Type: Value<string>
    Value: Value<number>

    constructor(properties: MinimumHealthyHosts) {
        Object.assign(this, properties)
    }
}

export interface DeploymentConfigProperties {
    DeploymentConfigName?: Value<string>
    MinimumHealthyHosts?: MinimumHealthyHosts
}

export default class DeploymentConfig extends ResourceBase {
    constructor(properties: DeploymentConfigProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CodeDeploy::DeploymentConfig', properties, dependsOn)
    }
}
