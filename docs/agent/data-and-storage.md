# Storage And Session Reference

## Session persistence

- No database is configured.
- Wizard upload sessions are stored in memory in `src/domains/wizard/routers/wizard-router.mod.server.ts`.
- Session data resets when the server restarts.

## Storage

- S3-compatible object storage.

### StorageProvider interface

- Defined in `src/shared/storage/storage.types.ts`.
- `put(key, body, options)` uploads files.
- `getSignedUrl(key, expiresInSeconds)` generates presigned URLs.

### S3-compatible implementation

- `src/shared/storage/s3-storage.mod.server.ts` uses the AWS SDK for uploads and signed URLs.

### Required environment variables

- `STORAGE_ENDPOINT` — S3-compatible endpoint used by the AWS SDK presigner client.
- `STORAGE_REGION` — Region passed to the presigner client.
- `STORAGE_BUCKET` — Bucket name used when generating signed read URLs.
- `STORAGE_ACCESS_KEY_ID` — Access key used by the presigner client.
- `STORAGE_SECRET_ACCESS_KEY` — Secret key used by the presigner client.
