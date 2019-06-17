import Api from "../../network/api";

describe("Api tests", () => {

  var fakeUsersData, fakeUserData;

  beforeEach(() => {

    fakeUsersData = [
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
          "street": "Victor Plains",
          "suite": "Suite 879",
          "city": "Wisokyburgh",
          "zipcode": "90566-7771",
          "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
          }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
          "name": "Deckow-Crist",
          "catchPhrase": "Proactive didactic contingency",
          "bs": "synergize scalable supply-chains"
        }
      }
    ];

    fakeUserData = {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    };

    //reset mocks
    fetch.resetMocks();

  });

  it("getUsers should return data correctly if the server respond correctly", () => {

    //set up mock response.
    fetch.mockResponseOnce(JSON.stringify(fakeUsersData));

    expect.assertions(1);
    return expect(Api.getUsers()).resolves.toHaveLength(2);
  });

  it("getUsers should return error if the server respond with error", () => {

    //set up mock error.
    fetch.mockReject(new Error("fake error message"));

    expect.assertions(1);
    return expect(Api.getUsers()).rejects.toThrow("fake error message");
  });

  it("getUser should return data correctly if the server respond correctly", () => {

    const expectReponseObj = { "addressInfoList": [{ "content": "Gwenborough", "header": "City:", "key": "city" }, { "content": "Kulas Light", "header": "Street:", "key": "street" }, { "content": "Apt. 556", "header": "Suite:", "key": "suite" }, { "content": "92998-3874", "header": "Zipcode:", "key": "zipcode" }, { "content": "-37.3159", "header": "Lat:", "key": "lat" }, { "content": "81.1496", "header": "Lng:", "key": "lng" }], "companyInfoList": [{ "content": "Romaguera-Crona", "header": "Company Name:", "key": "companyName" }, { "content": "Multi-layered client-server neural-net", "header": "Catch Phrase:", "key": "catchPhrase" }, { "content": "harness real-time e-markets", "header": "BS:", "key": "bs" }], "generalInfoList": [{ "content": 1, "header": "ID:", "key": "id" }, { "content": "Leanne Graham", "header": "Name:", "key": "name" }, { "content": "Bret", "header": "Username:", "key": "username" }, { "content": "Sincere@april.biz", "header": "Email:", "key": "email" }, { "content": "1-770-736-8031 x56442", "header": "Phone:", "key": "phone" }, { "content": "hildegard.org", "header": "Website:", "key": "website" }] }
    //set up mock response.
    fetch.mockResponseOnce(JSON.stringify(fakeUserData));

    expect.assertions(1);
    return expect(Api.getUser(1)).resolves.toStrictEqual(expectReponseObj);
  });

  it("getUser should return error if the server respond with error", () => {

    //set up mock error.
    fetch.mockReject(new Error("fake error message"));

    expect.assertions(1);
    return expect(Api.getUser(1)).rejects.toThrow("fake error message");
  });
});
