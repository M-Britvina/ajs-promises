import GameSavingLoader from "../GameSavingLoader";
import json from "../parser";
import read from "../reader";

jest.mock("../reader");
jest.mock("../parser");

afterEach(() => {
    jest.clearAllMocks();
});

test('read fail', async () => {
    read.mockRejectedValue(new Error("Reading error"));
    await expect(new GameSavingLoader().load()).rejects.toThrow("Reading error");
});

test('parse fail', async () => {
    read.mockResolvedValue("invalid data");
    json.mockRejectedValue(new Error("Parsing error"));
    await expect(new GameSavingLoader().load()).rejects.toThrow("Parsing error");
});
