# 1. This tells docker to use the Rust official image
FROM rust:1.65

# 2. Copy the files in your machine to the Docker image
COPY ./ ./

# set nightly rust 
RUN rustup defaultl nightly

# Build your program for release
RUN cargo build --release

# Run the binary
CMD ["rustup default nightly && ./target/release/blazingly_fast_portfolio"]
