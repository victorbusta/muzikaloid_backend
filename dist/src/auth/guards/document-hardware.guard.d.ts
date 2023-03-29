import { HardwaresService } from './../../resources/hardwares/hardwares.service';
import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class HardwareDocumentGuard implements CanActivate {
    private hardwaresService;
    constructor(hardwaresService: HardwaresService);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
