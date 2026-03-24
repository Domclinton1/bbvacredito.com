import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"BBVA Crédito" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: data.email,
      subject: "Novo Lead - Simulação BBVA",
      html: `
        <div style="font-family: Arial; padding:20px">
          <h2>Novo Lead Recebido</h2>

          <h3>Dados do Cliente</h3>
          <p><b>Nome:</b> ${data.nome}</p>
          <p><b>Telefone:</b> ${data.telefone}</p>
          <p><b>Email:</b> ${data.email}</p>
          <p><b>Cidade:</b> ${data.cidade}</p>
          <p><b>Renda:</b> ${data.renda}</p>

          <hr/>

          <h3>Dados da Simulação</h3>
          <p><b>Tipo de crédito:</b> ${data.tipo}</p>
          <p><b>Valor solicitado:</b> ${data.valor} €</p>
          <p><b>Prazo:</b> ${data.meses} meses</p>
          <p><b>Mensalidade:</b> ${data.mensalidade} €</p>
          <p><b>Total a pagar:</b> ${data.total} €</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return NextResponse.json({ ok: false });
  }
}
