/**
 * STEP 1
 * Create a basic test to pass in the test folder
 */
const { expect } = require("chai");
const server = require("supertest")(require("../../index"));
const { syncAndSeed } = require("../db/index");

// it("true is true", () => {
//   expect(true).to.be.equal(true);
// });

/**
 * STEP 5
 * Create tests for the API Endpoints
 */
describe("/api", () => {
  beforeEach(async () => {
    await syncAndSeed();
  });
  /**
   * STEP 5A
   * Create tests for POST /auth/login
   */
  describe("POST /auth/login", () => {
    it("should return 200 OK", async () => {
      const res = await server
        .post("/api/auth/login")
        .send({ username: "user", password: "pass" });

      expect(res.status).to.equal(200);
    });

    it("should return welcome message and token on success", async () => {
      const { body } = await server
        .post("/api/auth/login")
        .send({ username: "user", password: "pass" });

      const { message, token } = body;

      expect(message).to.equal("Welcome back");
      expect(token).to.exist;
    });
  });

  /**
   * STEP 5C
   * Create tests for GET /api/plants
   */
  describe("/plants", () => {
    describe("GET /", () => {
      let token;

      before(async () => {
        const { body } = await server
          .post("/api/auth/login")
          .send({ username: "user", password: "pass" });

        token = body.token;
      });

      it("should return 200 OK", async () => {
        const { status } = await server
          .get("/api/plants")
          .set("Authorization", token);

        expect(status).to.equal(200);
      });

      it("should return an array of plant objects for user", async () => {
        const { body } = await server
          .get("/api/plants")
          .set("Authorization", token);

        expect(body).to.have.lengthOf(1);
        expect(body[0]).to.eql({
          id: 1,
          name: "Franky",
          type: "Crassula ovata",
          imgUrl:
            "https://redsquareflowers.com/wp-content/uploads/2020/09/Crassula-Ovata-Jade.png ",
          UserId: 1,
        });
      });
    });
  });
});

/**
 * STEP 5B
 * Create tests for POST /auth/register
 */
