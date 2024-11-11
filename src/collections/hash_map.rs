
use wasm_bindgen::prelude::*;
use std::collections::HashMap as Base;
type HashMap=*mut Base<JsValue,JsValue>;


#[wasm_bindgen]
pub fn new()-> HashMap {
  as_ptr!(Base::new())
}




