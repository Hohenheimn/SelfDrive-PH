export default function ConvertBlobToFile(blob: any) {
    var file = new File(blob, "name", { type: "image/png" });
    return file;
}
