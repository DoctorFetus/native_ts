import {usersType} from "./array";

let usersObj: usersType

beforeEach(() => {
     usersObj = {
        "101": {id: 101, name: "userA"},
        "3232312": {id: 3232312, name: "userA"},
        "1212": {id: 1212, name: "userC"},
        "1": {id: 1, name: "userD"}
    }
})

test("should select corresponding user from object", () => {
    usersObj["1"].name = "Maria"

    expect(usersObj["1"]).toEqual({id: 1, name: "Maria"})
})

test("should delete corresponding user from object", () => {
    delete usersObj["1"]

    expect(usersObj["1"]).toBeUndefined()
})