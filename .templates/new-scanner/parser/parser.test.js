// SPDX-FileCopyrightText: the secureCodeBox authors
//
// SPDX-License-Identifier: Apache-2.0

const { readFile } = require("fs/promises");
const util = require("util");

const {
  validateParser,
} = require("@securecodebox/parser-sdk-nodejs/parser-utils");

const { parse } = require("./parser");

test("should properly parse new-scanner json file", async () => {
  const fileContent = JSON.parse(
    await readFile(__dirname + "/__testFiles__/example.com.json", {
      encoding: "utf8",
    })
  );
  const findings = await parse(fileContent);
  // validate findings
  await expect(validateParser(findings)).resolves.toBeUndefined();
  expect(findings).toMatchInlineSnapshot();
});

test("should properly parse empty json file", async () => {
  const fileContent = JSON.parse(
    await readFile(__dirname + "/__testFiles__/empty.json", {
      encoding: "utf8",
    })
  );
  const findings = await parse(fileContent);
  // validate findings
  await expect(validateParser(findings)).resolves.toBeUndefined();
  expect(findings).toMatchInlineSnapshot();
});
