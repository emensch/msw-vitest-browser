import { setupWorker } from 'msw/browser'
import { http, HttpResponse } from 'msw'

export const worker = setupWorker(...[
  http.get('http://foobar.com', () => {
    return HttpResponse.json({ message: 'Hello, world!' })
  }),
])
