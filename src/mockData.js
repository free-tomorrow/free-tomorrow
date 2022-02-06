export const users = [
  {
    id: 20,
    name: 'Delilah',
    email: 'drnecrason@comcast.net',
    trips: [
      {
        trip_id: 1,
        created_by: 'Delilah',
        is_verified: true
        // toggles true when user has filled out their calendar & budget for the trip
      }
    ]
  }
]

export const trips = [
  {
    id: 1,
    users: [20],
    confirmed: false,
    // toggles true when all users on the trip have confirmed their calendar & budget
    proposed_budget: 500,
    // PATCH request when a user changes budget (no request if budget isn't changed), POST when new trip is first made
    available_dates: [
      {
        user_id: 1,
        start_date: 1643950800000,
        end_date: 1645246799999
      }
    ]
  }
]