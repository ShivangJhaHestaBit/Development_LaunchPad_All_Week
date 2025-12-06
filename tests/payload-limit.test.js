import request from "supertest";
import app from "../index.js";

describe("Payload Size Limit", () => {
  it("should block large JSON payload", async () => {
    const bigPayload = {
      data: "x".repeat(1 * 1024 * 1024)
    };
    const res = await request(app)
      .post("/api/test")
      .send(bigPayload);

    expect(res.status).toBe(413);
    expect(res.text).toContain("Payload Too Large");
  });
});
