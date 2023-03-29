import { HardwaredocumentsService } from 'src/resources/hardwaredocuments/hardwaredocuments.service';
import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class HardwareDocumentOwnerGuard implements CanActivate {
    private hardwareDocumentsService;
    constructor(hardwareDocumentsService: HardwaredocumentsService);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
