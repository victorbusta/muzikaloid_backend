import { CreateHardwarecommentDto } from './create-hardwarecomment.dto';
declare const UpdateHardwarecommentDto_base: import("@nestjs/common").Type<Partial<CreateHardwarecommentDto>>;
export declare class UpdateHardwarecommentDto extends UpdateHardwarecommentDto_base {
    content: string;
    modifiedAt: Date;
}
export {};
