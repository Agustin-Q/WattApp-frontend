# ⚡WattApp⚡


 ## Sensor Logging API, Frontend

 This is a project made for learning backend development, frontend development and IoT (backend, hardware and firmware for the Logging sensor is in a separate repository).

 Backend repo: https://github.com/Agustin-Q/WattApp-backend
 
 Arduino library repo:

Frontend is built using Vue.js framework and the following libraries:

+ bootstrap
+ joi

--------------------------------------------------
## ToDo's 💪
[x] Add environment variables for dev and production
  [x] URL variable
[ ] View data sensor page
  [ ] Create a sensor view vue.js component (?)
  [ ] Get sensor list from backend
  [ ] Select sensor from dropdown
  [ ] Get sensor data for selected sensor
  [ ] Graph data using Chart.js
  [ ] Set timeout function to refresh data
[x] Device page
  [x] Create device page
  [x] Create device component
  [x] get device data from api
  [x] generate device components with data
  [x] Add new devices
    [x] create component to add new device
    [x] send data to api
    [x] manage response
      [ ] show success msg
      [x] add device component with new device info (pass data to parent component or create component in parent)
      [x] if fail show error msg
[ ] Add login button on home
[ ] Add login and sign up button in nav bar
[ ] Add user name in nav bar