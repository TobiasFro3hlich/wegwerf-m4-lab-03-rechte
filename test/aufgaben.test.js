import { test } from "node:test";
import assert from "node:assert/strict";
import { aufgabeAnlegen, erledigen } from "../src/aufgaben.js";

test("legt eine offene Aufgabe an", () => {
  assert.deepEqual(aufgabeAnlegen(" Bericht "), { titel: "Bericht", erledigt: false });
});

test("lehnt einen leeren Titel ab", () => {
  assert.throws(() => aufgabeAnlegen("  "));
});

test("markiert eine Aufgabe als erledigt", () => {
  assert.equal(erledigen(aufgabeAnlegen("Bericht")).erledigt, true);
});
