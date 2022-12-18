FROM rust:latest
EXPOSE 8000
COPY ./ ./

RUN rustup default nightly
RUN cargo build --release

# Run the binary
CMD ["./target/release/blazingly_fast_portfolio"]
