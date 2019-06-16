import { Promise } from "rsvp";
import Validator from "../utils/validator";
import Formatter from "../utils/formatter";
import Filter from "../utils/filter";

const baseUrl = "https://jsonplaceholder.typicode.com";

class Api {
  static getUsers = () => {
    let opt = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    };

    let timeout = new Promise((resolve, reject) => {
      setTimeout(reject, 10000, "request timed out");
    });

    let fetchData = new Promise((resolve, reject) => {
      let url = baseUrl + "/users";

      return fetch(url, opt)
        .then(response => {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            var error = new Error(response.statusText);
            error.response = response;
            throw error;
          }
        })
        .then(body => {
          let formattedUserList = [];
          let formattedUser = {};
          let formattedResponse = {};

          //filter no value keys in the reponse body.
          if (Validator.isArray(body) && !Validator.isEmptyArray(body)) {
            Formatter.forEach(body, user => {
              Formatter.forIn(user, (value, key) => {
                formattedUser[key] = Filter.noValueFilter(value);
              });

              //format address
              if (!Validator.isEmpty(user.address)) {
                formattedUser.address =
                  user.address.street +
                  " " +
                  user.address.city +
                  " " +
                  user.address.zipcode;
              }

              //remove unnecessary info
              if (!Validator.isEmpty(user.company)) {
                delete user.company;
              }

              formattedUserList.push(formattedUser);
              formattedUser = {};
            });
          }

          formattedResponse = formattedUserList;

          resolve(formattedResponse);
        })
        .catch(error => {
          reject(error);
        });
    });

    return Promise.race([timeout, fetchData]);
  };

  static getUser = userId => {
    let opt = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    };

    let timeout = new Promise((resolve, reject) => {
      setTimeout(reject, 10000, "request timed out");
    });

    let fetchData = new Promise((resolve, reject) => {
      let url = baseUrl + "/users/" + userId;

      return fetch(url, opt)
        .then(response => {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            var error = new Error(response.statusText);
            error.response = response;
            throw error;
          }
        })
        .then(body => {
          let formattedGeneralInfoList = [];
          let formattedAddressInfoList = [];
          let formattedCompanyInfoList = [];
          let formattedResponse = {};

          if (!Validator.isEmpty(body)) {
            //parse general info data
            formattedGeneralInfoList = [
              {
                header: "ID:",
                content: Filter.noValueFilter(body.id),
                key: "id"
              },
              {
                header: "Name:",
                content: Filter.noValueFilter(body.name),
                key: "name"
              },
              {
                header: "Username:",
                content: Filter.noValueFilter(body.username),
                key: "username"
              },
              {
                header: "Email:",
                content: Filter.noValueFilter(body.email),
                key: "email"
              },
              {
                header: "Phone:",
                content: Filter.noValueFilter(body.phone),
                key: "phone"
              },
              {
                header: "Website:",
                content: Filter.noValueFilter(body.website),
                key: "website"
              }
            ];

            //parse address info data
            formattedAddressInfoList = [
              {
                header: "City:",
                content: Filter.noValueFilter(body.address.city),
                key: "city"
              },
              {
                header: "Street:",
                content: Filter.noValueFilter(body.address.street),
                key: "street"
              },
              {
                header: "Suite:",
                content: Filter.noValueFilter(body.address.suite),
                key: "suite"
              },
              {
                header: "Zipcode:",
                content: Filter.noValueFilter(body.address.zipcode),
                key: "zipcode"
              },
              {
                header: "Lat:",
                content: Filter.noValueFilter(body.address.geo.lat),
                key: "lat"
              },
              {
                header: "Lng:",
                content: Filter.noValueFilter(body.address.geo.lng),
                key: "lng"
              }
            ];

            //parse company info data
            formattedCompanyInfoList = [
              {
                header: "Company Name:",
                content: Filter.noValueFilter(body.company.name),
                key: "companyName"
              },
              {
                header: "Catch Phrase:",
                content: Filter.noValueFilter(body.company.catchPhrase),
                key: "catchPhrase"
              },
              {
                header: "BS:",
                content: Filter.noValueFilter(body.company.bs),
                key: "bs"
              }
            ];

            formattedResponse.generalInfoList = formattedGeneralInfoList;
            formattedResponse.addressInfoList = formattedAddressInfoList;
            formattedResponse.companyInfoList = formattedCompanyInfoList;
          }

          resolve(formattedResponse);
        })
        .catch(error => {
          reject(error);
        });
    });

    return Promise.race([timeout, fetchData]);
  };
}

export default Api;
