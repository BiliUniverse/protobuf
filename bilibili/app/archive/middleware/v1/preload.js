// @generated by protobuf-ts 2.9.1 with parameter generate_dependencies,optimize_code_size,output_javascript
// @generated from protobuf file "bilibili/app/archive/middleware/v1/preload.proto" (package "bilibili.app.archive.middleware.v1", syntax proto3)
// tslint:disable
// @generated by protobuf-ts 2.9.1 with parameter generate_dependencies,optimize_code_size,output_javascript
// @generated from protobuf file "bilibili/app/archive/middleware/v1/preload.proto" (package "bilibili.app.archive.middleware.v1", syntax proto3)
// tslint:disable
import { MessageType } from "@protobuf-ts/runtime";
// @generated message type with reflection information, may provide speed optimized methods
class PlayerArgs$Type extends MessageType {
    constructor() {
        super("bilibili.app.archive.middleware.v1.PlayerArgs", [
            { no: 1, name: "qn", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "fnver", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "fnval", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "force_host", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "voice_balance", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message bilibili.app.archive.middleware.v1.PlayerArgs
 */
export const PlayerArgs = new PlayerArgs$Type();