# Storage

S3-compatible object storage.

## StorageProvider Interface

Defined at `src/shared/storage/storage.types.ts`:

- `put(key, body, options)` — Upload file
- `getSignedUrl(key, expiresInSeconds)` — Generate presigned URL

## S3-Compatible Implementation

`src/shared/storage/s3-storage.mod.server.ts` — Uses the AWS SDK for uploads and signed URLs.

## Environment Variables

- `STORAGE_ENDPOINT`, `STORAGE_REGION`, `STORAGE_BUCKET`
- `STORAGE_ACCESS_KEY_ID`, `STORAGE_SECRET_ACCESS_KEY`
