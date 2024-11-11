
use crate::*;
use error_kind::*;
use macros::method;
use js_sys::Function;
use wasm_bindgen::prelude::*;



type Vector=*mut Vec<JsValue>;


#[wasm_bindgen]
pub fn new_vec()-> Vector {
  as_ptr!(Vec::new())
}

#[wasm_bindgen]
pub fn new_vec_with_capacity(capacity: isize)-> Vector {
  as_ptr!(Vec::with_capacity(capacity.unsigned_abs()))
}

#[wasm_bindgen]
pub fn vec_from_iter(vec: Vec<JsValue>)-> Vector {
  as_ptr!(vec)
}


//A

#[method]
pub unsafe fn vec_append(this: &mut Vec<JsValue>,other: *mut Vec<JsValue>)-> u8 {
  let other=other.as_mut().unwrap_throw();
  if this.capacity()+other.capacity()>isize::MAX as usize {
    CAPACITY_OVERFLOW
  } else {
    this.append(other);
    OK
  }
}


#[method]
pub fn vec_at(this: &Vec<JsValue>,mut index: isize)-> JsValue {
  abs_index!(index;this.len());

  nullable!(this.get(index as usize).cloned())
}

#[method]
pub fn vec_as_slice(this: &mut Vec<JsValue>)-> Slice {
  this.as_slice().into()
}



// B

#[method]
pub fn vec_binary_search_by(this: &Vec<JsValue>,f: Function)-> Result<usize,usize> {
  this.binary_search_by(|element| ordering!(
    call!{ f(&element) }
    .unchecked_into_f64()
  ))
}

// C


#[method]
pub fn vec_capacity(this: &Vec<JsValue>)-> usize {
  this.capacity()
}

#[method]
pub fn vec_chunks_by(this: &mut Vec<JsValue>,f: Function)-> Slice {
  chunks_to_slice! {
    this.chunk_by_mut(|x,y| call! { f(x,y) }.is_truthy())
  }
}

#[method]
pub fn vec_chunks(this: &mut Vec<JsValue>,chunk_size: isize)-> Slice {
  chunks_to_slice!{
    this.chunks_mut(chunk_size.unsigned_abs())
  }
}

#[method]
pub fn vec_chunks_exact(this: &mut Vec<JsValue>,chunk_size: isize)-> Slice {
  chunks_to_slice! {
    this.chunks_exact_mut(chunk_size.unsigned_abs())
  }
}

#[method]
pub fn vec_contains(this: &mut Vec<JsValue>,element: &JsValue)-> bool {
  this.contains(element)
}

#[method]
pub fn vec_clear(this: &mut Vec<JsValue>) {
  this.clear();
}

// D

#[method]
pub fn vec_dedup(this: &mut Vec<JsValue>,f: Function) {
  this.dedup_by(|a,b| call! { f(a,b) }.is_truthy())
}


#[method]
pub fn vec_fill(this: &mut Vec<JsValue>,element: JsValue) {
  this.fill(element);
}

#[method]
pub fn vec_fill_with(this: &mut Vec<JsValue>,f: Function) {
  this.fill_with(|| call!(f))
}

#[method]
pub fn vec_first(this: &mut Vec<JsValue>)-> JsValue {
  nullable!(this.first_mut().cloned())
}

// I

#[method]
pub fn vec_index(this: &Vec<JsValue>,i: isize)-> JsValue {
  if constraints!(i => this.len()) {
    wasm_bindgen::throw_val(INDEX_OUT_OF_BOUNDS.into())
  }

  this.get(i as usize).unwrap_throw().clone()
}

#[method]
pub fn vec_insert(this: &mut Vec<JsValue>,mut i: isize,element: JsValue)-> u8 {
  abs_index!(i;this.len());

  match constraints!(i => this.len()) {
    true=> {
      this.insert(i as _,element);
      OK
    },
    _=> {
      drop(element);
      INDEX_OUT_OF_BOUNDS
    }
  }
}


// L

#[method]
pub fn vec_last(this: &mut Vec<JsValue>)-> JsValue {
  nullable!(this.last_mut().cloned())
}

#[method]
pub fn vec_len(this: &Vec<JsValue>)-> usize {
  this.len()
}


// P

#[method]
pub fn vec_partition_point(this: &mut Vec<JsValue>,f: Function)-> usize {
  this.partition_point(|element| call! { f(element) }.is_truthy())
}

#[method]
pub fn vec_push(this: &mut Vec<JsValue>,element: JsValue)-> u8 {
  match this.capacity()==isize::MAX as _ {
    true=> {
      drop(element);
      CAPACITY_OVERFLOW
    }
    _=> {
      this.push(element);
      OK
    }
  }
}

#[method]
pub fn vec_push_front(this: &mut Vec<JsValue>,element: JsValue)-> u8 {
  match (this.len(),this.capacity()) {
    (_,0x7fffffff)=> {
      drop(element);
      return CAPACITY_OVERFLOW;
    }
    (0,_)=> this.push(element),
    _=> this.insert(0,element)
  }
  OK
}

#[method]
pub fn vec_pop(this: &mut Vec<JsValue>)-> JsValue {
  nullable!(this.pop())
}

#[method]
pub fn vec_pop_front(this: &mut Vec<JsValue>)-> JsValue {
  match this.len() {
    0=> JsValue::NULL,
    _=> this.remove(0)
  }
}


// R

#[method]
pub fn vec_rchunks(this: &mut Vec<JsValue>,chunk_size: isize)-> Slice {
  chunks_to_slice! {
    this.rchunks_mut(chunk_size.unsigned_abs())
  }
}

#[method]
pub fn vec_rchunks_exact(this: &mut Vec<JsValue>,chunk_size: isize)-> Slice {
  chunks_to_slice! {
    this.rchunks_exact_mut(chunk_size.unsigned_abs())
  }
}


#[method]
pub fn vec_remove(this: &mut Vec<JsValue>,index: isize)-> JsValue {
  checked_idx!{
    index;this.len() => this.remove(index as _)
  }
}

#[method]
pub fn vec_reserve(this: &mut Vec<JsValue>,additional: isize)-> u8 {
  match this.try_reserve(saturating_cast(additional)) {
    Ok(_)=> OK,
    _=> CAPACITY_OVERFLOW
  }
}

#[method]
pub fn vec_reserve_exact(this: &mut Vec<JsValue>,additional: isize)-> u8 {
  match this.try_reserve_exact(saturating_cast(additional)) {
    Ok(_)=> OK,
    _=> CAPACITY_OVERFLOW
  }
}

#[method]
pub fn vec_resize(this: &mut Vec<JsValue>,new_len: isize,val: JsValue) {
  this.resize(saturating_cast(new_len),val)
}

#[method]
pub fn vec_resize_with(this: &mut Vec<JsValue>,new_len: isize,f: Function) {
  this.resize_with(saturating_cast(new_len),|| call!(f))
}

#[method]
pub fn vec_retain(this: &mut Vec<JsValue>,f: Function) {
  this.retain_mut(|elem| call!(f(elem)).is_truthy())
}

#[method]
pub fn vec_reverse(this: &mut Vec<JsValue>) {
  this.reverse()
}

#[method]
pub fn vec_rotate_left(this: &mut Vec<JsValue>,mid: isize) {
  let mid=cast_or(mid,this.len());
  this.rotate_left(mid);
}

#[method]
pub fn vec_rotate_right(this: &mut Vec<JsValue>,k: isize) {
  let k=cast_or(k,this.len());
  this.rotate_right(k)
}

#[method]
pub fn vec_rsplit(this: &mut Vec<JsValue>,f: Function)-> Slice {
  chunks_to_slice! {
    this.rsplit_mut(|element| call! { f(element) }.is_truthy())
  }
}

#[method]
pub fn vec_rsplitn(this: &mut Vec<JsValue>,mut n: isize,f: Function)-> Vector {
  abs_index!(n;this.len());

  as_ptr!(
    this.rsplitn_mut(
      saturating_cast(n),
      |element| call! { f(element) }.is_truthy()
    ).collect::<Vec<_>>()
  ) as _
}


// S

#[method]
pub fn vec_set(this: &mut Vec<JsValue>,index: isize,element: JsValue)-> u8 {
  match constraints!(index => this.capacity()) {
    true=> {
      this[index as usize]=element;
      OK
    },
    _=> {
      drop(element);
      INDEX_OUT_OF_BOUNDS
    }
  }
}


#[method]
pub fn vec_splice_arr(this: &mut Vec<JsValue>,mut start: isize,count: isize,replace_with: Vec<JsValue>)-> Vector {
  abs_index!(start;this.len());
  let range=start as _..saturating_cast(count-1);

  match this.len() {
    0=> as_ptr!(this.drain(range).collect()),
    _=> as_ptr!(this.splice(range,replace_with).collect())
  }
}

#[wasm_bindgen]
pub unsafe fn vec_splice_vec(this: *mut Vec<JsValue>,start: isize,count: isize,replace_with: *mut Vec<JsValue>)-> Vector {
  vec_splice_arr(this,start,count,replace_with.as_mut().unwrap_throw().clone())
}


#[method]
pub fn vec_split_off(this: &mut Vec<JsValue>,mut at: isize)-> Vector {
  abs_index!(at;this.len());

  match constraints!(at => this.len()) {
    true=> as_ptr!(this.split_off(at as _)),
    _=> wasm_bindgen::throw_val(INDEX_OUT_OF_BOUNDS.into())
  }
}

#[method]
pub fn vec_shrink_to(this: &mut Vec<JsValue>,min_capacity: isize) {
  this.shrink_to(min_capacity.unsigned_abs())
}

#[method]
pub fn vec_shrink_to_fit(this: &mut Vec<JsValue>) {
  this.shrink_to_fit()
}

#[method]
pub fn vec_sort_by(this: &mut Vec<JsValue>,f: Function) {
  this.sort_by(|a,b| ordering!(
    call!{ f(a,b) }
    .unchecked_into_f64()
  ))
}

#[method]
pub fn vec_sort_unstable_by(this: &mut Vec<JsValue>,f: Function) {
  this.sort_unstable_by(|a,b| ordering!(
    call! { f(a,b) }
    .unchecked_into_f64()
  ))
}

#[method]
pub fn vec_split(this: &mut Vec<JsValue>,f: Function)-> Slice {
  chunks_to_slice! {
    this.split_mut(|element| call! { f(element) }.is_truthy())
  }
}

#[method]
pub fn vec_split_at(this: &mut Vec<JsValue>,mut mid: isize)-> Vec<Slice> {
  abs_index!(mid;this.len());
  let (split0,split1)=this.split_at_mut(mid as _);
  
  vec![split0.into(),split1.into()]
}

#[method]
pub fn vec_splitn(this: &mut Vec<JsValue>,n: isize,f: Function)-> Slice {
  chunks_to_slice! {
    this.splitn_mut(n.unsigned_abs(),|element| call! { f(element) }.is_truthy())
  }
}

#[method]
pub fn vec_swap(this: &mut Vec<JsValue>,a: isize,b: isize)-> u8 {
  let len=this.len();

  match constraints!(a => len) || constraints!(b => len) {
    true=> {
      this.swap(a as _,b as _);
      OK
    },
    _=> INDEX_OUT_OF_BOUNDS
  }
}

#[method]
pub fn vec_swap_remove(this: &mut Vec<JsValue>,index: isize)-> JsValue {
  checked_idx! {
    index;this.len() => this.swap_remove(index as _)
  }
}

// SAFETY: This function is only used inside the `Vec` class and not exposed to the user.
#[method]
pub unsafe fn vec_swap_with_slice(this: &mut Vec<JsValue>,ptr: *mut JsValue,len: usize) {
  this.swap_with_slice(std::slice::from_raw_parts_mut(ptr,len));
}

#[method]
pub fn vec_truncate(this: &mut Vec<JsValue>,len: isize) {
  this.truncate(len.unsigned_abs())
}

// W

#[method]
pub fn vec_windows(this: &mut Vec<JsValue>,size: isize)-> Slice {
  chunks_to_slice! {
    this.windows(size.unsigned_abs())
  }
}


#[wasm_bindgen]
pub unsafe fn drop_vec(ptr: Vector) {
  drop(Box::from_raw(ptr))
}

