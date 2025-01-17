pub mod posts;
pub mod users;

use axum::Router;

pub fn create_routes() -> Router {
    Router::new()
        .nest("/api", posts::post_routes())
        .nest("/api", users::user_routes())
}