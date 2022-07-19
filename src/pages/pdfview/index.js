import dynamic from "next/dynamic";
import PDFViewer from "../../components/pdf-viewer";

// const PDFViewer = dynamic(() => import("../../components/pdf-viewer"), {
//   ssr: false,
// });

export default function PDF() {
  return <PDFViewer />;
}
