import { beforeAll, afterAll, afterEach } from 'vitest';
import { worker } from './browser';

beforeAll(async () => {
  await worker.start();
})

afterEach(() => {
  worker.resetHandlers();
})

afterAll(() => {
  worker.stop();
})
