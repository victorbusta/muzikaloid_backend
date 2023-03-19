import { CommentsService } from '../../resources/comments/comments.service';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class CommentOwnerGuard implements CanActivate {
  constructor(private commentService: CommentsService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    return this.commentService.findOne(request.params.id).then((comment) => {
      if (request.user.seb === 1) return true;

      if (!comment || comment.deletedDate !== null)
        throw new NotFoundException('comment does not exist');

      if (comment.userId !== request.user.seb) return false;

      return true;
    });
  }
}
