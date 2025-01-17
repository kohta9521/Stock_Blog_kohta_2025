use axum::{routing::get, Router};

pub fn post_routes() -> Router {
    Router::new().route("/articles", get(get_posts))
}

async fn get_articles() -> &'static str {
    "List of Articles"
}