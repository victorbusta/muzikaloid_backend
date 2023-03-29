import { CreateArticlecommentDto } from './create-articlecomment.dto';
declare const UpdateArticlecommentDto_base: import("@nestjs/common").Type<Partial<CreateArticlecommentDto>>;
export declare class UpdateArticlecommentDto extends UpdateArticlecommentDto_base {
    content: string;
    modifiedAt: Date;
}
export {};
