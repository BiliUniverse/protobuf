// @generated by protobuf-ts 2.9.6 with parameter generate_dependencies,long_type_string,output_javascript
// @generated from protobuf file "bilibili/app/view/v1/view.proto" (package "bilibili.app.view.v1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Any } from "../../../../google/protobuf/any";
/**
 * @generated from protobuf message bilibili.app.view.v1.CacheViewReply
 */
export interface CacheViewReply {
    /**
     *
     * bilibili.app.archive.v1.Arc arc = 1;
     *
     * repeated ViewPage pages = 2;
     *
     * OnwerExt owner_ext = 3;
     *
     * ReqUser req_user = 4;
     *
     * Season season = 5;
     *
     * ElecRank elec_rank = 6;
     *
     * History history = 7;
     *
     * Dislike dislike = 8;
     *
     * PlayerIcon player_icon = 9;
     *
     * string bvid = 10;
     *
     * string short_link = 11;
     *
     * string share_subtitle = 12;
     *
     *
     * @generated from protobuf field: bilibili.app.view.v1.TFPanelCustomized tf_panel_customized = 13;
     */
    tfPanelCustomized?: TFPanelCustomized;
}
/**
 * @generated from protobuf message bilibili.app.view.v1.CacheViewReq
 */
export interface CacheViewReq {
    /**
     * @generated from protobuf field: int64 aid = 1;
     */
    aid: string;
    /**
     * @generated from protobuf field: string bvid = 2;
     */
    bvid: string;
    /**
     * @generated from protobuf field: string from = 3;
     */
    from: string;
    /**
     * @generated from protobuf field: string trackid = 4;
     */
    trackid: string;
    /**
     * @generated from protobuf field: string ad_extra = 5;
     */
    adExtra: string;
    /**
     * @generated from protobuf field: string spmid = 6;
     */
    spmid: string;
    /**
     * @generated from protobuf field: string from_spmid = 7;
     */
    fromSpmid: string;
}
/**
 * 广告
 *
 * @generated from protobuf message bilibili.app.view.v1.CM
 */
export interface CM {
    /**
     * 广告数据(需解包)
     *
     * @generated from protobuf field: google.protobuf.Any source_content = 1;
     */
    sourceContent?: Any;
}
/**
 * 广告配置
 *
 * @generated from protobuf message bilibili.app.view.v1.CMConfig
 */
export interface CMConfig {
    /**
     * 广告配置数据(需要二次解包)
     *
     * @generated from protobuf field: google.protobuf.Any ads_control = 1;
     */
    adsControl?: Any;
}
/**
 * @generated from protobuf message bilibili.app.view.v1.CmIpad
 */
export interface CmIpad {
    /**
     *
     * CM cm = 1;
     *
     * bilibili.app.archive.v1.Author author = 2;
     *
     * bilibili.app.archive.v1.Stat stat = 3;
     *
     * int64 duration = 4;
     *
     *
     * @generated from protobuf field: int64 aid = 5;
     */
    aid: string;
}
/**
 * 相关推荐项
 *
 * @generated from protobuf message bilibili.app.view.v1.Relate
 */
export interface Relate {
    /**
     * 广告
     *
     * @generated from protobuf field: bilibili.app.view.v1.CM cm = 28;
     */
    cm?: CM;
}
/**
 * @generated from protobuf message bilibili.app.view.v1.TFInfoReply
 */
export interface TFInfoReply {
}
/**
 * 免流面板定制
 *
 * @generated from protobuf message bilibili.app.view.v1.TFPanelCustomized
 */
export interface TFPanelCustomized {
    /**
     * 右侧按钮素材
     * string right_btn_img = 1;
     * 右侧按钮文案
     *
     * @generated from protobuf field: string right_btn_text = 2;
     */
    rightBtnText: string;
}
/**
 * TAG图标信息
 *
 * @generated from protobuf message bilibili.app.view.v1.TIcon
 */
export interface TIcon {
    /**
     * TAG图标url
     *
     * @generated from protobuf field: string icon = 1;
     */
    icon: string;
}
/**
 * 视频页信息-响应
 *
 * @generated from protobuf message bilibili.app.view.v1.ViewReply
 */
export interface ViewReply {
    /**
     * TAG对应的图标
     *
     * @generated from protobuf field: map<string, bilibili.app.view.v1.TIcon> t_icon = 6;
     */
    tIcon: {
        [key: string]: TIcon;
    };
    /**
     * 视频相关推荐列表
     *
     * @generated from protobuf field: repeated bilibili.app.view.v1.Relate relates = 10;
     */
    relates: Relate[];
    /**
     * 广告
     *
     * @generated from protobuf field: repeated bilibili.app.view.v1.CM cms = 30;
     */
    cms: CM[];
    /**
     * 广告配置
     *
     * @generated from protobuf field: bilibili.app.view.v1.CMConfig cm_config = 31;
     */
    cmConfig?: CMConfig;
    /**
     * 免流面板定制
     *
     * @generated from protobuf field: bilibili.app.view.v1.TFPanelCustomized tf_panel_customized = 34;
     */
    tfPanelCustomized?: TFPanelCustomized;
    /**
     * @generated from protobuf field: bilibili.app.view.v1.CmIpad cm_ipad = 41;
     */
    cmIpad?: CmIpad;
}
/**
 * 视频页详情页-请求
 *
 * @generated from protobuf message bilibili.app.view.v1.ViewReq
 */
export interface ViewReq {
    /**
     * 稿件avid(av/bv任选其一)
     *
     * @generated from protobuf field: int64 aid = 1;
     */
    aid: string;
    /**
     * 稿件bvid(av/bv任选其一)
     *
     * @generated from protobuf field: string bvid = 2;
     */
    bvid: string;
    /**
     * 来源
     *
     * @generated from protobuf field: string from = 3;
     */
    from: string;
    /**
     * AI trackid
     *
     * @generated from protobuf field: string trackid = 4;
     */
    trackid: string;
    /**
     * 广告扩展数据
     *
     * @generated from protobuf field: string ad_extra = 5;
     */
    adExtra: string;
    /**
     * 清晰度(旧版)
     *
     * @generated from protobuf field: int32 qn = 6;
     */
    qn: number;
    /**
     * 流版本(旧版)
     *
     * @generated from protobuf field: int32 fnver = 7;
     */
    fnver: number;
    /**
     * 流类型(旧版)
     *
     * @generated from protobuf field: int32 fnval = 8;
     */
    fnval: number;
    /**
     * 是否强制使用域名(旧版)
     *
     * @generated from protobuf field: int32 force_host = 9;
     */
    forceHost: number;
    /**
     * 是否允许4K(旧版)
     *
     * @generated from protobuf field: int32 fourk = 10;
     */
    fourk: number;
    /**
     * 当前页面spm
     *
     * @generated from protobuf field: string spmid = 11;
     */
    spmid: string;
    /**
     * 上一页面spm
     *
     * @generated from protobuf field: string from_spmid = 12;
     */
    fromSpmid: string;
    /**
     * @generated from protobuf field: int32 autoplay = 13;
     */
    autoplay: number;
    /**
     * 视频秒开参数
     * bilibili.app.archive.middleware.v1.PlayerArgs player_args = 14;
     *
     *
     * @generated from protobuf field: string page_version = 15;
     */
    pageVersion: string;
    /**
     * @generated from protobuf field: string biz_extra = 16;
     */
    bizExtra: string;
    /**
     * @generated from protobuf field: int64 device_type = 17;
     */
    deviceType: string;
    /**
     * @generated from protobuf field: int64 relates_page = 18;
     */
    relatesPage: string;
    /**
     * @generated from protobuf field: string session_id = 19;
     */
    sessionId: string;
    /**
     * @generated from protobuf field: int32 in_feed_play = 20;
     */
    inFeedPlay: number;
    /**
     * @generated from protobuf field: string play_mode = 21;
     */
    playMode: string;
    /**
     *
     * bilibili.pagination.Pagination pagination = 22;
     *
     *
     * @generated from protobuf field: int32 refresh = 23;
     */
    refresh: number;
    /**
     * @generated from protobuf field: int32 refresh_num = 24;
     */
    refreshNum: number;
}
declare class CacheViewReply$Type extends MessageType<CacheViewReply> {
    constructor();
    create(value?: PartialMessage<CacheViewReply>): CacheViewReply;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CacheViewReply): CacheViewReply;
    internalBinaryWrite(message: CacheViewReply, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.app.view.v1.CacheViewReply
 */
export declare const CacheViewReply: CacheViewReply$Type;
declare class CacheViewReq$Type extends MessageType<CacheViewReq> {
    constructor();
    create(value?: PartialMessage<CacheViewReq>): CacheViewReq;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CacheViewReq): CacheViewReq;
    internalBinaryWrite(message: CacheViewReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.app.view.v1.CacheViewReq
 */
export declare const CacheViewReq: CacheViewReq$Type;
declare class CM$Type extends MessageType<CM> {
    constructor();
    create(value?: PartialMessage<CM>): CM;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CM): CM;
    internalBinaryWrite(message: CM, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.app.view.v1.CM
 */
export declare const CM: CM$Type;
declare class CMConfig$Type extends MessageType<CMConfig> {
    constructor();
    create(value?: PartialMessage<CMConfig>): CMConfig;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CMConfig): CMConfig;
    internalBinaryWrite(message: CMConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.app.view.v1.CMConfig
 */
export declare const CMConfig: CMConfig$Type;
declare class CmIpad$Type extends MessageType<CmIpad> {
    constructor();
    create(value?: PartialMessage<CmIpad>): CmIpad;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CmIpad): CmIpad;
    internalBinaryWrite(message: CmIpad, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.app.view.v1.CmIpad
 */
export declare const CmIpad: CmIpad$Type;
declare class Relate$Type extends MessageType<Relate> {
    constructor();
    create(value?: PartialMessage<Relate>): Relate;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Relate): Relate;
    internalBinaryWrite(message: Relate, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.app.view.v1.Relate
 */
export declare const Relate: Relate$Type;
declare class TFInfoReply$Type extends MessageType<TFInfoReply> {
    constructor();
    create(value?: PartialMessage<TFInfoReply>): TFInfoReply;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TFInfoReply): TFInfoReply;
    internalBinaryWrite(message: TFInfoReply, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.app.view.v1.TFInfoReply
 */
export declare const TFInfoReply: TFInfoReply$Type;
declare class TFPanelCustomized$Type extends MessageType<TFPanelCustomized> {
    constructor();
    create(value?: PartialMessage<TFPanelCustomized>): TFPanelCustomized;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TFPanelCustomized): TFPanelCustomized;
    internalBinaryWrite(message: TFPanelCustomized, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.app.view.v1.TFPanelCustomized
 */
export declare const TFPanelCustomized: TFPanelCustomized$Type;
declare class TIcon$Type extends MessageType<TIcon> {
    constructor();
    create(value?: PartialMessage<TIcon>): TIcon;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TIcon): TIcon;
    internalBinaryWrite(message: TIcon, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.app.view.v1.TIcon
 */
export declare const TIcon: TIcon$Type;
declare class ViewReply$Type extends MessageType<ViewReply> {
    constructor();
    create(value?: PartialMessage<ViewReply>): ViewReply;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ViewReply): ViewReply;
    private binaryReadMap6;
    internalBinaryWrite(message: ViewReply, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.app.view.v1.ViewReply
 */
export declare const ViewReply: ViewReply$Type;
declare class ViewReq$Type extends MessageType<ViewReq> {
    constructor();
    create(value?: PartialMessage<ViewReq>): ViewReq;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ViewReq): ViewReq;
    internalBinaryWrite(message: ViewReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.app.view.v1.ViewReq
 */
export declare const ViewReq: ViewReq$Type;
/**
 * @generated ServiceType for protobuf service bilibili.app.view.v1.View
 */
export declare const View: any;
export {};
