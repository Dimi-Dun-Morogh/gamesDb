####games database app -  http://games-database.epizy.com/
tools and libraries used: Vue.js/Vuex/Vue Router/bootstrap vue/axios
##### Scheme:
![Alt text](src/assets/scheme.png?raw=true "scheme")
```sh
npm run serve - dev auto refresh
npm run build - build
```

****
bugs:
pagination will emit page 1 on browser page reload
it will screw navigation if it was page 3 in url for example

###### todo:
06.10.2020
- [ ] - make footer and header load by default on any page with router
- [ ] - make browser url update with query params, rework fetch methods