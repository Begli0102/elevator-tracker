# Elevator Tracker
* The Elevator Tracker is a web application designed to track the status of elevators within a building or facility. Upon authentication, users are granted access to a dashboard where they can monitor the status of elevators categorized into three states: Operational, Warning, and Out of Order.

### Dashboard Overview
* Upon logging in, users are presented with a user-friendly dashboard interface. The dashboard features a sidebar that conveniently displays the three states of elevators: Operational, Warning, and Out of Order. Each state is represented with its respective color-coded indicator, providing users with a quick glance at the overall status of elevators.

### Elevator Status Cards
* Clicking on any of the elevator states in the sidebar will dynamically load corresponding elevator status cards. These cards display essential information such as elevator ID, current status, location, and any pertinent alerts or warnings.

### Detailed Modal Dialog
* Upon selecting a specific elevator card, users can view detailed information about the elevator in a modal dialog. The modal dialog provides a comprehensive overview, including maintenance history, inspection schedules, and any recent incidents or issues.

### Operational State Visualization
* For elevators categorized as operational, users can access additional features by clicking on the elevator card. This action opens a modal dialog enriched with a chart displaying the operational performance over time. Users can analyze trends, identify peak usage hours, and anticipate maintenance needs based on the data presented.

## API Endpoints
* **GET /api/elevators** Retrieve all elevators from the database.
* **POST /api/users/signup** Register a new user.
* **POST /api/users/signin** Login a new user.

## Frontend Components
User List Component: Displays a list of all users fetched from the backend.
User Detail Component: Shows detailed information about a selected user.
User Form Component: Allows users to create or update user information through a form.

## Database Schema
The database schema for the users table is as follows:
* const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    surname: { type: String, required: true, trim: true },
    email: {
      type: String,
      reqired: true,
      trim: true
    },
    password: { type: String, required: true, trim: true },
    isAdmin: {
      type: Boolean,
      default: false
    }
  },

  { timestamps: true }
)

The database schema for the elevators table is as follows:

const ChartSchema = new mongoose.Schema({
  name: { type: String, required: false }, // Optional
  data: [
    {
      time: { type: Date, required: false }, // Optional
      door_cycles_count: { type: Number, required: false }, // Optional
      door_openings_count: { type: Number, required: false }, // Optional
      door_closings_count: { type: Number, required: false }, // Optional
      door_closed_count: { type: Number, required: false }, // Optional
      door_opened_count: { type: Number, required: false } // Optional
    }
  ]
})

### Define the combined schema for all elevator types with optional fields
* const ElevatorSchema = new mongoose.Schema({
  fabricationNumber: { type: String, required: true },
  address: { type: String, required: true },
  floorNumber: { type: Number, required: true },
  deviceIdentificationNumber: { type: String, required: true },
  manufacturerName: { type: String, required: true },
  productionYear: { type: Number, required: true },
  elevatorType: { type: String, required: true },
  state: { type: String, required: true },
  warningMessage: { type: String, required: false }, // Optional
  reason: { type: String, required: false }, // Optional
  chart: { type: ChartSchema, required: false } // Optional
})

## Setup Instructions
* Clone the repository from [GitHub Repo URL].
* Navigate to the project directory.
* Install dependencies using npm install or yarn install.
* Set up your database according to the provided schema.
* Rename .env.example to .env and configure your database connection settings.
* Start the backend server using npm start or yarn start.
* Navigate to the frontend directory.
* Install frontend dependencies using npm install or yarn install.
* Start the frontend server using npm start or yarn start.
* Access the application in your web browser at http://localhost:3000.

## Assumptions Made
* The backend server is implemented using Node.js with Express framework.
* The frontend is developed using React.js.
* Users have a unique email address.
* After authentication user can interact with the application
