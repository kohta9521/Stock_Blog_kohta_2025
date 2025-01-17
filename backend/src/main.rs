use axum::{routing::get, Router};
use hyper::Server;
use std::net::SocketAddr;

#[tokio::main]
async fn main() {
    // ルーターを定義
    let app = Router::new().route("/", get(|| async { "Hello, World!" }));

    // サーバーのアドレスを設定
    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    println!("Listening on http://{}", addr);

    // サーバーを起動
    Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}
