#[macro_use] extern crate rocket;

// Routes
#[get("/")]
fn index() -> &'static str {
    "Hello, world!"
}

// Server Listener
#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![index])
}
