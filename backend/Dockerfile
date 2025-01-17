# Rustの公式イメージをベースにする
FROM rust:1.69 as builder

# ワーキングディレクトリを作成
WORKDIR /usr/src/myapp

# Cargo.tomlとソースコードをコピー
COPY . .

# プロジェクトのビルド
RUN cargo build --release

# 小さな最終イメージを作成するためにAlpineを使用
FROM debian:buster-slim

# 必要なライブラリをインストール
RUN apt-get update && apt-get install -y libssl-dev

# ビルド済みバイナリをコピー
COPY --from=builder /usr/src/myapp/target/release/myapp /usr/local/bin/myapp

# コンテナ起動時に実行するコマンド
CMD ["myapp"]
