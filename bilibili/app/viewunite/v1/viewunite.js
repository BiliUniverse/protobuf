// @generated by protobuf-ts 2.9.1 with parameter generate_dependencies,optimize_code_size,output_javascript
// @generated from protobuf file "bilibili/app/viewunite/v1/viewunite.proto" (package "bilibili.app.viewunite.v1", syntax proto3)
// tslint:disable
// @generated by protobuf-ts 2.9.1 with parameter generate_dependencies,optimize_code_size,output_javascript
// @generated from protobuf file "bilibili/app/viewunite/v1/viewunite.proto" (package "bilibili.app.viewunite.v1", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { MessageType } from "@protobuf-ts/runtime";
import { PlayerArgs } from "../../archive/middleware/v1/preload";
// @generated message type with reflection information, may provide speed optimized methods
class ViewReq$Type extends MessageType {
    constructor() {
        super("bilibili.app.viewunite.v1.ViewReq", [
            { no: 1, name: "aid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 2 /*LongType.NUMBER*/ },
            { no: 2, name: "bvid", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "from", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "spmid", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "from_spmid", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "session_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "player_args", kind: "message", T: () => PlayerArgs },
            { no: 8, name: "track_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "extra_content", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "scalar", T: 9 /*ScalarType.STRING*/ } },
            { no: 10, name: "play_mode", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 12, name: "biz_extra", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 13, name: "ad_extra", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message bilibili.app.viewunite.v1.ViewReq
 */
export const ViewReq = new ViewReq$Type();
/**
 * @generated ServiceType for protobuf service bilibili.app.viewunite.v1.View
 */
export const View = new ServiceType("bilibili.app.viewunite.v1.View", []);
