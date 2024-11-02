// @generated by protobuf-ts 2.9.4 with parameter generate_dependencies,long_type_number,output_javascript
// @generated from protobuf file "bilibili/app/interface/teenagers.proto" (syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message ModeStatusReply
 */
export interface ModeStatusReply {
    /**
     * @generated from protobuf field: repeated Mode modes = 1;
     */
    modes: Mode[];
}
/**
 * @generated from protobuf message Mode
 */
export interface Mode {
    /**
     * @generated from protobuf field: string name = 2;
     */
    name: string;
    /**
     * @generated from protobuf field: F5 f5 = 5;
     */
    f5?: F5;
}
/**
 * @generated from protobuf message F5
 */
export interface F5 {
    /**
     * @generated from protobuf field: int32 f1 = 1;
     */
    f1: number;
}
declare class ModeStatusReply$Type extends MessageType<ModeStatusReply> {
    constructor();
    create(value?: PartialMessage<ModeStatusReply>): ModeStatusReply;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ModeStatusReply): ModeStatusReply;
    internalBinaryWrite(message: ModeStatusReply, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message ModeStatusReply
 */
export declare const ModeStatusReply: ModeStatusReply$Type;
declare class Mode$Type extends MessageType<Mode> {
    constructor();
    create(value?: PartialMessage<Mode>): Mode;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Mode): Mode;
    internalBinaryWrite(message: Mode, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message Mode
 */
export declare const Mode: Mode$Type;
declare class F5$Type extends MessageType<F5> {
    constructor();
    create(value?: PartialMessage<F5>): F5;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: F5): F5;
    internalBinaryWrite(message: F5, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message F5
 */
export declare const F5: F5$Type;
export {};