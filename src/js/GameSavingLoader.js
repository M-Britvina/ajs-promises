import json from "./parser";
import read from "./reader";

export default class GameSavingLoader {
    load() {
        return read()
            .then((data) => json(data))
            .catch(error => {
                throw new Error(error);
            });
    }
}
