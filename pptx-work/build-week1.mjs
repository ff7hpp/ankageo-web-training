import { FileBlob, PresentationFile } from "@oai/artifact-tool";

const source = "C:/Users/aa77m/Downloads/Random/ANKAGEO_Week_1_Abdulrahman_Abdullah.pptx";
const output = "C:/Users/aa77m/Downloads/Random/ANKAGEO_Week_1_Abdulrahman_Abdullah_Final.pptx";

const presentation = await PresentationFile.importPptx(await FileBlob.load(source));

const edits = {
  "sh/lkbyd4fq": "Name: Abdulrahman Abdullah\nUniversity: Altınbaş University\nClass: 3rd Year\nInternship Start Date: 17 August 2026\n\nReport Scope: Week 1 — HTML, CSS, and basic JavaScript navigation.",
  "sh/m9szih4n": "The goal of the first week was to strengthen core front-end skills through practical web-page development.\n\nFocus Areas\n• HTML page structure\n• Forms and tables\n• CSS styling and layout\n• Basic JavaScript form interaction\n• Building complete interface pages",
  "sh/tcjupg7u": "Completed deliverables\n• Personnel Information page\n• ANKAGEO login page\n• Facebook login page\n• Facebook sign-in page\n• Welcome page after login or sign-in\n\nThe work combines HTML/CSS interfaces with a small JavaScript navigation flow.",
  "sh/98z298bu": "Personnel Information\n\nANKAGEO Login\n(standalone interface)\n\nFacebook Login ↔ Facebook Sign in\n\nWelcome Screen\n\nLogin and sign-in forms use basic JavaScript to navigate to the welcome page. The personnel page currently contains static sample records.",
  "sh/x0zql4re": "• Two-column page layout\n• Email and password inputs\n• Login action\n• Link to the sign-in page\n\nShows HTML/CSS layout practice with basic JavaScript navigation.",
  "sh/10ry1gz6": "• Successful login or sign-in message\n• User-specific greeting\n• Return-to-login action\n\nShows the completed local post-authentication flow. No backend or database is used.",
  "sh/on69g765": "✓ HTML page structure\n✓ Forms and table elements\n✓ CSS styling and page layout\n✓ Login and sign-in interfaces\n✓ Welcome-page navigation with basic JavaScript\n✓ Core Week 1 front-end scope\n\nStatus: Core Week 1 deliverables completed. Broader roadmap projects remain for later stages.",
  "sh/xgnehwri": "• Creating structured HTML interfaces\n• Designing and styling forms with CSS\n• Building tables for data presentation\n• Applying page layout principles\n• Using JavaScript for submit events and page navigation\n• Organizing a simple login, sign-in, and welcome flow\n\nTechnical stack: HTML, CSS, and basic JavaScript.",
  "sh/l8b2dsje": "The core Week 1 front-end scope is complete.\n\nThe submitted work demonstrates HTML/CSS practice through forms, tables, login interfaces, a sign-in page, and a completed welcome flow using basic JavaScript.\n\nNext Focus\nJavaScript fundamentals, DOM manipulation, dynamic table updates, and interactive page behavior.",
};

for (const [id, text] of Object.entries(edits)) {
  presentation.resolve(id).text = text;
}

presentation.resolve("sh/pofapcnq").delete();

const notes = presentation.resolve("nt/8f2psfyx");
notes.setText("[Sources]\nAnkageo Staj Web & Projeler.pdf, pages 18–20, and the student repository files inspected on 24 August 2026.\n\nThis deck reports the completed core Week 1 front-end scope and does not claim backend, database, CRUD, REST API, React, or Angular completion.");

const pptx = await PresentationFile.exportPptx(presentation);
await pptx.save(output);
console.log(output);
