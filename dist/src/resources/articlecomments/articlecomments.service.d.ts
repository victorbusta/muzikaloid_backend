import { UpdateArticlecommentDto } from './dto/update-articlecomment.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ArticlecommentsService {
    private prisma;
    constructor(prisma: PrismaService);
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ArticleCommentClient<import(".prisma/client").ArticleComment, never>;
    update(id: number, updateArticlecommentDto: UpdateArticlecommentDto): import(".prisma/client").Prisma.Prisma__ArticleCommentClient<import(".prisma/client").ArticleComment, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ArticleCommentClient<import(".prisma/client").ArticleComment, never>;
}
