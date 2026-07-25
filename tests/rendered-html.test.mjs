import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders Chenyi Li's academic homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Chenyi Li/);
  assert.match(html, /Welcome to my personal homepage/);
  assert.match(html, /research interests/i);
  assert.match(html, /<h2>News<\/h2>/);
  assert.match(html, /<h2>Education<\/h2>/);
  assert.match(html, /May 2026/);
  assert.match(html, /Nov 2025/);
  assert.doesNotMatch(html, /May 01, 2026/);
  assert.match(html, /SetPO/);
  assert.match(html, /OptProver/);
  assert.match(html, /SITA/);
  assert.match(html, /Chenyi Li\*, Yanchen Nie\*/);
  assert.match(html, /Chenyi Li\*, Shuchen Zhu\*/);
  assert.match(html, /Optimization:/);
  assert.match(html, /selected publications/i);
  assert.match(html, /Google Scholar/);
  assert.match(html, /ORCID/);
  assert.match(html, /Hosted by/);
  assert.match(html, /GitHub Pages/);
  assert.doesNotMatch(html, /Generative Modeling:/);
  assert.doesNotMatch(html, /and generative modeling/);
  assert.doesNotMatch(html, /Research in focus/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Starter Project/);
});
