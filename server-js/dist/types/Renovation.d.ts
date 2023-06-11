import { comment, renovation } from '@prisma/client';
export interface IRenovationAdditionalData {
    comments: comment[];
    rating: number;
    characteristics: string[];
}
export type ICommentReq = {
    userName: string;
    message: string;
};
export type IRenovationResponse = renovation & IRenovationAdditionalData;
