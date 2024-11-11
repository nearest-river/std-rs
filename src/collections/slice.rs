
use wasm_bindgen::prelude::*;


#[wasm_bindgen]
pub struct Slice {
  pub ptr: usize,
  pub len: usize
}


impl<T> Into<Slice> for &[T] {
  fn into(self)-> Slice {
    let slice=self.as_ref();
    Slice {
      ptr: slice.as_ptr() as _,
      len: slice.len()
    }
  }
}

impl<T> Into<Slice> for &mut [T] {
  fn into(self)-> Slice {
    let slice=self.as_mut();
    Slice {
      ptr: slice.as_ptr() as _,
      len: slice.len()
    }
  }
}
