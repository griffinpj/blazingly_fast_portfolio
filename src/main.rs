#![feature(proc_macro_hygiene, decl_macro)]
#[macro_use] extern crate rocket;

// enable static files
use rocket_contrib::serve::StaticFiles;

// enable askama templates
use askama::Template;

// derive the Template and prepare to populate the index.html 
// with IndexTmpl supplied values from preset keys in struct IndexTmpl
#[derive(Template)]
#[template(path = "index.html")]

struct IndexTmpl<'a> {
    page_title: &'a str, // populates {{ page_title }} in the index.html template file
    page_intro: &'a str, // populates {{ page_intro }} in the index.html template file
    about_me: &'a str,
    linked_in: &'a str,
    github: &'a str,
    mail_link: &'a str,
    resume_download_link: &'a str,
    version_line: &'a str
}

// this is the root of the web application, this listens only to the get http method
// offer a localhost:8000/contact mountpoint
#[get("/")]
fn index() -> IndexTmpl<'static> {
    IndexTmpl { 
        page_title: "Griffin Johnson",
        page_intro: "I am a Full Stack Developer",
        about_me: "Hey! I'm a Full Stack Web Developer. I have experience working on a wide range of different of projects. Lately, I've been working in the nodeJS ecosystem but looking at rust for future development :)",
        linked_in: "https://www.linkedin.com/in/griffin-johnson-462393134",
        github: "https://github.com/griffinpj",
        mail_link: "mailto:griffinpjohnson@gmail.com",
        resume_download_link: "https://github.com/Cougargriff/ResumeLatex/raw/master/resume_curr.pdf",
        version_line: "0.1.0"
    }
}



// this is the main loop causing the web service to mount various parts and components
// take note the templates folder was created beforehand and the sub directories as well
fn main () {
    rocket::ignite()        
        .mount("/", routes![index])
        .mount("/public", StaticFiles::from(concat!(env!("CARGO_MANIFEST_DIR"), "/static")))
    .launch(); // this is required or nothing works :)
} 
