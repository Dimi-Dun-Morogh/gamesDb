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
~~pagination will emit page 1 on browser page reload
it will screw navigation if it was page 3 in url for example~~ (that was due to async data)

###### todo:
06.10.2020
- [x] - make footer and ~~header~~ load by default on any page with router (24.10.2020)✅
- [x] - make browser url update with query params, rework fetch methods (25.10.2020)✅ (works for MainView, filters,platforms,dates etc...  DETAILED GAME VIEW NEEDS SOME WORK DONE)


13.10.2020

- [x] - should add a preloader for main page (24.10.2020)✅

25.10.2020

- [ ] - refactor DetailedGameViews to fetch game by id, to support query params and additional data;
- [ ] - implement new func to gather and validate query params (GamesreleasedStore lines 132-133...);
- [ ] - update url on @backToHome btn click from profile and from detailedGameView
- [ ] - add some message on first site load due to heroku idling latency
