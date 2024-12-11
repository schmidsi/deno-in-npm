import { encodeBase64, decodeBase64 } from "@std/encoding";

const foobar = new TextEncoder().encode("foobar");
console.log("Hello world", encodeBase64(foobar));
