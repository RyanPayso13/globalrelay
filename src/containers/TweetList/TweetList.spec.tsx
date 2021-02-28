import React from "react";
import { render, screen } from "@testing-library/react";
import TweetList from "./TweetList";

describe("<TweetList />", () => {
  const data = [
    {
      id: "1",
      profile_background_image_url:
        "http://pbs.twimg.com/profile_background_images/590922434682880000/3byPYvqe.jpg",
      name: "NASA",
      url: "https://t.co/TcEE6NS8nD",
      screen_name: "NASA",
      created_at: "Sun Feb 25 18:11:01 +0000 2018",
      text:
        "A magnetic power struggle of galactic proportions - new research highlights the role of the Sun's magnetic landscap… https://t.co/29dZgga54m",
    },
    {
      id: "2",
      profile_background_image_url:
        "http://pbs.twimg.com/profile_background_images/590922434682880000/3byPYvqe.jpg",
      name: "NASA",
      url: "https://t.co/TcEE6NS8nD",
      screen_name: "NASA",
      created_at: "Sun Feb 25 18:11:01 +0000 2018",
      text:
        "A magnetic power struggle of galactic proportions - new research highlights the role of the Sun's magnetic landscap… https://t.co/29dZgga54m",
    },
  ];

  test("should render and not crash", () => {
    render(<TweetList tweets={data} handleOnDrop={() => null} />);
    expect(screen.getAllByTestId('tweet').length).toEqual(2);
  });
});
