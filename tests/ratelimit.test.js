import request from "supertest";
import app from "../index.js";

describe("Rate Limiting", () => {
  it("should block when rate limit exceeded", async () => {
    for (let i = 0; i < 2; i++) {
      await request(app).get("/api/test");
    }
    const response = await request(app).get("/api/test");
    expect(response.status).toBe(429);
    expect(response.text).toContain("Too many requests");
  });
});
