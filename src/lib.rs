
#[macro_use]
pub(crate) mod util_macro;

mod io;
mod hash;
mod thread;
mod collections;
mod typed_array;

mod throwable;
pub mod error_kind;
pub(crate) mod errors;
pub(crate) use throwable::*;


pub use io::*;
pub use hash::*;
pub use thread::*;
pub use collections::*;
pub use typed_array::*;



pub(crate) const fn saturating_cast(x: isize)-> usize {
  if x<0 {
    0usize
  } else {
    x as _
  }
}

pub(crate) const fn cast_or(int: isize,or: usize)-> usize {
  if int<0 || int as usize>or {
    or
  } else {
    int as _
  }
}

