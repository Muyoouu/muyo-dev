interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> }
}

const CONTENT_SIGNAL = 'ai-train=no, search=yes, ai-input=yes'

function agentHeaders(source: Headers, isHome: boolean, markdownPath: string): Headers {
  const headers = new Headers(source)
  headers.set('Content-Signal', CONTENT_SIGNAL)
  headers.set('Vary', 'Accept')
  headers.set('Cache-Control', 'private, max-age=0, must-revalidate')

  headers.append('Link', '</llms.txt>; rel="describedby"; type="text/plain"')
  headers.append('Link', `<${markdownPath}>; rel="alternate"; type="text/markdown"`)

  if (isHome) {
    headers.append('Link', '</llms-full.txt>; rel="alternate"; type="text/plain"')
    headers.append('Link', '</rss.xml>; rel="alternate"; type="application/rss+xml"')
    headers.append('Link', '</sitemap-index.xml>; rel="alternate"; type="application/xml"')
  }

  return headers
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)
    const isHome = url.pathname === '/'
    const isPage = url.pathname.endsWith('/')
    const isRead = request.method === 'GET' || request.method === 'HEAD'
    const wantsMarkdown = (request.headers.get('accept') ?? '').includes('text/markdown')
    const markdownPath = `${url.pathname}index.md`

    try {
      if (wantsMarkdown && isPage && isRead) {
        const markdownUrl = new URL(markdownPath, url)
        const markdown = await env.ASSETS.fetch(new Request(markdownUrl, request))

        if (markdown.ok) {
          const headers = agentHeaders(markdown.headers, isHome, markdownPath)
          headers.set('Content-Type', 'text/markdown; charset=utf-8')
          return new Response(markdown.body, { status: 200, headers })
        }
      }

      const response = await env.ASSETS.fetch(request)
      return new Response(response.body, {
        status: response.status,
        headers: agentHeaders(response.headers, isHome, markdownPath),
      })
    } catch {
      return env.ASSETS.fetch(request)
    }
  },
}
