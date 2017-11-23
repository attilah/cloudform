import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ApiStage {
    ApiId?: Value<string>;
    Stage?: Value<string>;
    constructor(properties: ApiStage);
}
export declare class ThrottleSettings {
    BurstLimit?: Value<number>;
    RateLimit?: Value<number>;
    constructor(properties: ThrottleSettings);
}
export declare class QuotaSettings {
    Limit?: Value<number>;
    Offset?: Value<number>;
    Period?: Value<string>;
    constructor(properties: QuotaSettings);
}
export interface UsagePlanProperties {
    ApiStages?: List<ApiStage>;
    Description?: Value<string>;
    Quota?: QuotaSettings;
    Throttle?: ThrottleSettings;
    UsagePlanName?: Value<string>;
}
export default class UsagePlan extends ResourceBase {
    constructor(properties: UsagePlanProperties, dependsOn?: Value<string> | Value<string>[]);
}
