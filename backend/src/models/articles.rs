use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
pub struct Post {
    pub id: i32,
    pub title: String,
    pub content: String,
}