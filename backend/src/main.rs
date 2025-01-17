use axum::{routing::get, Router};
use hyper::Server;  // hyper::Serverをインポート

use std::net::SocketAddr;

#[tokio::main]
async fn main() {
    // ルーターを定義
    let app = Router::new().route("/", get(|| async { "Hello, World!" }));

    // サーバーを起動
    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    println!("Listening on http://{}", addr);
    Server::bind(&addr)  // hyper::Serverを使用
        .serve(app.into_make_service())
        .await
        .unwrap();
}
