type LocalCityType = {
    title: string
    countryTitle: string
}

type AddressType = {
    streetTitle: string
    city: LocalCityType

}

type Technologies = {
    id: number
    title: string
}

type StudentType = {
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<Technologies>
}

const student: StudentType = {
    name: 'Mikhail',
    age: 19,
    isActive: true,
    address: {
        streetTitle: "bebr",
        city: {
            title: "Moscow",
            countryTitle: "Russia"
        }

    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        }
    ]
}
