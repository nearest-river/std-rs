/* tslint:disable */
/* eslint-disable */
/**
* @param {number} buf
* @param {any} _this
* @param {Function} read
* @returns {Promise<number>}
*/
export function read_to_end(buf: number, _this: any, read: Function): Promise<number>;
/**
* @param {any} _this
* @param {Function} read
* @param {Uint8Array} buf
* @returns {Promise<number>}
*/
export function read_exact(_this: any, read: Function, buf: Uint8Array): Promise<number>;
/**
* @param {number} buf
* @param {any} _this
* @param {Function} read
* @returns {number}
*/
export function read_to_end_sync(buf: number, _this: any, read: Function): number;
/**
* @param {any} _this
* @param {Function} read
* @param {Uint8Array} buf
*/
export function read_exact_sync(_this: any, read: Function, buf: Uint8Array): void;
/**
* @param {any} _this
* @param {Function} read
* @returns {Promise<string>}
*/
export function read_to_string(_this: any, read: Function): Promise<string>;
/**
* @param {any} _this
* @param {Function} read
* @returns {string}
*/
export function read_to_string_sync(_this: any, read: Function): string;
/**
* @param {number} ptr
* @param {string | undefined} [name]
* @returns {number}
*/
export function spawn_thread(ptr: number, name?: string): number;
/**
* @returns {number}
*/
export function available_parallelism(): number;
/**
* @returns {number}
*/
export function current_thread(): number;
/**
* @returns {boolean}
*/
export function thread_panicking(): boolean;
/**
*/
export function park_thread(): void;
/**
* @param {bigint} dur
*/
export function park_thread_with_timeout(dur: bigint): void;
/**
* @param {bigint} dur
*/
export function sleep(dur: bigint): void;
/**
*/
export function yield_now(): void;
/**
* @param {number} _this
* @returns {boolean}
*/
export function is_finished(_this: number): boolean;
/**
* @param {number} _this
* @returns {number}
*/
export function thread(_this: number): number;
/**
* @param {number} _this
*/
export function join(_this: number): void;
/**
* @param {number} _this
* @returns {bigint}
*/
export function thread_id(_this: number): bigint;
/**
* @param {number} _this
*/
export function thread_unpark(_this: number): void;
/**
* @param {number} _this
* @returns {string | undefined}
*/
export function thread_name(_this: number): string | undefined;
/**
* @param {number} this_ptr
*/
export function drop_thread(this_ptr: number): void;
/**
* @param {number} this_ptr
*/
export function drop_join_handle(this_ptr: number): void;
/**
* @returns {number}
*/
export function new_vec(): number;
/**
* @param {number} capacity
* @returns {number}
*/
export function new_vec_with_capacity(capacity: number): number;
/**
* @param {any[]} vec
* @returns {number}
*/
export function vec_from_iter(vec: any[]): number;
/**
* @param {number} _this
* @param {number} other
* @returns {number}
*/
export function vec_append(_this: number, other: number): number;
/**
* @param {number} _this
* @param {number} index
* @returns {any}
*/
export function vec_at(_this: number, index: number): any;
/**
* @param {number} _this
* @returns {Slice}
*/
export function vec_as_slice(_this: number): Slice;
/**
* @param {number} _this
* @param {Function} f
* @returns {number}
*/
export function vec_binary_search_by(_this: number, f: Function): number;
/**
* @param {number} _this
* @returns {number}
*/
export function vec_capacity(_this: number): number;
/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function vec_chunks_by(_this: number, f: Function): Slice;
/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function vec_chunks(_this: number, chunk_size: number): Slice;
/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function vec_chunks_exact(_this: number, chunk_size: number): Slice;
/**
* @param {number} _this
* @param {any} element
* @returns {boolean}
*/
export function vec_contains(_this: number, element: any): boolean;
/**
* @param {number} _this
*/
export function vec_clear(_this: number): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function vec_dedup(_this: number, f: Function): void;
/**
* @param {number} _this
* @param {any} element
*/
export function vec_fill(_this: number, element: any): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function vec_fill_with(_this: number, f: Function): void;
/**
* @param {number} _this
* @returns {any}
*/
export function vec_first(_this: number): any;
/**
* @param {number} _this
* @param {number} i
* @returns {any}
*/
export function vec_index(_this: number, i: number): any;
/**
* @param {number} _this
* @param {number} i
* @param {any} element
* @returns {number}
*/
export function vec_insert(_this: number, i: number, element: any): number;
/**
* @param {number} _this
* @returns {any}
*/
export function vec_last(_this: number): any;
/**
* @param {number} _this
* @returns {number}
*/
export function vec_len(_this: number): number;
/**
* @param {number} _this
* @param {Function} f
* @returns {number}
*/
export function vec_partition_point(_this: number, f: Function): number;
/**
* @param {number} _this
* @param {any} element
* @returns {number}
*/
export function vec_push(_this: number, element: any): number;
/**
* @param {number} _this
* @param {any} element
* @returns {number}
*/
export function vec_push_front(_this: number, element: any): number;
/**
* @param {number} _this
* @returns {any}
*/
export function vec_pop(_this: number): any;
/**
* @param {number} _this
* @returns {any}
*/
export function vec_pop_front(_this: number): any;
/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function vec_rchunks(_this: number, chunk_size: number): Slice;
/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function vec_rchunks_exact(_this: number, chunk_size: number): Slice;
/**
* @param {number} _this
* @param {number} index
* @returns {any}
*/
export function vec_remove(_this: number, index: number): any;
/**
* @param {number} _this
* @param {number} additional
* @returns {number}
*/
export function vec_reserve(_this: number, additional: number): number;
/**
* @param {number} _this
* @param {number} additional
* @returns {number}
*/
export function vec_reserve_exact(_this: number, additional: number): number;
/**
* @param {number} _this
* @param {number} new_len
* @param {any} val
*/
export function vec_resize(_this: number, new_len: number, val: any): void;
/**
* @param {number} _this
* @param {number} new_len
* @param {Function} f
*/
export function vec_resize_with(_this: number, new_len: number, f: Function): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function vec_retain(_this: number, f: Function): void;
/**
* @param {number} _this
*/
export function vec_reverse(_this: number): void;
/**
* @param {number} _this
* @param {number} mid
*/
export function vec_rotate_left(_this: number, mid: number): void;
/**
* @param {number} _this
* @param {number} k
*/
export function vec_rotate_right(_this: number, k: number): void;
/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function vec_rsplit(_this: number, f: Function): Slice;
/**
* @param {number} _this
* @param {number} n
* @param {Function} f
* @returns {number}
*/
export function vec_rsplitn(_this: number, n: number, f: Function): number;
/**
* @param {number} _this
* @param {number} index
* @param {any} element
* @returns {number}
*/
export function vec_set(_this: number, index: number, element: any): number;
/**
* @param {number} _this
* @param {number} start
* @param {number} count
* @param {any[]} replace_with
* @returns {number}
*/
export function vec_splice_arr(_this: number, start: number, count: number, replace_with: any[]): number;
/**
* @param {number} _this
* @param {number} start
* @param {number} count
* @param {number} replace_with
* @returns {number}
*/
export function vec_splice_vec(_this: number, start: number, count: number, replace_with: number): number;
/**
* @param {number} _this
* @param {number} at
* @returns {number}
*/
export function vec_split_off(_this: number, at: number): number;
/**
* @param {number} _this
* @param {number} min_capacity
*/
export function vec_shrink_to(_this: number, min_capacity: number): void;
/**
* @param {number} _this
*/
export function vec_shrink_to_fit(_this: number): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function vec_sort_by(_this: number, f: Function): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function vec_sort_unstable_by(_this: number, f: Function): void;
/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function vec_split(_this: number, f: Function): Slice;
/**
* @param {number} _this
* @param {number} mid
* @returns {(Slice)[]}
*/
export function vec_split_at(_this: number, mid: number): (Slice)[];
/**
* @param {number} _this
* @param {number} n
* @param {Function} f
* @returns {Slice}
*/
export function vec_splitn(_this: number, n: number, f: Function): Slice;
/**
* @param {number} _this
* @param {number} a
* @param {number} b
* @returns {number}
*/
export function vec_swap(_this: number, a: number, b: number): number;
/**
* @param {number} _this
* @param {number} index
* @returns {any}
*/
export function vec_swap_remove(_this: number, index: number): any;
/**
* @param {number} _this
* @param {number} ptr
* @param {number} len
*/
export function vec_swap_with_slice(_this: number, ptr: number, len: number): void;
/**
* @param {number} _this
* @param {number} len
*/
export function vec_truncate(_this: number, len: number): void;
/**
* @param {number} _this
* @param {number} size
* @returns {Slice}
*/
export function vec_windows(_this: number, size: number): Slice;
/**
* @param {number} ptr
*/
export function drop_vec(ptr: number): void;
/**
* @returns {number}
*/
export function _new(): number;
/**
* @returns {number}
*/
export function u8_new_vec(): number;
/**
* @param {number} capacity
* @returns {number}
*/
export function u8_new_vec_with_capacity(capacity: number): number;
/**
* @param {Iterator<any>} iter
* @param {number | undefined} [size_hint]
* @returns {number}
*/
export function u8_vec_from_iter(iter: Iterator<any>, size_hint?: number): number;
/**
* @param {Array<any>} arr
* @returns {number}
*/
export function u8_vec_from_jsarr(arr: Array<any>): number;
/**
* @param {Uint8Array} vec
* @returns {number}
*/
export function u8_vec_from_js_typed_array(vec: Uint8Array): number;
/**
* @param {number} _this
* @param {number} other
*/
export function u8_vec_append(_this: number, other: number): void;
/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function u8_vec_at(_this: number, index: number): number | undefined;
/**
* @param {number} _this
* @returns {number}
*/
export function u8_vec_as_ptr(_this: number): number;
/**
* @param {number} _this
* @returns {Slice}
*/
export function u8_vec_as_slice(_this: number): Slice;
/**
* @param {number} _this
* @param {Function} f
* @returns {number}
*/
export function u8_vec_binary_search_by(_this: number, f: Function): number;
/**
* @param {number} _this
* @returns {number}
*/
export function u8_vec_capacity(_this: number): number;
/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function u8_vec_chunks_by(_this: number, f: Function): Slice;
/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function u8_vec_chunks(_this: number, chunk_size: number): Slice;
/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function u8_vec_chunks_exact(_this: number, chunk_size: number): Slice;
/**
* @param {number} _this
* @param {number} element
* @returns {boolean}
*/
export function u8_vec_contains(_this: number, element: number): boolean;
/**
* @param {number} _this
*/
export function u8_vec_clear(_this: number): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function u8_vec_dedup(_this: number, f: Function): void;
/**
* @param {number} _this
* @param {number} element
*/
export function u8_vec_fill(_this: number, element: number): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function u8_vec_fill_with(_this: number, f: Function): void;
/**
* @param {number} _this
* @returns {number | undefined}
*/
export function u8_vec_first(_this: number): number | undefined;
/**
* @param {number} _this
* @param {number} i
* @returns {number}
*/
export function u8_vec_index(_this: number, i: number): number;
/**
* @param {number} _this
* @param {number} i
* @param {number} element
*/
export function u8_vec_insert(_this: number, i: number, element: number): void;
/**
* @param {number} _this
* @returns {number | undefined}
*/
export function u8_vec_last(_this: number): number | undefined;
/**
* @param {number} _this
* @returns {number}
*/
export function u8_vec_len(_this: number): number;
/**
* @param {number} _this
* @param {Function} f
* @returns {number}
*/
export function u8_vec_partition_point(_this: number, f: Function): number;
/**
* @param {number} _this
* @param {number} element
*/
export function u8_vec_push(_this: number, element: number): void;
/**
* @param {number} _this
* @param {number} element
*/
export function u8_vec_push_front(_this: number, element: number): void;
/**
* @param {number} _this
* @returns {number | undefined}
*/
export function u8_vec_pop(_this: number): number | undefined;
/**
* @param {number} _this
* @returns {number | undefined}
*/
export function u8_vec_pop_front(_this: number): number | undefined;
/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function u8_vec_rchunks(_this: number, chunk_size: number): Slice;
/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function u8_vec_rchunks_exact(_this: number, chunk_size: number): Slice;
/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function u8_vec_remove(_this: number, index: number): number | undefined;
/**
* @param {number} _this
* @param {number} additional
*/
export function u8_vec_reserve(_this: number, additional: number): void;
/**
* @param {number} _this
* @param {number} additional
*/
export function u8_vec_reserve_exact(_this: number, additional: number): void;
/**
* @param {number} _this
* @param {number} new_len
* @param {number} val
*/
export function u8_vec_resize(_this: number, new_len: number, val: number): void;
/**
* @param {number} _this
* @param {number} new_len
* @param {Function} f
*/
export function u8_vec_resize_with(_this: number, new_len: number, f: Function): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function u8_vec_retain(_this: number, f: Function): void;
/**
* @param {number} _this
*/
export function u8_vec_reverse(_this: number): void;
/**
* @param {number} _this
* @param {number} mid
*/
export function u8_vec_rotate_left(_this: number, mid: number): void;
/**
* @param {number} _this
* @param {number} k
*/
export function u8_vec_rotate_right(_this: number, k: number): void;
/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function u8_vec_rsplit(_this: number, f: Function): Slice;
/**
* @param {number} _this
* @param {number} n
* @param {Function} f
* @returns {number}
*/
export function u8_vec_rsplitn(_this: number, n: number, f: Function): number;
/**
* @param {number} _this
* @param {number} index
* @param {number} element
*/
export function u8_vec_set(_this: number, index: number, element: number): void;
/**
* @param {number} _this
* @param {number} start
* @param {number} count
* @param {Uint8Array} replace_with
* @returns {number}
*/
export function u8_vec_splice_arr(_this: number, start: number, count: number, replace_with: Uint8Array): number;
/**
* @param {number} _this
* @param {number} start
* @param {number} count
* @param {number} replace_with
* @returns {number}
*/
export function u8_vec_splice_vec(_this: number, start: number, count: number, replace_with: number): number;
/**
* @param {number} _this
* @param {number} at
* @returns {number}
*/
export function u8_vec_split_off(_this: number, at: number): number;
/**
* @param {number} _this
* @param {number} min_capacity
*/
export function u8_vec_shrink_to(_this: number, min_capacity: number): void;
/**
* @param {number} _this
*/
export function u8_vec_shrink_to_fit(_this: number): void;
/**
* @param {number} _this
* @param {number} start
* @param {number} end
* @returns {Uint8Array}
*/
export function u8_vec_slice(_this: number, start: number, end: number): Uint8Array;
/**
* @param {number} _this
* @param {Function} f
*/
export function u8_vec_sort_by(_this: number, f: Function): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function u8_vec_sort_unstable_by(_this: number, f: Function): void;
/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function u8_vec_split(_this: number, f: Function): Slice;
/**
* @param {number} _this
* @param {number} mid
* @returns {(Slice)[]}
*/
export function u8_vec_split_at(_this: number, mid: number): (Slice)[];
/**
* @param {number} _this
* @param {number} n
* @param {Function} f
* @returns {Slice}
*/
export function u8_vec_splitn(_this: number, n: number, f: Function): Slice;
/**
* @param {number} _this
* @param {number} a
* @param {number} b
*/
export function u8_vec_swap(_this: number, a: number, b: number): void;
/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function u8_vec_swap_remove(_this: number, index: number): number | undefined;
/**
* @param {number} _this
* @param {number} ptr
* @param {number} len
*/
export function u8_vec_swap_with_slice(_this: number, ptr: number, len: number): void;
/**
* @param {number} _this
* @param {number} len
*/
export function u8_vec_truncate(_this: number, len: number): void;
/**
* @param {number} _this
* @param {number} size
* @returns {Slice}
*/
export function u8_vec_windows(_this: number, size: number): Slice;
/**
* @param {number} _this
* @returns {Uint8Array}
*/
export function u8_view(_this: number): Uint8Array;
/**
* @param {number} ptr
*/
export function u8_drop_vec(ptr: number): void;
/**
* @returns {number}
*/
export function u16_new_vec(): number;
/**
* @param {number} capacity
* @returns {number}
*/
export function u16_new_vec_with_capacity(capacity: number): number;
/**
* @param {Iterator<any>} iter
* @param {number | undefined} [size_hint]
* @returns {number}
*/
export function u16_vec_from_iter(iter: Iterator<any>, size_hint?: number): number;
/**
* @param {Array<any>} arr
* @returns {number}
*/
export function u16_vec_from_jsarr(arr: Array<any>): number;
/**
* @param {Uint16Array} vec
* @returns {number}
*/
export function u16_vec_from_js_typed_array(vec: Uint16Array): number;
/**
* @param {number} _this
* @param {number} other
*/
export function u16_vec_append(_this: number, other: number): void;
/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function u16_vec_at(_this: number, index: number): number | undefined;
/**
* @param {number} _this
* @returns {number}
*/
export function u16_vec_as_ptr(_this: number): number;
/**
* @param {number} _this
* @returns {Slice}
*/
export function u16_vec_as_slice(_this: number): Slice;
/**
* @param {number} _this
* @param {Function} f
* @returns {number}
*/
export function u16_vec_binary_search_by(_this: number, f: Function): number;
/**
* @param {number} _this
* @returns {number}
*/
export function u16_vec_capacity(_this: number): number;
/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function u16_vec_chunks_by(_this: number, f: Function): Slice;
/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function u16_vec_chunks(_this: number, chunk_size: number): Slice;
/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function u16_vec_chunks_exact(_this: number, chunk_size: number): Slice;
/**
* @param {number} _this
* @param {number} element
* @returns {boolean}
*/
export function u16_vec_contains(_this: number, element: number): boolean;
/**
* @param {number} _this
*/
export function u16_vec_clear(_this: number): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function u16_vec_dedup(_this: number, f: Function): void;
/**
* @param {number} _this
* @param {number} element
*/
export function u16_vec_fill(_this: number, element: number): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function u16_vec_fill_with(_this: number, f: Function): void;
/**
* @param {number} _this
* @returns {number | undefined}
*/
export function u16_vec_first(_this: number): number | undefined;
/**
* @param {number} _this
* @param {number} i
* @returns {number}
*/
export function u16_vec_index(_this: number, i: number): number;
/**
* @param {number} _this
* @param {number} i
* @param {number} element
*/
export function u16_vec_insert(_this: number, i: number, element: number): void;
/**
* @param {number} _this
* @returns {number | undefined}
*/
export function u16_vec_last(_this: number): number | undefined;
/**
* @param {number} _this
* @returns {number}
*/
export function u16_vec_len(_this: number): number;
/**
* @param {number} _this
* @param {Function} f
* @returns {number}
*/
export function u16_vec_partition_point(_this: number, f: Function): number;
/**
* @param {number} _this
* @param {number} element
*/
export function u16_vec_push(_this: number, element: number): void;
/**
* @param {number} _this
* @param {number} element
*/
export function u16_vec_push_front(_this: number, element: number): void;
/**
* @param {number} _this
* @returns {number | undefined}
*/
export function u16_vec_pop(_this: number): number | undefined;
/**
* @param {number} _this
* @returns {number | undefined}
*/
export function u16_vec_pop_front(_this: number): number | undefined;
/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function u16_vec_rchunks(_this: number, chunk_size: number): Slice;
/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function u16_vec_rchunks_exact(_this: number, chunk_size: number): Slice;
/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function u16_vec_remove(_this: number, index: number): number | undefined;
/**
* @param {number} _this
* @param {number} additional
*/
export function u16_vec_reserve(_this: number, additional: number): void;
/**
* @param {number} _this
* @param {number} additional
*/
export function u16_vec_reserve_exact(_this: number, additional: number): void;
/**
* @param {number} _this
* @param {number} new_len
* @param {number} val
*/
export function u16_vec_resize(_this: number, new_len: number, val: number): void;
/**
* @param {number} _this
* @param {number} new_len
* @param {Function} f
*/
export function u16_vec_resize_with(_this: number, new_len: number, f: Function): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function u16_vec_retain(_this: number, f: Function): void;
/**
* @param {number} _this
*/
export function u16_vec_reverse(_this: number): void;
/**
* @param {number} _this
* @param {number} mid
*/
export function u16_vec_rotate_left(_this: number, mid: number): void;
/**
* @param {number} _this
* @param {number} k
*/
export function u16_vec_rotate_right(_this: number, k: number): void;
/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function u16_vec_rsplit(_this: number, f: Function): Slice;
/**
* @param {number} _this
* @param {number} n
* @param {Function} f
* @returns {number}
*/
export function u16_vec_rsplitn(_this: number, n: number, f: Function): number;
/**
* @param {number} _this
* @param {number} index
* @param {number} element
*/
export function u16_vec_set(_this: number, index: number, element: number): void;
/**
* @param {number} _this
* @param {number} start
* @param {number} count
* @param {Uint16Array} replace_with
* @returns {number}
*/
export function u16_vec_splice_arr(_this: number, start: number, count: number, replace_with: Uint16Array): number;
/**
* @param {number} _this
* @param {number} start
* @param {number} count
* @param {number} replace_with
* @returns {number}
*/
export function u16_vec_splice_vec(_this: number, start: number, count: number, replace_with: number): number;
/**
* @param {number} _this
* @param {number} at
* @returns {number}
*/
export function u16_vec_split_off(_this: number, at: number): number;
/**
* @param {number} _this
* @param {number} min_capacity
*/
export function u16_vec_shrink_to(_this: number, min_capacity: number): void;
/**
* @param {number} _this
*/
export function u16_vec_shrink_to_fit(_this: number): void;
/**
* @param {number} _this
* @param {number} start
* @param {number} end
* @returns {Uint16Array}
*/
export function u16_vec_slice(_this: number, start: number, end: number): Uint16Array;
/**
* @param {number} _this
* @param {Function} f
*/
export function u16_vec_sort_by(_this: number, f: Function): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function u16_vec_sort_unstable_by(_this: number, f: Function): void;
/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function u16_vec_split(_this: number, f: Function): Slice;
/**
* @param {number} _this
* @param {number} mid
* @returns {(Slice)[]}
*/
export function u16_vec_split_at(_this: number, mid: number): (Slice)[];
/**
* @param {number} _this
* @param {number} n
* @param {Function} f
* @returns {Slice}
*/
export function u16_vec_splitn(_this: number, n: number, f: Function): Slice;
/**
* @param {number} _this
* @param {number} a
* @param {number} b
*/
export function u16_vec_swap(_this: number, a: number, b: number): void;
/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function u16_vec_swap_remove(_this: number, index: number): number | undefined;
/**
* @param {number} _this
* @param {number} ptr
* @param {number} len
*/
export function u16_vec_swap_with_slice(_this: number, ptr: number, len: number): void;
/**
* @param {number} _this
* @param {number} len
*/
export function u16_vec_truncate(_this: number, len: number): void;
/**
* @param {number} _this
* @param {number} size
* @returns {Slice}
*/
export function u16_vec_windows(_this: number, size: number): Slice;
/**
* @param {number} _this
* @returns {Uint16Array}
*/
export function u16_view(_this: number): Uint16Array;
/**
* @param {number} ptr
*/
export function u16_drop_vec(ptr: number): void;
/**
* @returns {number}
*/
export function u32_new_vec(): number;
/**
* @param {number} capacity
* @returns {number}
*/
export function u32_new_vec_with_capacity(capacity: number): number;
/**
* @param {Iterator<any>} iter
* @param {number | undefined} [size_hint]
* @returns {number}
*/
export function u32_vec_from_iter(iter: Iterator<any>, size_hint?: number): number;
/**
* @param {Array<any>} arr
* @returns {number}
*/
export function u32_vec_from_jsarr(arr: Array<any>): number;
/**
* @param {Uint32Array} vec
* @returns {number}
*/
export function u32_vec_from_js_typed_array(vec: Uint32Array): number;
/**
* @param {number} _this
* @param {number} other
*/
export function u32_vec_append(_this: number, other: number): void;
/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function u32_vec_at(_this: number, index: number): number | undefined;
/**
* @param {number} _this
* @returns {number}
*/
export function u32_vec_as_ptr(_this: number): number;
/**
* @param {number} _this
* @returns {Slice}
*/
export function u32_vec_as_slice(_this: number): Slice;
/**
* @param {number} _this
* @param {Function} f
* @returns {number}
*/
export function u32_vec_binary_search_by(_this: number, f: Function): number;
/**
* @param {number} _this
* @returns {number}
*/
export function u32_vec_capacity(_this: number): number;
/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function u32_vec_chunks_by(_this: number, f: Function): Slice;
/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function u32_vec_chunks(_this: number, chunk_size: number): Slice;
/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function u32_vec_chunks_exact(_this: number, chunk_size: number): Slice;
/**
* @param {number} _this
* @param {number} element
* @returns {boolean}
*/
export function u32_vec_contains(_this: number, element: number): boolean;
/**
* @param {number} _this
*/
export function u32_vec_clear(_this: number): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function u32_vec_dedup(_this: number, f: Function): void;
/**
* @param {number} _this
* @param {number} element
*/
export function u32_vec_fill(_this: number, element: number): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function u32_vec_fill_with(_this: number, f: Function): void;
/**
* @param {number} _this
* @returns {number | undefined}
*/
export function u32_vec_first(_this: number): number | undefined;
/**
* @param {number} _this
* @param {number} i
* @returns {number}
*/
export function u32_vec_index(_this: number, i: number): number;
/**
* @param {number} _this
* @param {number} i
* @param {number} element
*/
export function u32_vec_insert(_this: number, i: number, element: number): void;
/**
* @param {number} _this
* @returns {number | undefined}
*/
export function u32_vec_last(_this: number): number | undefined;
/**
* @param {number} _this
* @returns {number}
*/
export function u32_vec_len(_this: number): number;
/**
* @param {number} _this
* @param {Function} f
* @returns {number}
*/
export function u32_vec_partition_point(_this: number, f: Function): number;
/**
* @param {number} _this
* @param {number} element
*/
export function u32_vec_push(_this: number, element: number): void;
/**
* @param {number} _this
* @param {number} element
*/
export function u32_vec_push_front(_this: number, element: number): void;
/**
* @param {number} _this
* @returns {number | undefined}
*/
export function u32_vec_pop(_this: number): number | undefined;
/**
* @param {number} _this
* @returns {number | undefined}
*/
export function u32_vec_pop_front(_this: number): number | undefined;
/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function u32_vec_rchunks(_this: number, chunk_size: number): Slice;
/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function u32_vec_rchunks_exact(_this: number, chunk_size: number): Slice;
/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function u32_vec_remove(_this: number, index: number): number | undefined;
/**
* @param {number} _this
* @param {number} additional
*/
export function u32_vec_reserve(_this: number, additional: number): void;
/**
* @param {number} _this
* @param {number} additional
*/
export function u32_vec_reserve_exact(_this: number, additional: number): void;
/**
* @param {number} _this
* @param {number} new_len
* @param {number} val
*/
export function u32_vec_resize(_this: number, new_len: number, val: number): void;
/**
* @param {number} _this
* @param {number} new_len
* @param {Function} f
*/
export function u32_vec_resize_with(_this: number, new_len: number, f: Function): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function u32_vec_retain(_this: number, f: Function): void;
/**
* @param {number} _this
*/
export function u32_vec_reverse(_this: number): void;
/**
* @param {number} _this
* @param {number} mid
*/
export function u32_vec_rotate_left(_this: number, mid: number): void;
/**
* @param {number} _this
* @param {number} k
*/
export function u32_vec_rotate_right(_this: number, k: number): void;
/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function u32_vec_rsplit(_this: number, f: Function): Slice;
/**
* @param {number} _this
* @param {number} n
* @param {Function} f
* @returns {number}
*/
export function u32_vec_rsplitn(_this: number, n: number, f: Function): number;
/**
* @param {number} _this
* @param {number} index
* @param {number} element
*/
export function u32_vec_set(_this: number, index: number, element: number): void;
/**
* @param {number} _this
* @param {number} start
* @param {number} count
* @param {Uint32Array} replace_with
* @returns {number}
*/
export function u32_vec_splice_arr(_this: number, start: number, count: number, replace_with: Uint32Array): number;
/**
* @param {number} _this
* @param {number} start
* @param {number} count
* @param {number} replace_with
* @returns {number}
*/
export function u32_vec_splice_vec(_this: number, start: number, count: number, replace_with: number): number;
/**
* @param {number} _this
* @param {number} at
* @returns {number}
*/
export function u32_vec_split_off(_this: number, at: number): number;
/**
* @param {number} _this
* @param {number} min_capacity
*/
export function u32_vec_shrink_to(_this: number, min_capacity: number): void;
/**
* @param {number} _this
*/
export function u32_vec_shrink_to_fit(_this: number): void;
/**
* @param {number} _this
* @param {number} start
* @param {number} end
* @returns {Uint32Array}
*/
export function u32_vec_slice(_this: number, start: number, end: number): Uint32Array;
/**
* @param {number} _this
* @param {Function} f
*/
export function u32_vec_sort_by(_this: number, f: Function): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function u32_vec_sort_unstable_by(_this: number, f: Function): void;
/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function u32_vec_split(_this: number, f: Function): Slice;
/**
* @param {number} _this
* @param {number} mid
* @returns {(Slice)[]}
*/
export function u32_vec_split_at(_this: number, mid: number): (Slice)[];
/**
* @param {number} _this
* @param {number} n
* @param {Function} f
* @returns {Slice}
*/
export function u32_vec_splitn(_this: number, n: number, f: Function): Slice;
/**
* @param {number} _this
* @param {number} a
* @param {number} b
*/
export function u32_vec_swap(_this: number, a: number, b: number): void;
/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function u32_vec_swap_remove(_this: number, index: number): number | undefined;
/**
* @param {number} _this
* @param {number} ptr
* @param {number} len
*/
export function u32_vec_swap_with_slice(_this: number, ptr: number, len: number): void;
/**
* @param {number} _this
* @param {number} len
*/
export function u32_vec_truncate(_this: number, len: number): void;
/**
* @param {number} _this
* @param {number} size
* @returns {Slice}
*/
export function u32_vec_windows(_this: number, size: number): Slice;
/**
* @param {number} _this
* @returns {Uint32Array}
*/
export function u32_view(_this: number): Uint32Array;
/**
* @param {number} ptr
*/
export function u32_drop_vec(ptr: number): void;
/**
* @returns {number}
*/
export function u64_new_vec(): number;
/**
* @param {number} capacity
* @returns {number}
*/
export function u64_new_vec_with_capacity(capacity: number): number;
/**
* @param {Iterator<any>} iter
* @param {number | undefined} [size_hint]
* @returns {number}
*/
export function u64_vec_from_iter(iter: Iterator<any>, size_hint?: number): number;
/**
* @param {Array<any>} arr
* @returns {number}
*/
export function u64_vec_from_jsarr(arr: Array<any>): number;
/**
* @param {BigUint64Array} vec
* @returns {number}
*/
export function u64_vec_from_js_typed_array(vec: BigUint64Array): number;
/**
* @param {number} _this
* @param {number} other
*/
export function u64_vec_append(_this: number, other: number): void;
/**
* @param {number} _this
* @param {number} index
* @returns {bigint | undefined}
*/
export function u64_vec_at(_this: number, index: number): bigint | undefined;
/**
* @param {number} _this
* @returns {number}
*/
export function u64_vec_as_ptr(_this: number): number;
/**
* @param {number} _this
* @returns {Slice}
*/
export function u64_vec_as_slice(_this: number): Slice;
/**
* @param {number} _this
* @param {Function} f
* @returns {number}
*/
export function u64_vec_binary_search_by(_this: number, f: Function): number;
/**
* @param {number} _this
* @returns {number}
*/
export function u64_vec_capacity(_this: number): number;
/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function u64_vec_chunks_by(_this: number, f: Function): Slice;
/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function u64_vec_chunks(_this: number, chunk_size: number): Slice;
/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function u64_vec_chunks_exact(_this: number, chunk_size: number): Slice;
/**
* @param {number} _this
* @param {bigint} element
* @returns {boolean}
*/
export function u64_vec_contains(_this: number, element: bigint): boolean;
/**
* @param {number} _this
*/
export function u64_vec_clear(_this: number): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function u64_vec_dedup(_this: number, f: Function): void;
/**
* @param {number} _this
* @param {bigint} element
*/
export function u64_vec_fill(_this: number, element: bigint): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function u64_vec_fill_with(_this: number, f: Function): void;
/**
* @param {number} _this
* @returns {bigint | undefined}
*/
export function u64_vec_first(_this: number): bigint | undefined;
/**
* @param {number} _this
* @param {number} i
* @returns {bigint}
*/
export function u64_vec_index(_this: number, i: number): bigint;
/**
* @param {number} _this
* @param {number} i
* @param {bigint} element
*/
export function u64_vec_insert(_this: number, i: number, element: bigint): void;
/**
* @param {number} _this
* @returns {bigint | undefined}
*/
export function u64_vec_last(_this: number): bigint | undefined;
/**
* @param {number} _this
* @returns {number}
*/
export function u64_vec_len(_this: number): number;
/**
* @param {number} _this
* @param {Function} f
* @returns {number}
*/
export function u64_vec_partition_point(_this: number, f: Function): number;
/**
* @param {number} _this
* @param {bigint} element
*/
export function u64_vec_push(_this: number, element: bigint): void;
/**
* @param {number} _this
* @param {bigint} element
*/
export function u64_vec_push_front(_this: number, element: bigint): void;
/**
* @param {number} _this
* @returns {bigint | undefined}
*/
export function u64_vec_pop(_this: number): bigint | undefined;
/**
* @param {number} _this
* @returns {bigint | undefined}
*/
export function u64_vec_pop_front(_this: number): bigint | undefined;
/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function u64_vec_rchunks(_this: number, chunk_size: number): Slice;
/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function u64_vec_rchunks_exact(_this: number, chunk_size: number): Slice;
/**
* @param {number} _this
* @param {number} index
* @returns {bigint | undefined}
*/
export function u64_vec_remove(_this: number, index: number): bigint | undefined;
/**
* @param {number} _this
* @param {number} additional
*/
export function u64_vec_reserve(_this: number, additional: number): void;
/**
* @param {number} _this
* @param {number} additional
*/
export function u64_vec_reserve_exact(_this: number, additional: number): void;
/**
* @param {number} _this
* @param {number} new_len
* @param {bigint} val
*/
export function u64_vec_resize(_this: number, new_len: number, val: bigint): void;
/**
* @param {number} _this
* @param {number} new_len
* @param {Function} f
*/
export function u64_vec_resize_with(_this: number, new_len: number, f: Function): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function u64_vec_retain(_this: number, f: Function): void;
/**
* @param {number} _this
*/
export function u64_vec_reverse(_this: number): void;
/**
* @param {number} _this
* @param {number} mid
*/
export function u64_vec_rotate_left(_this: number, mid: number): void;
/**
* @param {number} _this
* @param {number} k
*/
export function u64_vec_rotate_right(_this: number, k: number): void;
/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function u64_vec_rsplit(_this: number, f: Function): Slice;
/**
* @param {number} _this
* @param {number} n
* @param {Function} f
* @returns {number}
*/
export function u64_vec_rsplitn(_this: number, n: number, f: Function): number;
/**
* @param {number} _this
* @param {number} index
* @param {bigint} element
*/
export function u64_vec_set(_this: number, index: number, element: bigint): void;
/**
* @param {number} _this
* @param {number} start
* @param {number} count
* @param {BigUint64Array} replace_with
* @returns {number}
*/
export function u64_vec_splice_arr(_this: number, start: number, count: number, replace_with: BigUint64Array): number;
/**
* @param {number} _this
* @param {number} start
* @param {number} count
* @param {number} replace_with
* @returns {number}
*/
export function u64_vec_splice_vec(_this: number, start: number, count: number, replace_with: number): number;
/**
* @param {number} _this
* @param {number} at
* @returns {number}
*/
export function u64_vec_split_off(_this: number, at: number): number;
/**
* @param {number} _this
* @param {number} min_capacity
*/
export function u64_vec_shrink_to(_this: number, min_capacity: number): void;
/**
* @param {number} _this
*/
export function u64_vec_shrink_to_fit(_this: number): void;
/**
* @param {number} _this
* @param {number} start
* @param {number} end
* @returns {BigUint64Array}
*/
export function u64_vec_slice(_this: number, start: number, end: number): BigUint64Array;
/**
* @param {number} _this
* @param {Function} f
*/
export function u64_vec_sort_by(_this: number, f: Function): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function u64_vec_sort_unstable_by(_this: number, f: Function): void;
/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function u64_vec_split(_this: number, f: Function): Slice;
/**
* @param {number} _this
* @param {number} mid
* @returns {(Slice)[]}
*/
export function u64_vec_split_at(_this: number, mid: number): (Slice)[];
/**
* @param {number} _this
* @param {number} n
* @param {Function} f
* @returns {Slice}
*/
export function u64_vec_splitn(_this: number, n: number, f: Function): Slice;
/**
* @param {number} _this
* @param {number} a
* @param {number} b
*/
export function u64_vec_swap(_this: number, a: number, b: number): void;
/**
* @param {number} _this
* @param {number} index
* @returns {bigint | undefined}
*/
export function u64_vec_swap_remove(_this: number, index: number): bigint | undefined;
/**
* @param {number} _this
* @param {number} ptr
* @param {number} len
*/
export function u64_vec_swap_with_slice(_this: number, ptr: number, len: number): void;
/**
* @param {number} _this
* @param {number} len
*/
export function u64_vec_truncate(_this: number, len: number): void;
/**
* @param {number} _this
* @param {number} size
* @returns {Slice}
*/
export function u64_vec_windows(_this: number, size: number): Slice;
/**
* @param {number} _this
* @returns {BigUint64Array}
*/
export function u64_view(_this: number): BigUint64Array;
/**
* @param {number} ptr
*/
export function u64_drop_vec(ptr: number): void;
/**
* @returns {number}
*/
export function i8_new_vec(): number;
/**
* @param {number} capacity
* @returns {number}
*/
export function i8_new_vec_with_capacity(capacity: number): number;
/**
* @param {Iterator<any>} iter
* @param {number | undefined} [size_hint]
* @returns {number}
*/
export function i8_vec_from_iter(iter: Iterator<any>, size_hint?: number): number;
/**
* @param {Array<any>} arr
* @returns {number}
*/
export function i8_vec_from_jsarr(arr: Array<any>): number;
/**
* @param {Int8Array} vec
* @returns {number}
*/
export function i8_vec_from_js_typed_array(vec: Int8Array): number;
/**
* @param {number} _this
* @param {number} other
*/
export function i8_vec_append(_this: number, other: number): void;
/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function i8_vec_at(_this: number, index: number): number | undefined;
/**
* @param {number} _this
* @returns {number}
*/
export function i8_vec_as_ptr(_this: number): number;
/**
* @param {number} _this
* @returns {Slice}
*/
export function i8_vec_as_slice(_this: number): Slice;
/**
* @param {number} _this
* @param {Function} f
* @returns {number}
*/
export function i8_vec_binary_search_by(_this: number, f: Function): number;
/**
* @param {number} _this
* @returns {number}
*/
export function i8_vec_capacity(_this: number): number;
/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function i8_vec_chunks_by(_this: number, f: Function): Slice;
/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function i8_vec_chunks(_this: number, chunk_size: number): Slice;
/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function i8_vec_chunks_exact(_this: number, chunk_size: number): Slice;
/**
* @param {number} _this
* @param {number} element
* @returns {boolean}
*/
export function i8_vec_contains(_this: number, element: number): boolean;
/**
* @param {number} _this
*/
export function i8_vec_clear(_this: number): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function i8_vec_dedup(_this: number, f: Function): void;
/**
* @param {number} _this
* @param {number} element
*/
export function i8_vec_fill(_this: number, element: number): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function i8_vec_fill_with(_this: number, f: Function): void;
/**
* @param {number} _this
* @returns {number | undefined}
*/
export function i8_vec_first(_this: number): number | undefined;
/**
* @param {number} _this
* @param {number} i
* @returns {number}
*/
export function i8_vec_index(_this: number, i: number): number;
/**
* @param {number} _this
* @param {number} i
* @param {number} element
*/
export function i8_vec_insert(_this: number, i: number, element: number): void;
/**
* @param {number} _this
* @returns {number | undefined}
*/
export function i8_vec_last(_this: number): number | undefined;
/**
* @param {number} _this
* @returns {number}
*/
export function i8_vec_len(_this: number): number;
/**
* @param {number} _this
* @param {Function} f
* @returns {number}
*/
export function i8_vec_partition_point(_this: number, f: Function): number;
/**
* @param {number} _this
* @param {number} element
*/
export function i8_vec_push(_this: number, element: number): void;
/**
* @param {number} _this
* @param {number} element
*/
export function i8_vec_push_front(_this: number, element: number): void;
/**
* @param {number} _this
* @returns {number | undefined}
*/
export function i8_vec_pop(_this: number): number | undefined;
/**
* @param {number} _this
* @returns {number | undefined}
*/
export function i8_vec_pop_front(_this: number): number | undefined;
/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function i8_vec_rchunks(_this: number, chunk_size: number): Slice;
/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function i8_vec_rchunks_exact(_this: number, chunk_size: number): Slice;
/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function i8_vec_remove(_this: number, index: number): number | undefined;
/**
* @param {number} _this
* @param {number} additional
*/
export function i8_vec_reserve(_this: number, additional: number): void;
/**
* @param {number} _this
* @param {number} additional
*/
export function i8_vec_reserve_exact(_this: number, additional: number): void;
/**
* @param {number} _this
* @param {number} new_len
* @param {number} val
*/
export function i8_vec_resize(_this: number, new_len: number, val: number): void;
/**
* @param {number} _this
* @param {number} new_len
* @param {Function} f
*/
export function i8_vec_resize_with(_this: number, new_len: number, f: Function): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function i8_vec_retain(_this: number, f: Function): void;
/**
* @param {number} _this
*/
export function i8_vec_reverse(_this: number): void;
/**
* @param {number} _this
* @param {number} mid
*/
export function i8_vec_rotate_left(_this: number, mid: number): void;
/**
* @param {number} _this
* @param {number} k
*/
export function i8_vec_rotate_right(_this: number, k: number): void;
/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function i8_vec_rsplit(_this: number, f: Function): Slice;
/**
* @param {number} _this
* @param {number} n
* @param {Function} f
* @returns {number}
*/
export function i8_vec_rsplitn(_this: number, n: number, f: Function): number;
/**
* @param {number} _this
* @param {number} index
* @param {number} element
*/
export function i8_vec_set(_this: number, index: number, element: number): void;
/**
* @param {number} _this
* @param {number} start
* @param {number} count
* @param {Int8Array} replace_with
* @returns {number}
*/
export function i8_vec_splice_arr(_this: number, start: number, count: number, replace_with: Int8Array): number;
/**
* @param {number} _this
* @param {number} start
* @param {number} count
* @param {number} replace_with
* @returns {number}
*/
export function i8_vec_splice_vec(_this: number, start: number, count: number, replace_with: number): number;
/**
* @param {number} _this
* @param {number} at
* @returns {number}
*/
export function i8_vec_split_off(_this: number, at: number): number;
/**
* @param {number} _this
* @param {number} min_capacity
*/
export function i8_vec_shrink_to(_this: number, min_capacity: number): void;
/**
* @param {number} _this
*/
export function i8_vec_shrink_to_fit(_this: number): void;
/**
* @param {number} _this
* @param {number} start
* @param {number} end
* @returns {Int8Array}
*/
export function i8_vec_slice(_this: number, start: number, end: number): Int8Array;
/**
* @param {number} _this
* @param {Function} f
*/
export function i8_vec_sort_by(_this: number, f: Function): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function i8_vec_sort_unstable_by(_this: number, f: Function): void;
/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function i8_vec_split(_this: number, f: Function): Slice;
/**
* @param {number} _this
* @param {number} mid
* @returns {(Slice)[]}
*/
export function i8_vec_split_at(_this: number, mid: number): (Slice)[];
/**
* @param {number} _this
* @param {number} n
* @param {Function} f
* @returns {Slice}
*/
export function i8_vec_splitn(_this: number, n: number, f: Function): Slice;
/**
* @param {number} _this
* @param {number} a
* @param {number} b
*/
export function i8_vec_swap(_this: number, a: number, b: number): void;
/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function i8_vec_swap_remove(_this: number, index: number): number | undefined;
/**
* @param {number} _this
* @param {number} ptr
* @param {number} len
*/
export function i8_vec_swap_with_slice(_this: number, ptr: number, len: number): void;
/**
* @param {number} _this
* @param {number} len
*/
export function i8_vec_truncate(_this: number, len: number): void;
/**
* @param {number} _this
* @param {number} size
* @returns {Slice}
*/
export function i8_vec_windows(_this: number, size: number): Slice;
/**
* @param {number} _this
* @returns {Int8Array}
*/
export function i8_view(_this: number): Int8Array;
/**
* @param {number} ptr
*/
export function i8_drop_vec(ptr: number): void;
/**
* @returns {number}
*/
export function i16_new_vec(): number;
/**
* @param {number} capacity
* @returns {number}
*/
export function i16_new_vec_with_capacity(capacity: number): number;
/**
* @param {Iterator<any>} iter
* @param {number | undefined} [size_hint]
* @returns {number}
*/
export function i16_vec_from_iter(iter: Iterator<any>, size_hint?: number): number;
/**
* @param {Array<any>} arr
* @returns {number}
*/
export function i16_vec_from_jsarr(arr: Array<any>): number;
/**
* @param {Int16Array} vec
* @returns {number}
*/
export function i16_vec_from_js_typed_array(vec: Int16Array): number;
/**
* @param {number} _this
* @param {number} other
*/
export function i16_vec_append(_this: number, other: number): void;
/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function i16_vec_at(_this: number, index: number): number | undefined;
/**
* @param {number} _this
* @returns {number}
*/
export function i16_vec_as_ptr(_this: number): number;
/**
* @param {number} _this
* @returns {Slice}
*/
export function i16_vec_as_slice(_this: number): Slice;
/**
* @param {number} _this
* @param {Function} f
* @returns {number}
*/
export function i16_vec_binary_search_by(_this: number, f: Function): number;
/**
* @param {number} _this
* @returns {number}
*/
export function i16_vec_capacity(_this: number): number;
/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function i16_vec_chunks_by(_this: number, f: Function): Slice;
/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function i16_vec_chunks(_this: number, chunk_size: number): Slice;
/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function i16_vec_chunks_exact(_this: number, chunk_size: number): Slice;
/**
* @param {number} _this
* @param {number} element
* @returns {boolean}
*/
export function i16_vec_contains(_this: number, element: number): boolean;
/**
* @param {number} _this
*/
export function i16_vec_clear(_this: number): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function i16_vec_dedup(_this: number, f: Function): void;
/**
* @param {number} _this
* @param {number} element
*/
export function i16_vec_fill(_this: number, element: number): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function i16_vec_fill_with(_this: number, f: Function): void;
/**
* @param {number} _this
* @returns {number | undefined}
*/
export function i16_vec_first(_this: number): number | undefined;
/**
* @param {number} _this
* @param {number} i
* @returns {number}
*/
export function i16_vec_index(_this: number, i: number): number;
/**
* @param {number} _this
* @param {number} i
* @param {number} element
*/
export function i16_vec_insert(_this: number, i: number, element: number): void;
/**
* @param {number} _this
* @returns {number | undefined}
*/
export function i16_vec_last(_this: number): number | undefined;
/**
* @param {number} _this
* @returns {number}
*/
export function i16_vec_len(_this: number): number;
/**
* @param {number} _this
* @param {Function} f
* @returns {number}
*/
export function i16_vec_partition_point(_this: number, f: Function): number;
/**
* @param {number} _this
* @param {number} element
*/
export function i16_vec_push(_this: number, element: number): void;
/**
* @param {number} _this
* @param {number} element
*/
export function i16_vec_push_front(_this: number, element: number): void;
/**
* @param {number} _this
* @returns {number | undefined}
*/
export function i16_vec_pop(_this: number): number | undefined;
/**
* @param {number} _this
* @returns {number | undefined}
*/
export function i16_vec_pop_front(_this: number): number | undefined;
/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function i16_vec_rchunks(_this: number, chunk_size: number): Slice;
/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function i16_vec_rchunks_exact(_this: number, chunk_size: number): Slice;
/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function i16_vec_remove(_this: number, index: number): number | undefined;
/**
* @param {number} _this
* @param {number} additional
*/
export function i16_vec_reserve(_this: number, additional: number): void;
/**
* @param {number} _this
* @param {number} additional
*/
export function i16_vec_reserve_exact(_this: number, additional: number): void;
/**
* @param {number} _this
* @param {number} new_len
* @param {number} val
*/
export function i16_vec_resize(_this: number, new_len: number, val: number): void;
/**
* @param {number} _this
* @param {number} new_len
* @param {Function} f
*/
export function i16_vec_resize_with(_this: number, new_len: number, f: Function): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function i16_vec_retain(_this: number, f: Function): void;
/**
* @param {number} _this
*/
export function i16_vec_reverse(_this: number): void;
/**
* @param {number} _this
* @param {number} mid
*/
export function i16_vec_rotate_left(_this: number, mid: number): void;
/**
* @param {number} _this
* @param {number} k
*/
export function i16_vec_rotate_right(_this: number, k: number): void;
/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function i16_vec_rsplit(_this: number, f: Function): Slice;
/**
* @param {number} _this
* @param {number} n
* @param {Function} f
* @returns {number}
*/
export function i16_vec_rsplitn(_this: number, n: number, f: Function): number;
/**
* @param {number} _this
* @param {number} index
* @param {number} element
*/
export function i16_vec_set(_this: number, index: number, element: number): void;
/**
* @param {number} _this
* @param {number} start
* @param {number} count
* @param {Int16Array} replace_with
* @returns {number}
*/
export function i16_vec_splice_arr(_this: number, start: number, count: number, replace_with: Int16Array): number;
/**
* @param {number} _this
* @param {number} start
* @param {number} count
* @param {number} replace_with
* @returns {number}
*/
export function i16_vec_splice_vec(_this: number, start: number, count: number, replace_with: number): number;
/**
* @param {number} _this
* @param {number} at
* @returns {number}
*/
export function i16_vec_split_off(_this: number, at: number): number;
/**
* @param {number} _this
* @param {number} min_capacity
*/
export function i16_vec_shrink_to(_this: number, min_capacity: number): void;
/**
* @param {number} _this
*/
export function i16_vec_shrink_to_fit(_this: number): void;
/**
* @param {number} _this
* @param {number} start
* @param {number} end
* @returns {Int16Array}
*/
export function i16_vec_slice(_this: number, start: number, end: number): Int16Array;
/**
* @param {number} _this
* @param {Function} f
*/
export function i16_vec_sort_by(_this: number, f: Function): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function i16_vec_sort_unstable_by(_this: number, f: Function): void;
/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function i16_vec_split(_this: number, f: Function): Slice;
/**
* @param {number} _this
* @param {number} mid
* @returns {(Slice)[]}
*/
export function i16_vec_split_at(_this: number, mid: number): (Slice)[];
/**
* @param {number} _this
* @param {number} n
* @param {Function} f
* @returns {Slice}
*/
export function i16_vec_splitn(_this: number, n: number, f: Function): Slice;
/**
* @param {number} _this
* @param {number} a
* @param {number} b
*/
export function i16_vec_swap(_this: number, a: number, b: number): void;
/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function i16_vec_swap_remove(_this: number, index: number): number | undefined;
/**
* @param {number} _this
* @param {number} ptr
* @param {number} len
*/
export function i16_vec_swap_with_slice(_this: number, ptr: number, len: number): void;
/**
* @param {number} _this
* @param {number} len
*/
export function i16_vec_truncate(_this: number, len: number): void;
/**
* @param {number} _this
* @param {number} size
* @returns {Slice}
*/
export function i16_vec_windows(_this: number, size: number): Slice;
/**
* @param {number} _this
* @returns {Int16Array}
*/
export function i16_view(_this: number): Int16Array;
/**
* @param {number} ptr
*/
export function i16_drop_vec(ptr: number): void;
/**
* @returns {number}
*/
export function i32_new_vec(): number;
/**
* @param {number} capacity
* @returns {number}
*/
export function i32_new_vec_with_capacity(capacity: number): number;
/**
* @param {Iterator<any>} iter
* @param {number | undefined} [size_hint]
* @returns {number}
*/
export function i32_vec_from_iter(iter: Iterator<any>, size_hint?: number): number;
/**
* @param {Array<any>} arr
* @returns {number}
*/
export function i32_vec_from_jsarr(arr: Array<any>): number;
/**
* @param {Int32Array} vec
* @returns {number}
*/
export function i32_vec_from_js_typed_array(vec: Int32Array): number;
/**
* @param {number} _this
* @param {number} other
*/
export function i32_vec_append(_this: number, other: number): void;
/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function i32_vec_at(_this: number, index: number): number | undefined;
/**
* @param {number} _this
* @returns {number}
*/
export function i32_vec_as_ptr(_this: number): number;
/**
* @param {number} _this
* @returns {Slice}
*/
export function i32_vec_as_slice(_this: number): Slice;
/**
* @param {number} _this
* @param {Function} f
* @returns {number}
*/
export function i32_vec_binary_search_by(_this: number, f: Function): number;
/**
* @param {number} _this
* @returns {number}
*/
export function i32_vec_capacity(_this: number): number;
/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function i32_vec_chunks_by(_this: number, f: Function): Slice;
/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function i32_vec_chunks(_this: number, chunk_size: number): Slice;
/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function i32_vec_chunks_exact(_this: number, chunk_size: number): Slice;
/**
* @param {number} _this
* @param {number} element
* @returns {boolean}
*/
export function i32_vec_contains(_this: number, element: number): boolean;
/**
* @param {number} _this
*/
export function i32_vec_clear(_this: number): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function i32_vec_dedup(_this: number, f: Function): void;
/**
* @param {number} _this
* @param {number} element
*/
export function i32_vec_fill(_this: number, element: number): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function i32_vec_fill_with(_this: number, f: Function): void;
/**
* @param {number} _this
* @returns {number | undefined}
*/
export function i32_vec_first(_this: number): number | undefined;
/**
* @param {number} _this
* @param {number} i
* @returns {number}
*/
export function i32_vec_index(_this: number, i: number): number;
/**
* @param {number} _this
* @param {number} i
* @param {number} element
*/
export function i32_vec_insert(_this: number, i: number, element: number): void;
/**
* @param {number} _this
* @returns {number | undefined}
*/
export function i32_vec_last(_this: number): number | undefined;
/**
* @param {number} _this
* @returns {number}
*/
export function i32_vec_len(_this: number): number;
/**
* @param {number} _this
* @param {Function} f
* @returns {number}
*/
export function i32_vec_partition_point(_this: number, f: Function): number;
/**
* @param {number} _this
* @param {number} element
*/
export function i32_vec_push(_this: number, element: number): void;
/**
* @param {number} _this
* @param {number} element
*/
export function i32_vec_push_front(_this: number, element: number): void;
/**
* @param {number} _this
* @returns {number | undefined}
*/
export function i32_vec_pop(_this: number): number | undefined;
/**
* @param {number} _this
* @returns {number | undefined}
*/
export function i32_vec_pop_front(_this: number): number | undefined;
/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function i32_vec_rchunks(_this: number, chunk_size: number): Slice;
/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function i32_vec_rchunks_exact(_this: number, chunk_size: number): Slice;
/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function i32_vec_remove(_this: number, index: number): number | undefined;
/**
* @param {number} _this
* @param {number} additional
*/
export function i32_vec_reserve(_this: number, additional: number): void;
/**
* @param {number} _this
* @param {number} additional
*/
export function i32_vec_reserve_exact(_this: number, additional: number): void;
/**
* @param {number} _this
* @param {number} new_len
* @param {number} val
*/
export function i32_vec_resize(_this: number, new_len: number, val: number): void;
/**
* @param {number} _this
* @param {number} new_len
* @param {Function} f
*/
export function i32_vec_resize_with(_this: number, new_len: number, f: Function): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function i32_vec_retain(_this: number, f: Function): void;
/**
* @param {number} _this
*/
export function i32_vec_reverse(_this: number): void;
/**
* @param {number} _this
* @param {number} mid
*/
export function i32_vec_rotate_left(_this: number, mid: number): void;
/**
* @param {number} _this
* @param {number} k
*/
export function i32_vec_rotate_right(_this: number, k: number): void;
/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function i32_vec_rsplit(_this: number, f: Function): Slice;
/**
* @param {number} _this
* @param {number} n
* @param {Function} f
* @returns {number}
*/
export function i32_vec_rsplitn(_this: number, n: number, f: Function): number;
/**
* @param {number} _this
* @param {number} index
* @param {number} element
*/
export function i32_vec_set(_this: number, index: number, element: number): void;
/**
* @param {number} _this
* @param {number} start
* @param {number} count
* @param {Int32Array} replace_with
* @returns {number}
*/
export function i32_vec_splice_arr(_this: number, start: number, count: number, replace_with: Int32Array): number;
/**
* @param {number} _this
* @param {number} start
* @param {number} count
* @param {number} replace_with
* @returns {number}
*/
export function i32_vec_splice_vec(_this: number, start: number, count: number, replace_with: number): number;
/**
* @param {number} _this
* @param {number} at
* @returns {number}
*/
export function i32_vec_split_off(_this: number, at: number): number;
/**
* @param {number} _this
* @param {number} min_capacity
*/
export function i32_vec_shrink_to(_this: number, min_capacity: number): void;
/**
* @param {number} _this
*/
export function i32_vec_shrink_to_fit(_this: number): void;
/**
* @param {number} _this
* @param {number} start
* @param {number} end
* @returns {Int32Array}
*/
export function i32_vec_slice(_this: number, start: number, end: number): Int32Array;
/**
* @param {number} _this
* @param {Function} f
*/
export function i32_vec_sort_by(_this: number, f: Function): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function i32_vec_sort_unstable_by(_this: number, f: Function): void;
/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function i32_vec_split(_this: number, f: Function): Slice;
/**
* @param {number} _this
* @param {number} mid
* @returns {(Slice)[]}
*/
export function i32_vec_split_at(_this: number, mid: number): (Slice)[];
/**
* @param {number} _this
* @param {number} n
* @param {Function} f
* @returns {Slice}
*/
export function i32_vec_splitn(_this: number, n: number, f: Function): Slice;
/**
* @param {number} _this
* @param {number} a
* @param {number} b
*/
export function i32_vec_swap(_this: number, a: number, b: number): void;
/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function i32_vec_swap_remove(_this: number, index: number): number | undefined;
/**
* @param {number} _this
* @param {number} ptr
* @param {number} len
*/
export function i32_vec_swap_with_slice(_this: number, ptr: number, len: number): void;
/**
* @param {number} _this
* @param {number} len
*/
export function i32_vec_truncate(_this: number, len: number): void;
/**
* @param {number} _this
* @param {number} size
* @returns {Slice}
*/
export function i32_vec_windows(_this: number, size: number): Slice;
/**
* @param {number} _this
* @returns {Int32Array}
*/
export function i32_view(_this: number): Int32Array;
/**
* @param {number} ptr
*/
export function i32_drop_vec(ptr: number): void;
/**
* @returns {number}
*/
export function i64_new_vec(): number;
/**
* @param {number} capacity
* @returns {number}
*/
export function i64_new_vec_with_capacity(capacity: number): number;
/**
* @param {Iterator<any>} iter
* @param {number | undefined} [size_hint]
* @returns {number}
*/
export function i64_vec_from_iter(iter: Iterator<any>, size_hint?: number): number;
/**
* @param {Array<any>} arr
* @returns {number}
*/
export function i64_vec_from_jsarr(arr: Array<any>): number;
/**
* @param {BigInt64Array} vec
* @returns {number}
*/
export function i64_vec_from_js_typed_array(vec: BigInt64Array): number;
/**
* @param {number} _this
* @param {number} other
*/
export function i64_vec_append(_this: number, other: number): void;
/**
* @param {number} _this
* @param {number} index
* @returns {bigint | undefined}
*/
export function i64_vec_at(_this: number, index: number): bigint | undefined;
/**
* @param {number} _this
* @returns {number}
*/
export function i64_vec_as_ptr(_this: number): number;
/**
* @param {number} _this
* @returns {Slice}
*/
export function i64_vec_as_slice(_this: number): Slice;
/**
* @param {number} _this
* @param {Function} f
* @returns {number}
*/
export function i64_vec_binary_search_by(_this: number, f: Function): number;
/**
* @param {number} _this
* @returns {number}
*/
export function i64_vec_capacity(_this: number): number;
/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function i64_vec_chunks_by(_this: number, f: Function): Slice;
/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function i64_vec_chunks(_this: number, chunk_size: number): Slice;
/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function i64_vec_chunks_exact(_this: number, chunk_size: number): Slice;
/**
* @param {number} _this
* @param {bigint} element
* @returns {boolean}
*/
export function i64_vec_contains(_this: number, element: bigint): boolean;
/**
* @param {number} _this
*/
export function i64_vec_clear(_this: number): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function i64_vec_dedup(_this: number, f: Function): void;
/**
* @param {number} _this
* @param {bigint} element
*/
export function i64_vec_fill(_this: number, element: bigint): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function i64_vec_fill_with(_this: number, f: Function): void;
/**
* @param {number} _this
* @returns {bigint | undefined}
*/
export function i64_vec_first(_this: number): bigint | undefined;
/**
* @param {number} _this
* @param {number} i
* @returns {bigint}
*/
export function i64_vec_index(_this: number, i: number): bigint;
/**
* @param {number} _this
* @param {number} i
* @param {bigint} element
*/
export function i64_vec_insert(_this: number, i: number, element: bigint): void;
/**
* @param {number} _this
* @returns {bigint | undefined}
*/
export function i64_vec_last(_this: number): bigint | undefined;
/**
* @param {number} _this
* @returns {number}
*/
export function i64_vec_len(_this: number): number;
/**
* @param {number} _this
* @param {Function} f
* @returns {number}
*/
export function i64_vec_partition_point(_this: number, f: Function): number;
/**
* @param {number} _this
* @param {bigint} element
*/
export function i64_vec_push(_this: number, element: bigint): void;
/**
* @param {number} _this
* @param {bigint} element
*/
export function i64_vec_push_front(_this: number, element: bigint): void;
/**
* @param {number} _this
* @returns {bigint | undefined}
*/
export function i64_vec_pop(_this: number): bigint | undefined;
/**
* @param {number} _this
* @returns {bigint | undefined}
*/
export function i64_vec_pop_front(_this: number): bigint | undefined;
/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function i64_vec_rchunks(_this: number, chunk_size: number): Slice;
/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function i64_vec_rchunks_exact(_this: number, chunk_size: number): Slice;
/**
* @param {number} _this
* @param {number} index
* @returns {bigint | undefined}
*/
export function i64_vec_remove(_this: number, index: number): bigint | undefined;
/**
* @param {number} _this
* @param {number} additional
*/
export function i64_vec_reserve(_this: number, additional: number): void;
/**
* @param {number} _this
* @param {number} additional
*/
export function i64_vec_reserve_exact(_this: number, additional: number): void;
/**
* @param {number} _this
* @param {number} new_len
* @param {bigint} val
*/
export function i64_vec_resize(_this: number, new_len: number, val: bigint): void;
/**
* @param {number} _this
* @param {number} new_len
* @param {Function} f
*/
export function i64_vec_resize_with(_this: number, new_len: number, f: Function): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function i64_vec_retain(_this: number, f: Function): void;
/**
* @param {number} _this
*/
export function i64_vec_reverse(_this: number): void;
/**
* @param {number} _this
* @param {number} mid
*/
export function i64_vec_rotate_left(_this: number, mid: number): void;
/**
* @param {number} _this
* @param {number} k
*/
export function i64_vec_rotate_right(_this: number, k: number): void;
/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function i64_vec_rsplit(_this: number, f: Function): Slice;
/**
* @param {number} _this
* @param {number} n
* @param {Function} f
* @returns {number}
*/
export function i64_vec_rsplitn(_this: number, n: number, f: Function): number;
/**
* @param {number} _this
* @param {number} index
* @param {bigint} element
*/
export function i64_vec_set(_this: number, index: number, element: bigint): void;
/**
* @param {number} _this
* @param {number} start
* @param {number} count
* @param {BigInt64Array} replace_with
* @returns {number}
*/
export function i64_vec_splice_arr(_this: number, start: number, count: number, replace_with: BigInt64Array): number;
/**
* @param {number} _this
* @param {number} start
* @param {number} count
* @param {number} replace_with
* @returns {number}
*/
export function i64_vec_splice_vec(_this: number, start: number, count: number, replace_with: number): number;
/**
* @param {number} _this
* @param {number} at
* @returns {number}
*/
export function i64_vec_split_off(_this: number, at: number): number;
/**
* @param {number} _this
* @param {number} min_capacity
*/
export function i64_vec_shrink_to(_this: number, min_capacity: number): void;
/**
* @param {number} _this
*/
export function i64_vec_shrink_to_fit(_this: number): void;
/**
* @param {number} _this
* @param {number} start
* @param {number} end
* @returns {BigInt64Array}
*/
export function i64_vec_slice(_this: number, start: number, end: number): BigInt64Array;
/**
* @param {number} _this
* @param {Function} f
*/
export function i64_vec_sort_by(_this: number, f: Function): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function i64_vec_sort_unstable_by(_this: number, f: Function): void;
/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function i64_vec_split(_this: number, f: Function): Slice;
/**
* @param {number} _this
* @param {number} mid
* @returns {(Slice)[]}
*/
export function i64_vec_split_at(_this: number, mid: number): (Slice)[];
/**
* @param {number} _this
* @param {number} n
* @param {Function} f
* @returns {Slice}
*/
export function i64_vec_splitn(_this: number, n: number, f: Function): Slice;
/**
* @param {number} _this
* @param {number} a
* @param {number} b
*/
export function i64_vec_swap(_this: number, a: number, b: number): void;
/**
* @param {number} _this
* @param {number} index
* @returns {bigint | undefined}
*/
export function i64_vec_swap_remove(_this: number, index: number): bigint | undefined;
/**
* @param {number} _this
* @param {number} ptr
* @param {number} len
*/
export function i64_vec_swap_with_slice(_this: number, ptr: number, len: number): void;
/**
* @param {number} _this
* @param {number} len
*/
export function i64_vec_truncate(_this: number, len: number): void;
/**
* @param {number} _this
* @param {number} size
* @returns {Slice}
*/
export function i64_vec_windows(_this: number, size: number): Slice;
/**
* @param {number} _this
* @returns {BigInt64Array}
*/
export function i64_view(_this: number): BigInt64Array;
/**
* @param {number} ptr
*/
export function i64_drop_vec(ptr: number): void;
/**
* @returns {number}
*/
export function f32_new_vec(): number;
/**
* @param {number} capacity
* @returns {number}
*/
export function f32_new_vec_with_capacity(capacity: number): number;
/**
* @param {Iterator<any>} iter
* @param {number | undefined} [size_hint]
* @returns {number}
*/
export function f32_vec_from_iter(iter: Iterator<any>, size_hint?: number): number;
/**
* @param {Array<any>} arr
* @returns {number}
*/
export function f32_vec_from_jsarr(arr: Array<any>): number;
/**
* @param {Float32Array} vec
* @returns {number}
*/
export function f32_vec_from_js_typed_array(vec: Float32Array): number;
/**
* @param {number} _this
* @param {number} other
*/
export function f32_vec_append(_this: number, other: number): void;
/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function f32_vec_at(_this: number, index: number): number | undefined;
/**
* @param {number} _this
* @returns {number}
*/
export function f32_vec_as_ptr(_this: number): number;
/**
* @param {number} _this
* @returns {Slice}
*/
export function f32_vec_as_slice(_this: number): Slice;
/**
* @param {number} _this
* @param {Function} f
* @returns {number}
*/
export function f32_vec_binary_search_by(_this: number, f: Function): number;
/**
* @param {number} _this
* @returns {number}
*/
export function f32_vec_capacity(_this: number): number;
/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function f32_vec_chunks_by(_this: number, f: Function): Slice;
/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function f32_vec_chunks(_this: number, chunk_size: number): Slice;
/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function f32_vec_chunks_exact(_this: number, chunk_size: number): Slice;
/**
* @param {number} _this
* @param {number} element
* @returns {boolean}
*/
export function f32_vec_contains(_this: number, element: number): boolean;
/**
* @param {number} _this
*/
export function f32_vec_clear(_this: number): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function f32_vec_dedup(_this: number, f: Function): void;
/**
* @param {number} _this
* @param {number} element
*/
export function f32_vec_fill(_this: number, element: number): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function f32_vec_fill_with(_this: number, f: Function): void;
/**
* @param {number} _this
* @returns {number | undefined}
*/
export function f32_vec_first(_this: number): number | undefined;
/**
* @param {number} _this
* @param {number} i
* @returns {number}
*/
export function f32_vec_index(_this: number, i: number): number;
/**
* @param {number} _this
* @param {number} i
* @param {number} element
*/
export function f32_vec_insert(_this: number, i: number, element: number): void;
/**
* @param {number} _this
* @returns {number | undefined}
*/
export function f32_vec_last(_this: number): number | undefined;
/**
* @param {number} _this
* @returns {number}
*/
export function f32_vec_len(_this: number): number;
/**
* @param {number} _this
* @param {Function} f
* @returns {number}
*/
export function f32_vec_partition_point(_this: number, f: Function): number;
/**
* @param {number} _this
* @param {number} element
*/
export function f32_vec_push(_this: number, element: number): void;
/**
* @param {number} _this
* @param {number} element
*/
export function f32_vec_push_front(_this: number, element: number): void;
/**
* @param {number} _this
* @returns {number | undefined}
*/
export function f32_vec_pop(_this: number): number | undefined;
/**
* @param {number} _this
* @returns {number | undefined}
*/
export function f32_vec_pop_front(_this: number): number | undefined;
/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function f32_vec_rchunks(_this: number, chunk_size: number): Slice;
/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function f32_vec_rchunks_exact(_this: number, chunk_size: number): Slice;
/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function f32_vec_remove(_this: number, index: number): number | undefined;
/**
* @param {number} _this
* @param {number} additional
*/
export function f32_vec_reserve(_this: number, additional: number): void;
/**
* @param {number} _this
* @param {number} additional
*/
export function f32_vec_reserve_exact(_this: number, additional: number): void;
/**
* @param {number} _this
* @param {number} new_len
* @param {number} val
*/
export function f32_vec_resize(_this: number, new_len: number, val: number): void;
/**
* @param {number} _this
* @param {number} new_len
* @param {Function} f
*/
export function f32_vec_resize_with(_this: number, new_len: number, f: Function): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function f32_vec_retain(_this: number, f: Function): void;
/**
* @param {number} _this
*/
export function f32_vec_reverse(_this: number): void;
/**
* @param {number} _this
* @param {number} mid
*/
export function f32_vec_rotate_left(_this: number, mid: number): void;
/**
* @param {number} _this
* @param {number} k
*/
export function f32_vec_rotate_right(_this: number, k: number): void;
/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function f32_vec_rsplit(_this: number, f: Function): Slice;
/**
* @param {number} _this
* @param {number} n
* @param {Function} f
* @returns {number}
*/
export function f32_vec_rsplitn(_this: number, n: number, f: Function): number;
/**
* @param {number} _this
* @param {number} index
* @param {number} element
*/
export function f32_vec_set(_this: number, index: number, element: number): void;
/**
* @param {number} _this
* @param {number} start
* @param {number} count
* @param {Float32Array} replace_with
* @returns {number}
*/
export function f32_vec_splice_arr(_this: number, start: number, count: number, replace_with: Float32Array): number;
/**
* @param {number} _this
* @param {number} start
* @param {number} count
* @param {number} replace_with
* @returns {number}
*/
export function f32_vec_splice_vec(_this: number, start: number, count: number, replace_with: number): number;
/**
* @param {number} _this
* @param {number} at
* @returns {number}
*/
export function f32_vec_split_off(_this: number, at: number): number;
/**
* @param {number} _this
* @param {number} min_capacity
*/
export function f32_vec_shrink_to(_this: number, min_capacity: number): void;
/**
* @param {number} _this
*/
export function f32_vec_shrink_to_fit(_this: number): void;
/**
* @param {number} _this
* @param {number} start
* @param {number} end
* @returns {Float32Array}
*/
export function f32_vec_slice(_this: number, start: number, end: number): Float32Array;
/**
* @param {number} _this
* @param {Function} f
*/
export function f32_vec_sort_by(_this: number, f: Function): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function f32_vec_sort_unstable_by(_this: number, f: Function): void;
/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function f32_vec_split(_this: number, f: Function): Slice;
/**
* @param {number} _this
* @param {number} mid
* @returns {(Slice)[]}
*/
export function f32_vec_split_at(_this: number, mid: number): (Slice)[];
/**
* @param {number} _this
* @param {number} n
* @param {Function} f
* @returns {Slice}
*/
export function f32_vec_splitn(_this: number, n: number, f: Function): Slice;
/**
* @param {number} _this
* @param {number} a
* @param {number} b
*/
export function f32_vec_swap(_this: number, a: number, b: number): void;
/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function f32_vec_swap_remove(_this: number, index: number): number | undefined;
/**
* @param {number} _this
* @param {number} ptr
* @param {number} len
*/
export function f32_vec_swap_with_slice(_this: number, ptr: number, len: number): void;
/**
* @param {number} _this
* @param {number} len
*/
export function f32_vec_truncate(_this: number, len: number): void;
/**
* @param {number} _this
* @param {number} size
* @returns {Slice}
*/
export function f32_vec_windows(_this: number, size: number): Slice;
/**
* @param {number} _this
* @returns {Float32Array}
*/
export function f32_view(_this: number): Float32Array;
/**
* @param {number} ptr
*/
export function f32_drop_vec(ptr: number): void;
/**
* @returns {number}
*/
export function f64_new_vec(): number;
/**
* @param {number} capacity
* @returns {number}
*/
export function f64_new_vec_with_capacity(capacity: number): number;
/**
* @param {Iterator<any>} iter
* @param {number | undefined} [size_hint]
* @returns {number}
*/
export function f64_vec_from_iter(iter: Iterator<any>, size_hint?: number): number;
/**
* @param {Array<any>} arr
* @returns {number}
*/
export function f64_vec_from_jsarr(arr: Array<any>): number;
/**
* @param {Float64Array} vec
* @returns {number}
*/
export function f64_vec_from_js_typed_array(vec: Float64Array): number;
/**
* @param {number} _this
* @param {number} other
*/
export function f64_vec_append(_this: number, other: number): void;
/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function f64_vec_at(_this: number, index: number): number | undefined;
/**
* @param {number} _this
* @returns {number}
*/
export function f64_vec_as_ptr(_this: number): number;
/**
* @param {number} _this
* @returns {Slice}
*/
export function f64_vec_as_slice(_this: number): Slice;
/**
* @param {number} _this
* @param {Function} f
* @returns {number}
*/
export function f64_vec_binary_search_by(_this: number, f: Function): number;
/**
* @param {number} _this
* @returns {number}
*/
export function f64_vec_capacity(_this: number): number;
/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function f64_vec_chunks_by(_this: number, f: Function): Slice;
/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function f64_vec_chunks(_this: number, chunk_size: number): Slice;
/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function f64_vec_chunks_exact(_this: number, chunk_size: number): Slice;
/**
* @param {number} _this
* @param {number} element
* @returns {boolean}
*/
export function f64_vec_contains(_this: number, element: number): boolean;
/**
* @param {number} _this
*/
export function f64_vec_clear(_this: number): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function f64_vec_dedup(_this: number, f: Function): void;
/**
* @param {number} _this
* @param {number} element
*/
export function f64_vec_fill(_this: number, element: number): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function f64_vec_fill_with(_this: number, f: Function): void;
/**
* @param {number} _this
* @returns {number | undefined}
*/
export function f64_vec_first(_this: number): number | undefined;
/**
* @param {number} _this
* @param {number} i
* @returns {number}
*/
export function f64_vec_index(_this: number, i: number): number;
/**
* @param {number} _this
* @param {number} i
* @param {number} element
*/
export function f64_vec_insert(_this: number, i: number, element: number): void;
/**
* @param {number} _this
* @returns {number | undefined}
*/
export function f64_vec_last(_this: number): number | undefined;
/**
* @param {number} _this
* @returns {number}
*/
export function f64_vec_len(_this: number): number;
/**
* @param {number} _this
* @param {Function} f
* @returns {number}
*/
export function f64_vec_partition_point(_this: number, f: Function): number;
/**
* @param {number} _this
* @param {number} element
*/
export function f64_vec_push(_this: number, element: number): void;
/**
* @param {number} _this
* @param {number} element
*/
export function f64_vec_push_front(_this: number, element: number): void;
/**
* @param {number} _this
* @returns {number | undefined}
*/
export function f64_vec_pop(_this: number): number | undefined;
/**
* @param {number} _this
* @returns {number | undefined}
*/
export function f64_vec_pop_front(_this: number): number | undefined;
/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function f64_vec_rchunks(_this: number, chunk_size: number): Slice;
/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function f64_vec_rchunks_exact(_this: number, chunk_size: number): Slice;
/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function f64_vec_remove(_this: number, index: number): number | undefined;
/**
* @param {number} _this
* @param {number} additional
*/
export function f64_vec_reserve(_this: number, additional: number): void;
/**
* @param {number} _this
* @param {number} additional
*/
export function f64_vec_reserve_exact(_this: number, additional: number): void;
/**
* @param {number} _this
* @param {number} new_len
* @param {number} val
*/
export function f64_vec_resize(_this: number, new_len: number, val: number): void;
/**
* @param {number} _this
* @param {number} new_len
* @param {Function} f
*/
export function f64_vec_resize_with(_this: number, new_len: number, f: Function): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function f64_vec_retain(_this: number, f: Function): void;
/**
* @param {number} _this
*/
export function f64_vec_reverse(_this: number): void;
/**
* @param {number} _this
* @param {number} mid
*/
export function f64_vec_rotate_left(_this: number, mid: number): void;
/**
* @param {number} _this
* @param {number} k
*/
export function f64_vec_rotate_right(_this: number, k: number): void;
/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function f64_vec_rsplit(_this: number, f: Function): Slice;
/**
* @param {number} _this
* @param {number} n
* @param {Function} f
* @returns {number}
*/
export function f64_vec_rsplitn(_this: number, n: number, f: Function): number;
/**
* @param {number} _this
* @param {number} index
* @param {number} element
*/
export function f64_vec_set(_this: number, index: number, element: number): void;
/**
* @param {number} _this
* @param {number} start
* @param {number} count
* @param {Float64Array} replace_with
* @returns {number}
*/
export function f64_vec_splice_arr(_this: number, start: number, count: number, replace_with: Float64Array): number;
/**
* @param {number} _this
* @param {number} start
* @param {number} count
* @param {number} replace_with
* @returns {number}
*/
export function f64_vec_splice_vec(_this: number, start: number, count: number, replace_with: number): number;
/**
* @param {number} _this
* @param {number} at
* @returns {number}
*/
export function f64_vec_split_off(_this: number, at: number): number;
/**
* @param {number} _this
* @param {number} min_capacity
*/
export function f64_vec_shrink_to(_this: number, min_capacity: number): void;
/**
* @param {number} _this
*/
export function f64_vec_shrink_to_fit(_this: number): void;
/**
* @param {number} _this
* @param {number} start
* @param {number} end
* @returns {Float64Array}
*/
export function f64_vec_slice(_this: number, start: number, end: number): Float64Array;
/**
* @param {number} _this
* @param {Function} f
*/
export function f64_vec_sort_by(_this: number, f: Function): void;
/**
* @param {number} _this
* @param {Function} f
*/
export function f64_vec_sort_unstable_by(_this: number, f: Function): void;
/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function f64_vec_split(_this: number, f: Function): Slice;
/**
* @param {number} _this
* @param {number} mid
* @returns {(Slice)[]}
*/
export function f64_vec_split_at(_this: number, mid: number): (Slice)[];
/**
* @param {number} _this
* @param {number} n
* @param {Function} f
* @returns {Slice}
*/
export function f64_vec_splitn(_this: number, n: number, f: Function): Slice;
/**
* @param {number} _this
* @param {number} a
* @param {number} b
*/
export function f64_vec_swap(_this: number, a: number, b: number): void;
/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function f64_vec_swap_remove(_this: number, index: number): number | undefined;
/**
* @param {number} _this
* @param {number} ptr
* @param {number} len
*/
export function f64_vec_swap_with_slice(_this: number, ptr: number, len: number): void;
/**
* @param {number} _this
* @param {number} len
*/
export function f64_vec_truncate(_this: number, len: number): void;
/**
* @param {number} _this
* @param {number} size
* @returns {Slice}
*/
export function f64_vec_windows(_this: number, size: number): Slice;
/**
* @param {number} _this
* @returns {Float64Array}
*/
export function f64_view(_this: number): Float64Array;
/**
* @param {number} ptr
*/
export function f64_drop_vec(ptr: number): void;
/**
*/
export class Slice {
  free(): void;
/**
*/
  len: number;
/**
*/
  ptr: number;
}
