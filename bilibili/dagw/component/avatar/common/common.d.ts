// @generated by protobuf-ts 2.9.4 with parameter generate_dependencies,long_type_number,output_javascript
// @generated from protobuf file "bilibili/dagw/component/avatar/common/common.proto" (package "bilibili.dagw.component.avatar.common", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message bilibili.dagw.component.avatar.common.BasicRenderSpec
 */
export interface BasicRenderSpec {
    /**
     * @generated from protobuf field: double opacity = 1;
     */
    opacity: number;
}
/**
 * @generated from protobuf message bilibili.dagw.component.avatar.common.ColorConfig
 */
export interface ColorConfig {
    /**
     * @generated from protobuf field: bool is_dark_mode_aware = 1;
     */
    isDarkModeAware: boolean;
    /**
     * @generated from protobuf field: bilibili.dagw.component.avatar.common.ColorSpec day = 2;
     */
    day?: ColorSpec;
    /**
     * @generated from protobuf field: bilibili.dagw.component.avatar.common.ColorSpec night = 3;
     */
    night?: ColorSpec;
}
/**
 * @generated from protobuf message bilibili.dagw.component.avatar.common.ColorSpec
 */
export interface ColorSpec {
    /**
     * @generated from protobuf field: string argb = 1;
     */
    argb: string;
}
/**
 * @generated from protobuf message bilibili.dagw.component.avatar.common.LayerGeneralSpec
 */
export interface LayerGeneralSpec {
    /**
     * @generated from protobuf field: bilibili.dagw.component.avatar.common.PositionSpec pos_spec = 1;
     */
    posSpec?: PositionSpec;
    /**
     * @generated from protobuf field: bilibili.dagw.component.avatar.common.SizeSpec size_spec = 2;
     */
    sizeSpec?: SizeSpec;
    /**
     * @generated from protobuf field: bilibili.dagw.component.avatar.common.BasicRenderSpec render_spec = 3;
     */
    renderSpec?: BasicRenderSpec;
}
/**
 * @generated from protobuf message bilibili.dagw.component.avatar.common.MaskProperty
 */
export interface MaskProperty {
    /**
     * @generated from protobuf field: bilibili.dagw.component.avatar.common.LayerGeneralSpec general_spec = 1;
     */
    generalSpec?: LayerGeneralSpec;
    /**
     * @generated from protobuf field: bilibili.dagw.component.avatar.common.ResourceSource mask_src = 2;
     */
    maskSrc?: ResourceSource;
}
/**
 * @generated from protobuf message bilibili.dagw.component.avatar.common.NativeDrawRes
 */
export interface NativeDrawRes {
    /**
     * @generated from protobuf field: int32 draw_type = 1;
     */
    drawType: number;
    /**
     * @generated from protobuf field: int32 fill_mode = 2;
     */
    fillMode: number;
    /**
     * @generated from protobuf field: bilibili.dagw.component.avatar.common.ColorConfig color_config = 3;
     */
    colorConfig?: ColorConfig;
    /**
     * @generated from protobuf field: double edge_weight = 4;
     */
    edgeWeight: number;
}
/**
 * @generated from protobuf message bilibili.dagw.component.avatar.common.PositionSpec
 */
export interface PositionSpec {
    /**
     * @generated from protobuf field: int32 coordinate_pos = 1;
     */
    coordinatePos: number;
    /**
     * @generated from protobuf field: double axis_x = 2;
     */
    axisX: number;
    /**
     * @generated from protobuf field: double axis_y = 3;
     */
    axisY: number;
}
/**
 * @generated from protobuf message bilibili.dagw.component.avatar.common.RemoteRes
 */
export interface RemoteRes {
    /**
     * @generated from protobuf field: string url = 1;
     */
    url: string;
    /**
     * @generated from protobuf field: string bfs_style = 2;
     */
    bfsStyle: string;
}
/**
 * @generated from protobuf message bilibili.dagw.component.avatar.common.ResourceSource
 */
export interface ResourceSource {
    /**
     * @generated from protobuf field: int32 src_type = 1;
     */
    srcType: number;
    /**
     * @generated from protobuf field: int32 placeholder = 2;
     */
    placeholder: number;
    /**
     * @generated from protobuf oneof: res
     */
    res: {
        oneofKind: "remote";
        /**
         * @generated from protobuf field: bilibili.dagw.component.avatar.common.RemoteRes remote = 3;
         */
        remote: RemoteRes;
    } | {
        oneofKind: "local";
        /**
         * @generated from protobuf field: bilibili.dagw.component.avatar.common.ResourceSource.LocalRes local = 4;
         */
        local: ResourceSource_LocalRes;
    } | {
        oneofKind: "draw";
        /**
         * @generated from protobuf field: bilibili.dagw.component.avatar.common.NativeDrawRes draw = 5;
         */
        draw: NativeDrawRes;
    } | {
        oneofKind: undefined;
    };
}
/**
 * @generated from protobuf enum bilibili.dagw.component.avatar.common.ResourceSource.LocalRes
 */
export declare enum ResourceSource_LocalRes {
    /**
     * @generated from protobuf enum value: LOCAL_RES_INVALID = 0;
     */
    INVALID = 0,
    /**
     * @generated from protobuf enum value: LOCAL_RES_ICON_VIP = 1;
     */
    ICON_VIP = 1,
    /**
     * @generated from protobuf enum value: LOCAL_RES_ICON_SMALL_VIP = 2;
     */
    ICON_SMALL_VIP = 2,
    /**
     * @generated from protobuf enum value: LOCAL_RES_ICON_PERSONAL_VERIFY = 3;
     */
    ICON_PERSONAL_VERIFY = 3,
    /**
     * @generated from protobuf enum value: LOCAL_RES_ICON_ENTERPRISE_VERIFY = 4;
     */
    ICON_ENTERPRISE_VERIFY = 4,
    /**
     * @generated from protobuf enum value: LOCAL_RES_ICON_NFT_MAINLAND = 5;
     */
    ICON_NFT_MAINLAND = 5,
    /**
     * @generated from protobuf enum value: LOCAL_RES_DEFAULT_AVATAR = 6;
     */
    DEFAULT_AVATAR = 6
}
/**
 * @generated from protobuf message bilibili.dagw.component.avatar.common.SizeSpec
 */
export interface SizeSpec {
    /**
     * @generated from protobuf field: double width = 1;
     */
    width: number;
    /**
     * @generated from protobuf field: double height = 2;
     */
    height: number;
}
declare class BasicRenderSpec$Type extends MessageType<BasicRenderSpec> {
    constructor();
    create(value?: PartialMessage<BasicRenderSpec>): BasicRenderSpec;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BasicRenderSpec): BasicRenderSpec;
    internalBinaryWrite(message: BasicRenderSpec, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.dagw.component.avatar.common.BasicRenderSpec
 */
export declare const BasicRenderSpec: BasicRenderSpec$Type;
declare class ColorConfig$Type extends MessageType<ColorConfig> {
    constructor();
    create(value?: PartialMessage<ColorConfig>): ColorConfig;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ColorConfig): ColorConfig;
    internalBinaryWrite(message: ColorConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.dagw.component.avatar.common.ColorConfig
 */
export declare const ColorConfig: ColorConfig$Type;
declare class ColorSpec$Type extends MessageType<ColorSpec> {
    constructor();
    create(value?: PartialMessage<ColorSpec>): ColorSpec;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ColorSpec): ColorSpec;
    internalBinaryWrite(message: ColorSpec, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.dagw.component.avatar.common.ColorSpec
 */
export declare const ColorSpec: ColorSpec$Type;
declare class LayerGeneralSpec$Type extends MessageType<LayerGeneralSpec> {
    constructor();
    create(value?: PartialMessage<LayerGeneralSpec>): LayerGeneralSpec;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LayerGeneralSpec): LayerGeneralSpec;
    internalBinaryWrite(message: LayerGeneralSpec, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.dagw.component.avatar.common.LayerGeneralSpec
 */
export declare const LayerGeneralSpec: LayerGeneralSpec$Type;
declare class MaskProperty$Type extends MessageType<MaskProperty> {
    constructor();
    create(value?: PartialMessage<MaskProperty>): MaskProperty;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MaskProperty): MaskProperty;
    internalBinaryWrite(message: MaskProperty, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.dagw.component.avatar.common.MaskProperty
 */
export declare const MaskProperty: MaskProperty$Type;
declare class NativeDrawRes$Type extends MessageType<NativeDrawRes> {
    constructor();
    create(value?: PartialMessage<NativeDrawRes>): NativeDrawRes;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: NativeDrawRes): NativeDrawRes;
    internalBinaryWrite(message: NativeDrawRes, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.dagw.component.avatar.common.NativeDrawRes
 */
export declare const NativeDrawRes: NativeDrawRes$Type;
declare class PositionSpec$Type extends MessageType<PositionSpec> {
    constructor();
    create(value?: PartialMessage<PositionSpec>): PositionSpec;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PositionSpec): PositionSpec;
    internalBinaryWrite(message: PositionSpec, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.dagw.component.avatar.common.PositionSpec
 */
export declare const PositionSpec: PositionSpec$Type;
declare class RemoteRes$Type extends MessageType<RemoteRes> {
    constructor();
    create(value?: PartialMessage<RemoteRes>): RemoteRes;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RemoteRes): RemoteRes;
    internalBinaryWrite(message: RemoteRes, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.dagw.component.avatar.common.RemoteRes
 */
export declare const RemoteRes: RemoteRes$Type;
declare class ResourceSource$Type extends MessageType<ResourceSource> {
    constructor();
    create(value?: PartialMessage<ResourceSource>): ResourceSource;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ResourceSource): ResourceSource;
    internalBinaryWrite(message: ResourceSource, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.dagw.component.avatar.common.ResourceSource
 */
export declare const ResourceSource: ResourceSource$Type;
declare class SizeSpec$Type extends MessageType<SizeSpec> {
    constructor();
    create(value?: PartialMessage<SizeSpec>): SizeSpec;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SizeSpec): SizeSpec;
    internalBinaryWrite(message: SizeSpec, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.dagw.component.avatar.common.SizeSpec
 */
export declare const SizeSpec: SizeSpec$Type;
export {};
