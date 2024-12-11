// pages/api/download-resume.js
import path from "path";
import fs from "fs";

const RESUME_NAME = "Resume_Esteban_Campos.pdf";

export default (_req, res) => {
  // Path to your file
  const filePath = path.join(process.cwd(), "public", "files", RESUME_NAME);

  if (fs.existsSync(filePath)) {
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${RESUME_NAME}"`
    );
    const file = fs.createReadStream(filePath);
    file.pipe(res);
  } else {
    res.status(404).json({ message: "File not found" });
  }
};
