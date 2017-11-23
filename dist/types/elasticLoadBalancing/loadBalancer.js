"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class HealthCheck {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HealthCheck = HealthCheck;
class AccessLoggingPolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AccessLoggingPolicy = AccessLoggingPolicy;
class ConnectionSettings {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ConnectionSettings = ConnectionSettings;
class LBCookieStickinessPolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LBCookieStickinessPolicy = LBCookieStickinessPolicy;
class ConnectionDrainingPolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ConnectionDrainingPolicy = ConnectionDrainingPolicy;
class Listeners {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Listeners = Listeners;
class Policies {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Policies = Policies;
class AppCookieStickinessPolicy {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AppCookieStickinessPolicy = AppCookieStickinessPolicy;
class LoadBalancer extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ElasticLoadBalancing::LoadBalancer', properties, dependsOn);
    }
}
exports.default = LoadBalancer;
