/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class RulesConfigurationType {
    Rules: List<MappingRule>

    constructor(properties: RulesConfigurationType) {
        Object.assign(this, properties)
    }
}

export class RoleMapping {
    Type: Value<string>
    AmbiguousRoleResolution?: Value<string>
    RulesConfiguration?: RulesConfigurationType

    constructor(properties: RoleMapping) {
        Object.assign(this, properties)
    }
}

export class MappingRule {
    MatchType: Value<string>
    Value: Value<string>
    Claim: Value<string>
    RoleARN: Value<string>

    constructor(properties: MappingRule) {
        Object.assign(this, properties)
    }
}

export interface IdentityPoolRoleAttachmentProperties {
    RoleMappings?: any
    IdentityPoolId: Value<string>
    Roles?: any
}

export default class IdentityPoolRoleAttachment extends ResourceBase {
    constructor(properties: IdentityPoolRoleAttachmentProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Cognito::IdentityPoolRoleAttachment', properties, dependsOn)
    }
}
