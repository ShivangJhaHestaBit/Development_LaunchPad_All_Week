import request from "supertest";
import app from "../index.js";

describe("CORS Policy", () => {
  it("should include CORS headers", async () => {
    const res = await request(app)
      .get("/api/test")
      .set("Origin", "http://localhost:3001");

    expect(res.headers["access-control-allow-origin"]).toBe("http://localhost:3000");
  });

  it("should block disallowed origins", async () => {
    const res = await request(app)
      .get("/api/test")
      .set("Origin", "http://evil.com");

    expect(res.status).toBe(403);
  });
});
