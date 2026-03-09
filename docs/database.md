# Database

PostgreSQL via Drizzle ORM. Schema defined in `src/shared/db/db.schema.ts`.

## Core Tables

- `analysis_sessions` — Groups 3 documents for wizard session (draft → analyzing → completed/failed)
- `uploaded_documents` — File metadata, AI categorization, storage keys
- `document_analyses` — Azure Content Understanding API results per document

## Key Enums

- `analysis_session_status`: draft, analyzing, completed, failed
- `document_category`: invoice, purchase_order, receipt
- `analysis_status`: not_started, running, succeeded, failed
