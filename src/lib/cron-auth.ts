/** Shared cron auth for Vercel Cron and external pingers. */
export function cronSecretExpected(): string | undefined {
  return process.env.AUTOMATION_CRON_SECRET ?? process.env.CRON_SECRET
}

export function readCronSecret(request: Request): string {
  const bearer = request.headers
    .get('authorization')
    ?.match(/^Bearer\s+(.+)$/i)?.[1]
  return request.headers.get('x-cron-secret') ?? bearer ?? ''
}
