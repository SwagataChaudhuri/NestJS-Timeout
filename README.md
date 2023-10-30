# **NestJS - Timeout**

![Compile and build](https://github.com/SwagataChaudhuri/NestJS-Timeout/actions/workflows/build.yml/badge.svg)
[![codecov](https://codecov.io/github/SwagataChaudhuri/NestJS-Timeout/branch/main/graph/badge.svg?token=B0TFMBOQM2)](https://codecov.io/github/SwagataChaudhuri/NestJS-AzureAD-Authentication)
![Prettier](https://img.shields.io/badge/Code%20style-prettier-informational?logo=prettier&logoColor=white)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
[![HitCount](https://hits.dwyl.com/swagatachaudhuri/NestJS-Timeout.svg?style=flat-square)](http://hits.dwyl.com/swagatachaudhuri/NestJS-Timeout)

Sample implementation to demonstrate gateway timeout in NestJS via interceptors.

---

## **Description**

This repository contains a sample implementation of `NestJS` gateway timeout via interceptors. The application exposes a simple REST API which has two endpoints. 
The first endpoint `/greetings` is configured to return a response immediately.
The second endpoint `/greetings/delayed` is configured to return a respose with a random delay between 1 to 5 seconds. In case the delay is more than the value of `TIMEOUT_IN_MILLISECONDS`, the application will return a `504 Gateway Timeout` error.

---

## **Installation**

```bash
$ npm install
```
---

## **Configuration**

This application has a .env.example file. Please create a .env file and update the values as per the desired requirement. The below table describes the environment variables used in the application:

| Environment Variable       | Description                    |
| -------------------------- | ------------------------------ |
| `TIMEOUT_IN_MILLISECONDS`  | Timeout Value in Milliseconds  |

---

## **Running the application**

The application can be run in two modes, `development` and `production`. The `development` mode supports hot reloading which is beneficial during development. The `production` mode is optimized for performance.

### **Development Mode**

Execute the below command to run the application in development mode:

```bash
$ npm run start:dev
```

### **Production Mode**

Execute the below command to run the application in production mode:

```
$ npm run start:prod
```

## **Testing**

The application has tests configured using `Jest`. The tests are located in the `test` directory. The tests are also configured to generate coverage reports. The coverage reports are generated in the `coverage` directory.

### **Unit Tests**

Execute the below command to run the unit tests:

```bash
$ npm run test
```
### **Coverage Reports**

Execute the below command to run the tests and generate the coverage reports:

```bash
$ npm run test:cov
```
---

## **License**

The application and all associated source code are distributed under the [MIT License](LICENSE).

---

## **Author**

[Swagata Chaudhuri]()

---

## **Support**

In case you find the project helpful, please consider supporting by ⭐ the project.

---

## **Contributing**

Contributions are welcome! Please feel free to submit a Pull Request in case you find any issues with the code.

---

## **Acknowledgements**

- [NestJS](https://nestjs.com/)
- [Jest](https://jestjs.io/)
- [TypeScript](https://www.typescriptlang.org/)