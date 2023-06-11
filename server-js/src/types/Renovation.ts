import { comment, renovation } from '@prisma/client';

export interface IRenovationAdditionalData {
  comments: comment[];
  rating: number;
  characteristics: string[];
}
export type IRenovationResponse = renovation & IRenovationAdditionalData;
