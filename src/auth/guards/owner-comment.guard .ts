import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CommentsService } from 'src/resources/comments/comments.service';

@Injectable()
export class CommentOwnerGuard implements CanActivate {
  constructor(private commentsService: CommentsService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    return this.commentsService
      .findOne(Number(request.params.id))
      .then((comment) => {
        if (request.user.sub === comment.user_id) return true;

        return false;
      });
  }
}
