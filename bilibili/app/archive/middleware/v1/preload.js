// @generated by protobuf-ts 2.9.6 with parameter generate_dependencies,long_type_string,output_javascript
// @generated from protobuf file "bilibili/app/archive/middleware/v1/preload.proto" (package "bilibili.app.archive.middleware.v1", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
// @generated message type with reflection information, may provide speed optimized methods
class PlayerArgs$Type extends MessageType {
    constructor() {
        super("bilibili.app.archive.middleware.v1.PlayerArgs", [
            { no: 1, name: "qn", kind: "scalar", T: 3 /*ScalarType.INT64*/ },
            { no: 2, name: "fnver", kind: "scalar", T: 3 /*ScalarType.INT64*/ },
            { no: 3, name: "fnval", kind: "scalar", T: 3 /*ScalarType.INT64*/ },
            { no: 4, name: "force_host", kind: "scalar", T: 3 /*ScalarType.INT64*/ },
            { no: 5, name: "voice_balance", kind: "scalar", T: 3 /*ScalarType.INT64*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.qn = "0";
        message.fnver = "0";
        message.fnval = "0";
        message.forceHost = "0";
        message.voiceBalance = "0";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int64 qn */ 1:
                    message.qn = reader.int64().toString();
                    break;
                case /* int64 fnver */ 2:
                    message.fnver = reader.int64().toString();
                    break;
                case /* int64 fnval */ 3:
                    message.fnval = reader.int64().toString();
                    break;
                case /* int64 force_host */ 4:
                    message.forceHost = reader.int64().toString();
                    break;
                case /* int64 voice_balance */ 5:
                    message.voiceBalance = reader.int64().toString();
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
        /* int64 qn = 1; */
        if (message.qn !== "0")
            writer.tag(1, WireType.Varint).int64(message.qn);
        /* int64 fnver = 2; */
        if (message.fnver !== "0")
            writer.tag(2, WireType.Varint).int64(message.fnver);
        /* int64 fnval = 3; */
        if (message.fnval !== "0")
            writer.tag(3, WireType.Varint).int64(message.fnval);
        /* int64 force_host = 4; */
        if (message.forceHost !== "0")
            writer.tag(4, WireType.Varint).int64(message.forceHost);
        /* int64 voice_balance = 5; */
        if (message.voiceBalance !== "0")
            writer.tag(5, WireType.Varint).int64(message.voiceBalance);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message bilibili.app.archive.middleware.v1.PlayerArgs
 */
export const PlayerArgs = new PlayerArgs$Type();
