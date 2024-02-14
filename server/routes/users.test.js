import request from "supertest";
import app from "../app";

describe("User Routes", () => {
  // Test GET all users route
  describe("GET /api/users", () => {
    it("should return all users", async () => {
      const res = await request(app).get("/api/users");
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("data");
      expect(Array.isArray(res.body.data)).toBe(true);
    });
  });

  // Test POST create a user route
  describe("POST /api/users", () => {
    it("should create a new user", async () => {
      const userData = {
        name: "lol Doe" + Math.floor(Math.random() * 1000),
        email: "lol@example.com" + Math.floor(Math.random() * 1000),
        password: "password123",
      };
      const res = await request(app).post("/api/users").send(userData);
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("data");
      expect(res.body.data).toHaveProperty("name", userData.name);
      expect(res.body.data).toHaveProperty("email", userData.email);
    });
  });

  // Test GET a user route
  describe("GET /api/users/:id", () => {
    it("should return a user by ID", async () => {
      // Assuming there's a user with ID '65cd4d4bc20fbd50dcf5b96c'
      const userId = "65cd4d4bc20fbd50dcf5b96c";
      const res = await request(app).get(`/api/users/${userId}`);
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("data");
      // Add more assertions based on the expected user data
    });
  });

  // Test PUT update a user route
  describe("PUT /api/users/:id", () => {
    it("should update a user by ID", async () => {
      // Assuming there's a user with ID '65cd4d4bc20fbd50dcf5b96c' and new data to update
      const userId = "65cd4d4bc20fbd50dcf5b96c";
      const updatedUserData = {
        name: "Updated Name",
      };
      const res = await request(app)
        .put(`/api/users/${userId}`)
        .send(updatedUserData);
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty("data");
    });
  });

  // Test DELETE a user route
  describe("DELETE /api/users/:id", () => {
    it("should delete a user by ID", async () => {
      // Assuming there's a user with ID '65cd4d4bc20fbd50dcf5b96c'
      const userId = "65cd4d4bc20fbd50dcf5b96c";
      const res = await request(app).delete(`/api/users/${userId}`);
      expect(res.status).toBe(200);
    });
  });

  // Test follow a user route
  describe("POST /api/users/:id/follow", () => {
    it("should follow a user by ID", async () => {
      // Assuming there's a user with ID '65cd4d4bc20fbd50dcf5b96c' to follow
      const userId = "65cd4d4bc20fbd50dcf5b96c";
      const res = await request(app).post(`/api/users/${userId}/follow`);
      expect(res.status).toBe(200);
    });
  });

  // Test unfollow a user route
  describe("POST /api/users/:id/unfollow", () => {
    it("should unfollow a user by ID", async () => {
      // Assuming there's a user with ID '65cd4d4bc20fbd50dcf5b96c' to unfollow
      const userId = "65cd4d4bc20fbd50dcf5b96c";
      const res = await request(app).post(`/api/users/${userId}/unfollow`);
      expect(res.status).toBe(200);
    });
  });
});
