import { FileBlob, PresentationFile } from "@oai/artifact-tool";

const source = "C:/Users/aa77m/Downloads/Random/ANKAGEO_Week_1_Abdulrahman_Abdullah.pptx";
const presentation = await PresentationFile.importPptx(await FileBlob.load(source));
const result = await presentation.inspect({
  kind: "slide,textbox,shape,image,notes,layout",
  maxChars: 50000,
});
console.log(result.ndjson);
