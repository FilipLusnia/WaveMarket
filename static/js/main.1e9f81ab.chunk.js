(this.webpackJsonpwavemarket=this.webpackJsonpwavemarket||[]).push([[0],{173:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return m}));var n=a(174),c=a(175),i=a(178),r=a(177),s=a(0),l=a.n(s),o=a(179),u=a(176),m=(a(187),function(t){Object(i.a)(m,t);var s=Object(r.a)(m);function m(t){var c;return Object(n.a)(this,m),(c=s.call(this,t)).reciveAuthToken=function(){var t=a(188),n={url:"https://accounts.spotify.com/api/token",headers:{Authorization:"Basic "+new e(c.client_id+":"+c.client_secret).toString("base64")},form:{grant_type:"client_credentials"},json:!0};t.post(n,(function(e,t,a){if(!e&&200===t.statusCode){var n=a.access_token;c.setState({authToken:n})}}))},c.getId=function(e){c.setState({currId:e})},c.removeId=function(){c.setState({currId:null})},c.state={authToken:null,currId:null},c.client_id="fb185e2943374c65b6cdc939c506b3c1",c.client_secret="7211f605e1274061ad0808b8f2da4fed",c}return Object(c.a)(m,[{key:"componentDidMount",value:function(){this.reciveAuthToken()}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"trackinfo"},l.a.createElement(u.a,{client_id:this.client_id,client_secret:this.client_secret,currId:this.state.currId,authToken:this.state.authToken,removeId:this.removeId})),l.a.createElement("div",{className:"searchbar"},l.a.createElement(o.a,{client_id:this.client_id,client_secret:this.client_secret,getId:this.getId,authToken:this.state.authToken})))}}]),m}(l.a.Component))}).call(this,a(3).Buffer)},176:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(24),c=a(0),i=a.n(c);function r(e){var t=e.currId,a=e.removeId,r=e.authToken,s=Object(c.useState)(!1),l=Object(n.a)(s,2),o=l[0],u=l[1],m=Object(c.useState)(!1),d=Object(n.a)(m,2),f=d[0],h=d[1],k=Object(c.useState)(!0),v=Object(n.a)(k,2),E=v[0],b=v[1];Object(c.useEffect)((function(){null!==t&&fetch("https://api.spotify.com/v1/audio-features/".concat(t),{headers:{Authorization:"Bearer "+r}}).then((function(e){return e.json()})).then((function(e){u(e)})).then(b(!1))}),[t,r]),Object(c.useEffect)((function(){null!==t&&fetch("https://api.spotify.com/v1/tracks/".concat(t),{headers:{Authorization:"Bearer "+r}}).then((function(e){return e.json()})).then((function(e){h(e)}))}),[t,r]);var _=function(e){e.preventDefault(),o&&(b(!0),u(!1),h(!1),a())};return i.a.createElement(i.a.Fragment,null,o&&!1===E&&f?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"trackinfo_background",onClick:_}),i.a.createElement("div",{className:"trackinfo_container"},i.a.createElement("button",{className:"trackinfo_close-btn",onClick:_},"Zamknij"),i.a.createElement("div",{className:"trackinfo_data-container"},i.a.createElement("div",{className:"trackinfo_thumbnail"},i.a.createElement("img",{src:f.album.images[0].url,alt:"cover",className:"trackinfo_thumbnail-img"}),i.a.createElement("div",{className:"trackinfo_thumbnail-text"},i.a.createElement("div",{className:"trackinfo_thumbnail-title"},f.name),i.a.createElement("div",{className:"trackinfo_thumbnail-artist"},f.artists[0].name),i.a.createElement("a",{className:"trackinfo_link",href:"https://open.spotify.com/track/".concat(o.id),target:"_blank",rel:"noopener noreferrer"},"Odtw\xf3rz utw\xf3r w Spotify"))),i.a.createElement("div",{className:"trackinfo_specs"},i.a.createElement("div",{className:"trackinfo_specs-container"},i.a.createElement("div",{className:"trackinfo_duration"},"D\u0142ugo\u015b\u0107 utworu:\xa0",i.a.createElement("div",null,(o.duration_ms/1e3/60).toFixed(0),":",o.duration_ms/1e3%60<10?"0".concat((o.duration_ms/1e3%60).toFixed(0)):(o.duration_ms/1e3%60).toFixed(0))),i.a.createElement("div",{className:"trackinfo_tempo"},"Tempo utworu:\xa0",i.a.createElement("div",null,o.tempo.toFixed(0),"\xa0BPM")),i.a.createElement("div",{className:"trackinfo_key"},"Tonacja (0: C, 1: C#, 2: D, itd.):\xa0",i.a.createElement("div",null,o.key)),i.a.createElement("div",{className:"trackinfo_scale"},"Skala:\xa0",i.a.createElement("div",null,0===o.mode?"Minorowa":"Majorowa")),i.a.createElement("div",{className:"trackinfo_loudness"},"G\u0142o\u015bno\u015b\u0107:\xa0",i.a.createElement("div",null,o.loudness.toFixed(1),"\xa0LUFS(?)"))),i.a.createElement("div",{className:"trackinfo_energy"},"Szansa, \u017ce nie za\u015bniesz podczas s\u0142uchania:\xa0",i.a.createElement("div",null,i.a.createElement("div",{style:{width:"".concat((100*o.energy).toFixed(0),"%")}}),i.a.createElement("p",null,"".concat((100*o.energy).toFixed(0),"%")))),i.a.createElement("div",{className:"trackinfo_danceability"},"Da si\u0119 do tego ta\u0144czy\u0107 ?:\xa0",i.a.createElement("div",null,i.a.createElement("div",{style:{width:"".concat((100*o.danceability).toFixed(0),"%")}}),i.a.createElement("p",null,"".concat((100*o.danceability).toFixed(0),"%")))),i.a.createElement("div",{className:"trackinfo_valence"},"Ilo\u015b\u0107 pozytywno\u015bci/euforii:\xa0",i.a.createElement("div",null,i.a.createElement("div",{style:{width:"".concat((100*o.valence).toFixed(0),"%")}}),i.a.createElement("p",null,"".concat((100*o.valence).toFixed(0),"%")))),i.a.createElement("div",{className:"trackinfo_instrumentalness"},"Procent sekcji wy\u0142\u0105cznie instrumentalnych:\xa0",i.a.createElement("div",null,i.a.createElement("div",{style:{width:"".concat((100*o.instrumentalness).toFixed(0),"% ")}}),i.a.createElement("p",null,"".concat((100*o.instrumentalness).toFixed(0),"%")))),i.a.createElement("div",{className:"trackinfo_acousticness"},"Szansa, \u017ce to utw\xf3r akustyczny:\xa0",i.a.createElement("div",null,i.a.createElement("div",{style:{width:"".concat((100*o.acousticness).toFixed(0),"%")}}),i.a.createElement("p",null,"".concat((100*o.acousticness).toFixed(0),"%")))))))):null)}},179:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(24),c=a(0),i=a.n(c);function r(e){var t=e.title,a=e.artist,n=e.cover,c=e.getId,r=e.id;return i.a.createElement("div",{className:"list_item list_item-animate",onClick:function(){return c(r)}},i.a.createElement("img",{src:n,alt:"cover",className:"list_item-cover"}),i.a.createElement("h1",{className:"list_item-title"},t),"\xa0",i.a.createElement("h4",{className:"list_item-artist"},a))}function s(e){var t=e.getId,a=e.authToken,s=Object(c.useState)(""),l=Object(n.a)(s,2),o=l[0],u=l[1],m=Object(c.useState)(),d=Object(n.a)(m,2),f=d[0],h=d[1],k=Object(c.useState)(10),v=Object(n.a)(k,2),E=v[0],b=v[1],_=Object(c.useState)("Poka\u017c wi\u0119cej wynik\xf3w..."),p=Object(n.a)(_,2),w=p[0],y=p[1],j=function(){fetch("https://api.spotify.com/v1/search?q=".concat(o,"%20&type=track&limit=").concat(E),{headers:{Authorization:"Bearer "+a}}).then((function(e){if(400!==e.status)return e.json()})).then((function(e){void 0!==e?(h(e),y("Poka\u017c wi\u0119cej wynik\xf3w...")):y("To ju\u017c wszystkie wyniki :(")})).catch((function(e){console.log(e)}))};Object(c.useEffect)((function(){f&&j()}),[E]);var N=function(e){"To ju\u017c wszystkie wyniki :("!==w&&y("\u0141adowanie..."),e.preventDefault(),b(E+10)};return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"searchbar"},i.a.createElement("input",{type:"text",onChange:function(e){return u(e.target.value)},className:"searchbar_input",placeholder:"Wpisz nazw\u0119 utworu/artysty"}),i.a.createElement("input",{type:"submit",value:"Przeszukaj Spotify",onClick:function(e){e.preventDefault(),b(null),b(10),y("Poka\u017c wi\u0119cej wynik\xf3w..."),10===E&&j()},className:"searchbar_submit"})),void 0!==f?0!==f.tracks.items.length?i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{className:"searchbar_results"},"Wybierz utw\xf3r:"),i.a.createElement("div",{className:"list_container"},i.a.createElement("ul",{className:"track_list"},f.tracks.items.map((function(e){return i.a.createElement(r,{title:e.name,artist:e.artists[0].name,cover:e.album.images[0].url,getId:t,id:e.id,key:e.id})})))),"Poka\u017c wi\u0119cej wynik\xf3w..."!==w&&"\u0141aduj\u0119..."!==w?i.a.createElement("button",{onClick:N,className:"track_list-button end"},w):i.a.createElement("button",{onClick:N,className:"track_list-button"},w)):i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",{className:"searchbar_error"},"Niestety - Spotify nie posiada takiego utworu w swojej bibliotece."),i.a.createElement("h1",{className:"searchbar_error"},"Do czasu.")):i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{className:"searchbar_start"},"Witaj na\xa0",i.a.createElement("span",{className:"searchbar_start-title"},"WaveMarket"),"!"),i.a.createElement("h2",{className:"searchbar_start"},"Poznaj ciekawe informacje na temat swoich ulubionych utwor\xf3w z Spotify."),i.a.createElement("h2",{className:"searchbar_start bottomline"},"Wyszukaj utw\xf3r do zbadania a potem kliknij w jeden z wynik\xf3w (MAX. 50).")))}},180:function(e,t,a){e.exports=a(403)},187:function(e,t,a){},203:function(e,t){},205:function(e,t){},215:function(e,t){},217:function(e,t){},242:function(e,t){},243:function(e,t){},287:function(e,t){},289:function(e,t){},312:function(e,t){},403:function(e,t,a){"use strict";a.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=a(0),c=a.n(n),i=a(172),r=a.n(i),s=a(173);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s.a,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[180,1,2]]]);
//# sourceMappingURL=main.1e9f81ab.chunk.js.map