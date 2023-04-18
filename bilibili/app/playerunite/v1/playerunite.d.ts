// @generated by protobuf-ts 2.8.2 with parameter output_javascript
// @generated from protobuf file "bilibili/app/playerunite/v1/playerunite.proto" (package "bilibili.app.playerunite.v1", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { History } from "../../../playershared/playershared";
import { QnTrialInfo } from "../../../playershared/playershared";
import { PlayArc } from "../../../playershared/playershared";
import { Any } from "../../../../google/protobuf/any";
import { Event } from "../../../playershared/playershared";
import { PlayDeviceConf } from "../../../playershared/playershared";
import { PlayArcConf } from "../../../playershared/playershared";
import { VodInfo } from "../../../playershared/playershared";
import { VideoVod } from "../../../playershared/playershared";
/**
 *
 *
 * @generated from protobuf message bilibili.app.playerunite.v1.PlayViewUniteReq
 */
export interface PlayViewUniteReq {
    /**
     * 请求资源VOD信息
     *
     * @generated from protobuf field: bilibili.playershared.VideoVod vod = 1;
     */
    vod?: VideoVod;
    /**
     *
     *
     * @generated from protobuf field: string spmid = 2;
     */
    spmid: string;
    /**
     *
     *
     * @generated from protobuf field: string from_spmid = 3;
     */
    fromSpmid: string;
    /**
     * 补充信息, 如ep_id等
     *
     * @generated from protobuf field: map<string, string> extra_content = 4;
     */
    extraContent: {
        [key: string]: string;
    };
}
/**
 *
 *
 * @generated from protobuf message bilibili.app.playerunite.v1.PlayViewUniteReply
 */
export interface PlayViewUniteReply {
    /**
     * 音视频流信息
     *
     * @generated from protobuf field: bilibili.playershared.VodInfo vod_info = 1;
     */
    vodInfo?: VodInfo;
    /**
     *
     *
     * @generated from protobuf field: bilibili.playershared.PlayArcConf play_arc_conf = 2;
     */
    playArcConf?: PlayArcConf;
    /**
     *
     *
     * @generated from protobuf field: bilibili.playershared.PlayDeviceConf play_device_conf = 3;
     */
    playDeviceConf?: PlayDeviceConf;
    /**
     *
     *
     * @generated from protobuf field: bilibili.playershared.Event event = 4;
     */
    event?: Event;
    /**
     * 使用 pgcanymodel / ugcanymodel 进行proto any转换成对应业务码结构体
     *
     * @generated from protobuf field: google.protobuf.Any supplement = 5;
     */
    supplement?: Any;
    /**
     *
     *
     * @generated from protobuf field: bilibili.playershared.PlayArc play_arc = 6;
     */
    playArc?: PlayArc;
    /**
     *
     *
     * @generated from protobuf field: bilibili.playershared.QnTrialInfo qn_trial_info = 7;
     */
    qnTrialInfo?: QnTrialInfo;
    /**
     *
     *
     * @generated from protobuf field: bilibili.playershared.History history = 8;
     */
    history?: History;
}
declare class PlayViewUniteReq$Type extends MessageType<PlayViewUniteReq> {
    constructor();
    create(value?: PartialMessage<PlayViewUniteReq>): PlayViewUniteReq;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PlayViewUniteReq): PlayViewUniteReq;
    private binaryReadMap4;
    internalBinaryWrite(message: PlayViewUniteReq, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.app.playerunite.v1.PlayViewUniteReq
 */
export declare const PlayViewUniteReq: PlayViewUniteReq$Type;
declare class PlayViewUniteReply$Type extends MessageType<PlayViewUniteReply> {
    constructor();
    create(value?: PartialMessage<PlayViewUniteReply>): PlayViewUniteReply;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PlayViewUniteReply): PlayViewUniteReply;
    internalBinaryWrite(message: PlayViewUniteReply, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message bilibili.app.playerunite.v1.PlayViewUniteReply
 */
export declare const PlayViewUniteReply: PlayViewUniteReply$Type;
/**
 * @generated ServiceType for protobuf service bilibili.app.playerunite.v1.Player
 */
export declare const Player: any;
export {};
