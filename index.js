class Human {
    constructor (name, age) {
        this.name = name
        this.age = age
    }
    infoHuman () {
        console.log(`Мене звати ${this.name}, мені ${this.age} років.`)
    }
}

class Auto {
    constructor (brand, model, year, licensePlate) {
        this.brand = brand
        this.model = model
        this.year = year
        this.licensePlate = licensePlate
        this.owner = null
    }
    driver (owner) {
        if (owner.age > 18) {
            this.owner = owner
        }else {
            console.log('Ви не можете водити. Вам не має 18-ти років') 
        }
    } 
    infoAuto() {
        console.log(`Марка: ${this.brand}, Модель: ${this.model}, Рік: ${this.year}, Номерний знак: ${this.licensePlate}`);
        if (this.owner) {
            console.log(`Власник: `)
            this.owner.infoHuman()
        } else {
            console.log('Автомобіль не має власника')
        }
    }    
}

const human1 = new Human('Сергій', 25)
const human2 = new Human('Валерій', 17)

const auto1 = new Auto('Audi', 'A6', 2020, 'AB8456')
const auto2 = new Auto('Mercedes', 'EQS', 2023, 'AA1111AA')

auto1.driver(human1)
auto2.driver(human2)

auto1.infoAuto()
auto2.infoAuto()