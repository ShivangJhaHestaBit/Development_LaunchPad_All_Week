import request from "supertest";
import express from "express";
import security from "../src/middlewares/security.js";
import userRoutes from "../src/routes/user.route.js";
const app = express();
app.use(express.json());
security(app);
app.use("/api/users", userRoutes);
describe("Security Middleware Tests", () => {
  test("Helmet should set security headers", async () => {
    const res = await request(app).get("/api/users");
    expect(res.headers['x-dns-prefetch-control']).toBeDefined();
    expect(res.headers['x-frame-options']).toBeDefined();
    expect(res.headers['x-content-type-options']).toBeDefined();
  });
  test("CORS should allow requests from any origin", async () => {
    const res = await request(app)
      .options("/api/users/register")
      .set("Origin", "http://example.com");
    
    expect(res.headers['access-control-allow-origin']).toBe("*");
    expect(res.headers['access-control-allow-methods']).toContain("GET");
  });
  test("Rate limiter should block after exceeding max requests", async () => {
    const requests = [];
    const maxRequests = 105;
    for (let i = 0; i < maxRequests; i++) {
      requests.push(request(app).get("/api/users"));
    }
    const responses = await Promise.all(requests);
    const lastResponse = responses[responses.length - 1];
    expect(lastResponse.text).toMatch(/Too many requests/i);
  });
  test("Payload too large should return 413", async () => {
    const largePassword = "a".repeat(2 * 1024 * 1024);
    const res = await request(app)
      .post("/api/users/register")
      .send({
        firstname: "Shivang",
        email: "shivang@test.com",
        password: largePassword
      });

    expect(res.status).toBe(413);
  });

});
