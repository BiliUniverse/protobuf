// @generated by protobuf-ts 2.9.4 with parameter generate_dependencies,long_type_number,output_javascript
// @generated from protobuf file "bilibili/dagw/component/avatar/v1/plugin.proto" (package "bilibili.dagw.component.avatar.v1.plugin", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { ColorConfig } from "../common/common";
/**
 * @generated from protobuf message bilibili.dagw.component.avatar.v1.plugin.CommentDoubleClickConfig
 */
export interface CommentDoubleClickConfig {
    /**
     * @generated from protobuf field: bilibili.dagw.component.avatar.v1.plugin.Interaction interaction = 1;
     */
    interaction?: Interaction;
    /**
     * @generated from protobuf field: double animation_scale = 2;
     */
    animationScale: number;
}
/**
 * @generated from protobuf message bilibili.dagw.component.avatar.v1.plugin.GyroConfig
 */
export interface GyroConfig {
    /**
     * @generated from protobuf field: bilibili.dagw.component.avatar.v1.plugin.NFTImageV2 gyroscope = 1;
     */
    gyroscope?: NFTImageV2;
}
/**
 * @generated from protobuf message bilibili.dagw.component.avatar.v1.plugin.GyroscopeContentV2
 */
export interface GyroscopeContentV2 {
    /**
     * @generated from protobuf field: string file_url = 1;
     */
    fileUrl: string;
    /**
     * @generated from protobuf field: float scale = 2;
     */
    scale: number;
    /**
     * @generated from protobuf field: repeated bilibili.dagw.component.avatar.v1.plugin.PhysicalOrientationV2 physical_orientation = 3;
     */
    physicalOrientation: PhysicalOrientationV2[];
}
/**
 * @generated from protobuf message bilibili.dagw.component.avatar.v1.plugin.GyroscopeEntityV2
 */
export interface GyroscopeEntityV2 {
    /**
     * @generated from protobuf field: string display_type = 1;
     */
    displayType: string;
    /**
     * @generated from protobuf field: repeated bilibili.dagw.component.avatar.v1.plugin.GyroscopeContentV2 contents = 2;
     */
    contents: GyroscopeContentV2[];
}
/**
 * @generated from protobuf message bilibili.dagw.component.avatar.v1.plugin.Interaction
 */
export interface Interaction {
    /**
     * @generated from protobuf field: string nft_id = 1;
     */
    nftId: string;
    /**
     * @generated from protobuf field: bool enabled = 2;
     */
    enabled: boolean;
    /**
     * @generated from protobuf field: string itype = 3;
     */
    itype: string;
    /**
     * @generated from protobuf field: string metadata_url = 4;
     */
    metadataUrl: string;
}
/**
 * @generated from protobuf message bilibili.dagw.component.avatar.v1.plugin.LiveAnimeConfig
 */
export interface LiveAnimeConfig {
    /**
     * @generated from protobuf field: bool is_live = 1;
     */
    isLive: boolean;
}
/**
 * @generated from protobuf message bilibili.dagw.component.avatar.v1.plugin.LiveAnimeItem
 */
export interface LiveAnimeItem {
    /**
     * @generated from protobuf field: bilibili.dagw.component.avatar.common.ColorConfig color = 1;
     */
    color?: ColorConfig;
    /**
     * @generated from protobuf field: double start_ratio = 2;
     */
    startRatio: number;
    /**
     * @generated from protobuf field: double end_ratio = 3;
     */
    endRatio: number;
    /**
     * @generated from protobuf field: double start_stroke = 4;
     */
    startStroke: number;
    /**
     * @generated from protobuf field: double start_opacity = 5;
     */
    startOpacity: number;
    /**
     * @generated from protobuf field: int64 phase = 6;
     */
    phase: number;
}
/**
 * @generated from protobuf message bilibili.dagw.component.avatar.v1.plugin.NFTImageV2
 */
export interface NFTImageV2 {
    /**
     * @generated from protobuf field: repeated bilibili.dagw.component.avatar.v1.plugin.GyroscopeEntityV2 gyroscope = 1;
     */
    gyroscope: GyroscopeEntityV2[];
}
/**
 * @generated from protobuf message bilibili.dagw.component.avatar.v1.plugin.PhysicalOrientationAnimation
 */
export interface PhysicalOrientationAnimation {
    /**
     * @generated from protobuf field: string type = 1;
     */
    type: string;
    /**
     * @generated from protobuf field: string bezier = 3;
     */
    bezier: string;
}
/**
 * @generated from protobuf message bilibili.dagw.component.avatar.v1.plugin.PhysicalOrientationV2
 */
export interface PhysicalOrientationV2 {
    /**
     * @generated from protobuf field: string type = 1;
     */
    type: string;
    /**
     * @generated from protobuf field: repeated bilibili.dagw.component.avatar.v1.plugin.PhysicalOrientationAnimation animations = 3;
     */
    animations: PhysicalOrientationAnimation[];
}
declare class CommentDoubleClickConfig$Type extends MessageType<CommentDoubleClickConfig> {
    constructor();
    create(value?: PartialMessage<CommentDoubleClickConfig>): CommentDoubleClickConfig;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CommentDoubleClickConfig): CommentDoubleClickConfig;
    internalBinaryWrite(message: CommentDoubleClickConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.dagw.component.avatar.v1.plugin.CommentDoubleClickConfig
 */
export declare const CommentDoubleClickConfig: CommentDoubleClickConfig$Type;
declare class GyroConfig$Type extends MessageType<GyroConfig> {
    constructor();
    create(value?: PartialMessage<GyroConfig>): GyroConfig;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GyroConfig): GyroConfig;
    internalBinaryWrite(message: GyroConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.dagw.component.avatar.v1.plugin.GyroConfig
 */
export declare const GyroConfig: GyroConfig$Type;
declare class GyroscopeContentV2$Type extends MessageType<GyroscopeContentV2> {
    constructor();
    create(value?: PartialMessage<GyroscopeContentV2>): GyroscopeContentV2;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GyroscopeContentV2): GyroscopeContentV2;
    internalBinaryWrite(message: GyroscopeContentV2, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.dagw.component.avatar.v1.plugin.GyroscopeContentV2
 */
export declare const GyroscopeContentV2: GyroscopeContentV2$Type;
declare class GyroscopeEntityV2$Type extends MessageType<GyroscopeEntityV2> {
    constructor();
    create(value?: PartialMessage<GyroscopeEntityV2>): GyroscopeEntityV2;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GyroscopeEntityV2): GyroscopeEntityV2;
    internalBinaryWrite(message: GyroscopeEntityV2, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.dagw.component.avatar.v1.plugin.GyroscopeEntityV2
 */
export declare const GyroscopeEntityV2: GyroscopeEntityV2$Type;
declare class Interaction$Type extends MessageType<Interaction> {
    constructor();
    create(value?: PartialMessage<Interaction>): Interaction;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Interaction): Interaction;
    internalBinaryWrite(message: Interaction, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.dagw.component.avatar.v1.plugin.Interaction
 */
export declare const Interaction: Interaction$Type;
declare class LiveAnimeConfig$Type extends MessageType<LiveAnimeConfig> {
    constructor();
    create(value?: PartialMessage<LiveAnimeConfig>): LiveAnimeConfig;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LiveAnimeConfig): LiveAnimeConfig;
    internalBinaryWrite(message: LiveAnimeConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.dagw.component.avatar.v1.plugin.LiveAnimeConfig
 */
export declare const LiveAnimeConfig: LiveAnimeConfig$Type;
declare class LiveAnimeItem$Type extends MessageType<LiveAnimeItem> {
    constructor();
    create(value?: PartialMessage<LiveAnimeItem>): LiveAnimeItem;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LiveAnimeItem): LiveAnimeItem;
    internalBinaryWrite(message: LiveAnimeItem, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.dagw.component.avatar.v1.plugin.LiveAnimeItem
 */
export declare const LiveAnimeItem: LiveAnimeItem$Type;
declare class NFTImageV2$Type extends MessageType<NFTImageV2> {
    constructor();
    create(value?: PartialMessage<NFTImageV2>): NFTImageV2;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: NFTImageV2): NFTImageV2;
    internalBinaryWrite(message: NFTImageV2, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.dagw.component.avatar.v1.plugin.NFTImageV2
 */
export declare const NFTImageV2: NFTImageV2$Type;
declare class PhysicalOrientationAnimation$Type extends MessageType<PhysicalOrientationAnimation> {
    constructor();
    create(value?: PartialMessage<PhysicalOrientationAnimation>): PhysicalOrientationAnimation;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PhysicalOrientationAnimation): PhysicalOrientationAnimation;
    internalBinaryWrite(message: PhysicalOrientationAnimation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.dagw.component.avatar.v1.plugin.PhysicalOrientationAnimation
 */
export declare const PhysicalOrientationAnimation: PhysicalOrientationAnimation$Type;
declare class PhysicalOrientationV2$Type extends MessageType<PhysicalOrientationV2> {
    constructor();
    create(value?: PartialMessage<PhysicalOrientationV2>): PhysicalOrientationV2;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PhysicalOrientationV2): PhysicalOrientationV2;
    internalBinaryWrite(message: PhysicalOrientationV2, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.dagw.component.avatar.v1.plugin.PhysicalOrientationV2
 */
export declare const PhysicalOrientationV2: PhysicalOrientationV2$Type;
export {};
