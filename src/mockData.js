export const users = [
  {
    id: 20,
    name: 'Delilah',
    email: 'drnecrason@comcast.net',
    trips: [
      {
        trip_id: 1,
        created_by: 'Delilah',
        is_pending: true
      }
    ]
  }
]

export const trips = [
  {
    id: 1,
    users: [],
    confirmed: false,
    proposed_budget: 500,
    available_dates: [
      {
        user_id: 1,
        start_date: 1643950800000,
        end_date: 1645246799999
      }
    ]
  }
]