FROM rust:1.65
COPY ./ ./

# Build your program for release with nightly
RUN rustup default nightly
RUN cargo build --release

# Run the binary
CMD ["./target/release/blazingly_fast_portfolio"]
