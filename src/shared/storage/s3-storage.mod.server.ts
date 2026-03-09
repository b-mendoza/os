import {
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

import type { StorageProvider } from "#/shared/storage/storage.types";

interface S3StorageConfig {
  bucketName: string;
  credentials: {
    accessKeyId: string;
    secretAccessKey: string;
  };
  endpoint: string;
  region: string;
}

export const createS3StorageProvider = (
  config: S3StorageConfig,
): StorageProvider => {
  const s3Client = new S3Client({
    credentials: config.credentials,
    endpoint: config.endpoint,
    region: config.region,
  });

  const put: StorageProvider["put"] = async (key, body, options) => {
    await s3Client.send(
      new PutObjectCommand({
        Body: body,
        Bucket: config.bucketName,
        ContentType: options?.contentType,
        Key: key,
      }),
    );
  };

  const getSignedReadUrl: StorageProvider["getSignedUrl"] = async (
    key,
    expiresInSeconds,
  ) => {
    return getSignedUrl(
      s3Client,
      new GetObjectCommand({
        Bucket: config.bucketName,
        Key: key,
      }),
      {
        expiresIn: expiresInSeconds,
      },
    );
  };

  return {
    getSignedUrl: getSignedReadUrl,
    put,
  };
};
