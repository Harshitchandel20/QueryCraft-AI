export interface AggregationQuery {
  collection: string;
  pipeline: any[];
}

export interface QueryResponse {
  success: boolean;
  data?: any[];
  error?: string;
  metadata?: {
    executionTimeMs: number;
    count: number;
  };
}

export interface SalesEmailDraft {
  recipient: string;
  subject: string;
  body: string;
}
