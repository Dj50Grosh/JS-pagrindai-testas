/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/

console.log("______uzd. 1______")

function eur2USD() {
 let eur = Math.round((Math.random() * 1000) + 1)
 let USDperEUR =  1.06
 return (eur * USDperEUR).toFixed(2)
}

console.log(`EUR to USD conversion: ${eur2USD()}USD`)

/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/
console.log("______uzd. 2______")

function usd2EUR() {
    let usd = Math.round((Math.random() * 1000) + 1)
    let EURperUSD =  0.94
    return (eur * USDperEUR).toFixed(2)
   }

console.log(`USD to EUR conversion: ${eur2USD()}EUR`)

/*
3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu.
Pvz. svoris = 80kg, ūgis = 1.8 m.
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
*/
console.log("______uzd. 3______")

function BMI(vardas, svoris, ugis) {
    const bmi = (svoris / ugis ** 2).toFixed(2)
    console.log("BMI of", vardas, "=", bmi)
    console.log("BMI summary:")
    if (bmi >= 18 && bmi < 25) {
        console.log(vardas+"`s BMI is normal")
    }
    else if (bmi > 25) {
        console.log(vardas, "is overweight")
    }
    else {
        console.log(vardas, "is underweight")
    }
}

BMI("Andrej", 80, 1.81)


/*
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/
console.log("______uzd. 4______")

function conversion(name, yearBorn) {
    const currentYear = new Date().getFullYear()
    const age = currentYear - yearBorn
    const SECperYEAR = 365.25 * 24 * 60 * 60
    const MINperYEAR = SECperYEAR / 60
    const HOURperYREAR = MINperYEAR / 60
    console.log(name+"`s age in seconds:", age * SECperYEAR)
    console.log(name+"`s age in minutes:", age * MINperYEAR)
    console.log(name+"`s age in hours:", age * HOURperYREAR)
}

conversion("Andrej", 1980)
/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/
console.log("______uzd. 5______")

function tempConverter (F, C) {
    let FtoC = 5/9 * (F - 32)
    let CtoF = (C * 9/5) + 32
    if (C == 0) {
        console.log("Temperature in Celcius: " + FtoC)
    }
    else {
        console.log("Temperature in Farenheit: " + CtoF)
    }
}

tempConverter(0, 5)
/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/
console.log("______uzd. 6______")

let masyvas = [];
    for(let i = 1; i <= 10; i++)
    {
       masyvas.push(i);
    }
    console.log(masyvas.join('-'));

/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/

/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/
console.log("______uzd. 8______")

function daysToXmas() {
    const xmasDay = new Date("2023-12-25")
    const currentDate = new Date()
    return ((xmasDay - currentDate) / (1000 * 60 * 60 * 24)).toFixed(0)
}
console.log("Dar liko", daysToXmas(), "dienų iki Kalėdų. Valio!!!")
/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/
console.log("______uzd. 9______")

let zodziuMasyvas = ["Tomas", "Dainius", "Paulius", "Jonas"]

function spausdintiMasyva() {
    console.log(zodziuMasyvas.join(','))
    console.log(zodziuMasyvas.join('+'))
}

spausdintiMasyva()

/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/
console.log("______uzd. 10______")
