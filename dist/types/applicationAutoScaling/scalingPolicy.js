"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class StepScalingPolicyConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StepScalingPolicyConfiguration = StepScalingPolicyConfiguration;
class MetricDimension {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MetricDimension = MetricDimension;
class StepAdjustment {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StepAdjustment = StepAdjustment;
class PredefinedMetricSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PredefinedMetricSpecification = PredefinedMetricSpecification;
class CustomizedMetricSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.CustomizedMetricSpecification = CustomizedMetricSpecification;
class TargetTrackingScalingPolicyConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TargetTrackingScalingPolicyConfiguration = TargetTrackingScalingPolicyConfiguration;
class ScalingPolicy extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ApplicationAutoScaling::ScalingPolicy', properties, dependsOn);
    }
}
exports.default = ScalingPolicy;
