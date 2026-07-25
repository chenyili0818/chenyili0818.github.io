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
  assert.match(html, /news/i);
  assert.match(html, /education/i);
  assert.match(html, /SetPO/);
  assert.match(html, /OptProver/);
  assert.match(html, /SITA/);
  assert.match(html, /selected publications/i);
  assert.match(html, /Google Scholar/);
  assert.match(html, /ORCID/);
  assert.match(html, /Hosted by/);
  assert.match(html, /GitHub Pages/);
  assert.doesNotMatch(html, /Research in focus/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Starter Project/);
});
