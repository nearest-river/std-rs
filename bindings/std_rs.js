import { CollectionError } from './snippets/std-rs-78884bcf1b36fd68/lib/collections/error.ts';
import { IoError } from './snippets/std-rs-78884bcf1b36fd68/lib/io/error.ts';

const heap = new Array(128).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 132) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

const cachedTextDecoder = (typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-8', { ignoreBOM: true, fatal: true }) : { decode: () => { throw Error('TextDecoder not available') } } );

if (typeof TextDecoder !== 'undefined') { cachedTextDecoder.decode(); };

let cachedUint8Memory0 = null;

function getUint8Memory0() {
    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}

const CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(state => {
    wasm.__wbindgen_export_0.get(state.dtor)(state.a, state.b)
});

function makeMutClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {
        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            if (--state.cnt === 0) {
                wasm.__wbindgen_export_0.get(state.dtor)(a, state.b);
                CLOSURE_DTORS.unregister(state);
            } else {
                state.a = a;
            }
        }
    };
    real.original = state;
    CLOSURE_DTORS.register(real, state, state);
    return real;
}
function __wbg_adapter_36(arg0, arg1, arg2) {
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h83ab5c08334b4cb3(arg0, arg1, addHeapObject(arg2));
}

/**
* @param {number} buf
* @param {any} _this
* @param {Function} read
* @returns {Promise<number>}
*/
export function read_to_end(buf, _this, read) {
    const ret = wasm.read_to_end(buf, addHeapObject(_this), addHeapObject(read));
    return takeObject(ret);
}

let WASM_VECTOR_LEN = 0;

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1, 1) >>> 0;
    getUint8Memory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}
/**
* @param {any} _this
* @param {Function} read
* @param {Uint8Array} buf
* @returns {Promise<number>}
*/
export function read_exact(_this, read, buf) {
    var ptr0 = passArray8ToWasm0(buf, wasm.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN;
    const ret = wasm.read_exact(addHeapObject(_this), addHeapObject(read), ptr0, len0, addHeapObject(buf));
    return takeObject(ret);
}

/**
* @param {number} buf
* @param {any} _this
* @param {Function} read
* @returns {number}
*/
export function read_to_end_sync(buf, _this, read) {
    const ret = wasm.read_to_end_sync(buf, addHeapObject(_this), addHeapObject(read));
    return ret >>> 0;
}

/**
* @param {any} _this
* @param {Function} read
* @param {Uint8Array} buf
*/
export function read_exact_sync(_this, read, buf) {
    var ptr0 = passArray8ToWasm0(buf, wasm.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN;
    wasm.read_exact_sync(addHeapObject(_this), addHeapObject(read), ptr0, len0, addHeapObject(buf));
}

/**
* @param {any} _this
* @param {Function} read
* @returns {Promise<string>}
*/
export function read_to_string(_this, read) {
    const ret = wasm.read_to_string(addHeapObject(_this), addHeapObject(read));
    return takeObject(ret);
}

let cachedInt32Memory0 = null;

function getInt32Memory0() {
    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {
        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32Memory0;
}
/**
* @param {any} _this
* @param {Function} read
* @returns {string}
*/
export function read_to_string_sync(_this, read) {
    let deferred1_0;
    let deferred1_1;
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.read_to_string_sync(retptr, addHeapObject(_this), addHeapObject(read));
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        deferred1_0 = r0;
        deferred1_1 = r1;
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
        wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
}

const cachedTextEncoder = (typeof TextEncoder !== 'undefined' ? new TextEncoder('utf-8') : { encode: () => { throw Error('TextEncoder not available') } } );

const encodeString = function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
};

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}
/**
* @param {number} ptr
* @param {string | undefined} [name]
* @returns {number}
*/
export function spawn_thread(ptr, name) {
    var ptr0 = isLikeNone(name) ? 0 : passStringToWasm0(name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    const ret = wasm.spawn_thread(ptr, ptr0, len0);
    return ret >>> 0;
}

/**
* @returns {number}
*/
export function available_parallelism() {
    const ret = wasm.available_parallelism();
    return ret >>> 0;
}

/**
* @returns {number}
*/
export function current_thread() {
    const ret = wasm.current_thread();
    return ret >>> 0;
}

/**
* @returns {boolean}
*/
export function thread_panicking() {
    const ret = wasm.thread_panicking();
    return ret !== 0;
}

/**
*/
export function park_thread() {
    wasm.park_thread();
}

/**
* @param {bigint} dur
*/
export function park_thread_with_timeout(dur) {
    wasm.park_thread_with_timeout(dur);
}

/**
* @param {bigint} dur
*/
export function sleep(dur) {
    wasm.sleep(dur);
}

/**
*/
export function yield_now() {
    wasm.yield_now();
}

/**
* @param {number} _this
* @returns {boolean}
*/
export function is_finished(_this) {
    const ret = wasm.is_finished(_this);
    return ret !== 0;
}

/**
* @param {number} _this
* @returns {number}
*/
export function thread(_this) {
    const ret = wasm.thread(_this);
    return ret >>> 0;
}

/**
* @param {number} _this
*/
export function join(_this) {
    wasm.join(_this);
}

/**
* @param {number} _this
* @returns {bigint}
*/
export function thread_id(_this) {
    const ret = wasm.thread_id(_this);
    return BigInt.asUintN(64, ret);
}

/**
* @param {number} _this
*/
export function thread_unpark(_this) {
    wasm.thread_unpark(_this);
}

/**
* @param {number} _this
* @returns {string | undefined}
*/
export function thread_name(_this) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.thread_name(retptr, _this);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        let v1;
        if (r0 !== 0) {
            v1 = getStringFromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 1, 1);
        }
        return v1;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} this_ptr
*/
export function drop_thread(this_ptr) {
    wasm.drop_thread(this_ptr);
}

/**
* @param {number} this_ptr
*/
export function drop_join_handle(this_ptr) {
    wasm.drop_join_handle(this_ptr);
}

/**
* @returns {number}
*/
export function new_vec() {
    const ret = wasm.f32_new_vec();
    return ret >>> 0;
}

/**
* @param {number} capacity
* @returns {number}
*/
export function new_vec_with_capacity(capacity) {
    const ret = wasm.new_vec_with_capacity(capacity);
    return ret >>> 0;
}

let cachedUint32Memory0 = null;

function getUint32Memory0() {
    if (cachedUint32Memory0 === null || cachedUint32Memory0.byteLength === 0) {
        cachedUint32Memory0 = new Uint32Array(wasm.memory.buffer);
    }
    return cachedUint32Memory0;
}

function passArrayJsValueToWasm0(array, malloc) {
    const ptr = malloc(array.length * 4, 4) >>> 0;
    const mem = getUint32Memory0();
    for (let i = 0; i < array.length; i++) {
        mem[ptr / 4 + i] = addHeapObject(array[i]);
    }
    WASM_VECTOR_LEN = array.length;
    return ptr;
}
/**
* @param {any[]} vec
* @returns {number}
*/
export function vec_from_iter(vec) {
    const ptr0 = passArrayJsValueToWasm0(vec, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.vec_from_iter(ptr0, len0);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} other
* @returns {number}
*/
export function vec_append(_this, other) {
    const ret = wasm.vec_append(_this, other);
    return ret;
}

/**
* @param {number} _this
* @param {number} index
* @returns {any}
*/
export function vec_at(_this, index) {
    const ret = wasm.vec_at(_this, index);
    return takeObject(ret);
}

/**
* @param {number} _this
* @returns {Slice}
*/
export function vec_as_slice(_this) {
    const ret = wasm.f32_vec_as_slice(_this);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {Function} f
* @returns {number}
*/
export function vec_binary_search_by(_this, f) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.vec_binary_search_by(retptr, _this, addHeapObject(f));
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) {
            throw takeObject(r1);
        }
        return r0 >>> 0;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @returns {number}
*/
export function vec_capacity(_this) {
    const ret = wasm.f32_vec_capacity(_this);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function vec_chunks_by(_this, f) {
    const ret = wasm.vec_chunks_by(_this, addHeapObject(f));
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function vec_chunks(_this, chunk_size) {
    const ret = wasm.vec_chunks(_this, chunk_size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function vec_chunks_exact(_this, chunk_size) {
    const ret = wasm.vec_chunks_exact(_this, chunk_size);
    return Slice.__wrap(ret);
}

let stack_pointer = 128;

function addBorrowedObject(obj) {
    if (stack_pointer == 1) throw new Error('out of js stack');
    heap[--stack_pointer] = obj;
    return stack_pointer;
}
/**
* @param {number} _this
* @param {any} element
* @returns {boolean}
*/
export function vec_contains(_this, element) {
    try {
        const ret = wasm.vec_contains(_this, addBorrowedObject(element));
        return ret !== 0;
    } finally {
        heap[stack_pointer++] = undefined;
    }
}

/**
* @param {number} _this
*/
export function vec_clear(_this) {
    wasm.vec_clear(_this);
}

/**
* @param {number} _this
* @param {Function} f
*/
export function vec_dedup(_this, f) {
    wasm.vec_dedup(_this, addHeapObject(f));
}

/**
* @param {number} _this
* @param {any} element
*/
export function vec_fill(_this, element) {
    wasm.vec_fill(_this, addHeapObject(element));
}

/**
* @param {number} _this
* @param {Function} f
*/
export function vec_fill_with(_this, f) {
    wasm.vec_fill_with(_this, addHeapObject(f));
}

/**
* @param {number} _this
* @returns {any}
*/
export function vec_first(_this) {
    const ret = wasm.vec_first(_this);
    return takeObject(ret);
}

/**
* @param {number} _this
* @param {number} i
* @returns {any}
*/
export function vec_index(_this, i) {
    const ret = wasm.vec_index(_this, i);
    return takeObject(ret);
}

/**
* @param {number} _this
* @param {number} i
* @param {any} element
* @returns {number}
*/
export function vec_insert(_this, i, element) {
    const ret = wasm.vec_insert(_this, i, addHeapObject(element));
    return ret;
}

/**
* @param {number} _this
* @returns {any}
*/
export function vec_last(_this) {
    const ret = wasm.vec_last(_this);
    return takeObject(ret);
}

/**
* @param {number} _this
* @returns {number}
*/
export function vec_len(_this) {
    const ret = wasm.f32_vec_len(_this);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {Function} f
* @returns {number}
*/
export function vec_partition_point(_this, f) {
    const ret = wasm.vec_partition_point(_this, addHeapObject(f));
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {any} element
* @returns {number}
*/
export function vec_push(_this, element) {
    const ret = wasm.vec_push(_this, addHeapObject(element));
    return ret;
}

/**
* @param {number} _this
* @param {any} element
* @returns {number}
*/
export function vec_push_front(_this, element) {
    const ret = wasm.vec_push_front(_this, addHeapObject(element));
    return ret;
}

/**
* @param {number} _this
* @returns {any}
*/
export function vec_pop(_this) {
    const ret = wasm.vec_pop(_this);
    return takeObject(ret);
}

/**
* @param {number} _this
* @returns {any}
*/
export function vec_pop_front(_this) {
    const ret = wasm.vec_pop_front(_this);
    return takeObject(ret);
}

/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function vec_rchunks(_this, chunk_size) {
    const ret = wasm.vec_rchunks(_this, chunk_size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function vec_rchunks_exact(_this, chunk_size) {
    const ret = wasm.vec_rchunks_exact(_this, chunk_size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} index
* @returns {any}
*/
export function vec_remove(_this, index) {
    const ret = wasm.vec_remove(_this, index);
    return takeObject(ret);
}

/**
* @param {number} _this
* @param {number} additional
* @returns {number}
*/
export function vec_reserve(_this, additional) {
    const ret = wasm.vec_reserve(_this, additional);
    return ret;
}

/**
* @param {number} _this
* @param {number} additional
* @returns {number}
*/
export function vec_reserve_exact(_this, additional) {
    const ret = wasm.vec_reserve_exact(_this, additional);
    return ret;
}

/**
* @param {number} _this
* @param {number} new_len
* @param {any} val
*/
export function vec_resize(_this, new_len, val) {
    wasm.vec_resize(_this, new_len, addHeapObject(val));
}

/**
* @param {number} _this
* @param {number} new_len
* @param {Function} f
*/
export function vec_resize_with(_this, new_len, f) {
    wasm.vec_resize_with(_this, new_len, addHeapObject(f));
}

/**
* @param {number} _this
* @param {Function} f
*/
export function vec_retain(_this, f) {
    wasm.vec_retain(_this, addHeapObject(f));
}

/**
* @param {number} _this
*/
export function vec_reverse(_this) {
    wasm.i32_vec_reverse(_this);
}

/**
* @param {number} _this
* @param {number} mid
*/
export function vec_rotate_left(_this, mid) {
    wasm.i32_vec_rotate_left(_this, mid);
}

/**
* @param {number} _this
* @param {number} k
*/
export function vec_rotate_right(_this, k) {
    wasm.i32_vec_rotate_right(_this, k);
}

/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function vec_rsplit(_this, f) {
    const ret = wasm.vec_rsplit(_this, addHeapObject(f));
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} n
* @param {Function} f
* @returns {number}
*/
export function vec_rsplitn(_this, n, f) {
    const ret = wasm.vec_rsplitn(_this, n, addHeapObject(f));
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} index
* @param {any} element
* @returns {number}
*/
export function vec_set(_this, index, element) {
    const ret = wasm.vec_set(_this, index, addHeapObject(element));
    return ret;
}

/**
* @param {number} _this
* @param {number} start
* @param {number} count
* @param {any[]} replace_with
* @returns {number}
*/
export function vec_splice_arr(_this, start, count, replace_with) {
    const ptr0 = passArrayJsValueToWasm0(replace_with, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.vec_splice_arr(_this, start, count, ptr0, len0);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} start
* @param {number} count
* @param {number} replace_with
* @returns {number}
*/
export function vec_splice_vec(_this, start, count, replace_with) {
    const ret = wasm.vec_splice_vec(_this, start, count, replace_with);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} at
* @returns {number}
*/
export function vec_split_off(_this, at) {
    const ret = wasm.vec_split_off(_this, at);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} min_capacity
*/
export function vec_shrink_to(_this, min_capacity) {
    wasm.vec_shrink_to(_this, min_capacity);
}

/**
* @param {number} _this
*/
export function vec_shrink_to_fit(_this) {
    wasm.vec_shrink_to_fit(_this);
}

/**
* @param {number} _this
* @param {Function} f
*/
export function vec_sort_by(_this, f) {
    wasm.vec_sort_by(_this, addHeapObject(f));
}

/**
* @param {number} _this
* @param {Function} f
*/
export function vec_sort_unstable_by(_this, f) {
    wasm.vec_sort_unstable_by(_this, addHeapObject(f));
}

/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function vec_split(_this, f) {
    const ret = wasm.vec_split(_this, addHeapObject(f));
    return Slice.__wrap(ret);
}

function getArrayJsValueFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    const mem = getUint32Memory0();
    const slice = mem.subarray(ptr / 4, ptr / 4 + len);
    const result = [];
    for (let i = 0; i < slice.length; i++) {
        result.push(takeObject(slice[i]));
    }
    return result;
}
/**
* @param {number} _this
* @param {number} mid
* @returns {(Slice)[]}
*/
export function vec_split_at(_this, mid) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.vec_split_at(retptr, _this, mid);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 4, 4);
        return v1;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @param {number} n
* @param {Function} f
* @returns {Slice}
*/
export function vec_splitn(_this, n, f) {
    const ret = wasm.vec_splitn(_this, n, addHeapObject(f));
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} a
* @param {number} b
* @returns {number}
*/
export function vec_swap(_this, a, b) {
    const ret = wasm.vec_swap(_this, a, b);
    return ret;
}

/**
* @param {number} _this
* @param {number} index
* @returns {any}
*/
export function vec_swap_remove(_this, index) {
    const ret = wasm.vec_swap_remove(_this, index);
    return takeObject(ret);
}

/**
* @param {number} _this
* @param {number} ptr
* @param {number} len
*/
export function vec_swap_with_slice(_this, ptr, len) {
    wasm.vec_swap_with_slice(_this, ptr, len);
}

/**
* @param {number} _this
* @param {number} len
*/
export function vec_truncate(_this, len) {
    wasm.vec_truncate(_this, len);
}

/**
* @param {number} _this
* @param {number} size
* @returns {Slice}
*/
export function vec_windows(_this, size) {
    const ret = wasm.vec_windows(_this, size);
    return Slice.__wrap(ret);
}

/**
* @param {number} ptr
*/
export function drop_vec(ptr) {
    wasm.drop_vec(ptr);
}

/**
* @returns {number}
*/
export function _new() {
    const ret = wasm._new();
    return ret >>> 0;
}

/**
* @returns {number}
*/
export function u8_new_vec() {
    const ret = wasm.i8_new_vec();
    return ret >>> 0;
}

/**
* @param {number} capacity
* @returns {number}
*/
export function u8_new_vec_with_capacity(capacity) {
    const ret = wasm.i8_new_vec_with_capacity(capacity);
    return ret >>> 0;
}

/**
* @param {Iterator<any>} iter
* @param {number | undefined} [size_hint]
* @returns {number}
*/
export function u8_vec_from_iter(iter, size_hint) {
    const ret = wasm.u8_vec_from_iter(addHeapObject(iter), !isLikeNone(size_hint), isLikeNone(size_hint) ? 0 : size_hint);
    return ret >>> 0;
}

/**
* @param {Array<any>} arr
* @returns {number}
*/
export function u8_vec_from_jsarr(arr) {
    const ret = wasm.u8_vec_from_jsarr(addHeapObject(arr));
    return ret >>> 0;
}

/**
* @param {Uint8Array} vec
* @returns {number}
*/
export function u8_vec_from_js_typed_array(vec) {
    const ptr0 = passArray8ToWasm0(vec, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.u8_vec_from_js_typed_array(ptr0, len0);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} other
*/
export function u8_vec_append(_this, other) {
    wasm.u8_vec_append(_this, other);
}

/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function u8_vec_at(_this, index) {
    const ret = wasm.u8_vec_at(_this, index);
    return ret === 0xFFFFFF ? undefined : ret;
}

/**
* @param {number} _this
* @returns {number}
*/
export function u8_vec_as_ptr(_this) {
    const ret = wasm.f32_vec_as_ptr(_this);
    return ret >>> 0;
}

/**
* @param {number} _this
* @returns {Slice}
*/
export function u8_vec_as_slice(_this) {
    const ret = wasm.f32_vec_as_slice(_this);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {Function} f
* @returns {number}
*/
export function u8_vec_binary_search_by(_this, f) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.u8_vec_binary_search_by(retptr, _this, addHeapObject(f));
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) {
            throw takeObject(r1);
        }
        return r0 >>> 0;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @returns {number}
*/
export function u8_vec_capacity(_this) {
    const ret = wasm.f32_vec_capacity(_this);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function u8_vec_chunks_by(_this, f) {
    const ret = wasm.u8_vec_chunks_by(_this, addHeapObject(f));
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function u8_vec_chunks(_this, chunk_size) {
    const ret = wasm.i8_vec_chunks(_this, chunk_size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function u8_vec_chunks_exact(_this, chunk_size) {
    const ret = wasm.i8_vec_chunks_exact(_this, chunk_size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} element
* @returns {boolean}
*/
export function u8_vec_contains(_this, element) {
    const ret = wasm.i8_vec_contains(_this, element);
    return ret !== 0;
}

/**
* @param {number} _this
*/
export function u8_vec_clear(_this) {
    wasm.f32_vec_clear(_this);
}

/**
* @param {number} _this
* @param {Function} f
*/
export function u8_vec_dedup(_this, f) {
    wasm.u8_vec_dedup(_this, addHeapObject(f));
}

/**
* @param {number} _this
* @param {number} element
*/
export function u8_vec_fill(_this, element) {
    wasm.i8_vec_fill(_this, element);
}

/**
* @param {number} _this
* @param {Function} f
*/
export function u8_vec_fill_with(_this, f) {
    wasm.u8_vec_fill_with(_this, addHeapObject(f));
}

/**
* @param {number} _this
* @returns {number | undefined}
*/
export function u8_vec_first(_this) {
    const ret = wasm.u8_vec_first(_this);
    return ret === 0xFFFFFF ? undefined : ret;
}

/**
* @param {number} _this
* @param {number} i
* @returns {number}
*/
export function u8_vec_index(_this, i) {
    const ret = wasm.u8_vec_index(_this, i);
    return ret;
}

/**
* @param {number} _this
* @param {number} i
* @param {number} element
*/
export function u8_vec_insert(_this, i, element) {
    wasm.u8_vec_insert(_this, i, element);
}

/**
* @param {number} _this
* @returns {number | undefined}
*/
export function u8_vec_last(_this) {
    const ret = wasm.u8_vec_last(_this);
    return ret === 0xFFFFFF ? undefined : ret;
}

/**
* @param {number} _this
* @returns {number}
*/
export function u8_vec_len(_this) {
    const ret = wasm.f32_vec_len(_this);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {Function} f
* @returns {number}
*/
export function u8_vec_partition_point(_this, f) {
    const ret = wasm.u8_vec_partition_point(_this, addHeapObject(f));
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} element
*/
export function u8_vec_push(_this, element) {
    wasm.u8_vec_push(_this, element);
}

/**
* @param {number} _this
* @param {number} element
*/
export function u8_vec_push_front(_this, element) {
    wasm.u8_vec_push_front(_this, element);
}

/**
* @param {number} _this
* @returns {number | undefined}
*/
export function u8_vec_pop(_this) {
    const ret = wasm.u8_vec_pop(_this);
    return ret === 0xFFFFFF ? undefined : ret;
}

/**
* @param {number} _this
* @returns {number | undefined}
*/
export function u8_vec_pop_front(_this) {
    const ret = wasm.u8_vec_pop_front(_this);
    return ret === 0xFFFFFF ? undefined : ret;
}

/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function u8_vec_rchunks(_this, chunk_size) {
    const ret = wasm.i8_vec_rchunks(_this, chunk_size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function u8_vec_rchunks_exact(_this, chunk_size) {
    const ret = wasm.i8_vec_rchunks_exact(_this, chunk_size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function u8_vec_remove(_this, index) {
    const ret = wasm.u8_vec_remove(_this, index);
    return ret === 0xFFFFFF ? undefined : ret;
}

/**
* @param {number} _this
* @param {number} additional
*/
export function u8_vec_reserve(_this, additional) {
    wasm.u8_vec_reserve(_this, additional);
}

/**
* @param {number} _this
* @param {number} additional
*/
export function u8_vec_reserve_exact(_this, additional) {
    wasm.u8_vec_reserve_exact(_this, additional);
}

/**
* @param {number} _this
* @param {number} new_len
* @param {number} val
*/
export function u8_vec_resize(_this, new_len, val) {
    wasm.u8_vec_resize(_this, new_len, val);
}

/**
* @param {number} _this
* @param {number} new_len
* @param {Function} f
*/
export function u8_vec_resize_with(_this, new_len, f) {
    wasm.u8_vec_resize_with(_this, new_len, addHeapObject(f));
}

/**
* @param {number} _this
* @param {Function} f
*/
export function u8_vec_retain(_this, f) {
    wasm.u8_vec_retain(_this, addHeapObject(f));
}

/**
* @param {number} _this
*/
export function u8_vec_reverse(_this) {
    wasm.i8_vec_reverse(_this);
}

/**
* @param {number} _this
* @param {number} mid
*/
export function u8_vec_rotate_left(_this, mid) {
    wasm.i8_vec_rotate_left(_this, mid);
}

/**
* @param {number} _this
* @param {number} k
*/
export function u8_vec_rotate_right(_this, k) {
    wasm.i8_vec_rotate_right(_this, k);
}

/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function u8_vec_rsplit(_this, f) {
    const ret = wasm.u8_vec_rsplit(_this, addHeapObject(f));
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} n
* @param {Function} f
* @returns {number}
*/
export function u8_vec_rsplitn(_this, n, f) {
    const ret = wasm.u8_vec_rsplitn(_this, n, addHeapObject(f));
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} index
* @param {number} element
*/
export function u8_vec_set(_this, index, element) {
    wasm.i8_vec_set(_this, index, element);
}

/**
* @param {number} _this
* @param {number} start
* @param {number} count
* @param {Uint8Array} replace_with
* @returns {number}
*/
export function u8_vec_splice_arr(_this, start, count, replace_with) {
    const ptr0 = passArray8ToWasm0(replace_with, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.u8_vec_splice_arr(_this, start, count, ptr0, len0);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} start
* @param {number} count
* @param {number} replace_with
* @returns {number}
*/
export function u8_vec_splice_vec(_this, start, count, replace_with) {
    const ret = wasm.u8_vec_splice_vec(_this, start, count, replace_with);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} at
* @returns {number}
*/
export function u8_vec_split_off(_this, at) {
    const ret = wasm.i8_vec_split_off(_this, at);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} min_capacity
*/
export function u8_vec_shrink_to(_this, min_capacity) {
    wasm.u8_vec_shrink_to(_this, min_capacity);
}

/**
* @param {number} _this
*/
export function u8_vec_shrink_to_fit(_this) {
    wasm.u8_vec_shrink_to_fit(_this);
}

/**
* @param {number} _this
* @param {number} start
* @param {number} end
* @returns {Uint8Array}
*/
export function u8_vec_slice(_this, start, end) {
    const ret = wasm.u8_vec_slice(_this, start, end);
    return takeObject(ret);
}

/**
* @param {number} _this
* @param {Function} f
*/
export function u8_vec_sort_by(_this, f) {
    wasm.u8_vec_sort_by(_this, addHeapObject(f));
}

/**
* @param {number} _this
* @param {Function} f
*/
export function u8_vec_sort_unstable_by(_this, f) {
    wasm.u8_vec_sort_unstable_by(_this, addHeapObject(f));
}

/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function u8_vec_split(_this, f) {
    const ret = wasm.u8_vec_split(_this, addHeapObject(f));
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} mid
* @returns {(Slice)[]}
*/
export function u8_vec_split_at(_this, mid) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.i8_vec_split_at(retptr, _this, mid);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 4, 4);
        return v1;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @param {number} n
* @param {Function} f
* @returns {Slice}
*/
export function u8_vec_splitn(_this, n, f) {
    const ret = wasm.u8_vec_splitn(_this, n, addHeapObject(f));
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} a
* @param {number} b
*/
export function u8_vec_swap(_this, a, b) {
    wasm.i8_vec_swap(_this, a, b);
}

/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function u8_vec_swap_remove(_this, index) {
    const ret = wasm.u8_vec_swap_remove(_this, index);
    return ret === 0xFFFFFF ? undefined : ret;
}

/**
* @param {number} _this
* @param {number} ptr
* @param {number} len
*/
export function u8_vec_swap_with_slice(_this, ptr, len) {
    wasm.i8_vec_swap_with_slice(_this, ptr, len);
}

/**
* @param {number} _this
* @param {number} len
*/
export function u8_vec_truncate(_this, len) {
    wasm.f32_vec_truncate(_this, len);
}

/**
* @param {number} _this
* @param {number} size
* @returns {Slice}
*/
export function u8_vec_windows(_this, size) {
    const ret = wasm.i8_vec_windows(_this, size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @returns {Uint8Array}
*/
export function u8_view(_this) {
    const ret = wasm.u8_view(_this);
    return takeObject(ret);
}

/**
* @param {number} ptr
*/
export function u8_drop_vec(ptr) {
    wasm.u8_drop_vec(ptr);
}

/**
* @returns {number}
*/
export function u16_new_vec() {
    const ret = wasm.i16_new_vec();
    return ret >>> 0;
}

/**
* @param {number} capacity
* @returns {number}
*/
export function u16_new_vec_with_capacity(capacity) {
    const ret = wasm.i16_new_vec_with_capacity(capacity);
    return ret >>> 0;
}

/**
* @param {Iterator<any>} iter
* @param {number | undefined} [size_hint]
* @returns {number}
*/
export function u16_vec_from_iter(iter, size_hint) {
    const ret = wasm.u16_vec_from_iter(addHeapObject(iter), !isLikeNone(size_hint), isLikeNone(size_hint) ? 0 : size_hint);
    return ret >>> 0;
}

/**
* @param {Array<any>} arr
* @returns {number}
*/
export function u16_vec_from_jsarr(arr) {
    const ret = wasm.u16_vec_from_jsarr(addHeapObject(arr));
    return ret >>> 0;
}

let cachedUint16Memory0 = null;

function getUint16Memory0() {
    if (cachedUint16Memory0 === null || cachedUint16Memory0.byteLength === 0) {
        cachedUint16Memory0 = new Uint16Array(wasm.memory.buffer);
    }
    return cachedUint16Memory0;
}

function passArray16ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 2, 2) >>> 0;
    getUint16Memory0().set(arg, ptr / 2);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}
/**
* @param {Uint16Array} vec
* @returns {number}
*/
export function u16_vec_from_js_typed_array(vec) {
    const ptr0 = passArray16ToWasm0(vec, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.i16_vec_from_js_typed_array(ptr0, len0);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} other
*/
export function u16_vec_append(_this, other) {
    wasm.i16_vec_append(_this, other);
}

/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function u16_vec_at(_this, index) {
    const ret = wasm.u16_vec_at(_this, index);
    return ret === 0xFFFFFF ? undefined : ret;
}

/**
* @param {number} _this
* @returns {number}
*/
export function u16_vec_as_ptr(_this) {
    const ret = wasm.f32_vec_as_ptr(_this);
    return ret >>> 0;
}

/**
* @param {number} _this
* @returns {Slice}
*/
export function u16_vec_as_slice(_this) {
    const ret = wasm.f32_vec_as_slice(_this);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {Function} f
* @returns {number}
*/
export function u16_vec_binary_search_by(_this, f) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.u16_vec_binary_search_by(retptr, _this, addHeapObject(f));
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) {
            throw takeObject(r1);
        }
        return r0 >>> 0;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @returns {number}
*/
export function u16_vec_capacity(_this) {
    const ret = wasm.f32_vec_capacity(_this);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function u16_vec_chunks_by(_this, f) {
    const ret = wasm.u16_vec_chunks_by(_this, addHeapObject(f));
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function u16_vec_chunks(_this, chunk_size) {
    const ret = wasm.i16_vec_chunks(_this, chunk_size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function u16_vec_chunks_exact(_this, chunk_size) {
    const ret = wasm.i16_vec_chunks_exact(_this, chunk_size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} element
* @returns {boolean}
*/
export function u16_vec_contains(_this, element) {
    const ret = wasm.i16_vec_contains(_this, element);
    return ret !== 0;
}

/**
* @param {number} _this
*/
export function u16_vec_clear(_this) {
    wasm.f32_vec_clear(_this);
}

/**
* @param {number} _this
* @param {Function} f
*/
export function u16_vec_dedup(_this, f) {
    wasm.u16_vec_dedup(_this, addHeapObject(f));
}

/**
* @param {number} _this
* @param {number} element
*/
export function u16_vec_fill(_this, element) {
    wasm.i16_vec_fill(_this, element);
}

/**
* @param {number} _this
* @param {Function} f
*/
export function u16_vec_fill_with(_this, f) {
    wasm.u16_vec_fill_with(_this, addHeapObject(f));
}

/**
* @param {number} _this
* @returns {number | undefined}
*/
export function u16_vec_first(_this) {
    const ret = wasm.u16_vec_first(_this);
    return ret === 0xFFFFFF ? undefined : ret;
}

/**
* @param {number} _this
* @param {number} i
* @returns {number}
*/
export function u16_vec_index(_this, i) {
    const ret = wasm.u16_vec_index(_this, i);
    return ret;
}

/**
* @param {number} _this
* @param {number} i
* @param {number} element
*/
export function u16_vec_insert(_this, i, element) {
    wasm.i16_vec_insert(_this, i, element);
}

/**
* @param {number} _this
* @returns {number | undefined}
*/
export function u16_vec_last(_this) {
    const ret = wasm.u16_vec_last(_this);
    return ret === 0xFFFFFF ? undefined : ret;
}

/**
* @param {number} _this
* @returns {number}
*/
export function u16_vec_len(_this) {
    const ret = wasm.f32_vec_len(_this);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {Function} f
* @returns {number}
*/
export function u16_vec_partition_point(_this, f) {
    const ret = wasm.u16_vec_partition_point(_this, addHeapObject(f));
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} element
*/
export function u16_vec_push(_this, element) {
    wasm.i16_vec_push(_this, element);
}

/**
* @param {number} _this
* @param {number} element
*/
export function u16_vec_push_front(_this, element) {
    wasm.i16_vec_push_front(_this, element);
}

/**
* @param {number} _this
* @returns {number | undefined}
*/
export function u16_vec_pop(_this) {
    const ret = wasm.u16_vec_pop(_this);
    return ret === 0xFFFFFF ? undefined : ret;
}

/**
* @param {number} _this
* @returns {number | undefined}
*/
export function u16_vec_pop_front(_this) {
    const ret = wasm.u16_vec_pop_front(_this);
    return ret === 0xFFFFFF ? undefined : ret;
}

/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function u16_vec_rchunks(_this, chunk_size) {
    const ret = wasm.i16_vec_rchunks(_this, chunk_size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function u16_vec_rchunks_exact(_this, chunk_size) {
    const ret = wasm.i16_vec_rchunks_exact(_this, chunk_size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function u16_vec_remove(_this, index) {
    const ret = wasm.u16_vec_remove(_this, index);
    return ret === 0xFFFFFF ? undefined : ret;
}

/**
* @param {number} _this
* @param {number} additional
*/
export function u16_vec_reserve(_this, additional) {
    wasm.i16_vec_reserve(_this, additional);
}

/**
* @param {number} _this
* @param {number} additional
*/
export function u16_vec_reserve_exact(_this, additional) {
    wasm.i16_vec_reserve_exact(_this, additional);
}

/**
* @param {number} _this
* @param {number} new_len
* @param {number} val
*/
export function u16_vec_resize(_this, new_len, val) {
    wasm.i16_vec_resize(_this, new_len, val);
}

/**
* @param {number} _this
* @param {number} new_len
* @param {Function} f
*/
export function u16_vec_resize_with(_this, new_len, f) {
    wasm.u16_vec_resize_with(_this, new_len, addHeapObject(f));
}

/**
* @param {number} _this
* @param {Function} f
*/
export function u16_vec_retain(_this, f) {
    wasm.u16_vec_retain(_this, addHeapObject(f));
}

/**
* @param {number} _this
*/
export function u16_vec_reverse(_this) {
    wasm.i16_vec_reverse(_this);
}

/**
* @param {number} _this
* @param {number} mid
*/
export function u16_vec_rotate_left(_this, mid) {
    wasm.i16_vec_rotate_left(_this, mid);
}

/**
* @param {number} _this
* @param {number} k
*/
export function u16_vec_rotate_right(_this, k) {
    wasm.i16_vec_rotate_right(_this, k);
}

/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function u16_vec_rsplit(_this, f) {
    const ret = wasm.u16_vec_rsplit(_this, addHeapObject(f));
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} n
* @param {Function} f
* @returns {number}
*/
export function u16_vec_rsplitn(_this, n, f) {
    const ret = wasm.u16_vec_rsplitn(_this, n, addHeapObject(f));
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} index
* @param {number} element
*/
export function u16_vec_set(_this, index, element) {
    wasm.i16_vec_set(_this, index, element);
}

/**
* @param {number} _this
* @param {number} start
* @param {number} count
* @param {Uint16Array} replace_with
* @returns {number}
*/
export function u16_vec_splice_arr(_this, start, count, replace_with) {
    const ptr0 = passArray16ToWasm0(replace_with, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.i16_vec_splice_arr(_this, start, count, ptr0, len0);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} start
* @param {number} count
* @param {number} replace_with
* @returns {number}
*/
export function u16_vec_splice_vec(_this, start, count, replace_with) {
    const ret = wasm.i16_vec_splice_vec(_this, start, count, replace_with);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} at
* @returns {number}
*/
export function u16_vec_split_off(_this, at) {
    const ret = wasm.i16_vec_split_off(_this, at);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} min_capacity
*/
export function u16_vec_shrink_to(_this, min_capacity) {
    wasm.i16_vec_shrink_to(_this, min_capacity);
}

/**
* @param {number} _this
*/
export function u16_vec_shrink_to_fit(_this) {
    wasm.i16_vec_shrink_to_fit(_this);
}

/**
* @param {number} _this
* @param {number} start
* @param {number} end
* @returns {Uint16Array}
*/
export function u16_vec_slice(_this, start, end) {
    const ret = wasm.u16_vec_slice(_this, start, end);
    return takeObject(ret);
}

/**
* @param {number} _this
* @param {Function} f
*/
export function u16_vec_sort_by(_this, f) {
    wasm.u16_vec_sort_by(_this, addHeapObject(f));
}

/**
* @param {number} _this
* @param {Function} f
*/
export function u16_vec_sort_unstable_by(_this, f) {
    wasm.u16_vec_sort_unstable_by(_this, addHeapObject(f));
}

/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function u16_vec_split(_this, f) {
    const ret = wasm.u16_vec_split(_this, addHeapObject(f));
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} mid
* @returns {(Slice)[]}
*/
export function u16_vec_split_at(_this, mid) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.i16_vec_split_at(retptr, _this, mid);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 4, 4);
        return v1;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @param {number} n
* @param {Function} f
* @returns {Slice}
*/
export function u16_vec_splitn(_this, n, f) {
    const ret = wasm.u16_vec_splitn(_this, n, addHeapObject(f));
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} a
* @param {number} b
*/
export function u16_vec_swap(_this, a, b) {
    wasm.i16_vec_swap(_this, a, b);
}

/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function u16_vec_swap_remove(_this, index) {
    const ret = wasm.u16_vec_swap_remove(_this, index);
    return ret === 0xFFFFFF ? undefined : ret;
}

/**
* @param {number} _this
* @param {number} ptr
* @param {number} len
*/
export function u16_vec_swap_with_slice(_this, ptr, len) {
    wasm.i16_vec_swap_with_slice(_this, ptr, len);
}

/**
* @param {number} _this
* @param {number} len
*/
export function u16_vec_truncate(_this, len) {
    wasm.f32_vec_truncate(_this, len);
}

/**
* @param {number} _this
* @param {number} size
* @returns {Slice}
*/
export function u16_vec_windows(_this, size) {
    const ret = wasm.i16_vec_windows(_this, size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @returns {Uint16Array}
*/
export function u16_view(_this) {
    const ret = wasm.u16_view(_this);
    return takeObject(ret);
}

/**
* @param {number} ptr
*/
export function u16_drop_vec(ptr) {
    wasm.i16_drop_vec(ptr);
}

/**
* @returns {number}
*/
export function u32_new_vec() {
    const ret = wasm.f32_new_vec();
    return ret >>> 0;
}

/**
* @param {number} capacity
* @returns {number}
*/
export function u32_new_vec_with_capacity(capacity) {
    const ret = wasm.f32_new_vec_with_capacity(capacity);
    return ret >>> 0;
}

/**
* @param {Iterator<any>} iter
* @param {number | undefined} [size_hint]
* @returns {number}
*/
export function u32_vec_from_iter(iter, size_hint) {
    const ret = wasm.u32_vec_from_iter(addHeapObject(iter), !isLikeNone(size_hint), isLikeNone(size_hint) ? 0 : size_hint);
    return ret >>> 0;
}

/**
* @param {Array<any>} arr
* @returns {number}
*/
export function u32_vec_from_jsarr(arr) {
    const ret = wasm.u32_vec_from_jsarr(addHeapObject(arr));
    return ret >>> 0;
}

function passArray32ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 4, 4) >>> 0;
    getUint32Memory0().set(arg, ptr / 4);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}
/**
* @param {Uint32Array} vec
* @returns {number}
*/
export function u32_vec_from_js_typed_array(vec) {
    const ptr0 = passArray32ToWasm0(vec, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.f32_vec_from_js_typed_array(ptr0, len0);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} other
*/
export function u32_vec_append(_this, other) {
    wasm.i32_vec_append(_this, other);
}

/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function u32_vec_at(_this, index) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.i32_vec_at(retptr, _this, index);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return r0 === 0 ? undefined : r1 >>> 0;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @returns {number}
*/
export function u32_vec_as_ptr(_this) {
    const ret = wasm.f32_vec_as_ptr(_this);
    return ret >>> 0;
}

/**
* @param {number} _this
* @returns {Slice}
*/
export function u32_vec_as_slice(_this) {
    const ret = wasm.f32_vec_as_slice(_this);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {Function} f
* @returns {number}
*/
export function u32_vec_binary_search_by(_this, f) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.u32_vec_binary_search_by(retptr, _this, addHeapObject(f));
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) {
            throw takeObject(r1);
        }
        return r0 >>> 0;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @returns {number}
*/
export function u32_vec_capacity(_this) {
    const ret = wasm.f32_vec_capacity(_this);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function u32_vec_chunks_by(_this, f) {
    const ret = wasm.u32_vec_chunks_by(_this, addHeapObject(f));
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function u32_vec_chunks(_this, chunk_size) {
    const ret = wasm.i32_vec_chunks(_this, chunk_size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function u32_vec_chunks_exact(_this, chunk_size) {
    const ret = wasm.i32_vec_chunks_exact(_this, chunk_size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} element
* @returns {boolean}
*/
export function u32_vec_contains(_this, element) {
    const ret = wasm.i32_vec_contains(_this, element);
    return ret !== 0;
}

/**
* @param {number} _this
*/
export function u32_vec_clear(_this) {
    wasm.f32_vec_clear(_this);
}

/**
* @param {number} _this
* @param {Function} f
*/
export function u32_vec_dedup(_this, f) {
    wasm.u32_vec_dedup(_this, addHeapObject(f));
}

/**
* @param {number} _this
* @param {number} element
*/
export function u32_vec_fill(_this, element) {
    wasm.i32_vec_fill(_this, element);
}

/**
* @param {number} _this
* @param {Function} f
*/
export function u32_vec_fill_with(_this, f) {
    wasm.u32_vec_fill_with(_this, addHeapObject(f));
}

/**
* @param {number} _this
* @returns {number | undefined}
*/
export function u32_vec_first(_this) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.i32_vec_first(retptr, _this);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return r0 === 0 ? undefined : r1 >>> 0;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @param {number} i
* @returns {number}
*/
export function u32_vec_index(_this, i) {
    const ret = wasm.i32_vec_index(_this, i);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} i
* @param {number} element
*/
export function u32_vec_insert(_this, i, element) {
    wasm.i32_vec_insert(_this, i, element);
}

/**
* @param {number} _this
* @returns {number | undefined}
*/
export function u32_vec_last(_this) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.i32_vec_last(retptr, _this);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return r0 === 0 ? undefined : r1 >>> 0;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @returns {number}
*/
export function u32_vec_len(_this) {
    const ret = wasm.f32_vec_len(_this);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {Function} f
* @returns {number}
*/
export function u32_vec_partition_point(_this, f) {
    const ret = wasm.u32_vec_partition_point(_this, addHeapObject(f));
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} element
*/
export function u32_vec_push(_this, element) {
    wasm.i32_vec_push(_this, element);
}

/**
* @param {number} _this
* @param {number} element
*/
export function u32_vec_push_front(_this, element) {
    wasm.i32_vec_push_front(_this, element);
}

/**
* @param {number} _this
* @returns {number | undefined}
*/
export function u32_vec_pop(_this) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.i32_vec_pop(retptr, _this);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return r0 === 0 ? undefined : r1 >>> 0;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @returns {number | undefined}
*/
export function u32_vec_pop_front(_this) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.i32_vec_pop_front(retptr, _this);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return r0 === 0 ? undefined : r1 >>> 0;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function u32_vec_rchunks(_this, chunk_size) {
    const ret = wasm.i32_vec_rchunks(_this, chunk_size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function u32_vec_rchunks_exact(_this, chunk_size) {
    const ret = wasm.i32_vec_rchunks_exact(_this, chunk_size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function u32_vec_remove(_this, index) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.i32_vec_remove(retptr, _this, index);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return r0 === 0 ? undefined : r1 >>> 0;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @param {number} additional
*/
export function u32_vec_reserve(_this, additional) {
    wasm.f32_vec_reserve(_this, additional);
}

/**
* @param {number} _this
* @param {number} additional
*/
export function u32_vec_reserve_exact(_this, additional) {
    wasm.f32_vec_reserve_exact(_this, additional);
}

/**
* @param {number} _this
* @param {number} new_len
* @param {number} val
*/
export function u32_vec_resize(_this, new_len, val) {
    wasm.i32_vec_resize(_this, new_len, val);
}

/**
* @param {number} _this
* @param {number} new_len
* @param {Function} f
*/
export function u32_vec_resize_with(_this, new_len, f) {
    wasm.u32_vec_resize_with(_this, new_len, addHeapObject(f));
}

/**
* @param {number} _this
* @param {Function} f
*/
export function u32_vec_retain(_this, f) {
    wasm.u32_vec_retain(_this, addHeapObject(f));
}

/**
* @param {number} _this
*/
export function u32_vec_reverse(_this) {
    wasm.i32_vec_reverse(_this);
}

/**
* @param {number} _this
* @param {number} mid
*/
export function u32_vec_rotate_left(_this, mid) {
    wasm.i32_vec_rotate_left(_this, mid);
}

/**
* @param {number} _this
* @param {number} k
*/
export function u32_vec_rotate_right(_this, k) {
    wasm.i32_vec_rotate_right(_this, k);
}

/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function u32_vec_rsplit(_this, f) {
    const ret = wasm.u32_vec_rsplit(_this, addHeapObject(f));
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} n
* @param {Function} f
* @returns {number}
*/
export function u32_vec_rsplitn(_this, n, f) {
    const ret = wasm.u32_vec_rsplitn(_this, n, addHeapObject(f));
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} index
* @param {number} element
*/
export function u32_vec_set(_this, index, element) {
    wasm.i32_vec_set(_this, index, element);
}

/**
* @param {number} _this
* @param {number} start
* @param {number} count
* @param {Uint32Array} replace_with
* @returns {number}
*/
export function u32_vec_splice_arr(_this, start, count, replace_with) {
    const ptr0 = passArray32ToWasm0(replace_with, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.i32_vec_splice_arr(_this, start, count, ptr0, len0);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} start
* @param {number} count
* @param {number} replace_with
* @returns {number}
*/
export function u32_vec_splice_vec(_this, start, count, replace_with) {
    const ret = wasm.i32_vec_splice_vec(_this, start, count, replace_with);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} at
* @returns {number}
*/
export function u32_vec_split_off(_this, at) {
    const ret = wasm.i32_vec_split_off(_this, at);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} min_capacity
*/
export function u32_vec_shrink_to(_this, min_capacity) {
    wasm.f32_vec_shrink_to(_this, min_capacity);
}

/**
* @param {number} _this
*/
export function u32_vec_shrink_to_fit(_this) {
    wasm.f32_vec_shrink_to_fit(_this);
}

/**
* @param {number} _this
* @param {number} start
* @param {number} end
* @returns {Uint32Array}
*/
export function u32_vec_slice(_this, start, end) {
    const ret = wasm.u32_vec_slice(_this, start, end);
    return takeObject(ret);
}

/**
* @param {number} _this
* @param {Function} f
*/
export function u32_vec_sort_by(_this, f) {
    wasm.u32_vec_sort_by(_this, addHeapObject(f));
}

/**
* @param {number} _this
* @param {Function} f
*/
export function u32_vec_sort_unstable_by(_this, f) {
    wasm.u32_vec_sort_unstable_by(_this, addHeapObject(f));
}

/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function u32_vec_split(_this, f) {
    const ret = wasm.u32_vec_split(_this, addHeapObject(f));
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} mid
* @returns {(Slice)[]}
*/
export function u32_vec_split_at(_this, mid) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.i32_vec_split_at(retptr, _this, mid);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 4, 4);
        return v1;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @param {number} n
* @param {Function} f
* @returns {Slice}
*/
export function u32_vec_splitn(_this, n, f) {
    const ret = wasm.u32_vec_splitn(_this, n, addHeapObject(f));
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} a
* @param {number} b
*/
export function u32_vec_swap(_this, a, b) {
    wasm.i32_vec_swap(_this, a, b);
}

/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function u32_vec_swap_remove(_this, index) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.i32_vec_swap_remove(retptr, _this, index);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return r0 === 0 ? undefined : r1 >>> 0;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @param {number} ptr
* @param {number} len
*/
export function u32_vec_swap_with_slice(_this, ptr, len) {
    wasm.i32_vec_swap_with_slice(_this, ptr, len);
}

/**
* @param {number} _this
* @param {number} len
*/
export function u32_vec_truncate(_this, len) {
    wasm.f32_vec_truncate(_this, len);
}

/**
* @param {number} _this
* @param {number} size
* @returns {Slice}
*/
export function u32_vec_windows(_this, size) {
    const ret = wasm.f32_vec_windows(_this, size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @returns {Uint32Array}
*/
export function u32_view(_this) {
    const ret = wasm.u32_view(_this);
    return takeObject(ret);
}

/**
* @param {number} ptr
*/
export function u32_drop_vec(ptr) {
    wasm.f32_drop_vec(ptr);
}

/**
* @returns {number}
*/
export function u64_new_vec() {
    const ret = wasm.f64_new_vec();
    return ret >>> 0;
}

/**
* @param {number} capacity
* @returns {number}
*/
export function u64_new_vec_with_capacity(capacity) {
    const ret = wasm.f64_new_vec_with_capacity(capacity);
    return ret >>> 0;
}

/**
* @param {Iterator<any>} iter
* @param {number | undefined} [size_hint]
* @returns {number}
*/
export function u64_vec_from_iter(iter, size_hint) {
    const ret = wasm.u64_vec_from_iter(addHeapObject(iter), !isLikeNone(size_hint), isLikeNone(size_hint) ? 0 : size_hint);
    return ret >>> 0;
}

/**
* @param {Array<any>} arr
* @returns {number}
*/
export function u64_vec_from_jsarr(arr) {
    const ret = wasm.u64_vec_from_jsarr(addHeapObject(arr));
    return ret >>> 0;
}

let cachedBigUint64Memory0 = null;

function getBigUint64Memory0() {
    if (cachedBigUint64Memory0 === null || cachedBigUint64Memory0.byteLength === 0) {
        cachedBigUint64Memory0 = new BigUint64Array(wasm.memory.buffer);
    }
    return cachedBigUint64Memory0;
}

function passArray64ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 8, 8) >>> 0;
    getBigUint64Memory0().set(arg, ptr / 8);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}
/**
* @param {BigUint64Array} vec
* @returns {number}
*/
export function u64_vec_from_js_typed_array(vec) {
    const ptr0 = passArray64ToWasm0(vec, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.f64_vec_from_js_typed_array(ptr0, len0);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} other
*/
export function u64_vec_append(_this, other) {
    wasm.i64_vec_append(_this, other);
}

let cachedBigInt64Memory0 = null;

function getBigInt64Memory0() {
    if (cachedBigInt64Memory0 === null || cachedBigInt64Memory0.byteLength === 0) {
        cachedBigInt64Memory0 = new BigInt64Array(wasm.memory.buffer);
    }
    return cachedBigInt64Memory0;
}
/**
* @param {number} _this
* @param {number} index
* @returns {bigint | undefined}
*/
export function u64_vec_at(_this, index) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.i64_vec_at(retptr, _this, index);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r2 = getBigInt64Memory0()[retptr / 8 + 1];
        return r0 === 0 ? undefined : BigInt.asUintN(64, r2);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @returns {number}
*/
export function u64_vec_as_ptr(_this) {
    const ret = wasm.f32_vec_as_ptr(_this);
    return ret >>> 0;
}

/**
* @param {number} _this
* @returns {Slice}
*/
export function u64_vec_as_slice(_this) {
    const ret = wasm.f32_vec_as_slice(_this);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {Function} f
* @returns {number}
*/
export function u64_vec_binary_search_by(_this, f) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.u64_vec_binary_search_by(retptr, _this, addHeapObject(f));
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) {
            throw takeObject(r1);
        }
        return r0 >>> 0;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @returns {number}
*/
export function u64_vec_capacity(_this) {
    const ret = wasm.f32_vec_capacity(_this);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function u64_vec_chunks_by(_this, f) {
    const ret = wasm.u64_vec_chunks_by(_this, addHeapObject(f));
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function u64_vec_chunks(_this, chunk_size) {
    const ret = wasm.i64_vec_chunks(_this, chunk_size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function u64_vec_chunks_exact(_this, chunk_size) {
    const ret = wasm.i64_vec_chunks_exact(_this, chunk_size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {bigint} element
* @returns {boolean}
*/
export function u64_vec_contains(_this, element) {
    const ret = wasm.i64_vec_contains(_this, element);
    return ret !== 0;
}

/**
* @param {number} _this
*/
export function u64_vec_clear(_this) {
    wasm.f32_vec_clear(_this);
}

/**
* @param {number} _this
* @param {Function} f
*/
export function u64_vec_dedup(_this, f) {
    wasm.u64_vec_dedup(_this, addHeapObject(f));
}

/**
* @param {number} _this
* @param {bigint} element
*/
export function u64_vec_fill(_this, element) {
    wasm.i64_vec_fill(_this, element);
}

/**
* @param {number} _this
* @param {Function} f
*/
export function u64_vec_fill_with(_this, f) {
    wasm.u64_vec_fill_with(_this, addHeapObject(f));
}

/**
* @param {number} _this
* @returns {bigint | undefined}
*/
export function u64_vec_first(_this) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.i64_vec_first(retptr, _this);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r2 = getBigInt64Memory0()[retptr / 8 + 1];
        return r0 === 0 ? undefined : BigInt.asUintN(64, r2);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @param {number} i
* @returns {bigint}
*/
export function u64_vec_index(_this, i) {
    const ret = wasm.i64_vec_index(_this, i);
    return BigInt.asUintN(64, ret);
}

/**
* @param {number} _this
* @param {number} i
* @param {bigint} element
*/
export function u64_vec_insert(_this, i, element) {
    wasm.i64_vec_insert(_this, i, element);
}

/**
* @param {number} _this
* @returns {bigint | undefined}
*/
export function u64_vec_last(_this) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.i64_vec_last(retptr, _this);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r2 = getBigInt64Memory0()[retptr / 8 + 1];
        return r0 === 0 ? undefined : BigInt.asUintN(64, r2);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @returns {number}
*/
export function u64_vec_len(_this) {
    const ret = wasm.f32_vec_len(_this);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {Function} f
* @returns {number}
*/
export function u64_vec_partition_point(_this, f) {
    const ret = wasm.u64_vec_partition_point(_this, addHeapObject(f));
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {bigint} element
*/
export function u64_vec_push(_this, element) {
    wasm.i64_vec_push(_this, element);
}

/**
* @param {number} _this
* @param {bigint} element
*/
export function u64_vec_push_front(_this, element) {
    wasm.i64_vec_push_front(_this, element);
}

/**
* @param {number} _this
* @returns {bigint | undefined}
*/
export function u64_vec_pop(_this) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.i64_vec_pop(retptr, _this);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r2 = getBigInt64Memory0()[retptr / 8 + 1];
        return r0 === 0 ? undefined : BigInt.asUintN(64, r2);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @returns {bigint | undefined}
*/
export function u64_vec_pop_front(_this) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.i64_vec_pop_front(retptr, _this);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r2 = getBigInt64Memory0()[retptr / 8 + 1];
        return r0 === 0 ? undefined : BigInt.asUintN(64, r2);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function u64_vec_rchunks(_this, chunk_size) {
    const ret = wasm.i64_vec_rchunks(_this, chunk_size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function u64_vec_rchunks_exact(_this, chunk_size) {
    const ret = wasm.i64_vec_rchunks_exact(_this, chunk_size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} index
* @returns {bigint | undefined}
*/
export function u64_vec_remove(_this, index) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.i64_vec_remove(retptr, _this, index);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r2 = getBigInt64Memory0()[retptr / 8 + 1];
        return r0 === 0 ? undefined : BigInt.asUintN(64, r2);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @param {number} additional
*/
export function u64_vec_reserve(_this, additional) {
    wasm.f64_vec_reserve(_this, additional);
}

/**
* @param {number} _this
* @param {number} additional
*/
export function u64_vec_reserve_exact(_this, additional) {
    wasm.f64_vec_reserve_exact(_this, additional);
}

/**
* @param {number} _this
* @param {number} new_len
* @param {bigint} val
*/
export function u64_vec_resize(_this, new_len, val) {
    wasm.i64_vec_resize(_this, new_len, val);
}

/**
* @param {number} _this
* @param {number} new_len
* @param {Function} f
*/
export function u64_vec_resize_with(_this, new_len, f) {
    wasm.u64_vec_resize_with(_this, new_len, addHeapObject(f));
}

/**
* @param {number} _this
* @param {Function} f
*/
export function u64_vec_retain(_this, f) {
    wasm.u64_vec_retain(_this, addHeapObject(f));
}

/**
* @param {number} _this
*/
export function u64_vec_reverse(_this) {
    wasm.i64_vec_reverse(_this);
}

/**
* @param {number} _this
* @param {number} mid
*/
export function u64_vec_rotate_left(_this, mid) {
    wasm.i64_vec_rotate_left(_this, mid);
}

/**
* @param {number} _this
* @param {number} k
*/
export function u64_vec_rotate_right(_this, k) {
    wasm.i64_vec_rotate_right(_this, k);
}

/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function u64_vec_rsplit(_this, f) {
    const ret = wasm.u64_vec_rsplit(_this, addHeapObject(f));
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} n
* @param {Function} f
* @returns {number}
*/
export function u64_vec_rsplitn(_this, n, f) {
    const ret = wasm.u64_vec_rsplitn(_this, n, addHeapObject(f));
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} index
* @param {bigint} element
*/
export function u64_vec_set(_this, index, element) {
    wasm.i64_vec_set(_this, index, element);
}

/**
* @param {number} _this
* @param {number} start
* @param {number} count
* @param {BigUint64Array} replace_with
* @returns {number}
*/
export function u64_vec_splice_arr(_this, start, count, replace_with) {
    const ptr0 = passArray64ToWasm0(replace_with, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.i64_vec_splice_arr(_this, start, count, ptr0, len0);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} start
* @param {number} count
* @param {number} replace_with
* @returns {number}
*/
export function u64_vec_splice_vec(_this, start, count, replace_with) {
    const ret = wasm.i64_vec_splice_vec(_this, start, count, replace_with);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} at
* @returns {number}
*/
export function u64_vec_split_off(_this, at) {
    const ret = wasm.i64_vec_split_off(_this, at);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} min_capacity
*/
export function u64_vec_shrink_to(_this, min_capacity) {
    wasm.f64_vec_shrink_to(_this, min_capacity);
}

/**
* @param {number} _this
*/
export function u64_vec_shrink_to_fit(_this) {
    wasm.f64_vec_shrink_to_fit(_this);
}

/**
* @param {number} _this
* @param {number} start
* @param {number} end
* @returns {BigUint64Array}
*/
export function u64_vec_slice(_this, start, end) {
    const ret = wasm.u64_vec_slice(_this, start, end);
    return takeObject(ret);
}

/**
* @param {number} _this
* @param {Function} f
*/
export function u64_vec_sort_by(_this, f) {
    wasm.u64_vec_sort_by(_this, addHeapObject(f));
}

/**
* @param {number} _this
* @param {Function} f
*/
export function u64_vec_sort_unstable_by(_this, f) {
    wasm.u64_vec_sort_unstable_by(_this, addHeapObject(f));
}

/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function u64_vec_split(_this, f) {
    const ret = wasm.u64_vec_split(_this, addHeapObject(f));
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} mid
* @returns {(Slice)[]}
*/
export function u64_vec_split_at(_this, mid) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.i64_vec_split_at(retptr, _this, mid);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 4, 4);
        return v1;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @param {number} n
* @param {Function} f
* @returns {Slice}
*/
export function u64_vec_splitn(_this, n, f) {
    const ret = wasm.u64_vec_splitn(_this, n, addHeapObject(f));
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} a
* @param {number} b
*/
export function u64_vec_swap(_this, a, b) {
    wasm.i64_vec_swap(_this, a, b);
}

/**
* @param {number} _this
* @param {number} index
* @returns {bigint | undefined}
*/
export function u64_vec_swap_remove(_this, index) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.i64_vec_swap_remove(retptr, _this, index);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r2 = getBigInt64Memory0()[retptr / 8 + 1];
        return r0 === 0 ? undefined : BigInt.asUintN(64, r2);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @param {number} ptr
* @param {number} len
*/
export function u64_vec_swap_with_slice(_this, ptr, len) {
    wasm.i64_vec_swap_with_slice(_this, ptr, len);
}

/**
* @param {number} _this
* @param {number} len
*/
export function u64_vec_truncate(_this, len) {
    wasm.f32_vec_truncate(_this, len);
}

/**
* @param {number} _this
* @param {number} size
* @returns {Slice}
*/
export function u64_vec_windows(_this, size) {
    const ret = wasm.f64_vec_windows(_this, size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @returns {BigUint64Array}
*/
export function u64_view(_this) {
    const ret = wasm.u64_view(_this);
    return takeObject(ret);
}

/**
* @param {number} ptr
*/
export function u64_drop_vec(ptr) {
    wasm.f64_drop_vec(ptr);
}

/**
* @returns {number}
*/
export function i8_new_vec() {
    const ret = wasm.i8_new_vec();
    return ret >>> 0;
}

/**
* @param {number} capacity
* @returns {number}
*/
export function i8_new_vec_with_capacity(capacity) {
    const ret = wasm.i8_new_vec_with_capacity(capacity);
    return ret >>> 0;
}

/**
* @param {Iterator<any>} iter
* @param {number | undefined} [size_hint]
* @returns {number}
*/
export function i8_vec_from_iter(iter, size_hint) {
    const ret = wasm.i8_vec_from_iter(addHeapObject(iter), !isLikeNone(size_hint), isLikeNone(size_hint) ? 0 : size_hint);
    return ret >>> 0;
}

/**
* @param {Array<any>} arr
* @returns {number}
*/
export function i8_vec_from_jsarr(arr) {
    const ret = wasm.i8_vec_from_jsarr(addHeapObject(arr));
    return ret >>> 0;
}

/**
* @param {Int8Array} vec
* @returns {number}
*/
export function i8_vec_from_js_typed_array(vec) {
    const ptr0 = passArray8ToWasm0(vec, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.i8_vec_from_js_typed_array(ptr0, len0);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} other
*/
export function i8_vec_append(_this, other) {
    wasm.i8_vec_append(_this, other);
}

/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function i8_vec_at(_this, index) {
    const ret = wasm.i8_vec_at(_this, index);
    return ret === 0xFFFFFF ? undefined : ret;
}

/**
* @param {number} _this
* @returns {number}
*/
export function i8_vec_as_ptr(_this) {
    const ret = wasm.f32_vec_as_ptr(_this);
    return ret >>> 0;
}

/**
* @param {number} _this
* @returns {Slice}
*/
export function i8_vec_as_slice(_this) {
    const ret = wasm.f32_vec_as_slice(_this);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {Function} f
* @returns {number}
*/
export function i8_vec_binary_search_by(_this, f) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.i8_vec_binary_search_by(retptr, _this, addHeapObject(f));
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) {
            throw takeObject(r1);
        }
        return r0 >>> 0;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @returns {number}
*/
export function i8_vec_capacity(_this) {
    const ret = wasm.f32_vec_capacity(_this);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function i8_vec_chunks_by(_this, f) {
    const ret = wasm.i8_vec_chunks_by(_this, addHeapObject(f));
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function i8_vec_chunks(_this, chunk_size) {
    const ret = wasm.i8_vec_chunks(_this, chunk_size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function i8_vec_chunks_exact(_this, chunk_size) {
    const ret = wasm.i8_vec_chunks_exact(_this, chunk_size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} element
* @returns {boolean}
*/
export function i8_vec_contains(_this, element) {
    const ret = wasm.i8_vec_contains(_this, element);
    return ret !== 0;
}

/**
* @param {number} _this
*/
export function i8_vec_clear(_this) {
    wasm.f32_vec_clear(_this);
}

/**
* @param {number} _this
* @param {Function} f
*/
export function i8_vec_dedup(_this, f) {
    wasm.i8_vec_dedup(_this, addHeapObject(f));
}

/**
* @param {number} _this
* @param {number} element
*/
export function i8_vec_fill(_this, element) {
    wasm.i8_vec_fill(_this, element);
}

/**
* @param {number} _this
* @param {Function} f
*/
export function i8_vec_fill_with(_this, f) {
    wasm.i8_vec_fill_with(_this, addHeapObject(f));
}

/**
* @param {number} _this
* @returns {number | undefined}
*/
export function i8_vec_first(_this) {
    const ret = wasm.i8_vec_first(_this);
    return ret === 0xFFFFFF ? undefined : ret;
}

/**
* @param {number} _this
* @param {number} i
* @returns {number}
*/
export function i8_vec_index(_this, i) {
    const ret = wasm.i8_vec_index(_this, i);
    return ret;
}

/**
* @param {number} _this
* @param {number} i
* @param {number} element
*/
export function i8_vec_insert(_this, i, element) {
    wasm.i8_vec_insert(_this, i, element);
}

/**
* @param {number} _this
* @returns {number | undefined}
*/
export function i8_vec_last(_this) {
    const ret = wasm.i8_vec_last(_this);
    return ret === 0xFFFFFF ? undefined : ret;
}

/**
* @param {number} _this
* @returns {number}
*/
export function i8_vec_len(_this) {
    const ret = wasm.f32_vec_len(_this);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {Function} f
* @returns {number}
*/
export function i8_vec_partition_point(_this, f) {
    const ret = wasm.i8_vec_partition_point(_this, addHeapObject(f));
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} element
*/
export function i8_vec_push(_this, element) {
    wasm.i8_vec_push(_this, element);
}

/**
* @param {number} _this
* @param {number} element
*/
export function i8_vec_push_front(_this, element) {
    wasm.i8_vec_push_front(_this, element);
}

/**
* @param {number} _this
* @returns {number | undefined}
*/
export function i8_vec_pop(_this) {
    const ret = wasm.i8_vec_pop(_this);
    return ret === 0xFFFFFF ? undefined : ret;
}

/**
* @param {number} _this
* @returns {number | undefined}
*/
export function i8_vec_pop_front(_this) {
    const ret = wasm.i8_vec_pop_front(_this);
    return ret === 0xFFFFFF ? undefined : ret;
}

/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function i8_vec_rchunks(_this, chunk_size) {
    const ret = wasm.i8_vec_rchunks(_this, chunk_size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function i8_vec_rchunks_exact(_this, chunk_size) {
    const ret = wasm.i8_vec_rchunks_exact(_this, chunk_size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function i8_vec_remove(_this, index) {
    const ret = wasm.i8_vec_remove(_this, index);
    return ret === 0xFFFFFF ? undefined : ret;
}

/**
* @param {number} _this
* @param {number} additional
*/
export function i8_vec_reserve(_this, additional) {
    wasm.i8_vec_reserve(_this, additional);
}

/**
* @param {number} _this
* @param {number} additional
*/
export function i8_vec_reserve_exact(_this, additional) {
    wasm.i8_vec_reserve_exact(_this, additional);
}

/**
* @param {number} _this
* @param {number} new_len
* @param {number} val
*/
export function i8_vec_resize(_this, new_len, val) {
    wasm.i8_vec_resize(_this, new_len, val);
}

/**
* @param {number} _this
* @param {number} new_len
* @param {Function} f
*/
export function i8_vec_resize_with(_this, new_len, f) {
    wasm.i8_vec_resize_with(_this, new_len, addHeapObject(f));
}

/**
* @param {number} _this
* @param {Function} f
*/
export function i8_vec_retain(_this, f) {
    wasm.i8_vec_retain(_this, addHeapObject(f));
}

/**
* @param {number} _this
*/
export function i8_vec_reverse(_this) {
    wasm.i8_vec_reverse(_this);
}

/**
* @param {number} _this
* @param {number} mid
*/
export function i8_vec_rotate_left(_this, mid) {
    wasm.i8_vec_rotate_left(_this, mid);
}

/**
* @param {number} _this
* @param {number} k
*/
export function i8_vec_rotate_right(_this, k) {
    wasm.i8_vec_rotate_right(_this, k);
}

/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function i8_vec_rsplit(_this, f) {
    const ret = wasm.i8_vec_rsplit(_this, addHeapObject(f));
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} n
* @param {Function} f
* @returns {number}
*/
export function i8_vec_rsplitn(_this, n, f) {
    const ret = wasm.i8_vec_rsplitn(_this, n, addHeapObject(f));
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} index
* @param {number} element
*/
export function i8_vec_set(_this, index, element) {
    wasm.i8_vec_set(_this, index, element);
}

/**
* @param {number} _this
* @param {number} start
* @param {number} count
* @param {Int8Array} replace_with
* @returns {number}
*/
export function i8_vec_splice_arr(_this, start, count, replace_with) {
    const ptr0 = passArray8ToWasm0(replace_with, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.i8_vec_splice_arr(_this, start, count, ptr0, len0);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} start
* @param {number} count
* @param {number} replace_with
* @returns {number}
*/
export function i8_vec_splice_vec(_this, start, count, replace_with) {
    const ret = wasm.i8_vec_splice_vec(_this, start, count, replace_with);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} at
* @returns {number}
*/
export function i8_vec_split_off(_this, at) {
    const ret = wasm.i8_vec_split_off(_this, at);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} min_capacity
*/
export function i8_vec_shrink_to(_this, min_capacity) {
    wasm.i8_vec_shrink_to(_this, min_capacity);
}

/**
* @param {number} _this
*/
export function i8_vec_shrink_to_fit(_this) {
    wasm.i8_vec_shrink_to_fit(_this);
}

/**
* @param {number} _this
* @param {number} start
* @param {number} end
* @returns {Int8Array}
*/
export function i8_vec_slice(_this, start, end) {
    const ret = wasm.i8_vec_slice(_this, start, end);
    return takeObject(ret);
}

/**
* @param {number} _this
* @param {Function} f
*/
export function i8_vec_sort_by(_this, f) {
    wasm.i8_vec_sort_by(_this, addHeapObject(f));
}

/**
* @param {number} _this
* @param {Function} f
*/
export function i8_vec_sort_unstable_by(_this, f) {
    wasm.i8_vec_sort_unstable_by(_this, addHeapObject(f));
}

/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function i8_vec_split(_this, f) {
    const ret = wasm.i8_vec_split(_this, addHeapObject(f));
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} mid
* @returns {(Slice)[]}
*/
export function i8_vec_split_at(_this, mid) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.i8_vec_split_at(retptr, _this, mid);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 4, 4);
        return v1;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @param {number} n
* @param {Function} f
* @returns {Slice}
*/
export function i8_vec_splitn(_this, n, f) {
    const ret = wasm.i8_vec_splitn(_this, n, addHeapObject(f));
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} a
* @param {number} b
*/
export function i8_vec_swap(_this, a, b) {
    wasm.i8_vec_swap(_this, a, b);
}

/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function i8_vec_swap_remove(_this, index) {
    const ret = wasm.i8_vec_swap_remove(_this, index);
    return ret === 0xFFFFFF ? undefined : ret;
}

/**
* @param {number} _this
* @param {number} ptr
* @param {number} len
*/
export function i8_vec_swap_with_slice(_this, ptr, len) {
    wasm.i8_vec_swap_with_slice(_this, ptr, len);
}

/**
* @param {number} _this
* @param {number} len
*/
export function i8_vec_truncate(_this, len) {
    wasm.f32_vec_truncate(_this, len);
}

/**
* @param {number} _this
* @param {number} size
* @returns {Slice}
*/
export function i8_vec_windows(_this, size) {
    const ret = wasm.i8_vec_windows(_this, size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @returns {Int8Array}
*/
export function i8_view(_this) {
    const ret = wasm.i8_view(_this);
    return takeObject(ret);
}

/**
* @param {number} ptr
*/
export function i8_drop_vec(ptr) {
    wasm.i8_drop_vec(ptr);
}

/**
* @returns {number}
*/
export function i16_new_vec() {
    const ret = wasm.i16_new_vec();
    return ret >>> 0;
}

/**
* @param {number} capacity
* @returns {number}
*/
export function i16_new_vec_with_capacity(capacity) {
    const ret = wasm.i16_new_vec_with_capacity(capacity);
    return ret >>> 0;
}

/**
* @param {Iterator<any>} iter
* @param {number | undefined} [size_hint]
* @returns {number}
*/
export function i16_vec_from_iter(iter, size_hint) {
    const ret = wasm.i16_vec_from_iter(addHeapObject(iter), !isLikeNone(size_hint), isLikeNone(size_hint) ? 0 : size_hint);
    return ret >>> 0;
}

/**
* @param {Array<any>} arr
* @returns {number}
*/
export function i16_vec_from_jsarr(arr) {
    const ret = wasm.i16_vec_from_jsarr(addHeapObject(arr));
    return ret >>> 0;
}

/**
* @param {Int16Array} vec
* @returns {number}
*/
export function i16_vec_from_js_typed_array(vec) {
    const ptr0 = passArray16ToWasm0(vec, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.i16_vec_from_js_typed_array(ptr0, len0);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} other
*/
export function i16_vec_append(_this, other) {
    wasm.i16_vec_append(_this, other);
}

/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function i16_vec_at(_this, index) {
    const ret = wasm.i16_vec_at(_this, index);
    return ret === 0xFFFFFF ? undefined : ret;
}

/**
* @param {number} _this
* @returns {number}
*/
export function i16_vec_as_ptr(_this) {
    const ret = wasm.f32_vec_as_ptr(_this);
    return ret >>> 0;
}

/**
* @param {number} _this
* @returns {Slice}
*/
export function i16_vec_as_slice(_this) {
    const ret = wasm.f32_vec_as_slice(_this);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {Function} f
* @returns {number}
*/
export function i16_vec_binary_search_by(_this, f) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.i16_vec_binary_search_by(retptr, _this, addHeapObject(f));
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) {
            throw takeObject(r1);
        }
        return r0 >>> 0;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @returns {number}
*/
export function i16_vec_capacity(_this) {
    const ret = wasm.f32_vec_capacity(_this);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function i16_vec_chunks_by(_this, f) {
    const ret = wasm.i16_vec_chunks_by(_this, addHeapObject(f));
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function i16_vec_chunks(_this, chunk_size) {
    const ret = wasm.i16_vec_chunks(_this, chunk_size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function i16_vec_chunks_exact(_this, chunk_size) {
    const ret = wasm.i16_vec_chunks_exact(_this, chunk_size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} element
* @returns {boolean}
*/
export function i16_vec_contains(_this, element) {
    const ret = wasm.i16_vec_contains(_this, element);
    return ret !== 0;
}

/**
* @param {number} _this
*/
export function i16_vec_clear(_this) {
    wasm.f32_vec_clear(_this);
}

/**
* @param {number} _this
* @param {Function} f
*/
export function i16_vec_dedup(_this, f) {
    wasm.i16_vec_dedup(_this, addHeapObject(f));
}

/**
* @param {number} _this
* @param {number} element
*/
export function i16_vec_fill(_this, element) {
    wasm.i16_vec_fill(_this, element);
}

/**
* @param {number} _this
* @param {Function} f
*/
export function i16_vec_fill_with(_this, f) {
    wasm.i16_vec_fill_with(_this, addHeapObject(f));
}

/**
* @param {number} _this
* @returns {number | undefined}
*/
export function i16_vec_first(_this) {
    const ret = wasm.i16_vec_first(_this);
    return ret === 0xFFFFFF ? undefined : ret;
}

/**
* @param {number} _this
* @param {number} i
* @returns {number}
*/
export function i16_vec_index(_this, i) {
    const ret = wasm.i16_vec_index(_this, i);
    return ret;
}

/**
* @param {number} _this
* @param {number} i
* @param {number} element
*/
export function i16_vec_insert(_this, i, element) {
    wasm.i16_vec_insert(_this, i, element);
}

/**
* @param {number} _this
* @returns {number | undefined}
*/
export function i16_vec_last(_this) {
    const ret = wasm.i16_vec_last(_this);
    return ret === 0xFFFFFF ? undefined : ret;
}

/**
* @param {number} _this
* @returns {number}
*/
export function i16_vec_len(_this) {
    const ret = wasm.f32_vec_len(_this);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {Function} f
* @returns {number}
*/
export function i16_vec_partition_point(_this, f) {
    const ret = wasm.i16_vec_partition_point(_this, addHeapObject(f));
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} element
*/
export function i16_vec_push(_this, element) {
    wasm.i16_vec_push(_this, element);
}

/**
* @param {number} _this
* @param {number} element
*/
export function i16_vec_push_front(_this, element) {
    wasm.i16_vec_push_front(_this, element);
}

/**
* @param {number} _this
* @returns {number | undefined}
*/
export function i16_vec_pop(_this) {
    const ret = wasm.i16_vec_pop(_this);
    return ret === 0xFFFFFF ? undefined : ret;
}

/**
* @param {number} _this
* @returns {number | undefined}
*/
export function i16_vec_pop_front(_this) {
    const ret = wasm.i16_vec_pop_front(_this);
    return ret === 0xFFFFFF ? undefined : ret;
}

/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function i16_vec_rchunks(_this, chunk_size) {
    const ret = wasm.i16_vec_rchunks(_this, chunk_size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function i16_vec_rchunks_exact(_this, chunk_size) {
    const ret = wasm.i16_vec_rchunks_exact(_this, chunk_size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function i16_vec_remove(_this, index) {
    const ret = wasm.i16_vec_remove(_this, index);
    return ret === 0xFFFFFF ? undefined : ret;
}

/**
* @param {number} _this
* @param {number} additional
*/
export function i16_vec_reserve(_this, additional) {
    wasm.i16_vec_reserve(_this, additional);
}

/**
* @param {number} _this
* @param {number} additional
*/
export function i16_vec_reserve_exact(_this, additional) {
    wasm.i16_vec_reserve_exact(_this, additional);
}

/**
* @param {number} _this
* @param {number} new_len
* @param {number} val
*/
export function i16_vec_resize(_this, new_len, val) {
    wasm.i16_vec_resize(_this, new_len, val);
}

/**
* @param {number} _this
* @param {number} new_len
* @param {Function} f
*/
export function i16_vec_resize_with(_this, new_len, f) {
    wasm.i16_vec_resize_with(_this, new_len, addHeapObject(f));
}

/**
* @param {number} _this
* @param {Function} f
*/
export function i16_vec_retain(_this, f) {
    wasm.i16_vec_retain(_this, addHeapObject(f));
}

/**
* @param {number} _this
*/
export function i16_vec_reverse(_this) {
    wasm.i16_vec_reverse(_this);
}

/**
* @param {number} _this
* @param {number} mid
*/
export function i16_vec_rotate_left(_this, mid) {
    wasm.i16_vec_rotate_left(_this, mid);
}

/**
* @param {number} _this
* @param {number} k
*/
export function i16_vec_rotate_right(_this, k) {
    wasm.i16_vec_rotate_right(_this, k);
}

/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function i16_vec_rsplit(_this, f) {
    const ret = wasm.i16_vec_rsplit(_this, addHeapObject(f));
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} n
* @param {Function} f
* @returns {number}
*/
export function i16_vec_rsplitn(_this, n, f) {
    const ret = wasm.i16_vec_rsplitn(_this, n, addHeapObject(f));
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} index
* @param {number} element
*/
export function i16_vec_set(_this, index, element) {
    wasm.i16_vec_set(_this, index, element);
}

/**
* @param {number} _this
* @param {number} start
* @param {number} count
* @param {Int16Array} replace_with
* @returns {number}
*/
export function i16_vec_splice_arr(_this, start, count, replace_with) {
    const ptr0 = passArray16ToWasm0(replace_with, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.i16_vec_splice_arr(_this, start, count, ptr0, len0);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} start
* @param {number} count
* @param {number} replace_with
* @returns {number}
*/
export function i16_vec_splice_vec(_this, start, count, replace_with) {
    const ret = wasm.i16_vec_splice_vec(_this, start, count, replace_with);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} at
* @returns {number}
*/
export function i16_vec_split_off(_this, at) {
    const ret = wasm.i16_vec_split_off(_this, at);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} min_capacity
*/
export function i16_vec_shrink_to(_this, min_capacity) {
    wasm.i16_vec_shrink_to(_this, min_capacity);
}

/**
* @param {number} _this
*/
export function i16_vec_shrink_to_fit(_this) {
    wasm.i16_vec_shrink_to_fit(_this);
}

/**
* @param {number} _this
* @param {number} start
* @param {number} end
* @returns {Int16Array}
*/
export function i16_vec_slice(_this, start, end) {
    const ret = wasm.i16_vec_slice(_this, start, end);
    return takeObject(ret);
}

/**
* @param {number} _this
* @param {Function} f
*/
export function i16_vec_sort_by(_this, f) {
    wasm.i16_vec_sort_by(_this, addHeapObject(f));
}

/**
* @param {number} _this
* @param {Function} f
*/
export function i16_vec_sort_unstable_by(_this, f) {
    wasm.i16_vec_sort_unstable_by(_this, addHeapObject(f));
}

/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function i16_vec_split(_this, f) {
    const ret = wasm.i16_vec_split(_this, addHeapObject(f));
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} mid
* @returns {(Slice)[]}
*/
export function i16_vec_split_at(_this, mid) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.i16_vec_split_at(retptr, _this, mid);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 4, 4);
        return v1;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @param {number} n
* @param {Function} f
* @returns {Slice}
*/
export function i16_vec_splitn(_this, n, f) {
    const ret = wasm.i16_vec_splitn(_this, n, addHeapObject(f));
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} a
* @param {number} b
*/
export function i16_vec_swap(_this, a, b) {
    wasm.i16_vec_swap(_this, a, b);
}

/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function i16_vec_swap_remove(_this, index) {
    const ret = wasm.i16_vec_swap_remove(_this, index);
    return ret === 0xFFFFFF ? undefined : ret;
}

/**
* @param {number} _this
* @param {number} ptr
* @param {number} len
*/
export function i16_vec_swap_with_slice(_this, ptr, len) {
    wasm.i16_vec_swap_with_slice(_this, ptr, len);
}

/**
* @param {number} _this
* @param {number} len
*/
export function i16_vec_truncate(_this, len) {
    wasm.f32_vec_truncate(_this, len);
}

/**
* @param {number} _this
* @param {number} size
* @returns {Slice}
*/
export function i16_vec_windows(_this, size) {
    const ret = wasm.i16_vec_windows(_this, size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @returns {Int16Array}
*/
export function i16_view(_this) {
    const ret = wasm.i16_view(_this);
    return takeObject(ret);
}

/**
* @param {number} ptr
*/
export function i16_drop_vec(ptr) {
    wasm.i16_drop_vec(ptr);
}

/**
* @returns {number}
*/
export function i32_new_vec() {
    const ret = wasm.f32_new_vec();
    return ret >>> 0;
}

/**
* @param {number} capacity
* @returns {number}
*/
export function i32_new_vec_with_capacity(capacity) {
    const ret = wasm.f32_new_vec_with_capacity(capacity);
    return ret >>> 0;
}

/**
* @param {Iterator<any>} iter
* @param {number | undefined} [size_hint]
* @returns {number}
*/
export function i32_vec_from_iter(iter, size_hint) {
    const ret = wasm.i32_vec_from_iter(addHeapObject(iter), !isLikeNone(size_hint), isLikeNone(size_hint) ? 0 : size_hint);
    return ret >>> 0;
}

/**
* @param {Array<any>} arr
* @returns {number}
*/
export function i32_vec_from_jsarr(arr) {
    const ret = wasm.i32_vec_from_jsarr(addHeapObject(arr));
    return ret >>> 0;
}

/**
* @param {Int32Array} vec
* @returns {number}
*/
export function i32_vec_from_js_typed_array(vec) {
    const ptr0 = passArray32ToWasm0(vec, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.f32_vec_from_js_typed_array(ptr0, len0);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} other
*/
export function i32_vec_append(_this, other) {
    wasm.i32_vec_append(_this, other);
}

/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function i32_vec_at(_this, index) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.i32_vec_at(retptr, _this, index);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return r0 === 0 ? undefined : r1;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @returns {number}
*/
export function i32_vec_as_ptr(_this) {
    const ret = wasm.f32_vec_as_ptr(_this);
    return ret >>> 0;
}

/**
* @param {number} _this
* @returns {Slice}
*/
export function i32_vec_as_slice(_this) {
    const ret = wasm.f32_vec_as_slice(_this);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {Function} f
* @returns {number}
*/
export function i32_vec_binary_search_by(_this, f) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.i32_vec_binary_search_by(retptr, _this, addHeapObject(f));
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) {
            throw takeObject(r1);
        }
        return r0 >>> 0;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @returns {number}
*/
export function i32_vec_capacity(_this) {
    const ret = wasm.f32_vec_capacity(_this);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function i32_vec_chunks_by(_this, f) {
    const ret = wasm.i32_vec_chunks_by(_this, addHeapObject(f));
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function i32_vec_chunks(_this, chunk_size) {
    const ret = wasm.i32_vec_chunks(_this, chunk_size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function i32_vec_chunks_exact(_this, chunk_size) {
    const ret = wasm.i32_vec_chunks_exact(_this, chunk_size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} element
* @returns {boolean}
*/
export function i32_vec_contains(_this, element) {
    const ret = wasm.i32_vec_contains(_this, element);
    return ret !== 0;
}

/**
* @param {number} _this
*/
export function i32_vec_clear(_this) {
    wasm.f32_vec_clear(_this);
}

/**
* @param {number} _this
* @param {Function} f
*/
export function i32_vec_dedup(_this, f) {
    wasm.i32_vec_dedup(_this, addHeapObject(f));
}

/**
* @param {number} _this
* @param {number} element
*/
export function i32_vec_fill(_this, element) {
    wasm.i32_vec_fill(_this, element);
}

/**
* @param {number} _this
* @param {Function} f
*/
export function i32_vec_fill_with(_this, f) {
    wasm.i32_vec_fill_with(_this, addHeapObject(f));
}

/**
* @param {number} _this
* @returns {number | undefined}
*/
export function i32_vec_first(_this) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.i32_vec_first(retptr, _this);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return r0 === 0 ? undefined : r1;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @param {number} i
* @returns {number}
*/
export function i32_vec_index(_this, i) {
    const ret = wasm.i32_vec_index(_this, i);
    return ret;
}

/**
* @param {number} _this
* @param {number} i
* @param {number} element
*/
export function i32_vec_insert(_this, i, element) {
    wasm.i32_vec_insert(_this, i, element);
}

/**
* @param {number} _this
* @returns {number | undefined}
*/
export function i32_vec_last(_this) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.i32_vec_last(retptr, _this);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return r0 === 0 ? undefined : r1;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @returns {number}
*/
export function i32_vec_len(_this) {
    const ret = wasm.f32_vec_len(_this);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {Function} f
* @returns {number}
*/
export function i32_vec_partition_point(_this, f) {
    const ret = wasm.i32_vec_partition_point(_this, addHeapObject(f));
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} element
*/
export function i32_vec_push(_this, element) {
    wasm.i32_vec_push(_this, element);
}

/**
* @param {number} _this
* @param {number} element
*/
export function i32_vec_push_front(_this, element) {
    wasm.i32_vec_push_front(_this, element);
}

/**
* @param {number} _this
* @returns {number | undefined}
*/
export function i32_vec_pop(_this) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.i32_vec_pop(retptr, _this);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return r0 === 0 ? undefined : r1;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @returns {number | undefined}
*/
export function i32_vec_pop_front(_this) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.i32_vec_pop_front(retptr, _this);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return r0 === 0 ? undefined : r1;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function i32_vec_rchunks(_this, chunk_size) {
    const ret = wasm.i32_vec_rchunks(_this, chunk_size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function i32_vec_rchunks_exact(_this, chunk_size) {
    const ret = wasm.i32_vec_rchunks_exact(_this, chunk_size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function i32_vec_remove(_this, index) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.i32_vec_remove(retptr, _this, index);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return r0 === 0 ? undefined : r1;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @param {number} additional
*/
export function i32_vec_reserve(_this, additional) {
    wasm.f32_vec_reserve(_this, additional);
}

/**
* @param {number} _this
* @param {number} additional
*/
export function i32_vec_reserve_exact(_this, additional) {
    wasm.f32_vec_reserve_exact(_this, additional);
}

/**
* @param {number} _this
* @param {number} new_len
* @param {number} val
*/
export function i32_vec_resize(_this, new_len, val) {
    wasm.i32_vec_resize(_this, new_len, val);
}

/**
* @param {number} _this
* @param {number} new_len
* @param {Function} f
*/
export function i32_vec_resize_with(_this, new_len, f) {
    wasm.i32_vec_resize_with(_this, new_len, addHeapObject(f));
}

/**
* @param {number} _this
* @param {Function} f
*/
export function i32_vec_retain(_this, f) {
    wasm.i32_vec_retain(_this, addHeapObject(f));
}

/**
* @param {number} _this
*/
export function i32_vec_reverse(_this) {
    wasm.i32_vec_reverse(_this);
}

/**
* @param {number} _this
* @param {number} mid
*/
export function i32_vec_rotate_left(_this, mid) {
    wasm.i32_vec_rotate_left(_this, mid);
}

/**
* @param {number} _this
* @param {number} k
*/
export function i32_vec_rotate_right(_this, k) {
    wasm.i32_vec_rotate_right(_this, k);
}

/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function i32_vec_rsplit(_this, f) {
    const ret = wasm.i32_vec_rsplit(_this, addHeapObject(f));
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} n
* @param {Function} f
* @returns {number}
*/
export function i32_vec_rsplitn(_this, n, f) {
    const ret = wasm.i32_vec_rsplitn(_this, n, addHeapObject(f));
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} index
* @param {number} element
*/
export function i32_vec_set(_this, index, element) {
    wasm.i32_vec_set(_this, index, element);
}

/**
* @param {number} _this
* @param {number} start
* @param {number} count
* @param {Int32Array} replace_with
* @returns {number}
*/
export function i32_vec_splice_arr(_this, start, count, replace_with) {
    const ptr0 = passArray32ToWasm0(replace_with, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.i32_vec_splice_arr(_this, start, count, ptr0, len0);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} start
* @param {number} count
* @param {number} replace_with
* @returns {number}
*/
export function i32_vec_splice_vec(_this, start, count, replace_with) {
    const ret = wasm.i32_vec_splice_vec(_this, start, count, replace_with);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} at
* @returns {number}
*/
export function i32_vec_split_off(_this, at) {
    const ret = wasm.i32_vec_split_off(_this, at);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} min_capacity
*/
export function i32_vec_shrink_to(_this, min_capacity) {
    wasm.f32_vec_shrink_to(_this, min_capacity);
}

/**
* @param {number} _this
*/
export function i32_vec_shrink_to_fit(_this) {
    wasm.f32_vec_shrink_to_fit(_this);
}

/**
* @param {number} _this
* @param {number} start
* @param {number} end
* @returns {Int32Array}
*/
export function i32_vec_slice(_this, start, end) {
    const ret = wasm.i32_vec_slice(_this, start, end);
    return takeObject(ret);
}

/**
* @param {number} _this
* @param {Function} f
*/
export function i32_vec_sort_by(_this, f) {
    wasm.i32_vec_sort_by(_this, addHeapObject(f));
}

/**
* @param {number} _this
* @param {Function} f
*/
export function i32_vec_sort_unstable_by(_this, f) {
    wasm.i32_vec_sort_unstable_by(_this, addHeapObject(f));
}

/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function i32_vec_split(_this, f) {
    const ret = wasm.i32_vec_split(_this, addHeapObject(f));
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} mid
* @returns {(Slice)[]}
*/
export function i32_vec_split_at(_this, mid) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.i32_vec_split_at(retptr, _this, mid);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 4, 4);
        return v1;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @param {number} n
* @param {Function} f
* @returns {Slice}
*/
export function i32_vec_splitn(_this, n, f) {
    const ret = wasm.i32_vec_splitn(_this, n, addHeapObject(f));
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} a
* @param {number} b
*/
export function i32_vec_swap(_this, a, b) {
    wasm.i32_vec_swap(_this, a, b);
}

/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function i32_vec_swap_remove(_this, index) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.i32_vec_swap_remove(retptr, _this, index);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return r0 === 0 ? undefined : r1;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @param {number} ptr
* @param {number} len
*/
export function i32_vec_swap_with_slice(_this, ptr, len) {
    wasm.i32_vec_swap_with_slice(_this, ptr, len);
}

/**
* @param {number} _this
* @param {number} len
*/
export function i32_vec_truncate(_this, len) {
    wasm.f32_vec_truncate(_this, len);
}

/**
* @param {number} _this
* @param {number} size
* @returns {Slice}
*/
export function i32_vec_windows(_this, size) {
    const ret = wasm.f32_vec_windows(_this, size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @returns {Int32Array}
*/
export function i32_view(_this) {
    const ret = wasm.i32_view(_this);
    return takeObject(ret);
}

/**
* @param {number} ptr
*/
export function i32_drop_vec(ptr) {
    wasm.f32_drop_vec(ptr);
}

/**
* @returns {number}
*/
export function i64_new_vec() {
    const ret = wasm.f64_new_vec();
    return ret >>> 0;
}

/**
* @param {number} capacity
* @returns {number}
*/
export function i64_new_vec_with_capacity(capacity) {
    const ret = wasm.f64_new_vec_with_capacity(capacity);
    return ret >>> 0;
}

/**
* @param {Iterator<any>} iter
* @param {number | undefined} [size_hint]
* @returns {number}
*/
export function i64_vec_from_iter(iter, size_hint) {
    const ret = wasm.i64_vec_from_iter(addHeapObject(iter), !isLikeNone(size_hint), isLikeNone(size_hint) ? 0 : size_hint);
    return ret >>> 0;
}

/**
* @param {Array<any>} arr
* @returns {number}
*/
export function i64_vec_from_jsarr(arr) {
    const ret = wasm.i64_vec_from_jsarr(addHeapObject(arr));
    return ret >>> 0;
}

/**
* @param {BigInt64Array} vec
* @returns {number}
*/
export function i64_vec_from_js_typed_array(vec) {
    const ptr0 = passArray64ToWasm0(vec, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.f64_vec_from_js_typed_array(ptr0, len0);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} other
*/
export function i64_vec_append(_this, other) {
    wasm.i64_vec_append(_this, other);
}

/**
* @param {number} _this
* @param {number} index
* @returns {bigint | undefined}
*/
export function i64_vec_at(_this, index) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.i64_vec_at(retptr, _this, index);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r2 = getBigInt64Memory0()[retptr / 8 + 1];
        return r0 === 0 ? undefined : r2;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @returns {number}
*/
export function i64_vec_as_ptr(_this) {
    const ret = wasm.f32_vec_as_ptr(_this);
    return ret >>> 0;
}

/**
* @param {number} _this
* @returns {Slice}
*/
export function i64_vec_as_slice(_this) {
    const ret = wasm.f32_vec_as_slice(_this);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {Function} f
* @returns {number}
*/
export function i64_vec_binary_search_by(_this, f) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.i64_vec_binary_search_by(retptr, _this, addHeapObject(f));
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) {
            throw takeObject(r1);
        }
        return r0 >>> 0;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @returns {number}
*/
export function i64_vec_capacity(_this) {
    const ret = wasm.f32_vec_capacity(_this);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function i64_vec_chunks_by(_this, f) {
    const ret = wasm.i64_vec_chunks_by(_this, addHeapObject(f));
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function i64_vec_chunks(_this, chunk_size) {
    const ret = wasm.i64_vec_chunks(_this, chunk_size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function i64_vec_chunks_exact(_this, chunk_size) {
    const ret = wasm.i64_vec_chunks_exact(_this, chunk_size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {bigint} element
* @returns {boolean}
*/
export function i64_vec_contains(_this, element) {
    const ret = wasm.i64_vec_contains(_this, element);
    return ret !== 0;
}

/**
* @param {number} _this
*/
export function i64_vec_clear(_this) {
    wasm.f32_vec_clear(_this);
}

/**
* @param {number} _this
* @param {Function} f
*/
export function i64_vec_dedup(_this, f) {
    wasm.i64_vec_dedup(_this, addHeapObject(f));
}

/**
* @param {number} _this
* @param {bigint} element
*/
export function i64_vec_fill(_this, element) {
    wasm.i64_vec_fill(_this, element);
}

/**
* @param {number} _this
* @param {Function} f
*/
export function i64_vec_fill_with(_this, f) {
    wasm.i64_vec_fill_with(_this, addHeapObject(f));
}

/**
* @param {number} _this
* @returns {bigint | undefined}
*/
export function i64_vec_first(_this) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.i64_vec_first(retptr, _this);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r2 = getBigInt64Memory0()[retptr / 8 + 1];
        return r0 === 0 ? undefined : r2;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @param {number} i
* @returns {bigint}
*/
export function i64_vec_index(_this, i) {
    const ret = wasm.i64_vec_index(_this, i);
    return ret;
}

/**
* @param {number} _this
* @param {number} i
* @param {bigint} element
*/
export function i64_vec_insert(_this, i, element) {
    wasm.i64_vec_insert(_this, i, element);
}

/**
* @param {number} _this
* @returns {bigint | undefined}
*/
export function i64_vec_last(_this) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.i64_vec_last(retptr, _this);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r2 = getBigInt64Memory0()[retptr / 8 + 1];
        return r0 === 0 ? undefined : r2;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @returns {number}
*/
export function i64_vec_len(_this) {
    const ret = wasm.f32_vec_len(_this);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {Function} f
* @returns {number}
*/
export function i64_vec_partition_point(_this, f) {
    const ret = wasm.i64_vec_partition_point(_this, addHeapObject(f));
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {bigint} element
*/
export function i64_vec_push(_this, element) {
    wasm.i64_vec_push(_this, element);
}

/**
* @param {number} _this
* @param {bigint} element
*/
export function i64_vec_push_front(_this, element) {
    wasm.i64_vec_push_front(_this, element);
}

/**
* @param {number} _this
* @returns {bigint | undefined}
*/
export function i64_vec_pop(_this) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.i64_vec_pop(retptr, _this);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r2 = getBigInt64Memory0()[retptr / 8 + 1];
        return r0 === 0 ? undefined : r2;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @returns {bigint | undefined}
*/
export function i64_vec_pop_front(_this) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.i64_vec_pop_front(retptr, _this);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r2 = getBigInt64Memory0()[retptr / 8 + 1];
        return r0 === 0 ? undefined : r2;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function i64_vec_rchunks(_this, chunk_size) {
    const ret = wasm.i64_vec_rchunks(_this, chunk_size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function i64_vec_rchunks_exact(_this, chunk_size) {
    const ret = wasm.i64_vec_rchunks_exact(_this, chunk_size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} index
* @returns {bigint | undefined}
*/
export function i64_vec_remove(_this, index) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.i64_vec_remove(retptr, _this, index);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r2 = getBigInt64Memory0()[retptr / 8 + 1];
        return r0 === 0 ? undefined : r2;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @param {number} additional
*/
export function i64_vec_reserve(_this, additional) {
    wasm.f64_vec_reserve(_this, additional);
}

/**
* @param {number} _this
* @param {number} additional
*/
export function i64_vec_reserve_exact(_this, additional) {
    wasm.f64_vec_reserve_exact(_this, additional);
}

/**
* @param {number} _this
* @param {number} new_len
* @param {bigint} val
*/
export function i64_vec_resize(_this, new_len, val) {
    wasm.i64_vec_resize(_this, new_len, val);
}

/**
* @param {number} _this
* @param {number} new_len
* @param {Function} f
*/
export function i64_vec_resize_with(_this, new_len, f) {
    wasm.i64_vec_resize_with(_this, new_len, addHeapObject(f));
}

/**
* @param {number} _this
* @param {Function} f
*/
export function i64_vec_retain(_this, f) {
    wasm.i64_vec_retain(_this, addHeapObject(f));
}

/**
* @param {number} _this
*/
export function i64_vec_reverse(_this) {
    wasm.i64_vec_reverse(_this);
}

/**
* @param {number} _this
* @param {number} mid
*/
export function i64_vec_rotate_left(_this, mid) {
    wasm.i64_vec_rotate_left(_this, mid);
}

/**
* @param {number} _this
* @param {number} k
*/
export function i64_vec_rotate_right(_this, k) {
    wasm.i64_vec_rotate_right(_this, k);
}

/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function i64_vec_rsplit(_this, f) {
    const ret = wasm.i64_vec_rsplit(_this, addHeapObject(f));
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} n
* @param {Function} f
* @returns {number}
*/
export function i64_vec_rsplitn(_this, n, f) {
    const ret = wasm.i64_vec_rsplitn(_this, n, addHeapObject(f));
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} index
* @param {bigint} element
*/
export function i64_vec_set(_this, index, element) {
    wasm.i64_vec_set(_this, index, element);
}

/**
* @param {number} _this
* @param {number} start
* @param {number} count
* @param {BigInt64Array} replace_with
* @returns {number}
*/
export function i64_vec_splice_arr(_this, start, count, replace_with) {
    const ptr0 = passArray64ToWasm0(replace_with, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.i64_vec_splice_arr(_this, start, count, ptr0, len0);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} start
* @param {number} count
* @param {number} replace_with
* @returns {number}
*/
export function i64_vec_splice_vec(_this, start, count, replace_with) {
    const ret = wasm.i64_vec_splice_vec(_this, start, count, replace_with);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} at
* @returns {number}
*/
export function i64_vec_split_off(_this, at) {
    const ret = wasm.i64_vec_split_off(_this, at);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} min_capacity
*/
export function i64_vec_shrink_to(_this, min_capacity) {
    wasm.f64_vec_shrink_to(_this, min_capacity);
}

/**
* @param {number} _this
*/
export function i64_vec_shrink_to_fit(_this) {
    wasm.f64_vec_shrink_to_fit(_this);
}

/**
* @param {number} _this
* @param {number} start
* @param {number} end
* @returns {BigInt64Array}
*/
export function i64_vec_slice(_this, start, end) {
    const ret = wasm.i64_vec_slice(_this, start, end);
    return takeObject(ret);
}

/**
* @param {number} _this
* @param {Function} f
*/
export function i64_vec_sort_by(_this, f) {
    wasm.i64_vec_sort_by(_this, addHeapObject(f));
}

/**
* @param {number} _this
* @param {Function} f
*/
export function i64_vec_sort_unstable_by(_this, f) {
    wasm.i64_vec_sort_unstable_by(_this, addHeapObject(f));
}

/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function i64_vec_split(_this, f) {
    const ret = wasm.i64_vec_split(_this, addHeapObject(f));
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} mid
* @returns {(Slice)[]}
*/
export function i64_vec_split_at(_this, mid) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.i64_vec_split_at(retptr, _this, mid);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 4, 4);
        return v1;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @param {number} n
* @param {Function} f
* @returns {Slice}
*/
export function i64_vec_splitn(_this, n, f) {
    const ret = wasm.i64_vec_splitn(_this, n, addHeapObject(f));
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} a
* @param {number} b
*/
export function i64_vec_swap(_this, a, b) {
    wasm.i64_vec_swap(_this, a, b);
}

/**
* @param {number} _this
* @param {number} index
* @returns {bigint | undefined}
*/
export function i64_vec_swap_remove(_this, index) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.i64_vec_swap_remove(retptr, _this, index);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r2 = getBigInt64Memory0()[retptr / 8 + 1];
        return r0 === 0 ? undefined : r2;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @param {number} ptr
* @param {number} len
*/
export function i64_vec_swap_with_slice(_this, ptr, len) {
    wasm.i64_vec_swap_with_slice(_this, ptr, len);
}

/**
* @param {number} _this
* @param {number} len
*/
export function i64_vec_truncate(_this, len) {
    wasm.f32_vec_truncate(_this, len);
}

/**
* @param {number} _this
* @param {number} size
* @returns {Slice}
*/
export function i64_vec_windows(_this, size) {
    const ret = wasm.f64_vec_windows(_this, size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @returns {BigInt64Array}
*/
export function i64_view(_this) {
    const ret = wasm.i64_view(_this);
    return takeObject(ret);
}

/**
* @param {number} ptr
*/
export function i64_drop_vec(ptr) {
    wasm.f64_drop_vec(ptr);
}

/**
* @returns {number}
*/
export function f32_new_vec() {
    const ret = wasm.f32_new_vec();
    return ret >>> 0;
}

/**
* @param {number} capacity
* @returns {number}
*/
export function f32_new_vec_with_capacity(capacity) {
    const ret = wasm.f32_new_vec_with_capacity(capacity);
    return ret >>> 0;
}

/**
* @param {Iterator<any>} iter
* @param {number | undefined} [size_hint]
* @returns {number}
*/
export function f32_vec_from_iter(iter, size_hint) {
    const ret = wasm.f32_vec_from_iter(addHeapObject(iter), !isLikeNone(size_hint), isLikeNone(size_hint) ? 0 : size_hint);
    return ret >>> 0;
}

/**
* @param {Array<any>} arr
* @returns {number}
*/
export function f32_vec_from_jsarr(arr) {
    const ret = wasm.f32_vec_from_jsarr(addHeapObject(arr));
    return ret >>> 0;
}

let cachedFloat32Memory0 = null;

function getFloat32Memory0() {
    if (cachedFloat32Memory0 === null || cachedFloat32Memory0.byteLength === 0) {
        cachedFloat32Memory0 = new Float32Array(wasm.memory.buffer);
    }
    return cachedFloat32Memory0;
}

function passArrayF32ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 4, 4) >>> 0;
    getFloat32Memory0().set(arg, ptr / 4);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}
/**
* @param {Float32Array} vec
* @returns {number}
*/
export function f32_vec_from_js_typed_array(vec) {
    const ptr0 = passArrayF32ToWasm0(vec, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.f32_vec_from_js_typed_array(ptr0, len0);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} other
*/
export function f32_vec_append(_this, other) {
    wasm.f32_vec_append(_this, other);
}

/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function f32_vec_at(_this, index) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.f32_vec_at(retptr, _this, index);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getFloat32Memory0()[retptr / 4 + 1];
        return r0 === 0 ? undefined : r1;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @returns {number}
*/
export function f32_vec_as_ptr(_this) {
    const ret = wasm.f32_vec_as_ptr(_this);
    return ret >>> 0;
}

/**
* @param {number} _this
* @returns {Slice}
*/
export function f32_vec_as_slice(_this) {
    const ret = wasm.f32_vec_as_slice(_this);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {Function} f
* @returns {number}
*/
export function f32_vec_binary_search_by(_this, f) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.f32_vec_binary_search_by(retptr, _this, addHeapObject(f));
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) {
            throw takeObject(r1);
        }
        return r0 >>> 0;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @returns {number}
*/
export function f32_vec_capacity(_this) {
    const ret = wasm.f32_vec_capacity(_this);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function f32_vec_chunks_by(_this, f) {
    const ret = wasm.f32_vec_chunks_by(_this, addHeapObject(f));
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function f32_vec_chunks(_this, chunk_size) {
    const ret = wasm.f32_vec_chunks(_this, chunk_size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function f32_vec_chunks_exact(_this, chunk_size) {
    const ret = wasm.f32_vec_chunks_exact(_this, chunk_size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} element
* @returns {boolean}
*/
export function f32_vec_contains(_this, element) {
    const ret = wasm.f32_vec_contains(_this, element);
    return ret !== 0;
}

/**
* @param {number} _this
*/
export function f32_vec_clear(_this) {
    wasm.f32_vec_clear(_this);
}

/**
* @param {number} _this
* @param {Function} f
*/
export function f32_vec_dedup(_this, f) {
    wasm.f32_vec_dedup(_this, addHeapObject(f));
}

/**
* @param {number} _this
* @param {number} element
*/
export function f32_vec_fill(_this, element) {
    wasm.f32_vec_fill(_this, element);
}

/**
* @param {number} _this
* @param {Function} f
*/
export function f32_vec_fill_with(_this, f) {
    wasm.f32_vec_fill_with(_this, addHeapObject(f));
}

/**
* @param {number} _this
* @returns {number | undefined}
*/
export function f32_vec_first(_this) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.f32_vec_first(retptr, _this);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getFloat32Memory0()[retptr / 4 + 1];
        return r0 === 0 ? undefined : r1;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @param {number} i
* @returns {number}
*/
export function f32_vec_index(_this, i) {
    const ret = wasm.f32_vec_index(_this, i);
    return ret;
}

/**
* @param {number} _this
* @param {number} i
* @param {number} element
*/
export function f32_vec_insert(_this, i, element) {
    wasm.f32_vec_insert(_this, i, element);
}

/**
* @param {number} _this
* @returns {number | undefined}
*/
export function f32_vec_last(_this) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.f32_vec_last(retptr, _this);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getFloat32Memory0()[retptr / 4 + 1];
        return r0 === 0 ? undefined : r1;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @returns {number}
*/
export function f32_vec_len(_this) {
    const ret = wasm.f32_vec_len(_this);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {Function} f
* @returns {number}
*/
export function f32_vec_partition_point(_this, f) {
    const ret = wasm.f32_vec_partition_point(_this, addHeapObject(f));
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} element
*/
export function f32_vec_push(_this, element) {
    wasm.f32_vec_push(_this, element);
}

/**
* @param {number} _this
* @param {number} element
*/
export function f32_vec_push_front(_this, element) {
    wasm.f32_vec_push_front(_this, element);
}

/**
* @param {number} _this
* @returns {number | undefined}
*/
export function f32_vec_pop(_this) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.f32_vec_pop(retptr, _this);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getFloat32Memory0()[retptr / 4 + 1];
        return r0 === 0 ? undefined : r1;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @returns {number | undefined}
*/
export function f32_vec_pop_front(_this) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.f32_vec_pop_front(retptr, _this);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getFloat32Memory0()[retptr / 4 + 1];
        return r0 === 0 ? undefined : r1;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function f32_vec_rchunks(_this, chunk_size) {
    const ret = wasm.f32_vec_rchunks(_this, chunk_size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function f32_vec_rchunks_exact(_this, chunk_size) {
    const ret = wasm.f32_vec_rchunks_exact(_this, chunk_size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function f32_vec_remove(_this, index) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.f32_vec_remove(retptr, _this, index);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getFloat32Memory0()[retptr / 4 + 1];
        return r0 === 0 ? undefined : r1;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @param {number} additional
*/
export function f32_vec_reserve(_this, additional) {
    wasm.f32_vec_reserve(_this, additional);
}

/**
* @param {number} _this
* @param {number} additional
*/
export function f32_vec_reserve_exact(_this, additional) {
    wasm.f32_vec_reserve_exact(_this, additional);
}

/**
* @param {number} _this
* @param {number} new_len
* @param {number} val
*/
export function f32_vec_resize(_this, new_len, val) {
    wasm.f32_vec_resize(_this, new_len, val);
}

/**
* @param {number} _this
* @param {number} new_len
* @param {Function} f
*/
export function f32_vec_resize_with(_this, new_len, f) {
    wasm.f32_vec_resize_with(_this, new_len, addHeapObject(f));
}

/**
* @param {number} _this
* @param {Function} f
*/
export function f32_vec_retain(_this, f) {
    wasm.f32_vec_retain(_this, addHeapObject(f));
}

/**
* @param {number} _this
*/
export function f32_vec_reverse(_this) {
    wasm.f32_vec_reverse(_this);
}

/**
* @param {number} _this
* @param {number} mid
*/
export function f32_vec_rotate_left(_this, mid) {
    wasm.f32_vec_rotate_left(_this, mid);
}

/**
* @param {number} _this
* @param {number} k
*/
export function f32_vec_rotate_right(_this, k) {
    wasm.f32_vec_rotate_right(_this, k);
}

/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function f32_vec_rsplit(_this, f) {
    const ret = wasm.f32_vec_rsplit(_this, addHeapObject(f));
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} n
* @param {Function} f
* @returns {number}
*/
export function f32_vec_rsplitn(_this, n, f) {
    const ret = wasm.f32_vec_rsplitn(_this, n, addHeapObject(f));
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} index
* @param {number} element
*/
export function f32_vec_set(_this, index, element) {
    wasm.f32_vec_set(_this, index, element);
}

/**
* @param {number} _this
* @param {number} start
* @param {number} count
* @param {Float32Array} replace_with
* @returns {number}
*/
export function f32_vec_splice_arr(_this, start, count, replace_with) {
    const ptr0 = passArrayF32ToWasm0(replace_with, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.f32_vec_splice_arr(_this, start, count, ptr0, len0);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} start
* @param {number} count
* @param {number} replace_with
* @returns {number}
*/
export function f32_vec_splice_vec(_this, start, count, replace_with) {
    const ret = wasm.f32_vec_splice_vec(_this, start, count, replace_with);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} at
* @returns {number}
*/
export function f32_vec_split_off(_this, at) {
    const ret = wasm.f32_vec_split_off(_this, at);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} min_capacity
*/
export function f32_vec_shrink_to(_this, min_capacity) {
    wasm.f32_vec_shrink_to(_this, min_capacity);
}

/**
* @param {number} _this
*/
export function f32_vec_shrink_to_fit(_this) {
    wasm.f32_vec_shrink_to_fit(_this);
}

/**
* @param {number} _this
* @param {number} start
* @param {number} end
* @returns {Float32Array}
*/
export function f32_vec_slice(_this, start, end) {
    const ret = wasm.f32_vec_slice(_this, start, end);
    return takeObject(ret);
}

/**
* @param {number} _this
* @param {Function} f
*/
export function f32_vec_sort_by(_this, f) {
    wasm.f32_vec_sort_by(_this, addHeapObject(f));
}

/**
* @param {number} _this
* @param {Function} f
*/
export function f32_vec_sort_unstable_by(_this, f) {
    wasm.f32_vec_sort_unstable_by(_this, addHeapObject(f));
}

/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function f32_vec_split(_this, f) {
    const ret = wasm.f32_vec_split(_this, addHeapObject(f));
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} mid
* @returns {(Slice)[]}
*/
export function f32_vec_split_at(_this, mid) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.f32_vec_split_at(retptr, _this, mid);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 4, 4);
        return v1;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @param {number} n
* @param {Function} f
* @returns {Slice}
*/
export function f32_vec_splitn(_this, n, f) {
    const ret = wasm.f32_vec_splitn(_this, n, addHeapObject(f));
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} a
* @param {number} b
*/
export function f32_vec_swap(_this, a, b) {
    wasm.f32_vec_swap(_this, a, b);
}

/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function f32_vec_swap_remove(_this, index) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.f32_vec_swap_remove(retptr, _this, index);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getFloat32Memory0()[retptr / 4 + 1];
        return r0 === 0 ? undefined : r1;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @param {number} ptr
* @param {number} len
*/
export function f32_vec_swap_with_slice(_this, ptr, len) {
    wasm.f32_vec_swap_with_slice(_this, ptr, len);
}

/**
* @param {number} _this
* @param {number} len
*/
export function f32_vec_truncate(_this, len) {
    wasm.f32_vec_truncate(_this, len);
}

/**
* @param {number} _this
* @param {number} size
* @returns {Slice}
*/
export function f32_vec_windows(_this, size) {
    const ret = wasm.f32_vec_windows(_this, size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @returns {Float32Array}
*/
export function f32_view(_this) {
    const ret = wasm.f32_view(_this);
    return takeObject(ret);
}

/**
* @param {number} ptr
*/
export function f32_drop_vec(ptr) {
    wasm.f32_drop_vec(ptr);
}

/**
* @returns {number}
*/
export function f64_new_vec() {
    const ret = wasm.f64_new_vec();
    return ret >>> 0;
}

/**
* @param {number} capacity
* @returns {number}
*/
export function f64_new_vec_with_capacity(capacity) {
    const ret = wasm.f64_new_vec_with_capacity(capacity);
    return ret >>> 0;
}

/**
* @param {Iterator<any>} iter
* @param {number | undefined} [size_hint]
* @returns {number}
*/
export function f64_vec_from_iter(iter, size_hint) {
    const ret = wasm.f64_vec_from_iter(addHeapObject(iter), !isLikeNone(size_hint), isLikeNone(size_hint) ? 0 : size_hint);
    return ret >>> 0;
}

/**
* @param {Array<any>} arr
* @returns {number}
*/
export function f64_vec_from_jsarr(arr) {
    const ret = wasm.f64_vec_from_jsarr(addHeapObject(arr));
    return ret >>> 0;
}

let cachedFloat64Memory0 = null;

function getFloat64Memory0() {
    if (cachedFloat64Memory0 === null || cachedFloat64Memory0.byteLength === 0) {
        cachedFloat64Memory0 = new Float64Array(wasm.memory.buffer);
    }
    return cachedFloat64Memory0;
}

function passArrayF64ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 8, 8) >>> 0;
    getFloat64Memory0().set(arg, ptr / 8);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}
/**
* @param {Float64Array} vec
* @returns {number}
*/
export function f64_vec_from_js_typed_array(vec) {
    const ptr0 = passArrayF64ToWasm0(vec, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.f64_vec_from_js_typed_array(ptr0, len0);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} other
*/
export function f64_vec_append(_this, other) {
    wasm.f64_vec_append(_this, other);
}

/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function f64_vec_at(_this, index) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.f64_vec_at(retptr, _this, index);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r2 = getFloat64Memory0()[retptr / 8 + 1];
        return r0 === 0 ? undefined : r2;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @returns {number}
*/
export function f64_vec_as_ptr(_this) {
    const ret = wasm.f32_vec_as_ptr(_this);
    return ret >>> 0;
}

/**
* @param {number} _this
* @returns {Slice}
*/
export function f64_vec_as_slice(_this) {
    const ret = wasm.f32_vec_as_slice(_this);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {Function} f
* @returns {number}
*/
export function f64_vec_binary_search_by(_this, f) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.f64_vec_binary_search_by(retptr, _this, addHeapObject(f));
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) {
            throw takeObject(r1);
        }
        return r0 >>> 0;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @returns {number}
*/
export function f64_vec_capacity(_this) {
    const ret = wasm.f32_vec_capacity(_this);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function f64_vec_chunks_by(_this, f) {
    const ret = wasm.f64_vec_chunks_by(_this, addHeapObject(f));
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function f64_vec_chunks(_this, chunk_size) {
    const ret = wasm.f64_vec_chunks(_this, chunk_size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function f64_vec_chunks_exact(_this, chunk_size) {
    const ret = wasm.f64_vec_chunks_exact(_this, chunk_size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} element
* @returns {boolean}
*/
export function f64_vec_contains(_this, element) {
    const ret = wasm.f64_vec_contains(_this, element);
    return ret !== 0;
}

/**
* @param {number} _this
*/
export function f64_vec_clear(_this) {
    wasm.f32_vec_clear(_this);
}

/**
* @param {number} _this
* @param {Function} f
*/
export function f64_vec_dedup(_this, f) {
    wasm.f64_vec_dedup(_this, addHeapObject(f));
}

/**
* @param {number} _this
* @param {number} element
*/
export function f64_vec_fill(_this, element) {
    wasm.f64_vec_fill(_this, element);
}

/**
* @param {number} _this
* @param {Function} f
*/
export function f64_vec_fill_with(_this, f) {
    wasm.f64_vec_fill_with(_this, addHeapObject(f));
}

/**
* @param {number} _this
* @returns {number | undefined}
*/
export function f64_vec_first(_this) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.f64_vec_first(retptr, _this);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r2 = getFloat64Memory0()[retptr / 8 + 1];
        return r0 === 0 ? undefined : r2;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @param {number} i
* @returns {number}
*/
export function f64_vec_index(_this, i) {
    const ret = wasm.f64_vec_index(_this, i);
    return ret;
}

/**
* @param {number} _this
* @param {number} i
* @param {number} element
*/
export function f64_vec_insert(_this, i, element) {
    wasm.f64_vec_insert(_this, i, element);
}

/**
* @param {number} _this
* @returns {number | undefined}
*/
export function f64_vec_last(_this) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.f64_vec_last(retptr, _this);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r2 = getFloat64Memory0()[retptr / 8 + 1];
        return r0 === 0 ? undefined : r2;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @returns {number}
*/
export function f64_vec_len(_this) {
    const ret = wasm.f32_vec_len(_this);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {Function} f
* @returns {number}
*/
export function f64_vec_partition_point(_this, f) {
    const ret = wasm.f64_vec_partition_point(_this, addHeapObject(f));
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} element
*/
export function f64_vec_push(_this, element) {
    wasm.f64_vec_push(_this, element);
}

/**
* @param {number} _this
* @param {number} element
*/
export function f64_vec_push_front(_this, element) {
    wasm.f64_vec_push_front(_this, element);
}

/**
* @param {number} _this
* @returns {number | undefined}
*/
export function f64_vec_pop(_this) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.f64_vec_pop(retptr, _this);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r2 = getFloat64Memory0()[retptr / 8 + 1];
        return r0 === 0 ? undefined : r2;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @returns {number | undefined}
*/
export function f64_vec_pop_front(_this) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.f64_vec_pop_front(retptr, _this);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r2 = getFloat64Memory0()[retptr / 8 + 1];
        return r0 === 0 ? undefined : r2;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function f64_vec_rchunks(_this, chunk_size) {
    const ret = wasm.f64_vec_rchunks(_this, chunk_size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} chunk_size
* @returns {Slice}
*/
export function f64_vec_rchunks_exact(_this, chunk_size) {
    const ret = wasm.f64_vec_rchunks_exact(_this, chunk_size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function f64_vec_remove(_this, index) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.f64_vec_remove(retptr, _this, index);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r2 = getFloat64Memory0()[retptr / 8 + 1];
        return r0 === 0 ? undefined : r2;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @param {number} additional
*/
export function f64_vec_reserve(_this, additional) {
    wasm.f64_vec_reserve(_this, additional);
}

/**
* @param {number} _this
* @param {number} additional
*/
export function f64_vec_reserve_exact(_this, additional) {
    wasm.f64_vec_reserve_exact(_this, additional);
}

/**
* @param {number} _this
* @param {number} new_len
* @param {number} val
*/
export function f64_vec_resize(_this, new_len, val) {
    wasm.f64_vec_resize(_this, new_len, val);
}

/**
* @param {number} _this
* @param {number} new_len
* @param {Function} f
*/
export function f64_vec_resize_with(_this, new_len, f) {
    wasm.f64_vec_resize_with(_this, new_len, addHeapObject(f));
}

/**
* @param {number} _this
* @param {Function} f
*/
export function f64_vec_retain(_this, f) {
    wasm.f64_vec_retain(_this, addHeapObject(f));
}

/**
* @param {number} _this
*/
export function f64_vec_reverse(_this) {
    wasm.f64_vec_reverse(_this);
}

/**
* @param {number} _this
* @param {number} mid
*/
export function f64_vec_rotate_left(_this, mid) {
    wasm.f64_vec_rotate_left(_this, mid);
}

/**
* @param {number} _this
* @param {number} k
*/
export function f64_vec_rotate_right(_this, k) {
    wasm.f64_vec_rotate_right(_this, k);
}

/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function f64_vec_rsplit(_this, f) {
    const ret = wasm.f64_vec_rsplit(_this, addHeapObject(f));
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} n
* @param {Function} f
* @returns {number}
*/
export function f64_vec_rsplitn(_this, n, f) {
    const ret = wasm.f64_vec_rsplitn(_this, n, addHeapObject(f));
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} index
* @param {number} element
*/
export function f64_vec_set(_this, index, element) {
    wasm.f64_vec_set(_this, index, element);
}

/**
* @param {number} _this
* @param {number} start
* @param {number} count
* @param {Float64Array} replace_with
* @returns {number}
*/
export function f64_vec_splice_arr(_this, start, count, replace_with) {
    const ptr0 = passArrayF64ToWasm0(replace_with, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.f64_vec_splice_arr(_this, start, count, ptr0, len0);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} start
* @param {number} count
* @param {number} replace_with
* @returns {number}
*/
export function f64_vec_splice_vec(_this, start, count, replace_with) {
    const ret = wasm.f64_vec_splice_vec(_this, start, count, replace_with);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} at
* @returns {number}
*/
export function f64_vec_split_off(_this, at) {
    const ret = wasm.f64_vec_split_off(_this, at);
    return ret >>> 0;
}

/**
* @param {number} _this
* @param {number} min_capacity
*/
export function f64_vec_shrink_to(_this, min_capacity) {
    wasm.f64_vec_shrink_to(_this, min_capacity);
}

/**
* @param {number} _this
*/
export function f64_vec_shrink_to_fit(_this) {
    wasm.f64_vec_shrink_to_fit(_this);
}

/**
* @param {number} _this
* @param {number} start
* @param {number} end
* @returns {Float64Array}
*/
export function f64_vec_slice(_this, start, end) {
    const ret = wasm.f64_vec_slice(_this, start, end);
    return takeObject(ret);
}

/**
* @param {number} _this
* @param {Function} f
*/
export function f64_vec_sort_by(_this, f) {
    wasm.f64_vec_sort_by(_this, addHeapObject(f));
}

/**
* @param {number} _this
* @param {Function} f
*/
export function f64_vec_sort_unstable_by(_this, f) {
    wasm.f64_vec_sort_unstable_by(_this, addHeapObject(f));
}

/**
* @param {number} _this
* @param {Function} f
* @returns {Slice}
*/
export function f64_vec_split(_this, f) {
    const ret = wasm.f64_vec_split(_this, addHeapObject(f));
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} mid
* @returns {(Slice)[]}
*/
export function f64_vec_split_at(_this, mid) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.f64_vec_split_at(retptr, _this, mid);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v1 = getArrayJsValueFromWasm0(r0, r1).slice();
        wasm.__wbindgen_free(r0, r1 * 4, 4);
        return v1;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @param {number} n
* @param {Function} f
* @returns {Slice}
*/
export function f64_vec_splitn(_this, n, f) {
    const ret = wasm.f64_vec_splitn(_this, n, addHeapObject(f));
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @param {number} a
* @param {number} b
*/
export function f64_vec_swap(_this, a, b) {
    wasm.f64_vec_swap(_this, a, b);
}

/**
* @param {number} _this
* @param {number} index
* @returns {number | undefined}
*/
export function f64_vec_swap_remove(_this, index) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.f64_vec_swap_remove(retptr, _this, index);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r2 = getFloat64Memory0()[retptr / 8 + 1];
        return r0 === 0 ? undefined : r2;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* @param {number} _this
* @param {number} ptr
* @param {number} len
*/
export function f64_vec_swap_with_slice(_this, ptr, len) {
    wasm.f64_vec_swap_with_slice(_this, ptr, len);
}

/**
* @param {number} _this
* @param {number} len
*/
export function f64_vec_truncate(_this, len) {
    wasm.f32_vec_truncate(_this, len);
}

/**
* @param {number} _this
* @param {number} size
* @returns {Slice}
*/
export function f64_vec_windows(_this, size) {
    const ret = wasm.f64_vec_windows(_this, size);
    return Slice.__wrap(ret);
}

/**
* @param {number} _this
* @returns {Float64Array}
*/
export function f64_view(_this) {
    const ret = wasm.f64_view(_this);
    return takeObject(ret);
}

/**
* @param {number} ptr
*/
export function f64_drop_vec(ptr) {
    wasm.f64_drop_vec(ptr);
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        wasm.__wbindgen_exn_store(addHeapObject(e));
    }
}
function __wbg_adapter_756(arg0, arg1, arg2, arg3) {
    wasm.wasm_bindgen__convert__closures__invoke2_mut__h2f171f1d7c716805(arg0, arg1, addHeapObject(arg2), addHeapObject(arg3));
}

const SliceFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_slice_free(ptr >>> 0));
/**
*/
export class Slice {

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Slice.prototype);
        obj.__wbg_ptr = ptr;
        SliceFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        SliceFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_slice_free(ptr);
    }
    /**
    * @returns {number}
    */
    get ptr() {
        const ret = wasm.__wbg_get_slice_ptr(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} arg0
    */
    set ptr(arg0) {
        wasm.__wbg_set_slice_ptr(this.__wbg_ptr, arg0);
    }
    /**
    * @returns {number}
    */
    get len() {
        const ret = wasm.__wbg_get_slice_len(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} arg0
    */
    set len(arg0) {
        wasm.__wbg_set_slice_len(this.__wbg_ptr, arg0);
    }
}

const imports = {
    __wbindgen_placeholder__: {
        __wbg_new_81740750da40724f: function(arg0, arg1) {
            try {
                var state0 = {a: arg0, b: arg1};
                var cb0 = (arg0, arg1) => {
                    const a = state0.a;
                    state0.a = 0;
                    try {
                        return __wbg_adapter_756(a, state0.b, arg0, arg1);
                    } finally {
                        state0.a = a;
                    }
                };
                const ret = new Promise(cb0);
                return addHeapObject(ret);
            } finally {
                state0.a = state0.b = 0;
            }
        },
        __wbindgen_object_drop_ref: function(arg0) {
            takeObject(arg0);
        },
        __wbg_then_a73caa9a87991566: function(arg0, arg1, arg2) {
            const ret = getObject(arg0).then(getObject(arg1), getObject(arg2));
            return addHeapObject(ret);
        },
        __wbindgen_error_new: function(arg0, arg1) {
            const ret = new Error(getStringFromWasm0(arg0, arg1));
            return addHeapObject(ret);
        },
        __wbg_new_6bcb0018eab8f34f: function(arg0, arg1, arg2, arg3) {
            let v0;
            if (arg2 !== 0) {
                v0 = getStringFromWasm0(arg2, arg3).slice();
                wasm.__wbindgen_free(arg2, arg3 * 1, 1);
            }
            const ret = new IoError(arg0, takeObject(arg1), v0);
            return addHeapObject(ret);
        },
        __wbindgen_number_new: function(arg0) {
            const ret = arg0;
            return addHeapObject(ret);
        },
        __wbindgen_copy_to_typed_array: function(arg0, arg1, arg2) {
            new Uint8Array(getObject(arg2).buffer, getObject(arg2).byteOffset, getObject(arg2).byteLength).set(getArrayU8FromWasm0(arg0, arg1));
        },
        __wbindgen_as_number: function(arg0) {
            const ret = +getObject(arg0);
            return ret;
        },
        __wbindgen_string_new: function(arg0, arg1) {
            const ret = getStringFromWasm0(arg0, arg1);
            return addHeapObject(ret);
        },
        __wbindgen_object_clone_ref: function(arg0) {
            const ret = getObject(arg0);
            return addHeapObject(ret);
        },
        __wbindgen_is_falsy: function(arg0) {
            const ret = !getObject(arg0);
            return ret;
        },
        __wbindgen_jsval_eq: function(arg0, arg1) {
            const ret = getObject(arg0) === getObject(arg1);
            return ret;
        },
        __wbg_slice_new: function(arg0) {
            const ret = Slice.__wrap(arg0);
            return addHeapObject(ret);
        },
        __wbg_length_cd7af8117672b8b8: function(arg0) {
            const ret = getObject(arg0).length;
            return ret;
        },
        __wbg_new_eefa28520849b064: function(arg0, arg1, arg2, arg3) {
            let v0;
            if (arg2 !== 0) {
                v0 = getStringFromWasm0(arg2, arg3).slice();
                wasm.__wbindgen_free(arg2, arg3 * 1, 1);
            }
            const ret = new CollectionError(arg0, takeObject(arg1), v0);
            return addHeapObject(ret);
        },
        __wbindgen_bigint_from_u64: function(arg0) {
            const ret = BigInt.asUintN(64, arg0);
            return addHeapObject(ret);
        },
        __wbindgen_bigint_from_i64: function(arg0) {
            const ret = arg0;
            return addHeapObject(ret);
        },
        __wbg_call_27c0f87801dedf93: function() { return handleError(function (arg0, arg1) {
            const ret = getObject(arg0).call(getObject(arg1));
            return addHeapObject(ret);
        }, arguments) },
        __wbg_get_bd8e338fbd5f5cc8: function(arg0, arg1) {
            const ret = getObject(arg0)[arg1 >>> 0];
            return addHeapObject(ret);
        },
        __wbg_next_196c84450b364254: function() { return handleError(function (arg0) {
            const ret = getObject(arg0).next();
            return addHeapObject(ret);
        }, arguments) },
        __wbg_done_298b57d23c0fc80c: function(arg0) {
            const ret = getObject(arg0).done;
            return ret;
        },
        __wbg_value_d93c65011f51a456: function(arg0) {
            const ret = getObject(arg0).value;
            return addHeapObject(ret);
        },
        __wbg_self_ce0dbfc45cf2f5be: function() { return handleError(function () {
            const ret = self.self;
            return addHeapObject(ret);
        }, arguments) },
        __wbg_window_c6fb939a7f436783: function() { return handleError(function () {
            const ret = window.window;
            return addHeapObject(ret);
        }, arguments) },
        __wbg_globalThis_d1e6af4856ba331b: function() { return handleError(function () {
            const ret = globalThis.globalThis;
            return addHeapObject(ret);
        }, arguments) },
        __wbg_global_207b558942527489: function() { return handleError(function () {
            const ret = global.global;
            return addHeapObject(ret);
        }, arguments) },
        __wbindgen_is_undefined: function(arg0) {
            const ret = getObject(arg0) === undefined;
            return ret;
        },
        __wbg_newnoargs_e258087cd0daa0ea: function(arg0, arg1) {
            const ret = new Function(getStringFromWasm0(arg0, arg1));
            return addHeapObject(ret);
        },
        __wbg_call_b3ca7c6051f9bec1: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
            return addHeapObject(ret);
        }, arguments) },
        __wbg_call_8e7cb608789c2528: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = getObject(arg0).call(getObject(arg1), getObject(arg2), getObject(arg3));
            return addHeapObject(ret);
        }, arguments) },
        __wbindgen_memory: function() {
            const ret = wasm.memory;
            return addHeapObject(ret);
        },
        __wbg_buffer_12d079cc21e14bdb: function(arg0) {
            const ret = getObject(arg0).buffer;
            return addHeapObject(ret);
        },
        __wbg_newwithbyteoffsetandlength_41559f654c4e743c: function(arg0, arg1, arg2) {
            const ret = new Int8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
            return addHeapObject(ret);
        },
        __wbg_newwithbyteoffsetandlength_4bea9f904a7e0aef: function(arg0, arg1, arg2) {
            const ret = new Int16Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
            return addHeapObject(ret);
        },
        __wbg_newwithbyteoffsetandlength_425360430a1c8206: function(arg0, arg1, arg2) {
            const ret = new Int32Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
            return addHeapObject(ret);
        },
        __wbg_newwithbyteoffsetandlength_aa4a17c33a06e5cb: function(arg0, arg1, arg2) {
            const ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
            return addHeapObject(ret);
        },
        __wbg_newwithbyteoffsetandlength_9fd64654bc0b0817: function(arg0, arg1, arg2) {
            const ret = new Uint16Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
            return addHeapObject(ret);
        },
        __wbg_newwithbyteoffsetandlength_3125852e5a7fbcff: function(arg0, arg1, arg2) {
            const ret = new Uint32Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
            return addHeapObject(ret);
        },
        __wbg_newwithbyteoffsetandlength_4a659d079a1650e0: function(arg0, arg1, arg2) {
            const ret = new Float32Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
            return addHeapObject(ret);
        },
        __wbg_newwithbyteoffsetandlength_f884af06774ef276: function(arg0, arg1, arg2) {
            const ret = new Float64Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
            return addHeapObject(ret);
        },
        __wbg_newwithbyteoffsetandlength_5b893eb727153216: function(arg0, arg1, arg2) {
            const ret = new BigInt64Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
            return addHeapObject(ret);
        },
        __wbg_newwithbyteoffsetandlength_f3784c11ba58e531: function(arg0, arg1, arg2) {
            const ret = new BigUint64Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
            return addHeapObject(ret);
        },
        __wbindgen_throw: function(arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        },
        __wbindgen_rethrow: function(arg0) {
            throw takeObject(arg0);
        },
        __wbindgen_cb_drop: function(arg0) {
            const obj = takeObject(arg0).original;
            if (obj.cnt-- == 1) {
                obj.a = 0;
                return true;
            }
            const ret = false;
            return ret;
        },
        __wbg_then_0c86a60e8fcfe9f6: function(arg0, arg1) {
            const ret = getObject(arg0).then(getObject(arg1));
            return addHeapObject(ret);
        },
        __wbg_queueMicrotask_481971b0d87f3dd4: function(arg0) {
            queueMicrotask(getObject(arg0));
        },
        __wbg_queueMicrotask_3cbae2ec6b6cd3d6: function(arg0) {
            const ret = getObject(arg0).queueMicrotask;
            return addHeapObject(ret);
        },
        __wbindgen_is_function: function(arg0) {
            const ret = typeof(getObject(arg0)) === 'function';
            return ret;
        },
        __wbg_resolve_b0083a7967828ec8: function(arg0) {
            const ret = Promise.resolve(getObject(arg0));
            return addHeapObject(ret);
        },
        __wbindgen_closure_wrapper176: function(arg0, arg1, arg2) {
            const ret = makeMutClosure(arg0, arg1, 31, __wbg_adapter_36);
            return addHeapObject(ret);
        },
    },

};

const wasm_url = new URL('std_rs_bg.wasm', import.meta.url);
let wasmCode = '';
switch (wasm_url.protocol) {
    case 'file:':
    wasmCode = await Deno.readFile(wasm_url);
    break
    case 'https:':
    case 'http:':
    wasmCode = await (await fetch(wasm_url)).arrayBuffer();
    break
    default:
    throw new Error(`Unsupported protocol: ${wasm_url.protocol}`);
}

const wasmInstance = (await WebAssembly.instantiate(wasmCode, imports)).instance;
const wasm = wasmInstance.exports;

