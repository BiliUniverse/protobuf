// @generated by protobuf-ts 2.9.0 with parameter output_javascript
// @generated from protobuf file "bilibili/app/view/v1/view.proto" (syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Any } from "../../../../google/protobuf/any";
// @generated message type with reflection information, may provide speed optimized methods
class ViewReply$Type extends MessageType {
    constructor() {
        super("ViewReply", [
            { no: 6, name: "t_icon", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "message", T: () => TIcon } },
            { no: 10, name: "relates", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Relate },
            { no: 30, name: "cms", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CM },
            { no: 31, name: "cm_config", kind: "message", T: () => CMConfig }
        ]);
    }
    create(value) {
        const message = { tIcon: {}, relates: [], cms: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* map<string, TIcon> t_icon */ 6:
                    this.binaryReadMap6(message.tIcon, reader, options);
                    break;
                case /* repeated Relate relates */ 10:
                    message.relates.push(Relate.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated CM cms */ 30:
                    message.cms.push(CM.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* CMConfig cm_config */ 31:
                    message.cmConfig = CMConfig.internalBinaryRead(reader, reader.uint32(), options, message.cmConfig);
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
    binaryReadMap6(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = TIcon.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field ViewReply.t_icon");
            }
        }
        map[key ?? ""] = val ?? TIcon.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* map<string, TIcon> t_icon = 6; */
        for (let k of Object.keys(message.tIcon)) {
            writer.tag(6, WireType.LengthDelimited).fork().tag(1, WireType.LengthDelimited).string(k);
            writer.tag(2, WireType.LengthDelimited).fork();
            TIcon.internalBinaryWrite(message.tIcon[k], writer, options);
            writer.join().join();
        }
        /* repeated Relate relates = 10; */
        for (let i = 0; i < message.relates.length; i++)
            Relate.internalBinaryWrite(message.relates[i], writer.tag(10, WireType.LengthDelimited).fork(), options).join();
        /* repeated CM cms = 30; */
        for (let i = 0; i < message.cms.length; i++)
            CM.internalBinaryWrite(message.cms[i], writer.tag(30, WireType.LengthDelimited).fork(), options).join();
        /* CMConfig cm_config = 31; */
        if (message.cmConfig)
            CMConfig.internalBinaryWrite(message.cmConfig, writer.tag(31, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ViewReply
 */
export const ViewReply = new ViewReply$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CM$Type extends MessageType {
    constructor() {
        super("CM", [
            { no: 1, name: "source_content", kind: "message", T: () => Any }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.protobuf.Any source_content */ 1:
                    message.sourceContent = Any.internalBinaryRead(reader, reader.uint32(), options, message.sourceContent);
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
        /* google.protobuf.Any source_content = 1; */
        if (message.sourceContent)
            Any.internalBinaryWrite(message.sourceContent, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CM
 */
export const CM = new CM$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CMConfig$Type extends MessageType {
    constructor() {
        super("CMConfig", [
            { no: 1, name: "ads_control", kind: "message", T: () => Any }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.protobuf.Any ads_control */ 1:
                    message.adsControl = Any.internalBinaryRead(reader, reader.uint32(), options, message.adsControl);
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
        /* google.protobuf.Any ads_control = 1; */
        if (message.adsControl)
            Any.internalBinaryWrite(message.adsControl, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CMConfig
 */
export const CMConfig = new CMConfig$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TIcon$Type extends MessageType {
    constructor() {
        super("TIcon", [
            { no: 1, name: "icon", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { icon: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string icon */ 1:
                    message.icon = reader.string();
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
        /* string icon = 1; */
        if (message.icon !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.icon);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message TIcon
 */
export const TIcon = new TIcon$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Relate$Type extends MessageType {
    constructor() {
        super("Relate", [
            { no: 28, name: "cm", kind: "message", T: () => CM }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* CM cm */ 28:
                    message.cm = CM.internalBinaryRead(reader, reader.uint32(), options, message.cm);
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
        /* CM cm = 28; */
        if (message.cm)
            CM.internalBinaryWrite(message.cm, writer.tag(28, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message Relate
 */
export const Relate = new Relate$Type();
