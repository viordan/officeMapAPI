require('dotenv').config()
// const Point = require('./models/point')

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => {
    console.log('Connected to Database');
    // const preset = [
    //     {
    //       "name": "Bonfire Spire",
    //       "x": 1365,
    //       "y": 2130,
    //       "capacity": 5,
    //       "zoom": "933-800-2389",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Dark Tower",
    //       "x": 590,
    //       "y": 720,
    //       "capacity": 4,
    //       "zoom": "none",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Epic Subspace modified",
    //       "x": 590,
    //       "y": 1360,
    //       "capacity": 4,
    //       "zoom": "none",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Firefly Forest",
    //       "x": 560,
    //       "y": 1900,
    //       "capacity": 5,
    //       "zoom": "233-083-4019",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Lamplight Town",
    //       "x": 1050,
    //       "y": 900,
    //       "capacity": 12,
    //       "zoom": "912-714-9004",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Lunch Room - TO",
    //       "x": 2800,
    //       "y": 1700,
    //       "capacity": 20,
    //       "zoom": "781-892-2241",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Shipwreck Shore",
    //       "x": 570,
    //       "y": 980,
    //       "capacity": 6,
    //       "zoom": "984-857-3450",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Skywatch",
    //       "x": 1110,
    //       "y": 2130,
    //       "capacity": 6,
    //       "zoom": "652-250-7081",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "The Academy",
    //       "x": 690,
    //       "y": 2130,
    //       "capacity": 12,
    //       "zoom": "928-196-6136",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "The Lost Island",
    //       "x": 570,
    //       "y": 1630,
    //       "capacity": 6,
    //       "zoom": "528-876-6066",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Quiet Room",
    //       "x": 2260,
    //       "y": 1600,
    //       "capacity": 1,
    //       "zoom": "none",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "BabyTriceratops",
    //       "x": 1170,
    //       "y": 3620,
    //       "capacity": 6,
    //       "zoom": "876-552-9902",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "ChirpyBird",
    //       "x": 590,
    //       "y": 3340,
    //       "capacity": 10,
    //       "zoom": "392-883-1095",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Cloud Sheep",
    //       "x": 1470,
    //       "y": 3260,
    //       "capacity": 2,
    //       "zoom": "none",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Cuddly Cactus",
    //       "x": 1340,
    //       "y": 3260,
    //       "capacity": 2,
    //       "zoom": "none",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Flying Piggy",
    //       "x": 1210,
    //       "y": 3260,
    //       "capacity": 2,
    //       "zoom": "none",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Pyro Peck",
    //       "x": 520,
    //       "y": 3620,
    //       "capacity": 8,
    //       "zoom": "644-689-9675",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Rainbow Panda",
    //       "x": 310,
    //       "y": 3310,
    //       "capacity": 6,
    //       "zoom": "620-896-6174",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Robo Pup",
    //       "x": 800,
    //       "y": 3620,
    //       "capacity": 8,
    //       "zoom": "202-835-7320",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Sharky",
    //       "x": 3200,
    //       "y": 3620,
    //       "capacity": 6,
    //       "zoom": "247-097-3305",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Speedy Turtle",
    //       "x": 310,
    //       "y": 3580,
    //       "capacity": 10,
    //       "zoom": "298-220-1318",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Crystal Muncher",
    //       "x": 1000,
    //       "y": 3620,
    //       "capacity": 6,
    //       "zoom": "none",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Ursa Minor",
    //       "x": 1370,
    //       "y": 3480,
    //       "capacity": 4,
    //       "zoom": "none",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Cat-o-Lantern",
    //       "x": 1540,
    //       "y": 3480,
    //       "capacity": 6,
    //       "zoom": "none",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Growth",
    //       "x": 900,
    //       "y": 480,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Radu Trambitas",
    //       "x": 950,
    //       "y": 460,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Growth",
    //       "x": 940,
    //       "y": 530,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Growth",
    //       "x": 1090,
    //       "y": 530,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Gurvarinder Singh",
    //       "x": 1090,
    //       "y": 460,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Neetika Bhargava",
    //       "x": 1160,
    //       "y": 500,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Stepan Oskin",
    //       "x": 1390,
    //       "y": 530,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Mahima Agarwal",
    //       "x": 1300,
    //       "y": 480,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Growth",
    //       "x": 1450,
    //       "y": 530,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Josh Purcell",
    //       "x": 1580,
    //       "y": 470,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Growth",
    //       "x": 1550,
    //       "y": 410,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Anthonny",
    //       "x": 1610,
    //       "y": 400,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Ilia Demertchian",
    //       "x": 1800,
    //       "y": 530,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Stephen Yu",
    //       "x": 1830,
    //       "y": 490,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Gautham Stalin",
    //       "x": 1870,
    //       "y": 530,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "John Frigilana",
    //       "x": 2000,
    //       "y": 470,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Ryan Woo",
    //       "x": 1970,
    //       "y": 400,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Noel Chin",
    //       "x": 2030,
    //       "y": 410,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Tomyo Maeshiro",
    //       "x": 2220,
    //       "y": 530,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Jie Lin",
    //       "x": 2250,
    //       "y": 490,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Christine Yu",
    //       "x": 2290,
    //       "y": 530,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Edward Wilson",
    //       "x": 2420,
    //       "y": 470,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Dale Seo",
    //       "x": 2390,
    //       "y": 400,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Lawton Spelliscy",
    //       "x": 2450,
    //       "y": 410,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Don Bui",
    //       "x": 2648,
    //       "y": 530,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Aaron Wang",
    //       "x": 2670,
    //       "y": 490,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Natasha Tenggoro",
    //       "x": 2720,
    //       "y": 530,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Martina Montero",
    //       "x": 2850,
    //       "y": 470,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Chris Richard",
    //       "x": 2820,
    //       "y": 400,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Benson Wong",
    //       "x": 2880,
    //       "y": 410,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "John Kohlsmith",
    //       "x": 3070,
    //       "y": 530,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Lavinia Manea",
    //       "x": 3100,
    //       "y": 490,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Chris Zhang",
    //       "x": 3140,
    //       "y": 530,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Abdul Rahman",
    //       "x": 3270,
    //       "y": 470,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Casandra Espinosa",
    //       "x": 3240,
    //       "y": 400,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "GROWTH",
    //       "x": 3310,
    //       "y": 410,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Dorota Zak",
    //       "x": 3410,
    //       "y": 780,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Co-Op (Jacob Scott)",
    //       "x": 3340,
    //       "y": 790,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Ahmed Nagi",
    //       "x": 3400,
    //       "y": 840,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Dayi Lin",
    //       "x": 3300,
    //       "y": 950,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Co- Op",
    //       "x": 3240,
    //       "y": 910,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Preeti Hemant",
    //       "x": 3230,
    //       "y": 970,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "George del Prado",
    //       "x": 2960,
    //       "y": 960,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Co-Op Student -",
    //       "x": 2950,
    //       "y": 900,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Justin Krinke",
    //       "x": 2910,
    //       "y": 970,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Patrick Priestley",
    //       "x": 2770,
    //       "y": 890,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Tiffany Yao",
    //       "x": 2810,
    //       "y": 830,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Irfaan Manji",
    //       "x": 2740,
    //       "y": 830,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Bianca Bautista",
    //       "x": 2620,
    //       "y": 1090,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Sergio Sanchez",
    //       "x": 2600,
    //       "y": 1030,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Brian McAleese",
    //       "x": 2560,
    //       "y": 1100,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Carlos Rodrigues",
    //       "x": 2430,
    //       "y": 1010,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Carter Cook",
    //       "x": 2470,
    //       "y": 960,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Spencer Poon Woo",
    //       "x": 2410,
    //       "y": 950,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Julia Meriel",
    //       "x": 2010,
    //       "y": 1100,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Matt Bullock",
    //       "x": 2150,
    //       "y": 1000,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Staney Varghese",
    //       "x": 2170,
    //       "y": 950,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Masse Mougal",
    //       "x": 2180,
    //       "y": 800,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Zach Scragg",
    //       "x": 2110,
    //       "y": 830,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Growth",
    //       "x": 2110,
    //       "y": 930,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Growth",
    //       "x": 1980,
    //       "y": 1030,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Lindsie Canton",
    //       "x": 1960,
    //       "y": 1100,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Nithiyaa Pushpanathan",
    //       "x": 1750,
    //       "y": 970,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "JL Dery",
    //       "x": 1700,
    //       "y": 970,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Alexander He",
    //       "x": 1730,
    //       "y": 900,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Rohan Mahimker",
    //       "x": 1600,
    //       "y": 820,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Alex Peters",
    //       "x": 1560,
    //       "y": 880,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Growth",
    //       "x": 1530,
    //       "y": 830,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Alex Garcia",
    //       "x": 520,
    //       "y": 360,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Jovan Katic",
    //       "x": 620,
    //       "y": 360,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Nick Hawkes",
    //       "x": 520,
    //       "y": 530,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Lennox Stevenson",
    //       "x": 620,
    //       "y": 530,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Maureen Carey",
    //       "x": 1110,
    //       "y": 1760,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Alan Klebanskyj",
    //       "x": 1700,
    //       "y": 2220,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Chris Carpenter",
    //       "x": 1960,
    //       "y": 2220,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Deanna Sowa",
    //       "x": 1960,
    //       "y": 2100,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Growth",
    //       "x": 1700,
    //       "y": 2100,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Growth/Hotel Desk #5",
    //       "x": 1660,
    //       "y": 1840,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Growth",
    //       "x": 1660,
    //       "y": 1710,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Operations Desk",
    //       "x": 1660,
    //       "y": 1600,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Kate Vieira/Hotel Desk",
    //       "x": 1850,
    //       "y": 1600,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Growth/Hotel Desk #2",
    //       "x": 1850,
    //       "y": 1710,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Growth/Hotel Desk #1",
    //       "x": 1850,
    //       "y": 1840,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Growth/Hotel Desk #3",
    //       "x": 1900,
    //       "y": 1840,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Growth/Hotel Desk #4",
    //       "x": 1900,
    //       "y": 1710,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Growth",
    //       "x": 1900,
    //       "y": 1600,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Growth",
    //       "x": 2080,
    //       "y": 1840,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fourth Floor"
    //     },
    //     {
    //       "name": "Growth",
    //       "x": 860,
    //       "y": 3400,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Growth",
    //       "x": 860,
    //       "y": 3330,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Growth",
    //       "x": 860,
    //       "y": 3260,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Growth",
    //       "x": 1010,
    //       "y": 3260,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Growth",
    //       "x": 1050,
    //       "y": 3260,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Growth",
    //       "x": 1050,
    //       "y": 3330,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Growth",
    //       "x": 1010,
    //       "y": 3400,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Kate Harvey-Vieira",
    //       "x": 1680,
    //       "y": 3230,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Growth",
    //       "x": 1680,
    //       "y": 3300,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Richie",
    //       "x": 1910,
    //       "y": 3230,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Pedro Salles",
    //       "x": 1910,
    //       "y": 3300,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Growth",
    //       "x": 1940,
    //       "y": 3230,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Growth",
    //       "x": 1940,
    //       "y": 3300,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Sarah Yang",
    //       "x": 2180,
    //       "y": 3230,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Sofia Egudkina",
    //       "x": 2180,
    //       "y": 3300,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Madeleine Starowicz",
    //       "x": 2210,
    //       "y": 3230,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Ariana Biagi",
    //       "x": 2210,
    //       "y": 3300,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Jose P",
    //       "x": 1660,
    //       "y": 3440,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Julia Taormina",
    //       "x": 1660,
    //       "y": 3500,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Farmin Farzin",
    //       "x": 1810,
    //       "y": 3440,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Tyler Liberty",
    //       "x": 1810,
    //       "y": 3500,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Cara Yarzab",
    //       "x": 1850,
    //       "y": 3440,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Dennis Van Dine",
    //       "x": 1850,
    //       "y": 3500,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Paolo Holganza",
    //       "x": 1990,
    //       "y": 3440,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Anoop Madhavan",
    //       "x": 1990,
    //       "y": 3500,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Marcus Guido",
    //       "x": 2030,
    //       "y": 3440,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Jerry Yang",
    //       "x": 2030,
    //       "y": 3500,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Growth",
    //       "x": 2170,
    //       "y": 3440,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Growth",
    //       "x": 2170,
    //       "y": 3500,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Growth",
    //       "x": 2210,
    //       "y": 3440,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Growth",
    //       "x": 2210,
    //       "y": 3500,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Justin Raudys",
    //       "x": 2350,
    //       "y": 3440,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Rino Bonsignore",
    //       "x": 2350,
    //       "y": 3500,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Growth",
    //       "x": 2390,
    //       "y": 3440,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Growth",
    //       "x": 2390,
    //       "y": 3500,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Growth",
    //       "x": 2530,
    //       "y": 3440,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Growth",
    //       "x": 2530,
    //       "y": 3500,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Adam McInnis",
    //       "x": 2570,
    //       "y": 3440,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Tahrir Zaman",
    //       "x": 2570,
    //       "y": 3500,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Raed Armaly",
    //       "x": 2720,
    //       "y": 3440,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Rachel Murden",
    //       "x": 2720,
    //       "y": 3500,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Sarah Tino",
    //       "x": 2750,
    //       "y": 3440,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Melody Hernandez",
    //       "x": 2750,
    //       "y": 3500,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Josh Prieur",
    //       "x": 2900,
    //       "y": 3440,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Growth",
    //       "x": 2900,
    //       "y": 3500,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Growth",
    //       "x": 2770,
    //       "y": 3250,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Growth",
    //       "x": 2970,
    //       "y": 3250,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Growth",
    //       "x": 3000,
    //       "y": 3250,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Growth",
    //       "x": 3200,
    //       "y": 3250,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Jan Nathakumar",
    //       "x": 3300,
    //       "y": 3590,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Ben Birkby",
    //       "x": 3300,
    //       "y": 3660,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Shianne Rao",
    //       "x": 3510,
    //       "y": 3590,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Brian Mackay",
    //       "x": 3510,
    //       "y": 3660,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Thomas Dowding",
    //       "x": 3540,
    //       "y": 3590,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Vik Somasundaram",
    //       "x": 3540,
    //       "y": 3660,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Growth",
    //       "x": 3740,
    //       "y": 3590,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Growth",
    //       "x": 3740,
    //       "y": 3660,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Growth",
    //       "x": 3470,
    //       "y": 3400,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Michael Thornton",
    //       "x": 3480,
    //       "y": 3400,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Growth",
    //       "x": 3660,
    //       "y": 3400,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Growth",
    //       "x": 3910,
    //       "y": 3440,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Growth",
    //       "x": 3910,
    //       "y": 3260,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Growth",
    //       "x": 3910,
    //       "y": 3170,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Josie Cramarossa",
    //       "x": 3750,
    //       "y": 3160,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     },
    //     {
    //       "name": "Growth",
    //       "x": 3770,
    //       "y": 3290,
    //       "capacity": -1,
    //       "zoom": "person",
    //       "floor": "Fifth Floor"
    //     }
    //    ];
    // const point = new Point();
    // point.collection.insert(preset, function (err, docs) {
    //     if (err){ 
    //         return console.error(err);
    //     } else {
    //       console.log("Multiple documents inserted to Collection");
    //     }
    //   });
    

})

app.use(express.json())

const pointsRouter = require('./routes/points')
app.use('/points', pointsRouter)

app.listen(3000, () => console.log('Server Started'))
