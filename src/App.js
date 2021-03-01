import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";


class App extends React.Component {

    state = {
        users: [
            {
                "gender": "male",
                "name": {
                    "title": "Mr",
                    "first": "Alfredo",
                    "last": "Herrero"
                },
                "location": {
                    "street": {
                        "number": 7060,
                        "name": "Calle Covadonga"
                    },
                    "city": "Alcalá de Henares",
                    "state": "Cataluña",
                    "country": "Spain",
                    "postcode": 83212,
                    "coordinates": {
                        "latitude": "-17.1020",
                        "longitude": "-107.5160"
                    },
                    "timezone": {
                        "offset": "-8:00",
                        "description": "Pacific Time (US & Canada)"
                    }
                },
                "email": "alfredo.herrero@example.com",
                "login": {
                    "uuid": "162b306d-376d-4c61-8e32-2254c1e59524",
                    "username": "bluecat225",
                    "password": "titanic",
                    "salt": "oCA1Wxfq",
                    "md5": "456805d91e6fca237fd830f8f0aa5be1",
                    "sha1": "9bca45277d18884a1abfbc9ec192ecb210201c99",
                    "sha256": "10685291158379a6e7446d9a77de1a75e84533a72d41d9bed1d0763d25765e28"
                },
                "dob": {
                    "date": "1953-12-01T01:29:08.093Z",
                    "age": 68
                },
                "registered": {
                    "date": "2008-05-01T06:40:03.577Z",
                    "age": 13
                },
                "phone": "970-835-312",
                "cell": "647-124-266",
                "id": {
                    "name": "DNI",
                    "value": "96123179-X"
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/28.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/28.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/28.jpg"
                },
                "nat": "ES"
            },
            {
                "gender": "male",
                "name": {
                    "title": "Mr",
                    "first": "Dave",
                    "last": "Parker"
                },
                "location": {
                    "street": {
                        "number": 5510,
                        "name": "Henry Street"
                    },
                    "city": "Swords",
                    "state": "Louth",
                    "country": "Ireland",
                    "postcode": 44243,
                    "coordinates": {
                        "latitude": "-0.4311",
                        "longitude": "88.4905"
                    },
                    "timezone": {
                        "offset": "-4:00",
                        "description": "Atlantic Time (Canada), Caracas, La Paz"
                    }
                },
                "email": "dave.parker@example.com",
                "login": {
                    "uuid": "23739afa-2462-4bfe-a53b-484d960385eb",
                    "username": "lazymouse194",
                    "password": "stevens",
                    "salt": "bnFv5Tdq",
                    "md5": "5151ccaee0d7e18d9f3fa151e0141b6d",
                    "sha1": "f20f7b4a884989fcf2e475648b7b470d0857e38e",
                    "sha256": "a77e8547e327429f4b6811043015c91c7030a0f24963f14e5e4d41df2eeb65ac"
                },
                "dob": {
                    "date": "1989-04-06T15:37:22.984Z",
                    "age": 32
                },
                "registered": {
                    "date": "2010-01-16T10:46:32.604Z",
                    "age": 11
                },
                "phone": "061-115-3885",
                "cell": "081-935-1377",
                "id": {
                    "name": "PPS",
                    "value": "9211250T"
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/21.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/21.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/21.jpg"
                },
                "nat": "IE"
            },
            {
                "gender": "male",
                "name": {
                    "title": "Monsieur",
                    "first": "Joseph",
                    "last": "Laurent"
                },
                "location": {
                    "street": {
                        "number": 97,
                        "name": "Route de Genas"
                    },
                    "city": "Prato (Leventina)",
                    "state": "Aargau",
                    "country": "Switzerland",
                    "postcode": 9519,
                    "coordinates": {
                        "latitude": "-80.9973",
                        "longitude": "-85.0742"
                    },
                    "timezone": {
                        "offset": "+5:30",
                        "description": "Bombay, Calcutta, Madras, New Delhi"
                    }
                },
                "email": "joseph.laurent@example.com",
                "login": {
                    "uuid": "d8a1d73c-3285-4ed9-b592-5bce32239030",
                    "username": "yellowrabbit664",
                    "password": "sawyer",
                    "salt": "0Ec0Fsa7",
                    "md5": "1d9db20fe7550b1955f6b6cd29b92faa",
                    "sha1": "dd9dcf61e9975a9d7692b43583c81be12e5064e8",
                    "sha256": "b437a0406b2fb8a46832e14577d1cf551359a07a211eab3686bf6df1bfceb298"
                },
                "dob": {
                    "date": "1988-07-03T10:38:26.636Z",
                    "age": 33
                },
                "registered": {
                    "date": "2007-04-17T14:57:17.838Z",
                    "age": 14
                },
                "phone": "075 930 66 79",
                "cell": "077 998 91 34",
                "id": {
                    "name": "AVS",
                    "value": "756.7349.0315.03"
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/men/45.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/men/45.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/men/45.jpg"
                },
                "nat": "CH"
            },

        ]
    }

    render() {
        return (
            <div className="container">
                <Header />
                <Body users={this.state.users} />
            </div>
        )
    }
};
export default App;