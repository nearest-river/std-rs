/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export function new_vec(): number;
export function new_vec_with_capacity(a: number): number;
export function vec_from_iter(a: number, b: number): number;
export function vec_append(a: number, b: number): number;
export function vec_at(a: number, b: number): number;
export function vec_as_slice(a: number): number;
export function vec_binary_search_by(a: number, b: number, c: number): void;
export function vec_capacity(a: number): number;
export function vec_chunks_by(a: number, b: number): number;
export function vec_chunks(a: number, b: number): number;
export function vec_chunks_exact(a: number, b: number): number;
export function vec_contains(a: number, b: number): number;
export function vec_clear(a: number): void;
export function vec_dedup(a: number, b: number): void;
export function vec_fill(a: number, b: number): void;
export function vec_fill_with(a: number, b: number): void;
export function vec_first(a: number): number;
export function vec_index(a: number, b: number): number;
export function vec_insert(a: number, b: number, c: number): number;
export function vec_last(a: number): number;
export function vec_len(a: number): number;
export function vec_partition_point(a: number, b: number): number;
export function vec_push(a: number, b: number): number;
export function vec_push_front(a: number, b: number): number;
export function vec_pop(a: number): number;
export function vec_pop_front(a: number): number;
export function vec_rchunks(a: number, b: number): number;
export function vec_rchunks_exact(a: number, b: number): number;
export function vec_remove(a: number, b: number): number;
export function vec_reserve(a: number, b: number): number;
export function vec_reserve_exact(a: number, b: number): number;
export function vec_resize(a: number, b: number, c: number): void;
export function vec_resize_with(a: number, b: number, c: number): void;
export function vec_retain(a: number, b: number): void;
export function vec_reverse(a: number): void;
export function vec_rotate_left(a: number, b: number): void;
export function vec_rotate_right(a: number, b: number): void;
export function vec_rsplit(a: number, b: number): number;
export function vec_rsplitn(a: number, b: number, c: number): number;
export function vec_set(a: number, b: number, c: number): number;
export function vec_splice_arr(a: number, b: number, c: number, d: number, e: number): number;
export function vec_splice_vec(a: number, b: number, c: number, d: number): number;
export function vec_split_off(a: number, b: number): number;
export function vec_shrink_to(a: number, b: number): void;
export function vec_shrink_to_fit(a: number): void;
export function vec_sort_by(a: number, b: number): void;
export function vec_sort_unstable_by(a: number, b: number): void;
export function vec_split(a: number, b: number): number;
export function vec_split_at(a: number, b: number, c: number): void;
export function vec_splitn(a: number, b: number, c: number): number;
export function vec_swap(a: number, b: number, c: number): number;
export function vec_swap_remove(a: number, b: number): number;
export function vec_swap_with_slice(a: number, b: number, c: number): void;
export function vec_truncate(a: number, b: number): void;
export function vec_windows(a: number, b: number): number;
export function drop_vec(a: number): void;
export function __wbg_slice_free(a: number): void;
export function __wbg_get_slice_ptr(a: number): number;
export function __wbg_set_slice_ptr(a: number, b: number): void;
export function __wbg_get_slice_len(a: number): number;
export function __wbg_set_slice_len(a: number, b: number): void;
export function spawn_thread(a: number, b: number, c: number): number;
export function available_parallelism(): number;
export function current_thread(): number;
export function thread_panicking(): number;
export function park_thread(): void;
export function park_thread_with_timeout(a: number): void;
export function sleep(a: number): void;
export function yield_now(): void;
export function is_finished(a: number): number;
export function thread(a: number): number;
export function join(a: number): void;
export function thread_id(a: number): number;
export function thread_unpark(a: number): void;
export function thread_name(a: number, b: number): void;
export function drop_thread(a: number): void;
export function drop_join_handle(a: number): void;
export function __wbindgen_exn_store(a: number): void;
export function __wbindgen_malloc(a: number, b: number): number;
export function __wbindgen_add_to_stack_pointer(a: number): number;
export function __wbindgen_free(a: number, b: number, c: number): void;
export function __wbindgen_realloc(a: number, b: number, c: number, d: number): number;
