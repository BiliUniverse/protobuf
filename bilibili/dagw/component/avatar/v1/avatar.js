// @generated by protobuf-ts 2.9.6 with parameter generate_dependencies,long_type_string,output_javascript
// @generated from protobuf file "bilibili/dagw/component/avatar/v1/avatar.proto" (package "bilibili.dagw.component.avatar.v1", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { ResourceSource } from "../common/common";
import { LiveAnimeConfig } from "./plugin";
import { CommentDoubleClickConfig } from "./plugin";
import { GyroConfig } from "./plugin";
import { MaskProperty } from "../common/common";
import { LayerGeneralSpec } from "../common/common";
import { SizeSpec } from "../common/common";
// @generated message type with reflection information, may provide speed optimized methods
class AvatarItem$Type extends MessageType {
    constructor() {
        super("bilibili.dagw.component.avatar.v1.AvatarItem", [
            { no: 1, name: "container_size", kind: "message", T: () => SizeSpec },
            { no: 2, name: "layers", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => LayerGroup },
            { no: 3, name: "fallback_layers", kind: "message", T: () => LayerGroup },
            { no: 4, name: "mid", kind: "scalar", T: 3 /*ScalarType.INT64*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.layers = [];
        message.mid = "0";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bilibili.dagw.component.avatar.common.SizeSpec container_size */ 1:
                    message.containerSize = SizeSpec.internalBinaryRead(reader, reader.uint32(), options, message.containerSize);
                    break;
                case /* repeated bilibili.dagw.component.avatar.v1.LayerGroup layers */ 2:
                    message.layers.push(LayerGroup.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bilibili.dagw.component.avatar.v1.LayerGroup fallback_layers */ 3:
                    message.fallbackLayers = LayerGroup.internalBinaryRead(reader, reader.uint32(), options, message.fallbackLayers);
                    break;
                case /* int64 mid */ 4:
                    message.mid = reader.int64().toString();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* bilibili.dagw.component.avatar.common.SizeSpec container_size = 1; */
        if (message.containerSize)
            SizeSpec.internalBinaryWrite(message.containerSize, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* repeated bilibili.dagw.component.avatar.v1.LayerGroup layers = 2; */
        for (let i = 0; i < message.layers.length; i++)
            LayerGroup.internalBinaryWrite(message.layers[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* bilibili.dagw.component.avatar.v1.LayerGroup fallback_layers = 3; */
        if (message.fallbackLayers)
            LayerGroup.internalBinaryWrite(message.fallbackLayers, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* int64 mid = 4; */
        if (message.mid !== "0")
            writer.tag(4, WireType.Varint).int64(message.mid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message bilibili.dagw.component.avatar.v1.AvatarItem
 */
export const AvatarItem = new AvatarItem$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BasicLayerResource$Type extends MessageType {
    constructor() {
        super("bilibili.dagw.component.avatar.v1.BasicLayerResource", [
            { no: 1, name: "res_type", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "res_image", kind: "message", oneof: "payload", T: () => ResImage },
            { no: 3, name: "res_animation", kind: "message", oneof: "payload", T: () => ResAnimation },
            { no: 4, name: "res_native_draw", kind: "message", oneof: "payload", T: () => ResNativeDraw }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.resType = 0;
        message.payload = { oneofKind: undefined };
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 res_type */ 1:
                    message.resType = reader.int32();
                    break;
                case /* bilibili.dagw.component.avatar.v1.ResImage res_image */ 2:
                    message.payload = {
                        oneofKind: "resImage",
                        resImage: ResImage.internalBinaryRead(reader, reader.uint32(), options, message.payload.resImage)
                    };
                    break;
                case /* bilibili.dagw.component.avatar.v1.ResAnimation res_animation */ 3:
                    message.payload = {
                        oneofKind: "resAnimation",
                        resAnimation: ResAnimation.internalBinaryRead(reader, reader.uint32(), options, message.payload.resAnimation)
                    };
                    break;
                case /* bilibili.dagw.component.avatar.v1.ResNativeDraw res_native_draw */ 4:
                    message.payload = {
                        oneofKind: "resNativeDraw",
                        resNativeDraw: ResNativeDraw.internalBinaryRead(reader, reader.uint32(), options, message.payload.resNativeDraw)
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* int32 res_type = 1; */
        if (message.resType !== 0)
            writer.tag(1, WireType.Varint).int32(message.resType);
        /* bilibili.dagw.component.avatar.v1.ResImage res_image = 2; */
        if (message.payload.oneofKind === "resImage")
            ResImage.internalBinaryWrite(message.payload.resImage, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* bilibili.dagw.component.avatar.v1.ResAnimation res_animation = 3; */
        if (message.payload.oneofKind === "resAnimation")
            ResAnimation.internalBinaryWrite(message.payload.resAnimation, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* bilibili.dagw.component.avatar.v1.ResNativeDraw res_native_draw = 4; */
        if (message.payload.oneofKind === "resNativeDraw")
            ResNativeDraw.internalBinaryWrite(message.payload.resNativeDraw, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message bilibili.dagw.component.avatar.v1.BasicLayerResource
 */
export const BasicLayerResource = new BasicLayerResource$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GeneralConfig$Type extends MessageType {
    constructor() {
        super("bilibili.dagw.component.avatar.v1.GeneralConfig", [
            { no: 1, name: "web_css_style", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "scalar", T: 9 /*ScalarType.STRING*/ } }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.webCssStyle = {};
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<string, string> web_css_style */ 1:
                    this.binaryReadMap1(message.webCssStyle, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap1(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = reader.string();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field bilibili.dagw.component.avatar.v1.GeneralConfig.web_css_style");
            }
        }
        map[key ?? ""] = val ?? "";
    }
    internalBinaryWrite(message, writer, options) {
        /* map<string, string> web_css_style = 1; */
        for (let k of globalThis.Object.keys(message.webCssStyle))
            writer.tag(1, WireType.LengthDelimited).fork().tag(1, WireType.LengthDelimited).string(k).tag(2, WireType.LengthDelimited).string(message.webCssStyle[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message bilibili.dagw.component.avatar.v1.GeneralConfig
 */
export const GeneralConfig = new GeneralConfig$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Layer$Type extends MessageType {
    constructor() {
        super("bilibili.dagw.component.avatar.v1.Layer", [
            { no: 1, name: "layer_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "visible", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "general_spec", kind: "message", T: () => LayerGeneralSpec },
            { no: 4, name: "layer_config", kind: "message", T: () => LayerConfig },
            { no: 5, name: "resource", kind: "message", T: () => BasicLayerResource }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.layerId = "";
        message.visible = false;
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string layer_id */ 1:
                    message.layerId = reader.string();
                    break;
                case /* bool visible */ 2:
                    message.visible = reader.bool();
                    break;
                case /* bilibili.dagw.component.avatar.common.LayerGeneralSpec general_spec */ 3:
                    message.generalSpec = LayerGeneralSpec.internalBinaryRead(reader, reader.uint32(), options, message.generalSpec);
                    break;
                case /* bilibili.dagw.component.avatar.v1.LayerConfig layer_config */ 4:
                    message.layerConfig = LayerConfig.internalBinaryRead(reader, reader.uint32(), options, message.layerConfig);
                    break;
                case /* bilibili.dagw.component.avatar.v1.BasicLayerResource resource */ 5:
                    message.resource = BasicLayerResource.internalBinaryRead(reader, reader.uint32(), options, message.resource);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string layer_id = 1; */
        if (message.layerId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.layerId);
        /* bool visible = 2; */
        if (message.visible !== false)
            writer.tag(2, WireType.Varint).bool(message.visible);
        /* bilibili.dagw.component.avatar.common.LayerGeneralSpec general_spec = 3; */
        if (message.generalSpec)
            LayerGeneralSpec.internalBinaryWrite(message.generalSpec, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* bilibili.dagw.component.avatar.v1.LayerConfig layer_config = 4; */
        if (message.layerConfig)
            LayerConfig.internalBinaryWrite(message.layerConfig, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* bilibili.dagw.component.avatar.v1.BasicLayerResource resource = 5; */
        if (message.resource)
            BasicLayerResource.internalBinaryWrite(message.resource, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message bilibili.dagw.component.avatar.v1.Layer
 */
export const Layer = new Layer$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LayerConfig$Type extends MessageType {
    constructor() {
        super("bilibili.dagw.component.avatar.v1.LayerConfig", [
            { no: 1, name: "tags", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "message", T: () => LayerTagConfig } },
            { no: 2, name: "is_critical", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "allow_over_paint", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "layer_mask", kind: "message", T: () => MaskProperty }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.tags = {};
        message.isCritical = false;
        message.allowOverPaint = false;
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<string, bilibili.dagw.component.avatar.v1.LayerTagConfig> tags */ 1:
                    this.binaryReadMap1(message.tags, reader, options);
                    break;
                case /* bool is_critical */ 2:
                    message.isCritical = reader.bool();
                    break;
                case /* bool allow_over_paint */ 3:
                    message.allowOverPaint = reader.bool();
                    break;
                case /* bilibili.dagw.component.avatar.common.MaskProperty layer_mask */ 4:
                    message.layerMask = MaskProperty.internalBinaryRead(reader, reader.uint32(), options, message.layerMask);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap1(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = LayerTagConfig.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field bilibili.dagw.component.avatar.v1.LayerConfig.tags");
            }
        }
        map[key ?? ""] = val ?? LayerTagConfig.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* map<string, bilibili.dagw.component.avatar.v1.LayerTagConfig> tags = 1; */
        for (let k of globalThis.Object.keys(message.tags)) {
            writer.tag(1, WireType.LengthDelimited).fork().tag(1, WireType.LengthDelimited).string(k);
            writer.tag(2, WireType.LengthDelimited).fork();
            LayerTagConfig.internalBinaryWrite(message.tags[k], writer, options);
            writer.join().join();
        }
        /* bool is_critical = 2; */
        if (message.isCritical !== false)
            writer.tag(2, WireType.Varint).bool(message.isCritical);
        /* bool allow_over_paint = 3; */
        if (message.allowOverPaint !== false)
            writer.tag(3, WireType.Varint).bool(message.allowOverPaint);
        /* bilibili.dagw.component.avatar.common.MaskProperty layer_mask = 4; */
        if (message.layerMask)
            MaskProperty.internalBinaryWrite(message.layerMask, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message bilibili.dagw.component.avatar.v1.LayerConfig
 */
export const LayerConfig = new LayerConfig$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LayerGroup$Type extends MessageType {
    constructor() {
        super("bilibili.dagw.component.avatar.v1.LayerGroup", [
            { no: 1, name: "group_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "layers", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Layer },
            { no: 3, name: "group_mask", kind: "message", T: () => MaskProperty },
            { no: 4, name: "is_critical_group", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.groupId = "";
        message.layers = [];
        message.isCriticalGroup = false;
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string group_id */ 1:
                    message.groupId = reader.string();
                    break;
                case /* repeated bilibili.dagw.component.avatar.v1.Layer layers */ 2:
                    message.layers.push(Layer.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bilibili.dagw.component.avatar.common.MaskProperty group_mask */ 3:
                    message.groupMask = MaskProperty.internalBinaryRead(reader, reader.uint32(), options, message.groupMask);
                    break;
                case /* bool is_critical_group */ 4:
                    message.isCriticalGroup = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string group_id = 1; */
        if (message.groupId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.groupId);
        /* repeated bilibili.dagw.component.avatar.v1.Layer layers = 2; */
        for (let i = 0; i < message.layers.length; i++)
            Layer.internalBinaryWrite(message.layers[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* bilibili.dagw.component.avatar.common.MaskProperty group_mask = 3; */
        if (message.groupMask)
            MaskProperty.internalBinaryWrite(message.groupMask, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* bool is_critical_group = 4; */
        if (message.isCriticalGroup !== false)
            writer.tag(4, WireType.Varint).bool(message.isCriticalGroup);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message bilibili.dagw.component.avatar.v1.LayerGroup
 */
export const LayerGroup = new LayerGroup$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LayerTagConfig$Type extends MessageType {
    constructor() {
        super("bilibili.dagw.component.avatar.v1.LayerTagConfig", [
            { no: 1, name: "config_type", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "general_config", kind: "message", oneof: "config", T: () => GeneralConfig },
            { no: 3, name: "gyro_config", kind: "message", oneof: "config", T: () => GyroConfig },
            { no: 4, name: "comment_doubleClick_config", kind: "message", oneof: "config", T: () => CommentDoubleClickConfig },
            { no: 5, name: "live_anime_config", kind: "message", oneof: "config", T: () => LiveAnimeConfig }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.configType = 0;
        message.config = { oneofKind: undefined };
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 config_type */ 1:
                    message.configType = reader.int32();
                    break;
                case /* bilibili.dagw.component.avatar.v1.GeneralConfig general_config */ 2:
                    message.config = {
                        oneofKind: "generalConfig",
                        generalConfig: GeneralConfig.internalBinaryRead(reader, reader.uint32(), options, message.config.generalConfig)
                    };
                    break;
                case /* bilibili.dagw.component.avatar.v1.plugin.GyroConfig gyro_config */ 3:
                    message.config = {
                        oneofKind: "gyroConfig",
                        gyroConfig: GyroConfig.internalBinaryRead(reader, reader.uint32(), options, message.config.gyroConfig)
                    };
                    break;
                case /* bilibili.dagw.component.avatar.v1.plugin.CommentDoubleClickConfig comment_doubleClick_config */ 4:
                    message.config = {
                        oneofKind: "commentDoubleClickConfig",
                        commentDoubleClickConfig: CommentDoubleClickConfig.internalBinaryRead(reader, reader.uint32(), options, message.config.commentDoubleClickConfig)
                    };
                    break;
                case /* bilibili.dagw.component.avatar.v1.plugin.LiveAnimeConfig live_anime_config */ 5:
                    message.config = {
                        oneofKind: "liveAnimeConfig",
                        liveAnimeConfig: LiveAnimeConfig.internalBinaryRead(reader, reader.uint32(), options, message.config.liveAnimeConfig)
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* int32 config_type = 1; */
        if (message.configType !== 0)
            writer.tag(1, WireType.Varint).int32(message.configType);
        /* bilibili.dagw.component.avatar.v1.GeneralConfig general_config = 2; */
        if (message.config.oneofKind === "generalConfig")
            GeneralConfig.internalBinaryWrite(message.config.generalConfig, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* bilibili.dagw.component.avatar.v1.plugin.GyroConfig gyro_config = 3; */
        if (message.config.oneofKind === "gyroConfig")
            GyroConfig.internalBinaryWrite(message.config.gyroConfig, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* bilibili.dagw.component.avatar.v1.plugin.CommentDoubleClickConfig comment_doubleClick_config = 4; */
        if (message.config.oneofKind === "commentDoubleClickConfig")
            CommentDoubleClickConfig.internalBinaryWrite(message.config.commentDoubleClickConfig, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* bilibili.dagw.component.avatar.v1.plugin.LiveAnimeConfig live_anime_config = 5; */
        if (message.config.oneofKind === "liveAnimeConfig")
            LiveAnimeConfig.internalBinaryWrite(message.config.liveAnimeConfig, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message bilibili.dagw.component.avatar.v1.LayerTagConfig
 */
export const LayerTagConfig = new LayerTagConfig$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ResAnimation$Type extends MessageType {
    constructor() {
        super("bilibili.dagw.component.avatar.v1.ResAnimation", [
            { no: 1, name: "webp_src", kind: "message", T: () => ResourceSource }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bilibili.dagw.component.avatar.common.ResourceSource webp_src */ 1:
                    message.webpSrc = ResourceSource.internalBinaryRead(reader, reader.uint32(), options, message.webpSrc);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* bilibili.dagw.component.avatar.common.ResourceSource webp_src = 1; */
        if (message.webpSrc)
            ResourceSource.internalBinaryWrite(message.webpSrc, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message bilibili.dagw.component.avatar.v1.ResAnimation
 */
export const ResAnimation = new ResAnimation$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ResImage$Type extends MessageType {
    constructor() {
        super("bilibili.dagw.component.avatar.v1.ResImage", [
            { no: 1, name: "image_src", kind: "message", T: () => ResourceSource }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bilibili.dagw.component.avatar.common.ResourceSource image_src */ 1:
                    message.imageSrc = ResourceSource.internalBinaryRead(reader, reader.uint32(), options, message.imageSrc);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* bilibili.dagw.component.avatar.common.ResourceSource image_src = 1; */
        if (message.imageSrc)
            ResourceSource.internalBinaryWrite(message.imageSrc, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message bilibili.dagw.component.avatar.v1.ResImage
 */
export const ResImage = new ResImage$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ResNativeDraw$Type extends MessageType {
    constructor() {
        super("bilibili.dagw.component.avatar.v1.ResNativeDraw", [
            { no: 1, name: "draw_src", kind: "message", T: () => ResourceSource }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bilibili.dagw.component.avatar.common.ResourceSource draw_src */ 1:
                    message.drawSrc = ResourceSource.internalBinaryRead(reader, reader.uint32(), options, message.drawSrc);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* bilibili.dagw.component.avatar.common.ResourceSource draw_src = 1; */
        if (message.drawSrc)
            ResourceSource.internalBinaryWrite(message.drawSrc, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message bilibili.dagw.component.avatar.v1.ResNativeDraw
 */
export const ResNativeDraw = new ResNativeDraw$Type();
