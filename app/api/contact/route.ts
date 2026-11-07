import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { name, email, text } = await req.json();

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
        return NextResponse.json({ error: 'No telegram keys' }, { status: 500 });
    }
    if (!name || !email || !text) {
        return NextResponse.json({ error: 'Empty fields' }, { status: 400 });
    }

    const message = `Новое сообщение с портфолио\n\nИмя: ${name}\nEmail: ${email}\n\n${text}`;

    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: message }),
    });

    if (!res.ok) {
        console.log('Telegram error', await res.text());
        return NextResponse.json({ error: 'Telegram error' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
}
