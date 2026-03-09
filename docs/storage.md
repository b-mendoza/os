# Storage

S3-compatible object storage via Cloudflare R2.

## StorageProvider Interface

Defined at `src/shared/storage/storage.types.ts`:

- `put(key, body, options)` — Upload file
- `getSignedUrl(key, expiresInSeconds)` — Generate presigned URL

## R2 Implementation

`src/shared/storage/r2-storage.mod.ts` — Uses `R2Bucket` for uploads and `@aws-sdk/s3-request-presigner` for signed URLs.

## Environment Variables

- `STORAGE_ENDPOINT`, `STORAGE_REGION`, `STORAGE_BUCKET`
- `STORAGE_ACCESS_KEY_ID`, `STORAGE_SECRET_ACCESS_KEY`
