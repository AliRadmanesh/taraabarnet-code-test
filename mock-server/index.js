var express = require("express");
var bodyParser = require("body-parser");

var app = express();

const PORT = 8585;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}. Hooray!`);
});

app.use(bodyParser.json());

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");
  // Request methods you wish to allow
  res.setHeader("Access-Control-Allow-Methods", "*");
  // Request headers you wish to allow
  res.setHeader("Access-Control-Allow-Headers", "*");
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);
  // Pass to next layer of middleware
  next();
});

/**
 * APIs
 */

app.get("/", (req, res, next) => {
  res.json("Hi Haji!");
});

app.get("/cards", (req, res, next) => {
  const data = {
    code: 200,
    message: "OK",
    data: [
      {
        id: 1,
        title: "#1 Noteworthy technology acquisitions 2021",
        image: "https://flowbite.com/docs/images/blog/image-1.jpg",
        description:
          "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      },
      {
        id: 2,
        title: "#2 Noteworthy technology acquisitions 2021",
        image: "https://flowbite.com/docs/images/blog/image-1.jpg",
        description:
          "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      },
      {
        id: 3,
        title: "#3 Noteworthy technology acquisitions 2021",
        image: "https://flowbite.com/docs/images/blog/image-1.jpg",
        description:
          "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      },
      {
        id: 4,
        title: "#4 Noteworthy technology acquisitions 2021",
        image: "https://flowbite.com/docs/images/blog/image-1.jpg",
        description:
          "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      },
      {
        id: 5,
        title: "#5 Noteworthy technology acquisitions 2021",
        image: "https://flowbite.com/docs/images/blog/image-1.jpg",
        description:
          "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      },
      {
        id: 6,
        title: "#6 Noteworthy technology acquisitions 2021",
        image: "https://flowbite.com/docs/images/blog/image-1.jpg",
        description:
          "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      },
      {
        id: 7,
        title: "#7 Noteworthy technology acquisitions 2021",
        image: "https://flowbite.com/docs/images/blog/image-1.jpg",
        description:
          "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      },
    ],
  };

  res.json(data);
});
