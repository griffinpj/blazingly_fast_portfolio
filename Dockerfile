FROM rust:latest
EXPOSE 8000
COPY ./ ./

# RUN rm /bin/sh && ln -s /bin/bash /bin/sh
# Build your program for release with nightly


# Configure WASM...try on x86
# RUN rustup target add asmjs-unknown-emscripten --toolchain nightly
# RUN rustup target add wasm32-unknown-emscripten --toolchain nightly
# RUN cargo install wasm-pack
# RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash \
#     && source ~/.bashrc  \
#     && nvm install v18.12.1 \
#     && nvm use v18.12.1  \
#     && cd static/scripts && npm run build && cd ../.. \
#     && cd .. 

RUN rustup default nightly
RUN cargo build --release

# Run the binary
CMD ["./target/release/blazingly_fast_portfolio"]
