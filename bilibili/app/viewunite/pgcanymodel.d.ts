// @generated by protobuf-ts 2.9.4 with parameter generate_dependencies,long_type_number,output_javascript
// @generated from protobuf file "bilibili/app/viewunite/pgcanymodel.proto" (package "bilibili.app.viewunite.pgcanymodel", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { StatInfo } from "./common";
import { ViewEpisode } from "./common";
import { BadgeInfo } from "./common";
/**
 *
 *
 * @generated from protobuf message bilibili.app.viewunite.pgcanymodel.Earphone
 */
export interface Earphone {
    /**
     *
     *
     * @generated from protobuf field: string product_model = 1;
     */
    productModel: string;
    /**
     *
     *
     * @generated from protobuf field: string like_toast_text = 2;
     */
    likeToastText: string;
    /**
     *
     *
     * @generated from protobuf field: string switch_toast_text = 3;
     */
    switchToastText: string;
    /**
     *
     *
     * @generated from protobuf field: string like_toast_voice = 4;
     */
    likeToastVoice: string;
}
/**
 *
 *
 * @generated from protobuf message bilibili.app.viewunite.pgcanymodel.EarphoneConf
 */
export interface EarphoneConf {
    /**
     *
     *
     * @generated from protobuf field: repeated bilibili.app.viewunite.pgcanymodel.Earphone sp_phones = 1;
     */
    spPhones: Earphone[];
}
/**
 *
 *
 * @generated from protobuf message bilibili.app.viewunite.pgcanymodel.MultiViewInfo
 */
export interface MultiViewInfo {
    /**
     *
     *
     * @generated from protobuf field: bool is_multi_view_season = 1;
     */
    isMultiViewSeason: boolean;
    /**
     *
     *
     * @generated from protobuf field: string changing_dance = 2;
     */
    changingDance: string;
}
/**
 *
 *
 * @generated from protobuf message bilibili.app.viewunite.pgcanymodel.OgvData
 */
export interface OgvData {
    /**
     *
     *
     * @generated from protobuf field: int32 media_id = 1;
     */
    mediaId: number;
    /**
     *
     *
     * @generated from protobuf field: int64 season_id = 2;
     */
    seasonId: number;
    /**
     *
     *
     * @generated from protobuf field: int32 season_type = 3;
     */
    seasonType: number;
    /**
     *
     *
     * @generated from protobuf field: int32 show_season_type = 4;
     */
    showSeasonType: number;
    /**
     *
     *
     * @generated from protobuf field: bilibili.app.viewunite.pgcanymodel.Rights rights = 5;
     */
    rights?: Rights;
    /**
     *
     * UserStatus user_status = 6;
     *
     *
     * @generated from protobuf field: int64 aid = 7;
     */
    aid: number;
    /**
     *
     * Stat stat = 8;
     *
     *
     * @generated from protobuf field: int32 mode = 9;
     */
    mode: number;
    /**
     *
     * Publish publish = 10;
     *
     * PlayStrategy play_strategy = 11;
     *
     * MultiViewInfo multi_view_info = 12;
     *
     * OgvSwitch ogv_switch = 13;
     *
     *
     * @generated from protobuf field: int32 total_ep = 14;
     */
    totalEp: number;
    /**
     *
     * bilibili.app.viewunite.common.NewEp new_ep = 15;
     *
     * Reserve reserve = 16;
     *
     *
     * @generated from protobuf field: int32 status = 17;
     */
    status: number;
    /**
     *
     * repeated PlayFloatLayerActivity activity_float_layer = 18;
     *
     * EarphoneConf earphone_conf = 19;
     *
     *
     * @generated from protobuf field: string cover = 20;
     */
    cover: string;
    /**
     *
     *
     * @generated from protobuf field: string square_cover = 21;
     */
    squareCover: string;
    /**
     *
     *
     * @generated from protobuf field: string share_url = 22;
     */
    shareUrl: string;
    /**
     *
     *
     * @generated from protobuf field: string short_link = 23;
     */
    shortLink: string;
    /**
     *
     *
     * @generated from protobuf field: string title = 24;
     */
    title: string;
    /**
     *
     *
     * @generated from protobuf field: string horizontal_cover169 = 25;
     */
    horizontalCover169: string;
    /**
     *
     *
     * @generated from protobuf field: string horizontal_cover1610 = 26;
     */
    horizontalCover1610: string;
    /**
     *
     *
     * @generated from protobuf field: int32 has_can_play_ep = 27;
     */
    hasCanPlayEp: number;
}
/**
 *
 *
 * @generated from protobuf message bilibili.app.viewunite.pgcanymodel.OgvSwitch
 */
export interface OgvSwitch {
    /**
     *
     *
     * @generated from protobuf field: int32 reduce_short_title_spacing = 1;
     */
    reduceShortTitleSpacing: number;
    /**
     *
     *
     * @generated from protobuf field: int32 merge_position_section_for_cinema = 2;
     */
    mergePositionSectionForCinema: number;
    /**
     *
     *
     * @generated from protobuf field: int32 merge_preview_section = 3;
     */
    mergePreviewSection: number;
    /**
     *
     *
     * @generated from protobuf field: int32 enable_show_vt_info = 4;
     */
    enableShowVtInfo: number;
}
/**
 * 播放器浮层广告(?)
 *
 * @generated from protobuf message bilibili.app.viewunite.pgcanymodel.PlayFloatLayerActivity
 */
export interface PlayFloatLayerActivity {
    /**
     *
     *
     * @generated from protobuf field: int32 id = 1;
     */
    id: number;
    /**
     *
     *
     * @generated from protobuf field: string title = 2;
     */
    title: string;
    /**
     *
     *
     * @generated from protobuf field: int32 type = 3;
     */
    type: number;
    /**
     *
     *
     * @generated from protobuf field: int32 ad_badge_type = 4;
     */
    adBadgeType: number;
    /**
     *
     *
     * @generated from protobuf field: string link = 5;
     */
    link: string;
    /**
     *
     *
     * @generated from protobuf field: string pic_url = 6;
     */
    picUrl: string;
    /**
     *
     *
     * @generated from protobuf field: string pic_anima_url = 7;
     */
    picAnimaUrl: string;
    /**
     *
     *
     * @generated from protobuf field: bilibili.app.viewunite.common.BadgeInfo badge = 8;
     */
    badge?: BadgeInfo;
    /**
     *
     *
     * @generated from protobuf field: int64 show_rate_time = 9;
     */
    showRateTime: number;
}
/**
 *
 *
 * @generated from protobuf message bilibili.app.viewunite.pgcanymodel.PlayStrategy
 */
export interface PlayStrategy {
    /**
     *
     *
     * @generated from protobuf field: repeated string strategies = 1;
     */
    strategies: string[];
    /**
     *
     *
     * @generated from protobuf field: int32 recommend_show_strategy = 2;
     */
    recommendShowStrategy: number;
    /**
     *
     *
     * @generated from protobuf field: string auto_play_toast = 3;
     */
    autoPlayToast: string;
}
/**
 *
 *
 * @generated from protobuf message bilibili.app.viewunite.pgcanymodel.Publish
 */
export interface Publish {
    /**
     *
     *
     * @generated from protobuf field: string pub_time = 1;
     */
    pubTime: string;
    /**
     *
     *
     * @generated from protobuf field: string pub_time_show = 2;
     */
    pubTimeShow: string;
    /**
     *
     *
     * @generated from protobuf field: int32 is_started = 3;
     */
    isStarted: number;
    /**
     *
     *
     * @generated from protobuf field: int32 is_finish = 4;
     */
    isFinish: number;
    /**
     *
     *
     * @generated from protobuf field: int32 weekday = 5;
     */
    weekday: number;
    /**
     *
     *
     * @generated from protobuf field: string release_date_show = 6;
     */
    releaseDateShow: string;
    /**
     *
     *
     * @generated from protobuf field: string time_length_show = 7;
     */
    timeLengthShow: string;
    /**
     *
     *
     * @generated from protobuf field: int32 unknow_pub_date = 8;
     */
    unknowPubDate: number;
    /**
     *
     *
     * @generated from protobuf field: string update_info_desc = 9;
     */
    updateInfoDesc: string;
}
/**
 *
 *
 * @generated from protobuf message bilibili.app.viewunite.pgcanymodel.Reserve
 */
export interface Reserve {
    /**
     *
     *
     * @generated from protobuf field: repeated bilibili.app.viewunite.common.ViewEpisode episodes = 1;
     */
    episodes: ViewEpisode[];
    /**
     *
     *
     * @generated from protobuf field: string tip = 2;
     */
    tip: string;
}
/**
 * 权限相关信息
 *
 * @generated from protobuf message bilibili.app.viewunite.pgcanymodel.Rights
 */
export interface Rights {
    /**
     *
     *
     * @generated from protobuf field: int32 allow_download = 1;
     */
    allowDownload: number;
    /**
     *
     *
     * @generated from protobuf field: int32 allow_review = 2;
     */
    allowReview: number;
    /**
     *
     *
     * @generated from protobuf field: int32 can_watch = 3;
     */
    canWatch: number;
    /**
     *
     *
     * @generated from protobuf field: int32 is_cover_show = 4;
     */
    isCoverShow: number;
    /**
     *
     *
     * @generated from protobuf field: string copyright = 5;
     */
    copyright: string;
    /**
     *
     *
     * @generated from protobuf field: string copyright_name = 6;
     */
    copyrightName: string;
    /**
     *
     *
     * @generated from protobuf field: int32 allow_bp = 7;
     */
    allowBp: number;
    /**
     *
     *
     * @generated from protobuf field: int32 area_limit = 8;
     */
    areaLimit: number;
    /**
     *
     *
     * @generated from protobuf field: int32 is_preview = 9;
     */
    isPreview: number;
    /**
     *
     *
     * @generated from protobuf field: int32 ban_area_show = 10;
     */
    banAreaShow: number;
    /**
     *
     *
     * @generated from protobuf field: int32 watch_platform = 11;
     */
    watchPlatform: number;
    /**
     *
     *
     * @generated from protobuf field: int32 allow_bp_rank = 12;
     */
    allowBpRank: number;
    /**
     *
     *
     * @generated from protobuf field: string resource = 13;
     */
    resource: string;
    /**
     *
     *
     * @generated from protobuf field: int32 forbid_pre = 14;
     */
    forbidPre: number;
    /**
     *
     *
     * @generated from protobuf field: int32 only_vip_download = 15;
     */
    onlyVipDownload: number;
    /**
     *
     *
     * @generated from protobuf field: int32 new_allow_download = 16;
     */
    newAllowDownload: number;
}
/**
 *
 *
 * @generated from protobuf message bilibili.app.viewunite.pgcanymodel.Stat
 */
export interface Stat {
    /**
     *
     *
     * @generated from protobuf field: string followers = 1;
     */
    followers: string;
    /**
     *
     *
     * @generated from protobuf field: bilibili.app.viewunite.common.StatInfo play_data = 2;
     */
    playData?: StatInfo;
}
/**
 *
 *
 * @generated from protobuf message bilibili.app.viewunite.pgcanymodel.UserStatus
 */
export interface UserStatus {
    /**
     *
     *
     * @generated from protobuf field: int32 show = 1;
     */
    show: number;
    /**
     *
     *
     * @generated from protobuf field: int32 follow = 2;
     */
    follow: number;
    /**
     *
     *
     * @generated from protobuf field: int32 follow_status = 3;
     */
    followStatus: number;
    /**
     *
     *
     * @generated from protobuf field: int32 pay = 4;
     */
    pay: number;
    /**
     *
     *
     * @generated from protobuf field: int32 sponsor = 5;
     */
    sponsor: number;
    /**
     *
     *
     * @generated from protobuf field: int32 vip = 6;
     */
    vip: number;
    /**
     * vip 是否被冻结
     *
     * @generated from protobuf field: int32 vip_frozen = 7;
     */
    vipFrozen: number;
    /**
     *
     *
     * @generated from protobuf field: bilibili.app.viewunite.pgcanymodel.WatchProgress watch_progress = 8;
     */
    watchProgress?: WatchProgress;
}
/**
 *
 *
 * @generated from protobuf message bilibili.app.viewunite.pgcanymodel.ViewPgcAny
 */
export interface ViewPgcAny {
    /**
     *
     *
     * @generated from protobuf field: bilibili.app.viewunite.pgcanymodel.OgvData ogv_data = 1;
     */
    ogvData?: OgvData;
}
/**
 *
 *
 * @generated from protobuf message bilibili.app.viewunite.pgcanymodel.WatchProgress
 */
export interface WatchProgress {
    /**
     *
     *
     * @generated from protobuf field: int64 last_ep_id = 1;
     */
    lastEpId: number;
    /**
     *
     *
     * @generated from protobuf field: string last_ep_index = 2;
     */
    lastEpIndex: string;
    /**
     *
     *
     * @generated from protobuf field: int64 last_time = 3;
     */
    lastTime: number;
}
declare class Earphone$Type extends MessageType<Earphone> {
    constructor();
    create(value?: PartialMessage<Earphone>): Earphone;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Earphone): Earphone;
    internalBinaryWrite(message: Earphone, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.app.viewunite.pgcanymodel.Earphone
 */
export declare const Earphone: Earphone$Type;
declare class EarphoneConf$Type extends MessageType<EarphoneConf> {
    constructor();
    create(value?: PartialMessage<EarphoneConf>): EarphoneConf;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EarphoneConf): EarphoneConf;
    internalBinaryWrite(message: EarphoneConf, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.app.viewunite.pgcanymodel.EarphoneConf
 */
export declare const EarphoneConf: EarphoneConf$Type;
declare class MultiViewInfo$Type extends MessageType<MultiViewInfo> {
    constructor();
    create(value?: PartialMessage<MultiViewInfo>): MultiViewInfo;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MultiViewInfo): MultiViewInfo;
    internalBinaryWrite(message: MultiViewInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.app.viewunite.pgcanymodel.MultiViewInfo
 */
export declare const MultiViewInfo: MultiViewInfo$Type;
declare class OgvData$Type extends MessageType<OgvData> {
    constructor();
    create(value?: PartialMessage<OgvData>): OgvData;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OgvData): OgvData;
    internalBinaryWrite(message: OgvData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.app.viewunite.pgcanymodel.OgvData
 */
export declare const OgvData: OgvData$Type;
declare class OgvSwitch$Type extends MessageType<OgvSwitch> {
    constructor();
    create(value?: PartialMessage<OgvSwitch>): OgvSwitch;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OgvSwitch): OgvSwitch;
    internalBinaryWrite(message: OgvSwitch, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.app.viewunite.pgcanymodel.OgvSwitch
 */
export declare const OgvSwitch: OgvSwitch$Type;
declare class PlayFloatLayerActivity$Type extends MessageType<PlayFloatLayerActivity> {
    constructor();
    create(value?: PartialMessage<PlayFloatLayerActivity>): PlayFloatLayerActivity;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PlayFloatLayerActivity): PlayFloatLayerActivity;
    internalBinaryWrite(message: PlayFloatLayerActivity, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.app.viewunite.pgcanymodel.PlayFloatLayerActivity
 */
export declare const PlayFloatLayerActivity: PlayFloatLayerActivity$Type;
declare class PlayStrategy$Type extends MessageType<PlayStrategy> {
    constructor();
    create(value?: PartialMessage<PlayStrategy>): PlayStrategy;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PlayStrategy): PlayStrategy;
    internalBinaryWrite(message: PlayStrategy, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.app.viewunite.pgcanymodel.PlayStrategy
 */
export declare const PlayStrategy: PlayStrategy$Type;
declare class Publish$Type extends MessageType<Publish> {
    constructor();
    create(value?: PartialMessage<Publish>): Publish;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Publish): Publish;
    internalBinaryWrite(message: Publish, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.app.viewunite.pgcanymodel.Publish
 */
export declare const Publish: Publish$Type;
declare class Reserve$Type extends MessageType<Reserve> {
    constructor();
    create(value?: PartialMessage<Reserve>): Reserve;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Reserve): Reserve;
    internalBinaryWrite(message: Reserve, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.app.viewunite.pgcanymodel.Reserve
 */
export declare const Reserve: Reserve$Type;
declare class Rights$Type extends MessageType<Rights> {
    constructor();
    create(value?: PartialMessage<Rights>): Rights;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Rights): Rights;
    internalBinaryWrite(message: Rights, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.app.viewunite.pgcanymodel.Rights
 */
export declare const Rights: Rights$Type;
declare class Stat$Type extends MessageType<Stat> {
    constructor();
    create(value?: PartialMessage<Stat>): Stat;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Stat): Stat;
    internalBinaryWrite(message: Stat, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.app.viewunite.pgcanymodel.Stat
 */
export declare const Stat: Stat$Type;
declare class UserStatus$Type extends MessageType<UserStatus> {
    constructor();
    create(value?: PartialMessage<UserStatus>): UserStatus;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UserStatus): UserStatus;
    internalBinaryWrite(message: UserStatus, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.app.viewunite.pgcanymodel.UserStatus
 */
export declare const UserStatus: UserStatus$Type;
declare class ViewPgcAny$Type extends MessageType<ViewPgcAny> {
    constructor();
    create(value?: PartialMessage<ViewPgcAny>): ViewPgcAny;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ViewPgcAny): ViewPgcAny;
    internalBinaryWrite(message: ViewPgcAny, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.app.viewunite.pgcanymodel.ViewPgcAny
 */
export declare const ViewPgcAny: ViewPgcAny$Type;
declare class WatchProgress$Type extends MessageType<WatchProgress> {
    constructor();
    create(value?: PartialMessage<WatchProgress>): WatchProgress;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WatchProgress): WatchProgress;
    internalBinaryWrite(message: WatchProgress, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.app.viewunite.pgcanymodel.WatchProgress
 */
export declare const WatchProgress: WatchProgress$Type;
export {};
