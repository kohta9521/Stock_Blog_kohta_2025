use axum::response::{IntoResponse, Response};
use std::fmt::{self, Display, Formatter};

#[derive(Debug)]
pub struct AppError(pub String);

impl Display for AppError {
    fn fmt(&self, f: &mut Formatter<'_>) -> fmt::Result {
        write!(f, "{}", self.0)
    }
}

impl IntoResponse for AppError {
    fn into_response(self) -> Response {
        (axum::http::StatusCode::INTERNAL_SERVER_ERROR, self.0).into_response()
    }
}
