"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class ContainerDefinition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ContainerDefinition = ContainerDefinition;
class LogConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LogConfiguration = LogConfiguration;
class Device {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Device = Device;
class KeyValuePair {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KeyValuePair = KeyValuePair;
class MountPoint {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MountPoint = MountPoint;
class VolumeFrom {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.VolumeFrom = VolumeFrom;
class HostEntry {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HostEntry = HostEntry;
class KernelCapabilities {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KernelCapabilities = KernelCapabilities;
class TaskDefinitionPlacementConstraint {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TaskDefinitionPlacementConstraint = TaskDefinitionPlacementConstraint;
class Volume {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Volume = Volume;
class PortMapping {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PortMapping = PortMapping;
class Ulimit {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Ulimit = Ulimit;
class LinuxParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LinuxParameters = LinuxParameters;
class HostVolumeProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.HostVolumeProperties = HostVolumeProperties;
class TaskDefinition extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::ECS::TaskDefinition', properties, dependsOn);
    }
}
exports.default = TaskDefinition;
