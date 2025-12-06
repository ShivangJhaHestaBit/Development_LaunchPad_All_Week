import request from "supertest";
import app from "../index.js";
describe("Helmet Security Headers", () => {
  it("should return security headers", async () => {
    const res = await request(app).get("/api/test");
    expect(res.headers["x-dns-prefetch-control"]).toBe("off");
    expect(res.headers["x-frame-options"]).toBeDefined();
    expect(res.headers["x-content-type-options"]).toBe("nosniff");
    expect(res.headers["strict-transport-security"]).toBeDefined();
  });
});
