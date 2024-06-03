import { expect, describe, it } from 'vitest'
import { worker } from './browser';
import { http, HttpResponse } from 'msw'


describe('makeRequest', () => {
  it('should make a request', async () => {
    const res = await fetch('http://foobar.com');
    const response = await res.json();

    expect(response).toEqual({ message: 'Hello, world!' });
  })

  it('should demonstrate that a runtime handler does not work', async () => {
    worker.use(http.get('http://foobar.com', () => {
      return HttpResponse.json({ message: 'Goodbye, world!' })
    }))

    const res = await fetch('http://foobar.com');
    const response = await res.json();

    expect(response).toEqual({ message: 'Goodbye, world!' });
  })
})
