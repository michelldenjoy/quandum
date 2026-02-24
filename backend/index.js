import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

console.log("SECRET KEY cargada:", !!process.env.RECAPTCHA_SECRET_KEY);

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  console.log("📩 Petición recibida:", req.body); 

  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({ error: "Token no enviado" });
    }

    console.log("🔑 Verificando token con Google..."); 

    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      }
    );

    const data = await response.json();
    console.log("✅ Respuesta Google reCAPTCHA:", data);

    if (!data.success || data.score < 0.5) {
      return res.status(403).json({ error: "No pasó reCAPTCHA", detail: data });
    }

    return res.json({ success: true });

  } catch (err) {
    console.error("💥 ERROR BACKEND:", err); 
    return res.status(500).json({ error: "Error servidor", detail: err.message });
  }
});

app.listen(3001, () => console.log("✅ Backend en puerto 3001"));
console.log("SECRET KEY cargada:", !!process.env.RECAPTCHA_SECRET_KEY);