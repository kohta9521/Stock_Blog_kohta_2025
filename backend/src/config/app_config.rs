use std::net::SocketAddr;

pub struct AppConfig {
    pub server_addr: SocketAddr,
}

impl AppConfig {
    pub fn new() -> Self {
        let server_addr = "127.0.0.1:3000".parse().unwrap();
        AppConfig { server_addr }
    }
}