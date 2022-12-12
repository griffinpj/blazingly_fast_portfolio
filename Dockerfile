FROM rust:latest
EXPOSE 8000
COPY ./ ./

# Build your program for release with nightly
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash && source ~/.bashrc && nvm install v18.12.1 && cd static/scripts && nvm use v18.12.1 npm run build && cd ..
RUN rustup default nightly
RUN cargo build --release

# Run the binary
CMD ["./target/release/blazingly_fast_portfolio"]
