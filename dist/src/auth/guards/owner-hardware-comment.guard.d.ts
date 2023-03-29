import { HardwarecommentsService } from './../../resources/hardwarecomments/hardwarecomments.service';
import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class HardwareCommentOwnerGuard implements CanActivate {
    private hardwareCommentService;
    constructor(hardwareCommentService: HardwarecommentsService);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
