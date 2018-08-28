# Konux Demo 
## React-Redux-Observables & D3

### Provides
- react ^16.x
- react-router ^4.x
- redux ^3.x
- redux-observable ^0.17
- redux-persist ^5.x
- react-helmet ^5.x
- rxjs ^5.x

### Building
- webpack ^3.x

`yarn run build`

### Development
- webpack-dev-server ^2.x
- react-dev-utils ^4.x
- react-error-overlay ^3.x
- react-hot-loader ^3.x

`yarn start`

### Pages
    '/' Home
        - Link to github repository.
        - Click on konux to see d3 chart.
    '/konux' 
        - D3 line chart chart
        
### List of Tasks
    * Add route konux
        * Add D3 Line chart.
        * provided array values were not in order date wise. 
        * converting dates type UTC to d3 timeformat. 
        * Distributed Line chart in components. 
    * app/scripts/components/chart/*.jsx
        * app/scripts/routes/konux.jsx
    * Redux-Observables for state management and data fetchign. 
        * app/scripts/actions/konux.jsx
        * app/scripts/epics/konux.jsx
        * app/scripts/reducers/konux.jsx
        * app/scripts/utils/apiHelper.jsx
