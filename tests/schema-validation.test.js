import request from "supertest";
import app from "../index.js";

describe("Schema Validation", () => {
  it("should pass validation with correct payload", async () => {
    const res = await request(app)
      .post("/api/register")
      .send({
        name: "John Doe",
        email: "john@example.com",
        password: "StrongPass123"
      });

    expect(res.status).toBe(200);
  });

  it("should fail validation with missing fields", async () => {
    const res = await request(app)
      .post("/api/register")
      .send({
        email: "invalid.com"
      });

    expect(res.status).toBe(400);
    expect(res.body.error).toBeDefined();
  });
});
