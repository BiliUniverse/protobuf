// @generated by protobuf-ts 2.9.4 with parameter generate_dependencies,force_optimize_code_size,output_javascript
// @generated from protobuf file "bilibili/app/viewunite/v1/viewunite.proto" (package "bilibili.app.viewunite.v1", syntax proto3)
// tslint:disable
// @generated by protobuf-ts 2.9.4 with parameter generate_dependencies,force_optimize_code_size,output_javascript
// @generated from protobuf file "bilibili/app/viewunite/v1/viewunite.proto" (package "bilibili.app.viewunite.v1", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { MessageType } from "@protobuf-ts/runtime";
import { Any } from "../../../../google/protobuf/any";
import { Owner } from "../common";
/**
 * @generated from protobuf enum bilibili.app.viewunite.v1.TabType
 */
export var TabType;
(function (TabType) {
    /**
     *
     *
     * @generated from protobuf enum value: TAB_NONE = 0;
     */
    TabType[TabType["TAB_NONE"] = 0] = "TAB_NONE";
    /**
     * 详情 Tab
     *
     * @generated from protobuf enum value: TAB_INTRODUCTION = 1;
     */
    TabType[TabType["TAB_INTRODUCTION"] = 1] = "TAB_INTRODUCTION";
    /**
     * 评论区 Tab
     *
     * @generated from protobuf enum value: TAB_REPLY = 2;
     */
    TabType[TabType["TAB_REPLY"] = 2] = "TAB_REPLY";
    /**
     * OGV 活动信息 Tab
     *
     * @generated from protobuf enum value: TAB_OGV_ACTIVITY = 3;
     */
    TabType[TabType["TAB_OGV_ACTIVITY"] = 3] = "TAB_OGV_ACTIVITY";
})(TabType || (TabType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class Arc$Type extends MessageType {
    constructor() {
        super("bilibili.app.viewunite.v1.Arc", [
            { no: 1, name: "aid", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 2 /*LongType.NUMBER*/ },
            { no: 2, name: "cid", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 2 /*LongType.NUMBER*/ },
            { no: 3, name: "duration", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 2 /*LongType.NUMBER*/ },
            { no: 5, name: "bvid", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "copyright", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "right", kind: "message", T: () => Rights },
            { no: 8, name: "cover", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "type_id", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 2 /*LongType.NUMBER*/ },
            { no: 10, name: "title", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message bilibili.app.viewunite.v1.Arc
 */
export const Arc = new Arc$Type();
// @generated message type with reflection information, may provide speed optimized methods
class IntroductionTab$Type extends MessageType {
    constructor() {
        super("bilibili.app.viewunite.v1.IntroductionTab", [
            { no: 1, name: "title", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message bilibili.app.viewunite.v1.IntroductionTab
 */
export const IntroductionTab = new IntroductionTab$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ReplyTab$Type extends MessageType {
    constructor() {
        super("bilibili.app.viewunite.v1.ReplyTab", [
            { no: 2, name: "title", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "control", kind: "message", T: () => TabControl }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message bilibili.app.viewunite.v1.ReplyTab
 */
export const ReplyTab = new ReplyTab$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Rights$Type extends MessageType {
    constructor() {
        super("bilibili.app.viewunite.v1.Rights", [
            { no: 1, name: "only_vip_download", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "no_reprint", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "download", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message bilibili.app.viewunite.v1.Rights
 */
export const Rights = new Rights$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Tab$Type extends MessageType {
    constructor() {
        super("bilibili.app.viewunite.v1.Tab", [
            { no: 1, name: "tab_module", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => TabModule },
            { no: 2, name: "tab_bg", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message bilibili.app.viewunite.v1.Tab
 */
export const Tab = new Tab$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TabControl$Type extends MessageType {
    constructor() {
        super("bilibili.app.viewunite.v1.TabControl", [
            { no: 1, name: "limit", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "disable", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "disable_click_tip", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message bilibili.app.viewunite.v1.TabControl
 */
export const TabControl = new TabControl$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TabModule$Type extends MessageType {
    constructor() {
        super("bilibili.app.viewunite.v1.TabModule", [
            { no: 1, name: "tab_type", kind: "enum", T: () => ["bilibili.app.viewunite.v1.TabType", TabType] },
            { no: 2, name: "introduction", kind: "message", oneof: "tab", T: () => IntroductionTab },
            { no: 3, name: "reply", kind: "message", oneof: "tab", T: () => ReplyTab }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message bilibili.app.viewunite.v1.TabModule
 */
export const TabModule = new TabModule$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ViewReply$Type extends MessageType {
    constructor() {
        super("bilibili.app.viewunite.v1.ViewReply", [
            { no: 2, name: "arc", kind: "message", T: () => Arc },
            { no: 4, name: "owner", kind: "message", T: () => Owner },
            { no: 5, name: "tab", kind: "message", T: () => Tab },
            { no: 6, name: "supplement", kind: "message", T: () => Any },
            { no: 10, name: "report", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "scalar", T: 9 /*ScalarType.STRING*/ } }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message bilibili.app.viewunite.v1.ViewReply
 */
export const ViewReply = new ViewReply$Type();
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
export const View = new ServiceType("bilibili.app.viewunite.v1.View", [
    { name: "View", options: {}, I: ViewReq, O: ViewReply }
]);
