import { NextResponse } from 'next/server';
import { createTransport } from 'nodemailer';
import type { ContactFormData } from '@/types';

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    // Validation
    if (!body.name || !body.email || !body.message || !body.service) {
      return NextResponse.json(
        { success: false, message: 'Campos requeridos faltantes' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, message: 'Email inválido' },
        { status: 400 }
      );
    }

    const transporter = createTransport({
      host:   process.env.NODEMAILER_HOST,
      port:   Number(process.env.NODEMAILER_PORT ?? 587),
      secure: false,
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
      },
    });

    await transporter.sendMail({
      from:    `"CreatIA Web" <${process.env.NODEMAILER_USER}>`,
      to:      process.env.CONTACT_EMAIL_TO,
      replyTo: body.email,
      subject: `[CreatIA] Nuevo mensaje de ${body.name} — ${body.service}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:32px;background:#0D1B2A;color:#F0F6FF;border-radius:12px;">
          <h2 style="color:#00D4FF;margin-bottom:24px;">Nuevo mensaje desde CreatIA.co</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#8892B0;width:140px;">Nombre</td><td style="padding:8px 0;font-weight:600;">${body.name}</td></tr>
            <tr><td style="padding:8px 0;color:#8892B0;">Email</td><td style="padding:8px 0;"><a href="mailto:${body.email}" style="color:#00D4FF;">${body.email}</a></td></tr>
            ${body.company ? `<tr><td style="padding:8px 0;color:#8892B0;">Empresa</td><td style="padding:8px 0;">${body.company}</td></tr>` : ''}
            <tr><td style="padding:8px 0;color:#8892B0;">Servicio</td><td style="padding:8px 0;"><span style="background:rgba(0,212,255,0.15);color:#00D4FF;padding:2px 10px;border-radius:20px;">${body.service}</span></td></tr>
          </table>
          <div style="margin-top:24px;padding:20px;background:rgba(255,255,255,0.05);border-radius:8px;border-left:3px solid #00D4FF;">
            <p style="color:#8892B0;font-size:12px;margin-bottom:8px;">Mensaje</p>
            <p style="line-height:1.7;white-space:pre-wrap;">${body.message}</p>
          </div>
          <p style="margin-top:24px;font-size:12px;color:#8892B0;">Enviado desde creatia.co — ${new Date().toLocaleString('es-CO')}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: 'Mensaje enviado correctamente' });
  } catch (error) {
    console.error('[contact/route] Error:', error);
    return NextResponse.json(
      { success: false, message: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
