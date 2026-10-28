"use strict";

var assert = require("node:assert");
var { describe, it } = require("node:test");

var getNodeFlags = require("../lib/get_node_flags");

describe("getNodeFlags", function () {
  describe("arrayOrFunction", function () {
    // it("should return the first argument when it is an array", function () {
    //   var env = { cwd: "aaa" };
    //   expect(getNodeFlags.arrayOrFunction([], env)).toEqual([]);
    //   expect(
    //     getNodeFlags.arrayOrFunction(
    //       ["--lazy", "--use_strict", "--harmony"],
    //       env,
    //     ),
    //   ).toEqual(
    //     expect.arrayContaining(["--lazy", "--harmony", "--use_strict"]),
    //   );
    // });

    // it("should return the exection result of the first argument when it is a function", function () {
    //   var env = { cwd: "aaa" };
    //   expect(
    //     getNodeFlags.arrayOrFunction(function () {
    //       return [];
    //     }, env),
    //   ).toEqual([]);
    //   expect(
    //     getNodeFlags.arrayOrFunction(function (arg) {
    //       expect(arg).toEqual(env);
    //       return ["--lazy", "--harmony"];
    //     }, env),
    //   ).toEqual(expect.arrayContaining(["--lazy", "--harmony"]));
    // });

    // it("should return an array which has an element of the first argument when the first argument is a string", function () {
    //   var env = { cwd: "aaa" };
    //   expect(getNodeFlags.arrayOrFunction("--lazy", env)).toEqual(
    //     expect.arrayContaining(["--lazy"]),
    //   );
    // });

    it("should return an empty array when the first argument is neither an array, a function nor a string", function () {
      var env = { cwd: "aaa" };
      assert.deepStrictEqual(getNodeFlags.arrayOrFunction(undefined, env), []);
      assert.deepStrictEqual(getNodeFlags.arrayOrFunction(null, env), []);
      assert.deepStrictEqual(getNodeFlags.arrayOrFunction(true, env), []);
      assert.deepStrictEqual(getNodeFlags.arrayOrFunction(false, env), []);
      assert.deepStrictEqual(getNodeFlags.arrayOrFunction(0, env), []);
      assert.deepStrictEqual(getNodeFlags.arrayOrFunction(123, env), []);
      assert.deepStrictEqual(getNodeFlags.arrayOrFunction({}, env), []);
      assert.deepStrictEqual(
        getNodeFlags.arrayOrFunction({ length: 1 }, env),
        [],
      );
    });
  });

  describe("fromReorderedArgv", function () {
    it("should return only node flags from respawning arguments", function () {
      var env = { cwd: "aaa" };
      var cmd = [
        "node",
        "--lazy",
        "--harmony",
        "--use_strict",
        "./aaa/bbb/app.js",
        "--ccc",
        "ddd",
        "-e",
        "fff",
      ];
      assert.deepStrictEqual(getNodeFlags.fromReorderedArgv(cmd, env), [
        "--lazy",
        "--harmony",
        "--use_strict",
      ]);
    });

    it('should end node flags before "--"', function () {
      var env = { cwd: "aaa" };
      var cmd = [
        "node",
        "--lazy",
        "--",
        "--harmony",
        "--use_strict",
        "./aaa/bbb/app.js",
        "--ccc",
        "ddd",
        "-e",
        "fff",
      ];
      assert.deepStrictEqual(getNodeFlags.fromReorderedArgv(cmd, env), [
        "--lazy",
      ]);
    });

    it("should return node flags when arguments are only node flags", function () {
      var env = { cwd: "aaa" };
      var cmd = ["node", "--lazy", "--harmony", "--use_strict"];
      assert.deepStrictEqual(getNodeFlags.fromReorderedArgv(cmd, env), [
        "--lazy",
        "--harmony",
        "--use_strict",
      ]);
    });

    it("should return an empty array when no node flags", function () {
      var env = { cwd: "aaa" };
      var cmd = ["node", "./aaa/bbb/app.js", "--aaa", "bbb", "-c", "d"];
      assert.deepStrictEqual(getNodeFlags.fromReorderedArgv(cmd, env), []);
    });
  });
});
