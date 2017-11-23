import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ElasticsearchDestinationConfiguration {
    BufferingHints: ElasticsearchBufferingHints;
    CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    DomainARN: Value<string>;
    IndexName: Value<string>;
    IndexRotationPeriod: Value<string>;
    ProcessingConfiguration?: ProcessingConfiguration;
    RetryOptions: ElasticsearchRetryOptions;
    RoleARN: Value<string>;
    S3BackupMode: Value<string>;
    S3Configuration: S3DestinationConfiguration;
    TypeName: Value<string>;
    constructor(properties: ElasticsearchDestinationConfiguration);
}
export declare class ElasticsearchBufferingHints {
    IntervalInSeconds: Value<number>;
    SizeInMBs: Value<number>;
    constructor(properties: ElasticsearchBufferingHints);
}
export declare class EncryptionConfiguration {
    KMSEncryptionConfig?: KMSEncryptionConfig;
    NoEncryptionConfig?: Value<string>;
    constructor(properties: EncryptionConfiguration);
}
export declare class CloudWatchLoggingOptions {
    Enabled?: Value<boolean>;
    LogGroupName?: Value<string>;
    LogStreamName?: Value<string>;
    constructor(properties: CloudWatchLoggingOptions);
}
export declare class ProcessingConfiguration {
    Enabled: Value<boolean>;
    Processors: List<Processor>;
    constructor(properties: ProcessingConfiguration);
}
export declare class BufferingHints {
    IntervalInSeconds: Value<number>;
    SizeInMBs: Value<number>;
    constructor(properties: BufferingHints);
}
export declare class KinesisStreamSourceConfiguration {
    KinesisStreamARN: Value<string>;
    RoleARN: Value<string>;
    constructor(properties: KinesisStreamSourceConfiguration);
}
export declare class ProcessorParameter {
    ParameterName: Value<string>;
    ParameterValue: Value<string>;
    constructor(properties: ProcessorParameter);
}
export declare class Processor {
    Parameters: List<ProcessorParameter>;
    Type: Value<string>;
    constructor(properties: Processor);
}
export declare class CopyCommand {
    CopyOptions?: Value<string>;
    DataTableColumns?: Value<string>;
    DataTableName: Value<string>;
    constructor(properties: CopyCommand);
}
export declare class S3DestinationConfiguration {
    BucketARN: Value<string>;
    BufferingHints: BufferingHints;
    CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    CompressionFormat: Value<string>;
    EncryptionConfiguration?: EncryptionConfiguration;
    Prefix?: Value<string>;
    RoleARN: Value<string>;
    constructor(properties: S3DestinationConfiguration);
}
export declare class ElasticsearchRetryOptions {
    DurationInSeconds: Value<number>;
    constructor(properties: ElasticsearchRetryOptions);
}
export declare class KMSEncryptionConfig {
    AWSKMSKeyARN: Value<string>;
    constructor(properties: KMSEncryptionConfig);
}
export declare class ExtendedS3DestinationConfiguration {
    BucketARN: Value<string>;
    BufferingHints: BufferingHints;
    CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    CompressionFormat: Value<string>;
    EncryptionConfiguration?: EncryptionConfiguration;
    Prefix: Value<string>;
    ProcessingConfiguration?: ProcessingConfiguration;
    RoleARN: Value<string>;
    S3BackupConfiguration?: S3DestinationConfiguration;
    S3BackupMode?: Value<string>;
    constructor(properties: ExtendedS3DestinationConfiguration);
}
export declare class RedshiftDestinationConfiguration {
    CloudWatchLoggingOptions?: CloudWatchLoggingOptions;
    ClusterJDBCURL: Value<string>;
    CopyCommand: CopyCommand;
    Password: Value<string>;
    ProcessingConfiguration?: ProcessingConfiguration;
    RoleARN: Value<string>;
    S3Configuration: S3DestinationConfiguration;
    Username: Value<string>;
    constructor(properties: RedshiftDestinationConfiguration);
}
export interface DeliveryStreamProperties {
    DeliveryStreamName?: Value<string>;
    DeliveryStreamType?: Value<string>;
    ElasticsearchDestinationConfiguration?: ElasticsearchDestinationConfiguration;
    ExtendedS3DestinationConfiguration?: ExtendedS3DestinationConfiguration;
    KinesisStreamSourceConfiguration?: KinesisStreamSourceConfiguration;
    RedshiftDestinationConfiguration?: RedshiftDestinationConfiguration;
    S3DestinationConfiguration?: S3DestinationConfiguration;
}
export default class DeliveryStream extends ResourceBase {
    constructor(properties: DeliveryStreamProperties, dependsOn?: Value<string> | Value<string>[]);
}
