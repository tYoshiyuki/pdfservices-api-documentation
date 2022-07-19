"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[9066],{72900:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return s}});var n=a(87462),r=a(63366),d=(a(15007),a(64983)),l=a(99536),m=["components"],o={},i={_frontmatter:o},p=l.Z;function s(e){var t=e.components,a=(0,r.Z)(e,m);return(0,d.mdx)(p,(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"release-notes"},"Release Notes"),(0,d.mdx)("p",null,"In addition to general bug fixes, and performance enhancements, refer to\nthe changes below for each release."),(0,d.mdx)("h2",{id:"change-history"},"Change history"),(0,d.mdx)("h3",{id:"august-2022"},"August, 2022"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Change"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"New"),(0,d.mdx)("td",{parentName:"tr",align:null},"Adobe has launched a modern PDF viewer across all embed modes to render PDFs. For more details, see the section ",(0,d.mdx)("a",{parentName:"td",href:"../modernviewer/"},"Modern viewer"),".")))),(0,d.mdx)("h3",{id:"may-2022"},"May, 2022"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Change"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"New"),(0,d.mdx)("td",{parentName:"tr",align:null},"Website developers can now integrate Google Analytics with PDF Embed API with only a few steps and collect PDF analytics. For more details, see the section ",(0,d.mdx)("a",{parentName:"td",href:"./howtodata.md#google-analytics"},"Google Analytics"),".")))),(0,d.mdx)("h3",{id:"august-2021-patch-release"},"August, 2021 (Patch Release)"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Change"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Changed"),(0,d.mdx)("td",{parentName:"tr",align:null},"PDF Embed API now no longer uses Adobe Analytics to gather anonymous usage data for measuring performance. For more details, see the section ",(0,d.mdx)("a",{parentName:"td",href:"../#analytics"},"Analytics"))))),(0,d.mdx)("h3",{id:"august-2021"},"August, 2021"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Change"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"New"),(0,d.mdx)("td",{parentName:"tr",align:null},"PDF Embed API will end support for Internet Explorer 11 and Microsoft Edge Legacy after September, 2021. A warning message will be displayed when the PDF is rendered on these browsers till the end of September, 2021, notifying users to use any other supported browser. Beginning October 1, 2021, PDF rendering will stop working on these browsers. To know about the list of supported browsers, see the section ",(0,d.mdx)("a",{parentName:"td",href:"../#supported-browsers"},"Supported browsers"))))),(0,d.mdx)("h3",{id:"july-2021"},"July, 2021"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Change"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Changed"),(0,d.mdx)("td",{parentName:"tr",align:null},"Previously, the PDF always used to take focus on rendering, irrespective of the embed mode. Now the default behaviour has been changed and the PDF will take focus only when rendered in full window and lightbox embed modes. Website developers can override this default behaviour using the preview configuration ",(0,d.mdx)("inlineCode",{parentName:"td"},"focusOnRendering"),". For more details, see the section ",(0,d.mdx)("a",{parentName:"td",href:"./howtos.md#focus-on-pdf-rendering"},"Focus on PDF rendering"),".")))),(0,d.mdx)("h3",{id:"june-2021"},"June, 2021"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Change"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Changed"),(0,d.mdx)("td",{parentName:"tr",align:null},"The default behaviour of saving user preferences in the local storage (such as updated annotation color) has been deprecated for the commenting feature in full window embed mode. Website developers can still save these user preferences elsewhere using the existing user setting callbacks provided by PDF Embed API. For more details, see the section ",(0,d.mdx)("a",{parentName:"td",href:"howtos_ui.md#user-settings"},"User settings"),".")))),(0,d.mdx)("h3",{id:"may-2021"},"May, 2021"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Change"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"New"),(0,d.mdx)("td",{parentName:"tr",align:null},"New tools for undo and redo actions introduced in the top bar.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Changed"),(0,d.mdx)("td",{parentName:"tr",align:null},"Updated the Adobe Acrobat branding in all embed modes. The new Adobe Acrobat logo will appear in the page controls toolbar at the bottom for full window, sized container and in-line embed modes, and in the top bar for lightbox embed mode. Clicking on the logo will open the ",(0,d.mdx)("a",{parentName:"td",href:"https://documentcloud.adobe.com/link/home"},"Adobe Acrobat online")," application in a new browser tab. See the section ",(0,d.mdx)("a",{parentName:"td",href:"howtos.md#embed-modes"},"Embed modes")," for more details.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"New"),(0,d.mdx)("td",{parentName:"tr",align:null},"Added support for passing ",(0,d.mdx)("inlineCode",{parentName:"td"},"strokeWidth")," input parameter to the ",(0,d.mdx)("inlineCode",{parentName:"td"},"startAnnotationMode()")," annotation API in order to set the line thickness of drawing annotation programmatically.")))),(0,d.mdx)("h3",{id:"april-2021"},"April, 2021"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Change"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"New"),(0,d.mdx)("td",{parentName:"tr",align:null},"Added support for displaying linearized PDFs.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"New"),(0,d.mdx)("td",{parentName:"tr",align:null},"New viewer API to access file attachments in the PDF programmatically.")))),(0,d.mdx)("h3",{id:"march-2021"},"March, 2021"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Change"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"New"),(0,d.mdx)("td",{parentName:"tr",align:null},"Added support for eraser annotation tool to erase parts of drawing annotations.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"New"),(0,d.mdx)("td",{parentName:"tr",align:null},"New viewer API to fetch and open bookmarks in the PDF programmatically.")))),(0,d.mdx)("h3",{id:"january-2021"},"January, 2021"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Change"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"New"),(0,d.mdx)("td",{parentName:"tr",align:null},"Added support for add text annotation in annotation APIs.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"New"),(0,d.mdx)("td",{parentName:"tr",align:null},"New viewer APIs to perform zoom and search operations on the PDF programmatically.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"New"),(0,d.mdx)("td",{parentName:"tr",align:null},"Enhancements in the mobile view experience of PDF files displayed using PDF Embed API.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"New"),(0,d.mdx)("td",{parentName:"tr",align:null},"Added a new event for “UNSUPPORTED","_","FEATURE","_","FOUND” which will be generated when any unsupported feature is used by the end-user.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"New"),(0,d.mdx)("td",{parentName:"tr",align:null},"Added a new section in documentation about recommended approaches for search engine indexing of PDF files displayed using PDF Embed API.")))),(0,d.mdx)("h3",{id:"november-2020"},"November, 2020"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Change"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"New"),(0,d.mdx)("td",{parentName:"tr",align:null},"Added support for document search in the in-line embed mode.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Changed"),(0,d.mdx)("td",{parentName:"tr",align:null},"Previously, the updateAnnotation API only supported updating comment text. It now supports updating color, stroke width, position and bounding box.")))),(0,d.mdx)("h3",{id:"september-2020"},"September, 2020"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Change"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"New"),(0,d.mdx)("td",{parentName:"tr",align:null},"Added support for the new “Add Text Comment” annotation tool which adds free text to PDFs.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"New"),(0,d.mdx)("td",{parentName:"tr",align:null},"UI improvements in the right-hand comments panel.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"New"),(0,d.mdx)("td",{parentName:"tr",align:null},"Events for annotation actions.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"New"),(0,d.mdx)("td",{parentName:"tr",align:null},"Improvement in the PDF viewing experience in sized container embed mode by enabling fade-in and fade-out of page controls along with the top bar.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Bug fix"),(0,d.mdx)("td",{parentName:"tr",align:null},"Previously, there was an issue in Embed API which caused the rendering of few PDFs to fail, and users would see an error message. This is now resolved and those PDFs render correctly in the web viewer.")))),(0,d.mdx)("h3",{id:"august-2020"},"August, 2020"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Change"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"New"),(0,d.mdx)("td",{parentName:"tr",align:null},"Sized container full screen mode only: To facilitate exiting from full screen mode, support was added for a ",(0,d.mdx)("strong",{parentName:"td"},"Close")," button in the top bar on all platforms as well as support for the swipe down gesture on mobile browsers.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Changed"),(0,d.mdx)("td",{parentName:"tr",align:null},"Sized container full screen mode only: Improved the PDF preview experience in full screen mode on mobile browsers.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Bug fix"),(0,d.mdx)("td",{parentName:"tr",align:null},"Previously, disabling print via the API disabled the context menu items behind the overflow icon but did not disable the keyboard shortcuts in all cases. Now, the API disables both the menu items and the keyboard shortcuts.")))),(0,d.mdx)("h3",{id:"july-2020"},"July, 2020"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Change"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Changed"),(0,d.mdx)("td",{parentName:"tr",align:null},"Moved the document search bar below the top bar in full window embed mode to unblock the annotation tools during a search operation.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"New"),(0,d.mdx)("td",{parentName:"tr",align:null},"PDF Embed API bug fixes and documentation updates around the save behavior.")))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-overview-pdf-embed-api-releasenotes-md-eb58f6eaa6c05c442a03.js.map