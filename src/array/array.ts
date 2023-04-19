 const usersObj = {
    "0": "userA",
    "1": "userB",
    "2": "userC",
    "3": "userD"
}

 const usersArray = [
    {id: 101, name: "userA"},
    {id: 3232312, name: "userA"},
    {id: 1212, name: "userC"},
    {id: 1, name: "userD"}
]

export type usersType = {
    [key: string]: {
        id: number
        name: string
    }
}

 const users: usersType = {
    "101": {id: 101, name: "userA"},
    "3232312": {id: 3232312, name: "userA"},
    "1212": {id: 1212, name: "userC"},
    "1": {id: 1, name: "userD"}
}

const user = {id: 1500, name: "Igor"}
users[user.id] = user
delete users[user.id]


console.log(users)

const userCopy = [...usersArray, user]