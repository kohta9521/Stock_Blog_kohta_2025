use axum::{Router};
use crate::config::app_config::AppConfig;
use crate::routes;

#[tokio::main]
async fn main() {
    // 設定を読み込む
    let config = AppConfig::new();

    // ルーターを構築
    let app =routes::create_routes();

    // サーバーを起動
    axum::Server::bind(&config.server_addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}