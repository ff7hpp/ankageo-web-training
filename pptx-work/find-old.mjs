import { FileBlob, PresentationFile } from "@oai/artifact-tool";
const p = await PresentationFile.importPptx(await FileBlob.load("C:/Users/aa77m/Downloads/Random/ANKAGEO_Week_1_Abdulrahman_Abdullah_Final.pptx"));
console.log((await p.inspect({ kind: "slide,textbox,shape", search: "Status: Week 1 tasks completed", maxChars: 5000 })).ndjson);
