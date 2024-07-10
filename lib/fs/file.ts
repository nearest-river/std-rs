import { $result,$resultSync,Err } from "../error/result/mod.ts";
import { SeekFrom,FileTimes } from "./types.ts";
import { Drop } from "../drop.ts";


/**
 * An object providing access to an open file on the filesystem.
 * 
 * An instance of a File can be read and/or written depending on what options it was opened with.
 * Files also implement Seek to alter the logical cursor that the file contains internally.
 * 
 * Files are automatically closed when they go out of scope.
 * Errors detected on closing are ignored by the implementation of {@linkcode Drop}.
 * Use the method {@linkcode syncAll} if these errors must be manually handled.
 * 
 * ### Examples
 * Creates a new file and write bytes to it (you can also use write):
```ts
// example 1
import { FsFile } from "@std/fs";
import { Err } from '../error/result/result';
import { Drop } from '../drop';

using file = await File.create("foo.txt").unwrap();

await file.writeFromString(new TextEncoder().encode("Hello, world!")).unwrap();
```
 * Read the contents of a file into a String (you can also use read):
 * 
```ts
// example 2
import { FsFile } from "@std/fs";

using file = await File.open("foo.txt").unwrap();

const str=await file.readToString().unwrap();
```

 * **NOTE**: Many operating systems allow concurrent modification of files by different processes.
 * Avoid assuming that holding a File means that the file will not change.
 */
export class FsFile extends Drop implements Disposable {
  private constructor(private inner: Deno.FsFile) {
    super();
  }

  protected drop(): void {
    this.inner[Symbol.dispose]();
  }

  [Symbol.dispose]() {
    this.inner[Symbol.dispose]();
  }

  /**
   * Opens a file in `read-write` mode.
   * 
   * This function will create a file if it does not exist, and will truncate it if it does.
   * 
   * Depending on the platform, this function may fail if the full directory path does not exist.
   * See the {@linkcode Deno.OpenOptions} for more details.
   * 
   * See also {@linkcode fs.writeFile} for a simple function to create a file with a given data.
   * 
   * ### Examples
  ```ts
  import { FsFile } from "@std/fs";
  
  using file = await FsFile.create("foo.txt").unwrap();
  ```
   * * **Requires**: `allow-read` and `allow-write` permission to {@linkcode path}
   */
  public static create(path: string) {
    return $result(async ()=> new FsFile(await Deno.create(path)));
  }
  
  /**
   * Opens a file in `read and write` mode synchronously.
   * 
   * This function will create a file if it does not exist, and will truncate it if it does.
   * 
   * Depending on the platform, this function may fail if the full directory path does not exist.
   * See the {@linkcode Deno.OpenOptions} for more details.
   * 
   * See also {@linkcode fs.writeFileSync} for a simple function to create a file with a given data.
   * 
   * ### Examples
  ```ts
  import { FsFile } from "@std/fs";
  
  using file = FsFile.createSync("foo.txt").unwrap();
  ```
   * * **Requires**: `allow-read` and `allow-write` permission to {@linkcode path}
   */
  public static createSync(path: string) {
    return $resultSync(()=> new FsFile(Deno.createSync(path)));
  }

  /**
   * Attempts to open a file in `read-only` or `read and write` mode.
   * 
   * See the {@linkcode Deno.OpenOptions} method for more details.
   * 
   * If you only need to read the entire file contents, consider {@linkcode fs.readFile} or {@linkcode fs.readToString} instead.
   * 
   * ### Errors
   * * This function will return an error if path does not already exist.
   * * Other errors may also be returned according to {@linkcode Deno.OpenOptions}.
   * 
   * ### Examples
  ```ts
  import { FsFile } from "@std/fs";
  
  const file = await FsFile.open("foo.txt").unwrap();
  const buf = new Uint8Array();

  await file.readToEnd(buf).unwrap();
  ```
   * * **Requires**: `allow-read` and/or `allow-write` permissions depending on {@linkcode options}
   */
  public static open(path: string,options?: Deno.OpenOptions) {
    return $result(async ()=> new FsFile(await Deno.open(path,options)));
  }
  
  /**
   * Attempts to synchronously open a file in `read-only` or `read and write` mode.
   * 
   * See the {@linkcode Deno.OpenOptions} method for more details.
   * 
   * If you only need to read the entire file contents, consider {@linkcode fs.readFile} or {@linkcode fs.readToString} instead.
   * 
   * ### Errors
   * * This function will return an error if path does not already exist.
   * * Other errors may also be returned according to {@linkcode Deno.OpenOptions}.
   * 
   * ### Examples
  ```ts
  import { FsFile } from "@std/fs";
  
  const file = FsFile.openSync("foo.txt").unwrap();
  const buf = new Uint8Array();
  
  file.readToEndSync(buf).unwrap();
  ```
   * * **Requires**: `allow-read` and/or `allow-write` permissions depending on {@linkcode options}
   */
  public static openSync(path: string,options?: Deno.OpenOptions) {
    return $resultSync(()=> new FsFile(Deno.openSync(path,options)));
  }

  /**
   * A {@linkcode ReadableStream} instance representing to the byte contents
   * of the file. This makes it easy to interoperate with other web streams
   * based APIs.
   *
   * ```ts
   * import { FsFile } from "@std/fs";
   * 
   * using file = await FsFile.open("my_file.txt", { read: true }).unwrap();
   * const decoder = new TextDecoder();
   * for await (const chunk of file.readable) {
   *   console.log(decoder.decode(chunk));
   * }
   * ```
   */
  public get readable() {
    return this.inner.readable;
  }
  
  /**
   * A {@linkcode WritableStream} instance to write the contents of the
   * file. This makes it easy to interoperate with other web streams based
   * APIs.
   *
   * ```ts
   * import { FsFile } from "@std/fs";
   * 
   * const items = ["hello", "world"];
   * using file = await FsFile.open("my_file.txt", { write: true }).unwrap();
   * const encoder = new TextEncoder();
   * const writer = file.writable.getWriter();
   * for (const item of items) {
   *   await writer.write(encoder.encode(item));
   * }
   * ```
   */
  public get writable() {
    return this.inner.writable;
  }

  /**
   * Attempts to sync all OS-internal metadata to disk.
   * 
   * This function will attempt to ensure that all in-memory data reaches the filesystem before returning.
   * 
   * This can be used to handle errors that would otherwise only be caught when the File is closed.
   * 
   * Dropping a file will ignore errors in synchronizing this in-memory data.
   * 
   * ### Examples
  ```ts
  import { FsFile } from "@std/fs";
  
  const encoder = new TextEncoder();
  using file = await FsFile.create("foo.txt").unwrap();
  
  await file.writeAll(encoder.encode("Hello, world!")).unwrap();
  await f.syncAll().unwrap();
  ```
   * * **UNSTABLE**: New API, yet to be vetted.
   */
  public syncAll() {
    return $result(()=> this.inner.sync());
  }

  /**
   * Attempts to sync all OS-internal metadata to disk synchronously.
   * 
   * This function will attempt to ensure that all in-memory data reaches the filesystem before returning.
   * 
   * This can be used to handle errors that would otherwise only be caught when the File is closed.
   * 
   * Dropping a file will ignore errors in synchronizing this in-memory data.
   * 
   * ### Examples
  ```ts
  import { FsFile } from "@std/fs";
  
  const encoder = new TextEncoder();
  using file = FsFile.createSync("foo.txt").unwrap();
  
  file.writeAllSync(encoder.encode("Hello, world!")).unwrap();
  f.syncAllSync().unwrap();
  ```
   * * **UNSTABLE**: New API, yet to be vetted.
   */
  public syncAllSync() {
    return $resultSync(()=> this.inner.syncSync());
  }

  /**
   * This function is similar to {@linkcode syncAll}, except that it might not synchronize file metadata to the filesystem.
   * 
   * This is intended for use cases that must synchronize content, but don't need the metadata on disk. The goal of this method is to reduce disk operations.
   * 
   * Note that some platforms may simply implement this in terms of {@linkcode syncAll}.
   * 
   * ### Examples
  ```ts
  import { FsFile } from "@std/fs";
  
  using file = await FsFile.create("foo.txt").unwrap();
  
  await file.writeAll(b"Hello, world!").unwrap();
  await file.syncData().unwrap();
  ```
   * * **UNSTABLE**: New API, yet to be vetted.
   */
  public syncData() {
    return $result(()=> this.inner.syncData());
  }

  /**
   * This function is similar to {@linkcode syncAllSync}, except that it might not synchronize file metadata to the filesystem.
   * 
   * This is intended for use cases that must synchronize content, but don't need the metadata on disk. The goal of this method is to reduce disk operations.
   * 
   * Note that some platforms may simply implement this in terms of {@linkcode syncAll}.
   * 
   * ### Examples
  ```ts
  import { FsFile } from "@std/fs";
  
  using file = FsFile.createSync("foo.txt").unwrap();
  
  file.writeAllSync(b"Hello, world!").unwrap();
  file.syncDataSync().unwrap();
  ```
   * * **UNSTABLE**: New API, yet to be vetted.
   */
  public syncDataSync() {
    return $resultSync(()=> this.inner.syncDataSync());
  }

  /**
   * Truncates or extends the underlying file, updating the size of this file to become size.
   * 
   * If the size is less than the current file's size, then the file will be shrunk.
   * If it is greater than the current file's size, then the file will be extended to size and have all of the intermediate data filled in with 0s.
   * 
   * The file's cursor isn't changed.
   * In particular, if the cursor was at the end and the file is shrunk using this operation, the cursor will now be past the end.
   * 
   * ### Errors
   * This function will return an error if the file is not opened for writing. Also, std::io::ErrorKind::InvalidInput will be returned if the desired length would cause an overflow due to the implementation specifics.
   * 
   * ### Examples
  ```ts
  import { FsFile } from "@std/fs";
  
  using file = await FsFile.create("foo.txt").unwrap();
  await file.setLen(10).unwrap();
  ```
   * Note that this method alters the content of the underlying file.
   */
  public setLen(len: number) {
    return $result(()=> this.inner.truncate(len));
  }

  /**
   * Synchronously truncates or extends the underlying file, updating the size of this file to become size.
   * 
   * If the size is less than the current file's size, then the file will be shrunk.
   * If it is greater than the current file's size, then the file will be extended to size and have all of the intermediate data filled in with 0s.
   * 
   * The file's cursor isn't changed.
   * In particular, if the cursor was at the end and the file is shrunk using this operation, the cursor will now be past the end.
   * 
   * ### Errors
   * This function will return an error if the file is not opened for writing. Also, std::io::ErrorKind::InvalidInput will be returned if the desired length would cause an overflow due to the implementation specifics.
   * 
   * ### Examples
  ```ts
  import { FsFile } from "@std/fs";
  
  using file = FsFile.createSync("foo.txt").unwrap();
  file.setLenSync(10).unwrap();
  ```
   * Note that this method alters the content of the underlying file.
   */
  public setLenSync(len: number) {
    return $resultSync(()=> this.inner.truncateSync(len));
  }

  /**
   * Queries metadata about the underlying file.
   * 
   * ### Examples
  ```ts
  import { FsFile } from "@std/fs";

  using file = await FsFile.open("foo.txt").unwrap();
  const metadata = await file.metadata().unwrap();
  ```
   */
  public metadata() {
    return $result(()=> this.inner.stat());
  }

  /**
   * Synchronously queries metadata about the underlying file.
   * 
   * ### Examples
  ```ts
  import { FsFile } from "@std/fs";

  using file = FsFile.openSync("foo.txt").unwrap();
  const metadata = file.metadataSync().unwrap();
  ```
   */
  public metadataSync() {
    return $resultSync(()=> this.inner.statSync());
  }


  /**
   * Changes the timestamps of the underlying file.
   * 
   * ### Errors
   * * This function will return an error if the user lacks permission to change timestamps on the underlying file. It may also return an error in other os-specific unspecified cases.
   * * This function may return an error if the operating system lacks support to change one or more of the timestamps set in the FileTimes structure.
   * 
   * ### Examples
  ```ts
  import { FsFile } from "@std/fs";
  
  const { accessed,modified } = await fs.metadata("src").unwrap();
  const dest = await FsFile.open("dest").unwrap();

  await dest.setTimes({ accessed, modified }).unwrap();
  ```
   */
  public setTimes(times: FileTimes) {this.metadataSync().unwrap().atime;
    return $result(()=> this.inner.utime(times.accessed,times.modified));
  }

  /**
   * Changes the timestamps of the underlying file synchronously.
   * 
   * ### Errors
   * * This function will return an error if the user lacks permission to change timestamps on the underlying file. It may also return an error in other os-specific unspecified cases.
   * * This function may return an error if the operating system lacks support to change one or more of the timestamps set in the FileTimes structure.
   * 
   * ### Examples
  ```ts
  import { FsFile } from "@std/fs";
  
  const { accessed,modified } = fs.metadataSync("src").unwrap();
  const dest = FsFile.openSync("dest").unwrap();

  dest.setTimesSync({ accessed, modified }).unwrap();
  ```
   */
  public setTimesSync(times: FileTimes) {
    return $resultSync(()=> this.inner.utimeSync(times.accessed,times.modified));
  }

  /**
   * Changes the modification time of the underlying file.
   * 
   * This is an alias for
  ```ts
  await file.setTimes({ accessed, modified }).unwrap();
  ```
   */
  public setModified(modified: number|Date) {
    return $result(async ()=> {
      const accessed=(await this.inner.stat()).atime;
      if(accessed===null) throw "couldn't fetch access-time";

      await this.inner.utime(accessed,modified);
    });
  }

  /**
   * Changes the modification time of the underlying file.
   * 
   * This is an alias for
  ```ts
  file.setTimesSync({ accessed, modified }).unwrap();
  ```
   */
  public setModifiedSync(modified: number|Date) {
    return $resultSync(()=> {
      const accessed=this.inner.statSync().atime;
      if(accessed===null) throw "couldn't fetch access-time";

      this.inner.utime(accessed,modified);
    });
  }

  /**
   * Read the file into an array buffer {@linkcode buf}.
   * Resolves to the number of bytes read during the operation.
   * 
   * **NOTE**: It is not guaranteed that the full buffer will be read in a single call.
   * 
   * ### Errors
   * * EOF (end of file)
   * * An error of the {@linkcode ErrorKind.Interrupted} kind is non-fatal and the write operation should be retried if there is nothing else to do.
   * 
   * ### Example
  ```ts
  import { FsFile } from "@std/fs";
  
  using file = await FsFile.open("/foo/bar.txt").unwrap();
  const buf = new Uint8Array(100);
  const numberOfBytesRead = await file.read(buf).unwrap();// 11 bytes
  const text = new TextDecoder().decode(buf);// "hello world"
  ```
  * * It is possible for a read to successfully return with 0 bytes. This does not indicate EOF.
   */
  public read(buf: Uint8Array) {
    return $result(async ()=> {
      const len=await this.inner.read(buf);
      if(len===null) throw "EOF";

      return len;
    });
  }

  /**
   * Read the file into an array buffer {@linkcode buf} synchrounously.
   * Resolves to the number of bytes read during the operation.
   * 
   * **NOTE**: It is not guaranteed that the full buffer will be read in a single call.
   * 
   * ### Errors
   * * EOF (end of file)
   * * An error of the {@linkcode ErrorKind.Interrupted} kind is non-fatal and the write operation should be retried if there is nothing else to do.
   * 
   * ### Example
  ```ts
  import { FsFile } from "@std/fs";
  
  using file = FsFile.openSync("/foo/bar.txt").unwrap();
  const buf = new Uint8Array(100);
  const numberOfBytesRead = file.readSync(buf).unwrap();// 11 bytes
  const text = new TextDecoder().decode(buf);// "hello world"
  ```
  * * It is possible for a read to successfully return with 0 bytes. This does not indicate EOF.
   */
  public readSync(buf: Uint8Array) {
    return $resultSync(()=> {
      const len=this.inner.readSync(buf);
      if(len===null) throw "EOF";
      
      return len;
    });
  }

  /**
   * Read the exact number of bytes required to fill {@linkcode buf}.
   * 
   * This function reads as many bytes as necessary to completely fill the specified buffer {@linkcode buf}.
   * 
   * No guarantees are provided about the contents of {@linkcode buf} when this function is called,
   * so implementations cannot rely on any property of the contents of {@linkcode buf} being true.
   * It is recommended that implementations only write data to buf instead of reading its contents.
   * The documentation on {@linkcode read} has a more detailed explanation on this subject.
   * 
   * ### Errors
   * * If this function encounters an error of the kind {@linkcode ErrorKind.Interrupted} then the error is ignored and the operation will continue.
   * * If this function encounters an `end of file` before completely filling the buffer, it returns an error of the kind {@linkcode ErrorKind.UnexpectedEof}. The contents of buf are unspecified in this case.
   * * If any other read error is encountered then this function immediately returns. The contents of buf are unspecified in this case.
   * * If this function returns an error, it is unspecified how many bytes it has read, but it will never read more than would be necessary to completely fill the buffer.
   * 
   * ### Examples
  ```ts
  import { FsFile } from "@std/fs";
  
  
  using file = await File.open("foo.txt").unwrap();
  const buf = new Uint8Array(69);

  // read exactly 69 bytes
  await file.readExact(buf).unwrap();
  ```
   */
  public readExact(buf: Uint8Array) {
    return $result(async ()=> {
      let i=0;
      for await(const chunk of this.readable)
      for(const byte of chunk) {
        if(i===buf.length) return;
        buf[i++]=byte;
      }

      throw "Unexpected Eof";
    });
  }

  /**
   * Read all bytes until EOF in this source, placing them into {@linkcode buf}.
   * 
   * All bytes read from this source will be appended to the specified buffer {@linkcode buf}.
   * This function will continuously call {@linkcode read} to append more data to `buf`
   * until {@linkcode read} returns either `Ok(null)` or an error of non-{@linkcode ErrorKind.Interrupted} kind.
   * 
   * If successful, this function will return the total number of bytes read.
   * 
   * ### Errors
   * * If this function encounters an error of the kind {@linkcode ErrorKind.Interrupted} then the error is ignored and the operation will continue.
   * 
   * * If any other read error is encountered then this function immediately returns.
   * Any bytes which have already been read will be appended to `buf`.
   * 
   * ### Examples
   * {@linkcode FsFile}s implement {@linkcode Read}:
  ```ts
  import { FsFile } from "std/fs";
  
  const file = await FsFile.open("foo.txt").unwrap();
  const buf = new Uint8Array();
  
  // read the whole file
  await file.readToEnd(buf).unwrap();
  ```
   * (See also the {@linkcode std.fs.read} convenience function for reading from a file.)
   */
  public readToEnd(buf: Uint8Array) {
    return $result(async ()=> {
      while(await this.inner.read(buf)!==null);
    });
  }

  /**
   * Read all bytes until EOF in this source synchronously, placing them into {@linkcode buf}.
   * 
   * All bytes read from this source will be appended to the specified buffer {@linkcode buf}.
   * This function will continuously call {@linkcode read} to append more data to `buf`
   * until {@linkcode read} returns either `Ok(null)` or an error of non-{@linkcode ErrorKind.Interrupted} kind.
   * 
   * If successful, this function will return the total number of bytes read.
   * 
   * ### Errors
   * * If this function encounters an error of the kind {@linkcode ErrorKind.Interrupted} then the error is ignored and the operation will continue.
   * 
   * * If any other read error is encountered then this function immediately returns.
   * Any bytes which have already been read will be appended to `buf`.
   * 
   * ### Examples
   * {@linkcode FsFile}s implement {@linkcode Read}:
  ```ts
  import { FsFile } from "std/fs";
  
  const file = FsFile.openSync("foo.txt").unwrap();
  const buf = new Uint8Array();
  
  // read the whole file
  file.readToEndSync(buf).unwrap();
  ```
   * (See also the {@linkcode std.fs.read} convenience function for reading from a file.)
   */
  public readToEndSync(buf: Uint8Array) {
    return $resultSync(()=> {
      while(this.inner.readSync(buf)!==null);
    });
  }


  /**
   * Write the contents of the array buffer {@linkcode buf} to the file.
   * Resolves to the number of bytes written.
   * 
   * **NOTE**: It is not guaranteed that the full buffer will be written in a single call.
   * 
   * ### Errors
   * * Each call to write may generate an I/O error indicating that the operation could not be completed.
   * If an error is returned then no bytes in the buffer were written to this writer.
   * * It is not considered an error if the entire buffer could not be written to this writer.
   * * An error of the {@linkcode ErrorKind.Interrupted} kind is non-fatal and the write operation should be retried if there is nothing else to do.
   * 
   * ### Example
  ```ts
  import { FsFile } from "@std/fs";

  const encoder = new TextEncoder();
  const data = encoder.encode("Hello world");

  using file = await FsFile.open("/foo/bar.txt", { write: true }).unwrap();
  const bytesWritten = await file.write(data).unwrap(); // 11
  ```
   */
  public write(buf: Uint8Array) {
    return $result(()=> this.inner.write(buf));
  }

  /**
   * Attempts to write an entire buffer into this writer.
   * 
   * This method will continuously call {@linkcode write} until there is no more data to be written
   * or an error of non-{@linkcod ErrorKind.Interrupted} kind is returned.
   * This method will not return until the entire buffer has been successfully written or such an error occurs.
   * The first error that is not of {@linkcode ErrorKind.Interrupted} kind generated from this method will be returned.
   * 
   * If the buffer contains no data, this will never call {@linkcode write}.
   * 
   * ### Errors
   * * This function will return the first error of non-{@linkcode ErrorKind.Interrupted} kind that {@linkcode writekk } returns.
   * 
   * ### Examples
  ```ts
  import { FsFile } from "fs";
  using buffer = await FsFile.create("foo.txt").unwrap();
  
  await buffer.writeAll(new TextEncoder().encode("some bytes..xd")).unwrap();
  ```
   */
  //TODO(nate): Handle interrepted case.
  public writeAll(buf: Uint8Array) {
    return $result(async ()=> {
      while(buf.length) {
        const n=await this.inner.write(buf);
        if(!n) {
          return Err(new Error("failed to write the whole buffer.",{ cause: "ErrorKind.WriteZero" }));
        }

        buf=buf.slice(n);
      }
    });
  }

  /**
   * Write the contents of the array buffer {@linkcode buf} to the file synchronously.
   * Resolves to the number of bytes written.
   * 
   * **NOTE**: It is not guaranteed that the full buffer will be written in a single call.
   * 
   * ### Errors
   * * Each call to write may generate an I/O error indicating that the operation could not be completed.
   * If an error is returned then no bytes in the buffer were written to this writer.
   * * It is not considered an error if the entire buffer could not be written to this writer.
   * * An error of the {@linkcode ErrorKind.Interrupted} kind is non-fatal and the write operation should be retried if there is nothing else to do.
   * 
   * ### Example
  ```ts
  import { FsFile } from "@std/fs";

  const encoder = new TextEncoder();
  const data = encoder.encode("Hello world");

  using file = FsFile.openSync("/foo/bar.txt", { write: true }).unwrap();
  const bytesWritten = file.writeSync(data).unwrap(); // 11
  ```
   */
  public writeSync(buf: Uint8Array) {
    return $resultSync(()=> this.inner.writeSync(buf));
  }

  /**
   * Attempts to write an entire buffer into this writer.
   * 
   * This method will continuously call {@linkcode write} until there is no more data to be written
   * or an error of non-{@linkcod ErrorKind.Interrupted} kind is returned.
   * This method will not return until the entire buffer has been successfully written or such an error occurs.
   * The first error that is not of {@linkcode ErrorKind.Interrupted} kind generated from this method will be returned.
   * 
   * If the buffer contains no data, this will never call {@linkcode write}.
   * 
   * ### Errors
   * * This function will return the first error of non-{@linkcode ErrorKind.Interrupted} kind that {@linkcode writekk } returns.
   * 
   * ### Examples
  ```ts
  import { FsFile } from "fs";
  using buffer = FsFile.createSync("foo.txt").unwrap();
  
  buffer.writeAllSync(new TextEncoder().encode("some bytes..xd")).unwrap();
  ```
   */
  //TODO(nate): Handle interrepted case.
  public writeAllSync(buf: Uint8Array) {
    return $resultSync(()=> {
      while(buf.length) {
        const n=this.inner.writeSync(buf);
        if(!n) {
          return Err(new Error("failed to write the whole buffer.",{ cause: "ErrorKind.WriteZero" }));
        }

        buf=buf.slice(n);
      }
    });
  }

  /**
   * Seek to an offset, in bytes, in a stream.
   * 
   * A seek beyond the end of a stream is allowed, but behavior is defined by the implementation.
   * 
   * If the seek operation completed successfully, this method returns the new position from the start of the stream.
   * That position can be used later with {@linkcode SeekFrom.Start}.
   * 
   * ### Errors
   * * Seeking can fail, for example because it might involve flushing a buffer.
   * * Seeking to a negative offset is considered an error.
   * 
   * ### Example
  ```ts
  import { FsFile,SeekFrom } from "@std/fs";

  // Given file pointing to file with "Hello world", which is 11 bytes long:
  using file = await FsFile.open("hello.txt",{ read: true, write: true, truncate: true, create: true }).unwrap();
  await file.write(new TextEncoder().encode("Hello world")).unwrap();

  // advance cursor 6 bytes
  const cursorPosition = await file.seek(6, SeekFrom.Start).unwrap();
  console.log(cursorPosition);// 6
  const buf = new Uint8Array(100);
  await file.read(buf).unwrap();
  console.log(new TextDecoder().decode(buf));// "world"
  ```
   * 
   * The seek modes work as follows:
   * 
  ```ts
  import { FsFile,SeekFrom } from "@std/fs";

  // Given file.rid pointing to file with "Hello world", which is 11 bytes long:
  const file = await FsFile.open("hello.txt",{ read: true, write: true, truncate: true, create: true }).unwrap();
  await file.write(new TextEncoder().encode("Hello world")).unwrap();

  // Seek 6 bytes from the start of the file
  console.log(await file.seek(6, SeekFrom.Start).unwrap());// "6"
  // Seek 2 more bytes from the current position
  console.log(await file.seek(2, SeekFrom.Current).unwrap());// "8"
  // Seek backwards 2 bytes from the end of the file
  console.log(await file.seek(-2, SeekFrom.End).unwrap());// "9" (i.e. 11-2)
  ```
   */
  public seek(offset: number|bigint,whench: SeekFrom) {
    return $result(()=> this.inner.seek(offset,whench));
  }

  /**
   * Seek to an offset, in bytes, in a stream synchronously.
   * 
   * A seek beyond the end of a stream is allowed, but behavior is defined by the implementation.
   * 
   * If the seek operation completed successfully, this method returns the new position from the start of the stream.
   * That position can be used later with {@linkcode SeekFrom.Start}.
   * 
   * ### Errors
   * * Seeking can fail, for example because it might involve flushing a buffer.
   * * Seeking to a negative offset is considered an error.
   * 
   * ### Example
  ```ts
  import { FsFile,SeekFrom } from "@std/fs";

  // Given file pointing to file with "Hello world", which is 11 bytes long:
  using file = FsFile.openSync("hello.txt",{ read: true, write: true, truncate: true, create: true }).unwrap();
  file.writeSync(new TextEncoder().encode("Hello world")).unwrap();

  // advance cursor 6 bytes
  const cursorPosition = file.seekSync(6, SeekFrom.Start).unwrap();
  console.log(cursorPosition);// 6
  const buf = new Uint8Array(100);
  file.readSync(buf).unwrap();
  console.log(new TextDecoder().decode(buf));// "world"
  ```
   * 
   * The seek modes work as follows:
   * 
  ```ts
  import { FsFile,SeekFrom } from "@std/fs";

  // Given file.rid pointing to file with "Hello world", which is 11 bytes long:
  const file = FsFile.openSync("hello.txt",{ read: true, write: true, truncate: true, create: true }).unwrap();
  file.writeSync(new TextEncoder().encode("Hello world")).unwrap();

  // Seek 6 bytes from the start of the file
  console.log(file.seekSync(6, SeekFrom.Start).unwrap());// "6"
  // Seek 2 more bytes from the current position
  console.log(file.seekSync(2, SeekFrom.Current).unwrap());// "8"
  // Seek backwards 2 bytes from the end of the file
  console.log(file.seekSync(-2, SeekFrom.End).unwrap());// "9" (i.e. 11-2)
  ```
   */
  public seekSync(offset: number,whench: SeekFrom) {
    return $resultSync(()=> this.inner.seekSync(offset,whench));
  }

  /**
   * Checks if the file resource is a TTY (terminal).
   * 
   * ### Example
  ```ts
  import { FsFile } from "@std/fs";

  // This example is system and context specific
  using file = await FsFile.open("/dev/tty6")?;
  file.isTerminal();// Ok(true)
  ```
   * * **UNSTABLE**: New API, yet to be vetted.
   */
  public isTerminal() {
    return $resultSync(()=> this.inner.isTerminal());
  }

  /**
   * Set TTY to be under raw mode or not.
   * In raw mode, characters are read and returned as is, without being processed.
   * All special processing of characters by the terminal is disabled, including echoing input characters.
   * Reading from a TTY device in raw mode is faster than reading from a TTY device in canonical mode.
   * 
   * ### Example
  ```ts
  import { FsFile } from "@std/fs";

  using file = await Deno.open("/dev/tty6");
  file.setRaw(true, { cbreak: true });
  ```
   * * **UNSTABLE**: New API, yet to be vetted.
   */
  public setRaw(mode: boolean,options?: Deno.SetRawOptions) {
    return $resultSync(()=> this.inner.setRaw(mode,options));
  }

  /**
   * Acquire an advisory file-system lock for the file.
   * * **UNSTABLE**: New API, yet to be vetted.
   */
  public lock(exclusive?: boolean) {
    return $result(()=> this.inner.lock(exclusive));
  }

  /**
   * Acquire an advisory file-system lock for the file synchronously.
   * * **UNSTABLE**: New API, yet to be vetted.
   */
  public lockSync(exclusive?: boolean) {
    return $resultSync(()=> this.inner.lockSync(exclusive));
  }

  /**
   * Release an advisory file-system lock for the file.
   * * **UNSTABLE**: New API, yet to be vetted.
   */
  public unlock() {
    return $result(()=> this.inner.unlock());
  }

  /**
   * Release an advisory file-system lock for the file synchronously.
   * * **UNSTABLE**: New API, yet to be vetted.
   */
  public unlockSync() {
    return $resultSync(()=> this.inner.unlockSync());
  }
}


