import { test, expect } from "@playwright/test";
import { UserApi } from "../../API/userApi";
import * as allure from "allure-js-commons";
test("Verify User API", async ({ request }) => {
  const userApi = new UserApi(request);

  const startTime = Date.now();
  const endTime = Date.now();

  const responseTime = endTime - startTime;

  await allure.step("Call User API", async () => {
    const response = await userApi.getUser(1);

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();

    expect(responseTime).toBeLessThan(3000);

    const body = await response.json();

    expect(body).toHaveProperty("id");

    expect(body.id).toBe(1);

    expect(body).toHaveProperty("name");

    expect(body).toHaveProperty("email");

    expect(body).toHaveProperty("address");

    expect(body.email).toContain("@");
  });
});
