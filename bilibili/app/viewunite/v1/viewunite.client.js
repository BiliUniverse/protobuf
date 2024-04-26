// @generated by protobuf-ts 2.9.4 with parameter generate_dependencies,force_optimize_code_size,output_javascript
// @generated from protobuf file "bilibili/app/viewunite/v1/viewunite.proto" (package "bilibili.app.viewunite.v1", syntax proto3)
// tslint:disable
import { View } from "./viewunite";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
/**
 * 统一视频信息接口 (7.41.0+)
 *
 * @generated from protobuf service bilibili.app.viewunite.v1.View
 */
export class ViewClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = View.typeName;
        this.methods = View.methods;
        this.options = View.options;
    }
    /**
     *
     * rpc ArcRefresh(ArcRefreshReq) returns (ArcRefreshReply);
     * 视频详情页下方推荐
     * rpc RelatesFeed(RelatesFeedReq) returns (RelatesFeedReply);
     * 视频详情页
     *
     * 播放进度
     * rpc ViewProgress(ViewProgressReq) returns (ViewProgressReply);
     *
     * @generated from protobuf rpc: View(bilibili.app.viewunite.v1.ViewReq) returns (bilibili.app.viewunite.v1.ViewReply);
     */
    view(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
}
