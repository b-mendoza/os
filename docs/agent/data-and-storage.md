# Database And Storage Reference

## Database

- PostgreSQL via Drizzle ORM.
- Schema is defined in `src/shared/db/db.schema.ts`.

### Core tables

- `analysis_sessions` — Groups 3 documents for wizard session (`draft` -> `analyzing` -> `completed` or `failed`)
- `uploaded_documents` — File metadata, AI categorization, storage keys
- `document_analyses` — Azure Content Understanding API results per document

### Key enums

- `analysis_session_status`: `draft`, `analyzing`, `completed`, `failed`
- `document_category`: `invoice`, `purchase_order`, `receipt`
- `analysis_status`: `not_started`, `running`, `succeeded`, `failed`

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
