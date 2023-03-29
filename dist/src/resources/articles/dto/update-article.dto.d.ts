import { CreateArticleDto } from './create-article.dto';
declare const UpdateArticleDto_base: import("@nestjs/common").Type<Partial<CreateArticleDto>>;
export declare class UpdateArticleDto extends UpdateArticleDto_base {
    name: string;
    subDescription: string;
    description: string;
    isPublished: boolean;
}
export {};
