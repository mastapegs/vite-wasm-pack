use dominator::{html, Dom};
use wasm_bindgen::prelude::*;

struct App {}

impl App {
    fn render() -> Dom {
        // Create the DOM nodes
        html!("my-element", {})
    }
}

#[wasm_bindgen(start)]
pub fn main_js() -> Result<(), JsValue> {
    #[cfg(debug_assertions)]
    console_error_panic_hook::set_once();

    dominator::append_dom(&dominator::body(), App::render());

    Ok(())
}
