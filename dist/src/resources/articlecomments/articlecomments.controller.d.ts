import { ArticlecommentsService } from './articlecomments.service';
import { UpdateArticlecommentDto } from './dto/update-articlecomment.dto';
export declare class ArticlecommentsController {
    private readonly articlecommentsService;
    constructor(articlecommentsService: ArticlecommentsService);
    update(id: string, updateArticlecommentDto: UpdateArticlecommentDto): import(".prisma/client").Prisma.Prisma__ArticleCommentClient<import(".prisma/client").ArticleComment, never>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ArticleCommentClient<import(".prisma/client").ArticleComment, never>;
}
