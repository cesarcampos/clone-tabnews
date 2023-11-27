test("GET to /api/v1/status should return 200", () => {
  const response = fetch("http://localhost:3000/api/v1/status");
  console.log(response);
});
