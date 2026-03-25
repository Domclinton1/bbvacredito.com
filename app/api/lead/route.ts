import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const nome = data.nome || "-";
    const telefone = data.telefone || "-";
    const email = data.email || "-";
    const cidade = data.cidade || "-";
    const renda = data.renda || "-";

    const tipoCredito = data.tipoCredito || "-";
    const valor = data.valor || "-";
    const prazo = data.prazo || "-";
    const mensalidade = data.mensalidade || "-";
    const total = data.total || "-";

    await resend.emails.send({
      from: "BBVA Crédito <info@bbvacredito.com>",
      to: ["info@bbvacredito.com"],
      subject: "Novo Lead - Simulação de Crédito",
      html: `
        <h2>Novo Lead Recebido</h2>

        <h3>Dados do Cliente</h3>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Cidade:</strong> ${cidade}</p>
        <p><strong>Renda:</strong> ${renda}</p>

        <hr/>

        <h3>Simulação de Crédito</h3>
        <p><strong>Tipo:</strong> ${tipoCredito}</p>
        <p><strong>Valor:</strong> € ${valor}</p>
        <p><strong>Prazo:</strong> ${prazo} meses</p>
        <p><strong>Parcela:</strong> € ${mensalidade}</p>
        <p><strong>Total a pagar:</strong> € ${total}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.log(error);
    return Response.json({ error: "Erro ao enviar email" }, { status: 500 });
  }
}
