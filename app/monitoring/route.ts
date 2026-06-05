import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();

    // Forward to Sentry ingest
    const sentryDsn = process.env.NEXT_PUBLIC_SENTRY_DSN;
    if (!sentryDsn) {
      return NextResponse.json({ error: "Sentry DSN not configured" }, { status: 500 });
    }

    // Parse DSN to get ingest URL
    const dsnMatch = sentryDsn.match(/https:\/\/([a-f0-9]+)@([^\/]+)\/(\d+)/);
    if (!dsnMatch) {
      return NextResponse.json({ error: "Invalid DSN" }, { status: 500 });
    }

    const [, key, host, projectId] = dsnMatch;
    const sentryUrl = `https://${host}/api/${projectId}/envelope/`;

    const response = await fetch(sentryUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-sentry-envelope",
        "X-Sentry-Auth": `Sentry sentry_key=${key}, sentry_version=7, sentry_client=sentry-javascript/8.0.0`,
      },
      body,
    });

    return new NextResponse(response.body, {
      status: response.status,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Sentry tunnel error:", error);
    return NextResponse.json({ error: "Tunnel error" }, { status: 500 });
  }
}
