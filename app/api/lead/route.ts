import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const data = await req.json();

  await resend.emails.send({
    from: "Simulador <info@bbvacredito.com>",
    to: ["info@bbvacredito.com"],
    subject: "Novo Lead - BBVA Crédito",
    html: `
      <h2>Novo Lead Recebido</h2>

      <h3>Dados do Cliente</h3>
      <p><strong>Nome:</strong> ${data.nome || "-"}</p>
      <p><strong>Telefone:</strong> ${data.telefone || "-"}</p>
      <p><strong>Email:</strong> ${data.email || "-"}</p>
      <p><strong>Cidade:</strong> ${data.cidade || "-"}</p>
      <p><strong>Renda:</strong> ${data.renda || "-"}</p>

      <hr/>

      <h3>Simulação</h3>
      <p><strong>Tipo de crédito:</strong> ${data.tipoCredito || "-"}</p>
      <p><strong>Valor:</strong> € ${data.valor || "-"}</p>
      <p><strong>Prazo:</strong> ${data.prazo || "-"} meses</p>
      <p><strong>Parcela:</strong> € ${data.mensalidade || "-"}</p>
      <p><strong>Total:</strong> € ${data.total || "-"}</p>
    `,
  });

  return Response.json({ success: true });
}
