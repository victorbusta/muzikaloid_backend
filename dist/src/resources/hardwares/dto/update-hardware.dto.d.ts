import { CreateHardwareDto } from './create-hardware.dto';
declare const UpdateHardwareDto_base: import("@nestjs/common").Type<Partial<CreateHardwareDto>>;
export declare class UpdateHardwareDto extends UpdateHardwareDto_base {
    name: string;
    brand: string;
    subDescription: string;
    description: string;
    isDiy: boolean;
    creationDate: Date;
    discontinuationDate: Date;
    commercialLinks: string[];
}
export {};
