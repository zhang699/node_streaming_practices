import stream from "stream";
import fs from "fs";
const Readable = stream.Readable;
const FILE_PATH = "./testdata/file/text.txt";
const rfs = fs.createReadStream(FILE_PATH);
//rfs.setEncoding("ascii");
rfs.setEncoding("utf-8");
rfs.pipe(process.stdout);
