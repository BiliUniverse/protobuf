// @generated by protobuf-ts 2.8.2 with parameter output_javascript
// @generated from protobuf file "grpc_api/bilibili/pgc/gateway/player/v2/playurl.proto" (package "bilibili.pgc.gateway.player.v2", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { PlayViewReply } from "./playurl";
import type { PlayViewReq } from "./playurl";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * 视频url
 *
 * @generated from protobuf service bilibili.pgc.gateway.player.v2.PlayURL
 */
export interface IPlayURLClient {
    /**
     * 播放页信息
     *
     * @generated from protobuf rpc: PlayView(bilibili.pgc.gateway.player.v2.PlayViewReq) returns (bilibili.pgc.gateway.player.v2.PlayViewReply);
     */
    playView(input: PlayViewReq, options?: RpcOptions): UnaryCall<PlayViewReq, PlayViewReply>;
    /**
     * @generated from protobuf rpc: PlayViewComic(bilibili.pgc.gateway.player.v2.PlayViewReq) returns (bilibili.pgc.gateway.player.v2.PlayViewReply);
     */
    playViewComic(input: PlayViewReq, options?: RpcOptions): UnaryCall<PlayViewReq, PlayViewReply>;
}
/**
 * 视频url
 *
 * @generated from protobuf service bilibili.pgc.gateway.player.v2.PlayURL
 */
export declare class PlayURLClient implements IPlayURLClient, ServiceInfo {
    private readonly _transport;
    typeName: any;
    methods: any;
    options: any;
    constructor(_transport: RpcTransport);
    /**
     * 播放页信息
     *
     * @generated from protobuf rpc: PlayView(bilibili.pgc.gateway.player.v2.PlayViewReq) returns (bilibili.pgc.gateway.player.v2.PlayViewReply);
     */
    playView(input: PlayViewReq, options?: RpcOptions): UnaryCall<PlayViewReq, PlayViewReply>;
    /**
     * @generated from protobuf rpc: PlayViewComic(bilibili.pgc.gateway.player.v2.PlayViewReq) returns (bilibili.pgc.gateway.player.v2.PlayViewReply);
     */
    playViewComic(input: PlayViewReq, options?: RpcOptions): UnaryCall<PlayViewReq, PlayViewReply>;
}
