import React, {Component} from "react";

type Range = {
  minimum: number
  maximum: number
}

type Vehicle = {
  name: string
  capacity: number
  costPerDay: number
  milesPerGallon: number
}

type SimulationRequest = {
  vehicles: Vehicle[]
  distance: number
  averageCostPerGallonOfGas: number
  averageCostPerNightAtHotel: number
  maxPeoplePerRoom: number
  averageCostOfFoodPerDayPerPerson: number
  returnFlightCost: number
  people: Range
  days: Range
}

type SimulationResult = {
  numberOfPeople: number
  numberOfDays: number
  gasCost: number
  rentalCost: number
  lodgingCost: number
  flightCost: number
  foodCost: number
  totalCost: number
  costPerPerson: number
  costPerDay: number
  costPerDayPerPerson: number
}

class SimulationFetcher extends Component {
  constructor(props: SimulationRequest) {
    super(props);
  }

  componentDidMount() {
    let request = {
      vehicles: [
        {
          name: "Rental Van",
          capacity: 7,
          costPerDay: 100,
          milesPerGallon: 20
        },
        {
          name: "Rental Sedan",
          capacity: 5,
          costPerDay: 100,
          milesPerGallon: 40
        }
      ],
      distance: 3061,
      averageCostPerGallonOfGas: 2.25,
      averageCostPerNightAtHotel: 150,
      maxPeoplePerRoom: 5,
      averageCostOfFoodPerDayPerPerson: 7,
      returnFlightCost: 124,
      people: {
        min: 2,
        max: 3
      },
      days: {
        min: 5,
        max: 6
      }
    }

    // AJAX
  }

  render() {
    return (
        <h1>Render function!</h1>
    )
  }
}
